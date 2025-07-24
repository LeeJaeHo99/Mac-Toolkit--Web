import type { Metadata } from "next";
import '../styles/style.scss';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Mac Toolkit",
  description: "Mac Toolkit",
  icons: {
    icon: "/icons/logo.ico",
    shortcut: "/icons/logo.ico",
    apple: "/icons/logo.ico",
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