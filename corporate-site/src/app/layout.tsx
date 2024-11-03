import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

import Header from "@/components/Header";

import Footer from "@/components/Footer";

import { ThemeProvider } from "@/contexts/ThemeContext";



const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {

  title: "コーポレートサイト",

  description: "会社の紹介サイト",

};



export default function RootLayout({

  children,

}: {

  children: React.ReactNode;

}) {

  return (

    <html lang="ja" className="dark">

      <body className={`${inter.className} flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>

        <ThemeProvider>

          <Header />

          <main className="flex-grow">

            {children}

          </main>

          <Footer />

        </ThemeProvider>

      </body>

    </html>

  );

}


