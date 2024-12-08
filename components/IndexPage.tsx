"use client"

import Container from './BlogContainer'
import BlogHeader from './BlogHeader'
import Layout from './BlogLayout'
import HeroPost from './HeroPost'
import IndexPageHead from './IndexPageHead'
import MoreStories from './MoreStories'
import * as demo from '../lib/demo.data'
import type { Post, Settings } from '../lib/sanity.queries'
import SiteHeader from './DockHeader'

export interface IndexPageProps {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
}

export default function IndexPage(props: IndexPageProps) {
  const { preview, loading, posts, settings } = props
  const [heroPost, ...morePosts] = posts || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <IndexPageHead settings={settings} />
      <Layout preview={preview} loading={loading}>
        <SiteHeader />
        <Container>
          <BlogHeader title={title} description={description} level={1} />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
