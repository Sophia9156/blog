import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Navigation from "@/components/navigation";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalStyles } from "@/styles/globals";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading...",
  },
  description: "NextJs Movie App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <StyledComponentsRegistry>
            <GlobalStyles />
            <Navigation />
            {children}
          </StyledComponentsRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
