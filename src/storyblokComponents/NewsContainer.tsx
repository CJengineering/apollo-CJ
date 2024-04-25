import { BlokType } from "./Page";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
 
const NewsContainer = ({ blok }: { blok: BlokType }) => {
  return (
    <div  {...storyblokEditable(blok)} className="grid grid-cols-3 ">
      {blok.NewsBlock.map((nestedBlok:any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default NewsContainer;