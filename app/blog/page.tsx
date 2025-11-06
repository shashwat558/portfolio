

import React from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const blogPosts = [ 
    {
        title: "movies everyone should watch....",
        category:"non-tech",
        href: "/blog/movies-i-love",
    },
    
]

const page = () => {
  return (
        <div className="min-h-screen bg-background text-foreground">
      

      <main className="max-w-4xl mx-auto px-6 py-16">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>home</span>
        </Link>
        <h1 className="text-2xl font-bold">just writing my raw thoughts and stuff i think about...</h1>

        <div className="mt-16">
      <ul className="flex flex-col leading-relaxed pl-2 gap-5">
        {blogPosts.map((post, idx) => (
            <Link prefetch href={post.href} key={idx}> 
          <li key={idx} className="flex items-center gap-2">
            <span className="mt-1 inline-block w-[6px] h-[6px] rounded-full bg-foreground/70" />
            <span className="text-lg font-medium">{post.title}</span>
          </li>
          </Link>
        ))}
      </ul>
        </div>
       
        
      </main>

      
      
    </div>
  )
}

export default page