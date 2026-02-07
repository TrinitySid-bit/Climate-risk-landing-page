import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | NestCheck',
  description: 'Victorian property guides covering bushfire risk, flood zones, crime data, planning overlays, and everything you need to know before buying.',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="bg-blue-950 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="text-2xl font-bold text-sky-400">
          🏡 Nest<span className="text-white">Check</span>
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="text-stone-300 hover:text-sky-400 transition">Check an Address</Link>
          <Link href="/blog" className="text-stone-300 hover:text-sky-400 transition">Blog</Link>
        </div>
      </nav>

      <div className="bg-gradient-to-br from-blue-950 to-blue-900 py-16 px-8 text-center">
        <h1 className="text-5xl font-serif text-white mb-4">NestCheck Blog</h1>
        <p className="text-blue-200 text-lg max-w-2xl mx-auto">Victorian property guides covering bushfire risk, flood zones, crime data, planning overlays, and everything you need to know before buying.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="bg-white border border-stone-200 rounded-lg p-6 hover:border-sky-400 transition group"
            >
              <div className="text-xs text-stone-500 mb-2">{post.category} · {post.readTime}</div>
              <h2 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-sky-600 transition">{post.title}</h2>
              <p className="text-stone-600 text-sm mb-4">{post.description}</p>
              <div className="text-sky-600 text-sm font-semibold">Read more →</div>
            </Link>
          ))}
        </div>
      </div>

      <footer className="bg-blue-950 text-stone-400 py-8 px-8 text-center text-sm mt-12">
        <p>© 2026 NestCheck · ABN 48670311318 · Melbourne, Australia</p>
        <p className="mt-2">
          <Link href="/" className="text-sky-400 hover:underline">Check an Address</Link> · 
          <Link href="/blog" className="text-sky-400 hover:underline ml-2">Blog</Link> · 
          <a href="https://tradietruth.com.au" className="text-sky-400 hover:underline ml-2">TradieTruth Quote Analyser</a>
        </p>
      </footer>
    </div>
  );
}
