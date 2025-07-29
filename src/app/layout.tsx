import type { Metadata } from "next";
import '../styles/style.scss';

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
      </body>
    </html>
  );
}