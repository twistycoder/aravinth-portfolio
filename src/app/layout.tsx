import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aravinth-alpha.vercel.app/"),
  title: {
    default: "Aravinthkumar Devaraj | Senior React Developer",
    template: "%s | Aravinthkumar Devaraj",
  },
  description: "Portfolio of Aravinthkumar Devaraj, a Senior React Developer with 5+ years of experience in building scalable web applications and UI/UX-focused solutions.",
  keywords: [
    "Aravinthkumar Devaraj",
    "Senior React Developer",
    "Next.js Developer",
    "Frontend Engineer",
    "Software Engineer Portfolio",
    "React Architecture",
    "UI/UX Design",
    "Web Performance Optimization",
  ],
  authors: [{ name: "Aravinthkumar Devaraj" }],
  creator: "Aravinthkumar Devaraj",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aravinth-alpha.vercel.app/",
    title: "Aravinthkumar Devaraj | Senior React Developer",
    description: "Portfolio of Aravinthkumar Devaraj, a Senior React Developer specializing in high-performance web applications.",
    siteName: "Aravinthkumar Devaraj Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aravinthkumar Devaraj | Senior React Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aravinthkumar Devaraj | Senior React Developer",
    description: "Portfolio of Aravinthkumar Devaraj, a Senior React Developer specializing in high-performance web applications.",
    images: ["/og-image.jpg"],
    creator: "@twisty_coder",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
