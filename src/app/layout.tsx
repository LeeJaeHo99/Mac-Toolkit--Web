import type { Metadata } from "next";
import '../styles/style.scss';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fast Browser",
  description: "Fast Browser",
  icons: {
    icon: "/icons/fastBrowser.ico",
    shortcut: "/icons/fastBrowser.ico",
    apple: "/icons/fastBrowser.ico",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}