

import React from 'react'
import Link from 'next/link'

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
        <h1 className="text-2xl font-bold">just writing my raw thoughts and stuff i think about...</h1>

        <div className="mt-20">
      <ul className="flex flex-col leading-relaxed pl-2 gap-5">
        {blogPosts.map((post, idx) => (
            <Link prefetch href={post.href} key={idx}> 
          <li key={idx} className="">
            
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