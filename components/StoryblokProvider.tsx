/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "./Page";
import Hero from "./Hero";
import Experience from "./Experience";

interface sbProps {
  children: React.ReactNode;
}

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    page: Page,
    hero: Hero,
    experience: Experience,
  },
});

export default function StoryblokProvider({ children }: sbProps) {
  return children;
}
