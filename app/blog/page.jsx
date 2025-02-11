'use client';

import Link from 'next/link';
import { format } from 'date-fns';

const PostCard = ({ post }) => {
  if (!post?.body?.code) {
    console.error('post.body.code is missing', post);
    return <div></div>;
  }

  return (
    <div className="mb-8">
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900"
          legacyBehavior
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="block mb-2 text-xs text-gray-600">
        {format(new Date(post.date), 'yyyy-MM-dd')}
      </time>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-xl py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">Next.js Example</h1>
      </div>
    </div>
  );
};

export default Blog;
