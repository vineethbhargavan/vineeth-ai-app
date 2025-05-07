import { H1 } from "@/components/ui/H1";
import { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Image } from '@/components/mdx/Image';
import NextImage from 'next/image';
import { FeaturedImage } from '@/components/FeaturedImage';

// Define components that can be used in MDX
const components = {
    Image,
};

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  
  return {
    title: post?.title || "Blog Post Not Found",
    description: `Read about ${post?.title}`,
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="space-y-4">
        <H1>Post Not Found</H1>
        <p>Sorry, the blog post you&aposre looking for doesn&apost exist.</p>
        <Link href="/blog" className="text-primary hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="space-y-6">
      {/* Featured Image */}
      {post.frontmatter.featured_image && (
        <FeaturedImage
          src={post.frontmatter.featured_image}
          alt={post.title}
        />
      )}

      <header className="space-y-4">
        <Link href="/blog" className="text-primary hover:underline">
          ← Back to Blog
        </Link>
        <H1>{post.title}</H1>
        <time className="text-muted-foreground">
          {new Date(post.date).toLocaleDateString()}
        </time>
      </header>

      <div className="prose dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground dark:prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground max-w-none">
        <MDXRemote 
          source={post.content} 
          components={components}
        />
      </div>
    </article>
  );
}