import fs from "fs";
import path from "path";
import * as XLSX from "xlsx";
import { GOOGLE_SHEET_ID } from "@/config/tienda";
import type { Product } from "./product-types";

export type { Product };

function slug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function driveFileId(value: string) {
  const fromPath = value.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (fromPath) return fromPath[1];
  const fromQuery = value.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  return fromQuery?.[1] ?? "";
}

function driveViewUrl(value: string) {
  const id = driveFileId(value);
  if (!id) return value;
  return `https://lh3.googleusercontent.com/d/${id}=w1200`;
}

function fotoUrl(value: string) {
  const fotoName = value.trim();
  if (!fotoName) return "";
  if (
    fotoName.includes("drive.google.com") ||
    fotoName.includes("drive.usercontent.google.com")
  ) {
    return driveViewUrl(fotoName);
  }
  if (fotoName.startsWith("http")) return fotoName;
  return `/img/productos/${fotoName}`;
}

export function parseFotos(value: unknown): string[] {
  const parts = String(value ?? "")
    .split(/[,;|]/)
    .map((part) => fotoUrl(part))
    .filter(Boolean);
  return parts.length ? parts : ["/img/hero-perez.jpg"];
}

export function parseCategories(value: unknown): string[] {
  const parts = String(value ?? "")
    .split(/[,;|]/)
    .map((part) => part.trim())
    .filter(Boolean);
  return parts.length ? parts : ["Boutique"];
}

const TALLA_ORDER = ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL", "ÚNICA", "UNICA", "U"];

export function parseTallas(value: unknown): string[] {
  const tallas = String(value ?? "")
    .split(/[,;|]/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (!tallas.length) return [];

  return [...tallas].sort((a, b) => {
    const ia = TALLA_ORDER.indexOf(a.toUpperCase());
    const ib = TALLA_ORDER.indexOf(b.toUpperCase());
    if (ia !== -1 && ib !== -1) return ia - ib;
    if (ia !== -1) return -1;
    if (ib !== -1) return 1;
    const na = Number(a);
    const nb = Number(b);
    if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
    return a.localeCompare(b, "es");
  });
}

export function parseProductRows(rows: Record<string, unknown>[]): Product[] {
  return rows
    .map((row, index) => {
      const nombre = String(row.nombre ?? row.Nombre ?? "").trim();
      if (!nombre) return null;

      const fotos = parseFotos(row.fotos ?? row.Fotos ?? row.foto ?? row.Foto);

      return {
        id: String(row.id ?? row.Id ?? slug(nombre) ?? `prd-${index + 1}`),
        nombre,
        precio: Number(row.precio ?? row.Precio) || 0,
        stock: Number(row.stock ?? row.Stock ?? row.cantidad ?? row.Cantidad) || 0,
        foto: fotos[0],
        fotos,
        categorias: parseCategories(
          row.categorias ?? row.Categorias ?? row.categoria ?? row.Categoria
        ),
        tallas: parseTallas(row.tallas ?? row.Tallas ?? row.talla ?? row.Talla),
        descripcion: String(row.descripcion ?? row.Descripcion ?? ""),
      } satisfies Product;
    })
    .filter((item): item is Product => item !== null);
}

function rowsFromWorkbook(data: Buffer | string, type: "buffer" | "string") {
  const workbook = XLSX.read(data, { type });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  return XLSX.utils.sheet_to_json<Record<string, unknown>>(sheet);
}

async function loadFromGoogleSheet(): Promise<Product[] | null> {
  if (!GOOGLE_SHEET_ID) return null;

  const url = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:csv&sheet=Productos`;
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`No se pudo leer el Google Sheet (${response.status})`);
  }

  const csv = await response.text();
  if (csv.includes("<HTML>") || csv.includes("<!DOCTYPE")) {
    throw new Error(
      "El Sheet no es público. Compártelo como: Cualquiera con el enlace puede ver."
    );
  }

  return parseProductRows(rowsFromWorkbook(csv, "string"));
}

function loadFromLocalFile(): Product[] {
  const file = path.join(process.cwd(), "data", "productos.xlsx");
  if (!fs.existsSync(file)) return [];
  return parseProductRows(rowsFromWorkbook(fs.readFileSync(file), "buffer"));
}

export async function loadProducts(): Promise<Product[]> {
  const fromSheet = await loadFromGoogleSheet();
  if (fromSheet) return fromSheet;
  return loadFromLocalFile();
}
