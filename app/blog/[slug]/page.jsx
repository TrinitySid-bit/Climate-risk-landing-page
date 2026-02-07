import { getPostBySlug, getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post.title + ' | NestCheck',
    description: post.description,
  };
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

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
        <div className="text-blue-300 text-sm mb-4">
          <Link href="/" className="text-sky-400 hover:underline">Home</Link> / <Link href="/blog" className="text-sky-400 hover:underline">Blog</Link> / {post.category}
        </div>
        <h1 className="text-4xl md:text-5xl font-serif text-white max-w-4xl mx-auto leading-tight mb-4">{post.title}</h1>
        <div className="text-blue-300 text-sm">
          {new Date(post.date).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })} · {post.readTime} · {post.category}
        </div>
      </div>

      <article className="max-w-5xl mx-auto px-6 py-12 bg-white my-8 rounded-lg shadow-sm">
        <div 
          className="prose prose-xl max-w-none prose-headings:text-gray-900 prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }} 
        />
      </article>

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
