/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { ReactNode } from "react"; 
import Page from "../storyblokComponents/Page";
import Teaser from "@/storyblokComponents/Teaser";
const components = {

    page: Page,
    teaser: Teaser
  };
/** 2. Initialize it as usual */
storyblokInit({
    accessToken: "931fmRZyXrz47Xz9fJHU5gtt",
    use: [apiPlugin],
    components
});
 
export default function StoryblokProvider({ children }: { children: ReactNode }) { 
    return children;
}