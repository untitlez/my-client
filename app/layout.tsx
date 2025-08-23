import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
});

const kanit = Kanit({
  subsets: ["thai"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Create A Lesson Plan | สร้างแผนการสอน",
  description: "Fullstack Developer Test",
  icons: {
    icon: "/books.webp",
    apple: "/books.webp",
    shortcut: "/books.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${kanit.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
