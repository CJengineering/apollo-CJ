import { getStoryblokApi, StoryblokStory } from '@storyblok/react/rsc'


export default async function Home() {
  const { data } = await fetchData()

  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  )
}

export async function fetchData() {
  let sbParams = { version: 'draft' as 'draft' | 'published' }

  const storyblokApi = getStoryblokApi()
  return storyblokApi.get(`cdn/stories/home`, sbParams, { cache: 'no-store' })
}
