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
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import ProjectsSection from './Project'
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
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center mt-20"
        >
          <div className="mb-8 w-5/6" >
           <h1 className="text-6xl font-bold mb-4">Hi, I'm kuo Zhang</h1>
            <p className="text-xl">I am a full-stack engineer, my main technology stack is Nextjs, the founder of BuouUI, and I am committed to making every developer make money.</p>
          </div>
          <Avatar className='w-20 h-20'>
            <AvatarImage src="/zhangkuo.jpg" alt="@zhangkuo" />
            <AvatarFallback>BU</AvatarFallback>
          </Avatar>
        </motion.section>
        <SiteHeader />
       <ProjectsSection/>
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
