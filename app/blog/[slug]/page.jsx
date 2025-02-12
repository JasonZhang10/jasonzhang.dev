import 'css/prism.css';
import MDXContent from '@/components/ui/MDXContent';
import { serialize } from 'next-mdx-remote/serialize';
import { importBlog } from '@/lib/utils/getBlog';
import { BlogLayout } from '@/components/ui/BlogLayout';
import { notFound } from 'next/navigation';

const PostLayout = async ({ params }) => {
  const parsedParams = await params;
  const id = parsedParams.slug;
  if (!id) return notFound();

  const { content, ...meta } = await importBlog(id + '.mdx');

  return (
    <BlogLayout meta={meta}>{<MDXContent content={content} />}</BlogLayout>
  );
  // return <MDXContent content={content} />;
};

export default PostLayout;
