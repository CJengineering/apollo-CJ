/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { ReactNode } from "react"; 
import Page from "../storyblokComponents/Page";
import Teaser from "@/storyblokComponents/Teaser";
import NavBar from "@/storyblokComponents/NavBar";
import CardBlok from "@/storyblokComponents/CardBlok";
import NewsContainer from "@/storyblokComponents/NewsContainer";
import News from "@/storyblokComponents/News";
import Post from "@/storyblokComponents/Post";
import NewsFiltred from "@/storyblokComponents/NewsFiltred";

const components = {

    page: Page,
    teaser: Teaser,
    navbar: NavBar,
    card: CardBlok,
    newsContainer: NewsContainer,
    news: News,
    Post: Post,
    NewsFiltred: NewsFiltred
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