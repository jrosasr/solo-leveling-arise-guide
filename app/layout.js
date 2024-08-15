import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Solo Leveling Arise: Guía",
  description: "Guía para jugar solo en Solo Leveling Arise, con las mejores armas, armaduras y recomendaciones para la mejor experiencia.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
