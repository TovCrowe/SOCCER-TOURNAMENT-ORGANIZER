import "./globals.css";
import { Fontdiner_Swanky, Inter } from "next/font/google";

import Menu from "@/app/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Futbolito",
  description: "Tournament Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:flex md:min-h-screen">
          <Menu />
          <main className="md:w-3/4 p-10 md:h-screen overflow-scroll">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
