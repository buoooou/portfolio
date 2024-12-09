"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Github, Globe } from 'lucide-react'
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter } from "./ui/card"

const projects = [
  {
    title: "Buou UI",
    period: "Dec 2024 - Present",
    description: "Designed, developed and sold animated UI components for developers.",
    image: "/home.jpg",
    technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Stripe", "Shadcn UI",],
    links: {
      website: "https://buouui.com",
    }
  },
  {
    title: "BuouNext",
    period: "Nov 2024 - Present",
    description: "Built and launched a powerful Next.js starter kit to help developers create MVPs faster with modern technologies.",
    image: "/home.png",
    technologies: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "TailwindCSS", "Vercel", "Cloudflare", "AWS","BuouUI"],
    links: {
      website: "https://next.buouui.com",
    }
  },
  {
    title: "BuouAI",
    period: "Dec 2024 - Present",
    description: "Developed an all-in-one AI-powered template integrating GPT, dynamic components, and payment solutions.",
    image: "/ai.png",
    technologies: ["Next.js", "Typescript", "Replicate", "Runpod", "TailwindCSS", "Stripe", "BuouUI", ],
    links: {
      website: "https://ai.buouui.com",
    }
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex justify-between items-start mb-8">
          <div className="max-w-[800px]">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            >
              This is what I'm doing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              I&apos;ve worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
            </motion.p>
          </div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={project.title} variants={item}>
              <Card className="overflow-hidden border-none bg-card hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 gap-4">
                  <Button asChild variant="default">
                    <Link href={project.links.website} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Website
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

