import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    content: string;
    frontmatter: {
      featured_image?: string;
      description?: string;
      tags?: string[];
      disable_share?: boolean;
    };
  }

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      return getPostBySlug(slug);
    })
    .filter((post): post is BlogPost => post !== null);

  return posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title,
        date: data.date,
        content,
        frontmatter: {
          featured_image: data.featured_image,
          description: data.description,
          tags: data.tags,
          disable_share: data.disable_share,
        },
      };
  } catch (error) {
    return null;
  }
}