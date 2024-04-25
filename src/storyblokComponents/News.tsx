import { storyblokEditable } from "@storyblok/react/rsc";
import { BlokType } from "./Page";
 
const News = ({ blok }: { blok: BlokType }) => {
  return <h2 {...storyblokEditable(blok)} className="h-[40px] bg-red-100 ">{blok.title}</h2>;
};
 
export default News;