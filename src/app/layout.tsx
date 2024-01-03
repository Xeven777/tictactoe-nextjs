import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tic Tac Toe ❌⭕️",
  description: "a simple tic-tac-toe game Made using Next.js 14",
  manifest: "/manifest.json",
  metadataBase: new URL("https://tic-tac-toe-next.netlify.app/"),
  openGraph: {
    title: "Tic Tac Toe ❌⭕️",
    description: "a simple tic-tac-toe game Made using Next.js 14",
    url: "https://tic-tac-toe-next.netlify.app/",
    type: "website",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 200,
        height: 200,
        alt: "Tic Tac Toe ❌⭕️",
      },
    ],
  },
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
