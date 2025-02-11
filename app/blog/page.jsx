import { Container } from '@/components/layout/Container/Container';
import { Paragraph } from '@/components/ui/Paragraph';
import { getAllBlogs } from '@/lib/utils/getAllBlogs';
import { Blogs } from '@/components/ui/Blogs';

export default async function Blog() {
  const blogs = await getAllBlogs();

  return (
    <Container>
      <span className="text-4xl">📝</span>
      <Paragraph className="pb-10">
        Ever since I was a kid, I&apos;ve been fascinated by technology.
      </Paragraph>
      <Blogs blogs={blogs} />
    </Container>
  );
}
