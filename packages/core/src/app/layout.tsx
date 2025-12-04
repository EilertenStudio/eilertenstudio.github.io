import "./globals.css";
import {Geist, Geist_Mono} from "next/font/google";
import React, {Suspense} from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout(
  {
    children
  }: {
    children: React.ReactNode
  }
) {
  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      {/*<meta http-equiv="refresh" content="2; URL='https://eilertenstudio.itch.io/'" />*/}
      <title>Eilerten Studio</title>
    </head>
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
    <Suspense fallback={null}>
      {children}
    </Suspense>
    </body>
    </html>
  );
}
