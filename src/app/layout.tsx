import "./globals.css";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
import { Toaster } from "sonner";
export const metadata = {
  title: "Kangaroo Solar",
  description: "A B2C Truly Australian Based Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="A B2C Truly Australian Based Company" />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* <!-- Standard Favicon --> */}
          <link
            rel="icon"
            type="image/icon"
            href="/assets/img/fav-icon/favicon.ico"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/fav-icon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/fav-icon/favicon-16x16.png" />
          {/* <!-- Apple Touch Icons --> */}
          <link
            rel="apple-touch-icon"
            href="/assets/img/fav-icon/apple-touch-icon.png"
          />

          {/* <!-- Android Chrome Icons --> */}
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/img/fav-icon/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/assets/img/fav-icon/android-chrome-512x512.png"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
            rel="stylesheet"
          ></link>

        </head>

        <body suppressHydrationWarning={true}>
          <AppProvider>
            {children}
            <Toaster position="bottom-center" richColors />
          </AppProvider>
        </body>
      </html>
    </>
  );
}
