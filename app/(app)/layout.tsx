"use client";

import "@/app/globals.css";
import StoreProvider from "./StoreProvider";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "@/theme/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          {children}
        </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
