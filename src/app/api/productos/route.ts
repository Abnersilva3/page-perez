import { NextResponse } from "next/server";
import { loadProducts } from "@/lib/products";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const products = await loadProducts();
    return NextResponse.json(products, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error al leer productos";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
