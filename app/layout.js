import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

export const metadata = {
  title: "R6: Gallery",
  description: "Showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
