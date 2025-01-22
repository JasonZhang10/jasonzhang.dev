'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer2/hooks';

const PostLayout = ({ params }) => {
  const [id, setId] = useState(null);

  const post = useMemo(
    () => allPosts.find((post) => post._raw.flattenedPath === id),
    [id, allPosts]
  );

  const MDXContent = useMemo(() => {
    if (post?.body.code) return getMDXComponent(post?.body.code);
    return null;
  }, [post]);

  const getSlug = async () => {
    const id = (await params).slug;
    setId(id);
  };

  useEffect(() => {
    getSlug().then();
  }, []);

  return (
    <article className="py-8 mx-auto max-w-xl">
      {post && (
        <div className="mb-8 text-center">
          <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
            {post.date}
          </time>
          <h1>{post.title}</h1>
        </div>
      )}
      {MDXContent && <MDXContent />}
    </article>
  );
};

export default PostLayout;
