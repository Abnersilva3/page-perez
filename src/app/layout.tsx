import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShopProviders } from "@/components/ShopProviders";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "PEREZ",
    template: "%s | PEREZ",
  },
  description:
    "Boutique con marca propia. En PEREZ encuentras la línea original y otras marcas seleccionadas.",
  icons: {
    icon: [{ url: "/favicon.png?v=9", type: "image/png" }],
    apple: "/favicon.png?v=9",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${poppins.variable} ${bebas.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
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
