import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-gradient-to-r from-bg-gradient-from via-bg-gradient-m to-bg-gradient-to  min-h-screen text-white"}>
        {children}
      </body>
    </html>
  );
}
