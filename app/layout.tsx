'use client'
import { AuthProvider } from "@/hooks/useAuth";
import "./globals.css";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RecoilRoot>
          <AuthProvider>{children}</AuthProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}
