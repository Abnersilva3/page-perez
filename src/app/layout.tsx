import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShopProviders } from "@/components/ShopProviders";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "PEREZ",
    template: "%s | PEREZ",
  },
  description:
    "Boutique con marca propia. En PEREZ encuentras la línea original y otras marcas seleccionadas.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2" },
      { url: "/favicon.png?v=2", type: "image/png" },
    ],
    apple: "/favicon.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${outfit.className} ${outfit.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ShopProviders>
            <Navbar />
            <div>{children}</div>
            <Footer />
          </ShopProviders>
        </ThemeProvider>
      </body>
    </html>
  );
}
