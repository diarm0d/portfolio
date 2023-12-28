import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/StoryblokProvider";
import "./globals.css";
import { Inter, IBM_Plex_Mono } from "next/font/google";

const mono = IBM_Plex_Mono({weight: "400", style: "normal", subsets: ["latin"]});

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={mono.className}>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
