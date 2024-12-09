export type SiteConfig = {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
    tiktok: string
    ins: string
    thread: string
    discard: string
  }
}

export const siteConfig: SiteConfig = {
  name: "BuouBlog",
  description:
    "This is a opensource blog built with Next.js, Sanity.io and Vercel",
  url: "https://blog.buouui.com",
  ogImage: "https://blog.buouui.com/og.jpg",
  links: {
    twitter: "https://x.com/intent/follow?screen_name=buoooou0",
    github: "https://github.com/buoooou/portfolio",
    tiktok: "https://www.tiktok.com/@buoooou",
    thread: "https://www.threads.net/@zhangkuo92",
    ins: "https://www.instagram.com/zhangkuo92",
    discard: "https://discord.gg/nNbB7CpSue",
  },
}
