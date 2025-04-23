// app/hello/page.tsx
 
'use client';
 
import React from 'react';
import Blog1 from "./blog1.mdx" 
import { useMDXComponents } from '@/mdx-component';
 
const HomePage = () => {
  const components = useMDXComponents({});

  return (
    <div className='w-screen h-screen mt-20 px-20'>
      <Blog1 components={components}/>
    </div>
  )
};
 
export default HomePage;