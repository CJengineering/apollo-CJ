import { storyblokEditable } from '@storyblok/react/rsc'
import { BlokType } from './Page'

const Post = ({ blok }: { blok: BlokType }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <img src={blok.image} alt="test" />
      <h2  className=" ">
        {blok.title}
      </h2>
      <p>{blok.date}</p>
    </div>
  )
}

export default Post
