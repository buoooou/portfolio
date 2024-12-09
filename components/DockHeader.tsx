"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  TargetAndTransition,
  VariantLabels,
  motion,
  useInView,
  useSpring,
} from "framer-motion"

import { siteConfig } from "../config/site"
import { cn } from "../lib/utils"
import { Icons } from "./Icons"
import { ModeToggle } from "./ModeToggle"

function HeaderDockItem({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
  whileTap?: VariantLabels | TargetAndTransition
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        translateY: -5,
        transition: { type: "spring", bounce: 0.75 },
      }}
      whileTap={{
        scale: 1.25,
        translateY: -10,
        transition: { type: "spring", bounce: 0.9 },
      }}
      className={cn(
        "flex aspect-square w-10 items-center justify-center rounded-xl bg-zinc-400 px-0 dark:bg-slate-200/75",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
export default function SiteHeader() {
  const headerRef = useRef<HTMLDivElement>(null)
  const top = useSpring(8, { damping: 15 })
  const width = useSpring(40, { damping: 15 })
  const height = useSpring(10, { damping: 15 })
  const isInView = useInView(headerRef)
  const [animationEnded, setAnimationEnded] = useState(false)
  const pathname = usePathname()
  const isIndexPage = pathname === "/"
  const border = 2

  useEffect(() => {
    if (!isInView) {
      return
    }

    function setSize() {
      const offset = 40
      top.set(
        window.innerHeight - (headerRef.current?.clientHeight ?? 0) - offset
      )
      width.set(headerRef.current?.clientWidth ?? 0)
      height.set(border + (headerRef.current?.clientHeight ?? 0))
    }

    const timeout = setTimeout(setSize, 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [top, isInView, width, height])

  const Header = !animationEnded ? motion.header : "header"
  const styles = !animationEnded
    ? {
        top,
        width,
        height,
        transform: "translateX(-50%)",
      }
    : {
        top: "calc(100dvh - 96px)",
        width: "fit-content",
        height: "fit-content",
        transform: "translateX(-50%)",
      }

  return (
    <>
      <Header
        // @ts-expect-error - the conditional type is not being inferred correctly
        style={styles}
        onAnimationEnd={() => {
          function clear() {
            if (
              String(height.get()) ===
              String(border + (headerRef.current?.clientHeight ?? 0))
            ) {
              setAnimationEnded(true)
            } else {
              requestAnimationFrame(clear)
            }
          }

          if (!animationEnded && width.get() > 40 && isInView) {
            requestAnimationFrame(clear)
          }
        }}
        className={cn(
          "fixed left-1/2 z-50 mx-auto rounded-2xl bg-zinc-500 text-background shadow-sm shadow-muted-foreground dark:bg-white",
          {
            "transition-all duration-300": animationEnded,
            "overflow-hidden": !animationEnded,
          }
        )}
      >
        <div
          ref={headerRef}
          className="flex h-14 w-fit max-w-fit items-center px-2"
        >
          <div className="flex gap-6 md:gap-10 mr-5">
            <Link href="/" className="items-center space-x-2 flex">
              <span className=" font-bold sm:inline-block">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-between space-x-2">
            <nav className="flex items-center gap-2">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <HeaderDockItem>
                  <Icons.gitHub className="size-4" />
                  <span className="sr-only">GitHub</span>
                </HeaderDockItem>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <HeaderDockItem>
                  <Icons.twitter className="h-3 w-3 fill-current" />
                  <span className="sr-only">Twitter</span>
                </HeaderDockItem>
              </Link>
              <Link
                href="https://vercel.com/new/clone?repository-url=https://github.com/buoooou/portfolio&repository-name=portfolio&project-name=portfolio&demo-title=buou-portfolio&demo-description=buou-portfolio&demo-url=https://blog.buouui.com&demo-image=https://blog.buouui.com/blog-home.png&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx&template=https://github.com/buoooou/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <HeaderDockItem>
                  <Icons.vercel className="h-3 w-3 fill-current" />
                  <span className="sr-only">Vercel</span>
                </HeaderDockItem>
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
        <motion.div
          className="pointer-events-none absolute inset-0 h-full w-full animate-pulse rounded-2xl bg-foreground duration-mid repeat-1"
          style={{ opacity: animationEnded ? 0 : 0.3 }}
        />
      </Header>
    </>
  )
}
