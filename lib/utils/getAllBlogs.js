import glob from 'fast-glob';
import * as path from 'path';
import grayMatter from 'gray-matter';
import fs from 'fs';

async function importBlog(blogFileName) {
  const fullPath = path.join(process.cwd(), 'data/content', blogFileName);
  const fileContent = fs.readFileSync(fullPath, 'utf8');
  const { data: meta, content } = grayMatter(fileContent);

  return {
    slug: blogFileName.replace(/(\/content)?\.mdx$/, ''),
    ...meta,
  };
}

export async function getAllBlogs() {
  let blogFileNames = await glob(['**/*.mdx'], {
    cwd: path.join(process.cwd(), 'data/content'),
  });

  let blogs = await Promise.all(blogFileNames.map(importBlog));

  console.log('blogs', blogs);

  return blogs.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
