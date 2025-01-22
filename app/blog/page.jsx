'use client';

import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer2/hooks';
import Link from 'next/link';

const PostCard = ({ post }) => {
  if (!post?.body?.code) {
    console.error('post.body.code is missing', post);
    return <div></div>;
  }

  const MDXContent = getMDXComponent(post.body.code);
  console.log('post', post);
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
        {post.date}
      </time>
      {/*<div className="text-sm">{MDXContent && <MDXContent />}</div>*/}
    </div>
  );
};

const Blog = () => {
  return (
    <div className="w-full h-full">
      <div className="max-w-xl py-8 mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center">Next.js Example</h1>
        {(allPosts || []).map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
