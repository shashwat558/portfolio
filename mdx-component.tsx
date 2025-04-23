/* eslint-disable @typescript-eslint/no-explicit-any */
// mdx-components.tsx
 
'use client';

import { MDXComponents } from "mdx/types";
import { cn } from "./lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

 

 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children, className }: any) => (
      <pre className={cn('rounded-md bg-gray-800 p-4', className)}>
        {children}
      </pre>
    ),
    h1: ({ className, ...props }: any) => (
      <h1
        className={cn(
          'heading mt-2 scroll-m-[10px] text-5xl font-bold tracking-tight',
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: any) => (
      <h2
        className={cn(
          'heading mt-10 scroll-m-[10px] pb-1 text-[1.625rem] font-semibold tracking-tight first:mt-0',
          className
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }: any) => (
      <h3
        className={cn(
          'heading mt-8 scroll-m-[10px] text-[1.375rem] font-semibold tracking-tight',
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: any) => (
      <h4
        className={cn(
          'heading mt-8 scroll-m-[10px] text-[1.125rem] font-semibold tracking-tight',
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }: any) => (
      <h5
        className={cn(
          'heading mt-8 scroll-m-[10px] text-lg font-semibold tracking-tight',
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }: any) => (
      <h6
        className={cn(
          'heading mt-8 scroll-m-[10px] text-base font-semibold tracking-tight',
          className
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }: any) => (
      <p
        className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
        {...props}
      />
    ),
    ul: ({ className, ...props }: any) => (
      <ul
        className={cn('my-6 ml-0 list-disc pl-0', className)}
        {...props}
        style={{ listStyle: 'none' }}
      />
    ),
    ol: ({ className, ...props }: any) => (
      <ol className={cn('my-6 ml-2 list-decimal', className)} {...props} />
    ),
    li: ({ className, ...props }: any) => (
      <li
        className={cn(
          'custom-white m-0 mt-2 flex items-start gap-2 p-0',
          className
        )}
        {...props}
      >
        <div className="w-[16px]">
          <ArrowRight size={16} color="#e21d49" style={{ marginTop: '7px' }} />
        </div>
 
        <div>{props.children}</div>
      </li>
    ),
    hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
    table: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="my-6 w-full overflow-y-auto">
        <table className={cn('w-full', className)} {...props} />
      </div>
    ),
    tr: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr
        className={cn('even:bg-muted m-0 border-t p-0', className)}
        {...props}
      />
    ),
    th: ({ className, ...props }: any) => (
      <th
        className={cn(
          'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: any) => (
      <td
        className={cn(
          'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
          className
        )}
        {...props}
      />
    ),
 
    code: ({ className, ...props }: any) => (
      <code
        className={cn(
          'relative px-[0.3rem] py-[0.2rem] font-mono text-sm',
          className
        )}
        {...props}
      />
    ),

     img: (props: any) => (
      <Image
        {...props}
        className={cn(' rounded-sm shadow-md', props.className)}
        width={props.width ?? 600}
        height={props.height ?? 500}
        alt="image"
      />
    ),
    ...components,
  };
}