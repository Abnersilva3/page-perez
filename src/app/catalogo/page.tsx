import { Container } from "@/components/Container";
import { Shop } from "@/components/Shop";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo",
};

export default function CatalogoPage() {
  return (
    <Container>
      <Shop />
    </Container>
  );
}
