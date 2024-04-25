import FiltredNews from '@/components/FiltredNews'
import React from 'react'
import { storyblokEditable } from "@storyblok/react/rsc";
import { BlokType } from "./Page";

export default function NewsFiltred({ blok }: { blok: BlokType }) {
  return (
    <div {...storyblokEditable(blok)}>
      NewsFiltred

    </div>
  )
}
