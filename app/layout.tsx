import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./header/header";
import Navigation from "./navigation/navigation";
import Footer from "./footer/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Easy Bali Tour",
  description: "easy bali tour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
