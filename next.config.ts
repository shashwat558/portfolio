// next.config.mjs
import createMDX from '@next/mdx';
 
const withMDX = createMDX({
  extension: /\.mdx?$/,
});
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};
 
export default withMDX(nextConfig);