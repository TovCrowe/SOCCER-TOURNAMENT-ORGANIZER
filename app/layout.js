import "./globals.css";
import { Fontdiner_Swanky, Inter } from "next/font/google";

import Menu from "@/app/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Futbolito",
  description: "Tournament Manager",
  icon: ["/favicon.ico"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
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
