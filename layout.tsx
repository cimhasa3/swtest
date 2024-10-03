import type { Metadata } from "next";
import "./globals.css";
import TopHeader from "../components/header/TopHeader";
import MainHeader from "../components/header/MainHeader";
import MainFooter from "../components/footer/MainFooter";

export const metadata: Metadata = {
  title: "Safeway | Roofing & Chimney",
  description:
    "We specialize in new roofs and siding for your home. Since we believe that quality is more important than quantity, we will always provide excellent service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased`}>
      <body className="min-h-screen flex flex-col">
        <header>
          <TopHeader />
          <MainHeader />
        </header>
        <main className="flex-grow">{children}</main>
        <footer>
          <MainFooter />
        </footer>
      </body>
    </html>
  );
}
