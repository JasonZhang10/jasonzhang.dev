import { defineDocumentType, makeSource } from 'contentlayer2/source-files';
import { writeFileSync } from 'fs';
const siteMetaData = require('@/data/siteMetaData');

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'data/content',
  documentTypes: [Post],
  // onSuccess: async (importData) => {
  //   const { allBlogs } = await importData();
  //   console.log('allBlogs', allBlogs);
  //   createTagCount(allBlogs);
  // },
});

// const computedFields = {
//   slug: {
//     type: 'string',
//     resolve: (doc) => {
//       // Split the flattenedPath by '/' and take the last part
//       const pathParts = doc._raw.flattenedPath.split('/');
//       return pathParts.slice(2).join('/');
//     },
//   },
//   path: {
//     type: 'string',
//     resolve: (doc) => doc._raw.flattenedPath,
//   },
//   filePath: {
//     type: 'string',
//     resolve: (doc) => doc._raw.sourceFilePath,
//   },
// };
//
// export const Blog = defineDocumentType(() => ({
//   name: 'Blog',
//   filePathPattern: `content/*.mdx`,
//   contentType: 'mdx',
//   fields: {
//     title: { type: 'string', required: true },
//     date: { type: 'date', required: true },
//     tags: { type: 'list', of: { type: 'string' }, default: [] },
//     images: { type: 'json' },
//     authors: { type: 'list', of: { type: 'string' }, required: true },
//   },
//   computedFields: {
//     ...computedFields,
//
//     structuredData: {
//       type: 'json',
//       resolve: (doc) => ({
//         '@context': 'https://schema.org',
//         '@type': 'BlogPosting',
//         headline: doc.title,
//         datePublished: doc.date,
//         description: doc.summary,
//         image: doc.images ? doc.images[0] : siteMetaData.socialBanner,
//         url: `${siteMetaData.siteUrl}/blog/${doc.slug}`,
//       }),
//     },
//   },
// }));
//
function createTagCount(allBlogs) {
  const tagCount = {};

  allBlogs.forEach((file) => {
    if (file.tags) {
      file.tags.forEach((tag) => {
        const formattedTag = tag;
        tagCount[formattedTag] = (tagCount[formattedTag] || 0) + 1;
      });
    }
  });

  writeFileSync('./app/tag-data.json', JSON.stringify(tagCount));
}
//
// export default makeSource({
//   contentDirPath: 'content',
//   documentTypes: [Blog],
//   mdx: {
//     cwd: process.cwd(),
//   },
//   onSuccess: async (importData) => {
//     const { allBlogs } = await importData();
//     console.log('allBlogs', allBlogs);
//     createTagCount(allBlogs);
//   },
// });
