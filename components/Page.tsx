import {
  storyblokEditable,
  StoryblokComponent,
  SbBlokData,
} from "@storyblok/react/rsc";
import React from "react";

interface SbPage extends SbBlokData {
  body: SbBlokData[];
}

const Page = ({ blok }: { blok: SbPage }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
