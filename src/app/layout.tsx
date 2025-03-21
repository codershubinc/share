import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./share/utils/toastOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Share across devices",
  description: "Share files across devices",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark`}>
        <Toaster
          position="top-center"
          toastOptions={toastOptions as any}
        />
        {children}
      </body>
    </html>
  );
}
