import { storyblokEditable } from "@storyblok/react/rsc";
import { BlokType } from "./Page";
 
const Teaser = ({ blok }: { blok: BlokType }) => {
  return <h2 {...storyblokEditable(blok)} className="h-[50vh] text-white ">{blok.headline}</h2>;
};
 
export default Teaser;