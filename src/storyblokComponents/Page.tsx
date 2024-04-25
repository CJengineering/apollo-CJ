import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

// Modify BlokType to include an index signature
export interface BlokType {
  _uid: string;
  component: string;
  body?: BlokType[];
  [key: string]: any; // index signature
}

const Page = ({ blok }: { blok: BlokType }) => (
  <main {...storyblokEditable(blok)} >
    {blok.body?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;