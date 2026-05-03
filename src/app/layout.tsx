import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aravinthkumar Devaraj | Senior React Developer",
  description: "Portfolio of Aravinthkumar Devaraj, a Senior React Developer with 5+ years of experience in building scalable web applications and UI/UX-focused solutions.",
  openGraph: {
    title: "Aravinthkumar Devaraj | Senior React Developer",
    description: "Portfolio of Aravinthkumar Devaraj, a Senior React Developer with 5+ years of experience in building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="noise" />
          <div className="fixed inset-0 -z-10 grid-pattern opacity-[0.4] dark:opacity-[0.2]" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
