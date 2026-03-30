import "./globals.css";
import { ReactNode } from "react";
import { SiteFooter } from "components/site/Footer";
import { SiteHeader } from "components/site/Header";
import { AnalyticsScripts } from "components/site/AnalyticsScripts";

// Next requires metadata exports, but react-refresh wants files to only export components.
// This suppresses that dev-only lint warning.
// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: "Movementopia — Join the Movement",
  description:
    "Minimal moves. Maximum play. Short sessions that keep you light, strong, and ready for real life.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f7f7f4] text-[#0d0c0a]">
        <div className="min-h-screen flex flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <AnalyticsScripts />
        </div>
      </body>
    </html>
  );
}

