import { Container } from '@/components/layout/Container/Container';
import { getAllBlogs } from '@/lib/utils/getBlog';
import { Blogs } from '@/components/ui/Blogs';

export default async function Blog() {
  const blogs = await getAllBlogs();

  return (
    <Container>
      <div className="text-4xl mb-8 font-smiley-sans">我的博客 📜</div>
      <div className="flex flex-col gap-6 mb-8 text-zinc-400">你好</div>
      <Blogs blogs={blogs} />
    </Container>
  );
}
