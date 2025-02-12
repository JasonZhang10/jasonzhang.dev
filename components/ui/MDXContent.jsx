'use client';

import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useEffect, useState } from 'react';

// 自定义 MDX 组件样式
const components = {
  h1: (props) => <h1 className="text-3xl font-bold my-4" {...props} />,
  p: (props) => <p className="my-4 leading-relaxed" {...props} />,
  img: (props) => (
    <img
      {...props}
      className="my-6 rounded-lg shadow-lg mx-auto"
      alt={props.alt || ''}
    />
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse border border-zinc-200 dark:border-zinc-700">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-zinc-50 dark:bg-zinc-800">{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">{children}</tr>
  ),
  th: ({ children, align }) => (
    <th
      className={`px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100
        ${align === 'center' ? 'text-center' : ''}
        ${align === 'right' ? 'text-right' : ''}`}
    >
      {children}
    </th>
  ),
  td: ({ children, align }) => (
    <td
      className={`px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300
        ${align === 'center' ? 'text-center' : ''}
        ${align === 'right' ? 'text-right' : ''}`}
    >
      {children}
    </td>
  ),
  // code: ({ className, children }) => {
  //   return <p className={className}>{children}</p>;
  // },
};

export default function MDXContent({ content }) {
  const [mdxSource, setMdxSource] = useState(null);

  useEffect(() => {
    new Promise((resolve) => {
      resolve(serialize(content));
    }).then((mdxSource) => {
      setMdxSource(mdxSource);
    });
  }, [content]);

  return mdxSource ? (
    <MDXRemote {...mdxSource} components={components} />
  ) : (
    <div>111</div>
  );
}
