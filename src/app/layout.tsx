import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "../app/providers";
import Wrapper from "./components/wrapper";

export const metadata: Metadata = {
  title: "Emelder Okafor",
  description: "Emelder Okafor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Wrapper>{children}</Wrapper>
        </Providers>
      </body>
    </html>
  );
}
