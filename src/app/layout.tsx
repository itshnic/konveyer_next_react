import type { Metadata } from "next";
import "./globals.css";
import {libreFranklin, openSans, mulish}  from "@/app/ui/fonts";

 

export const metadata: Metadata = {
  title: "KONVEYER",
  description: "Программа для управления внутренними процессами автомоечного комплекса Konveyer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
