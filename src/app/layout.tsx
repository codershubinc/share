import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "./share/utils/toastOptions";
import ReduxProvider from "@/store/redux/reduxProvider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/custom/appSidebar"


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
      <body className={`${inter.className} `}>
        <ReduxProvider>
          <SidebarProvider
            defaultOpen={false}
          >
            <SidebarTrigger
              className="z-50"
            />
            <AppSidebar />
            <Toaster
              position="top-center"
              toastOptions={toastOptions as any}
            />
            {children}
          </SidebarProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
