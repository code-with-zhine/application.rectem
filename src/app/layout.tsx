import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { CssVarsProvider } from "@mui/joy";

export const metadata = {
  title: "RECTEM | Application",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <CssVarsProvider defaultMode="light" disableTransitionOnChange>
            {children}
          </CssVarsProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
