import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tommas Productions — Beyond The Frame",
  description:
    "Tommas Productions is a cinematography and video editing studio transforming ideas into reality through storytelling.",
  openGraph: {
    title: "Tommas Productions — Beyond The Frame",
    description: "Cinematography, post-production, design and brand strategy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="bg-black text-white font-poppins antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
