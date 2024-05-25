import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "넥스트JS",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}><Header></Header>{children}</body> 
      {/* children이 page.js */}
    </html>
  );
}