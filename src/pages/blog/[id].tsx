import { GetServerSideProps } from "next";
import BlogDetails from "@/components/Blog/BlogDetails";

interface BlogPageProps {
  blog: Blog;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  const res = await fetch(`https://6787e220c4a42c9161089db1.mockapi.io/blogs/${id}`);
  const blog = await res.json();

  if (!blog) {
    return { notFound: true };
  }

  return { props: { blog } };
};

export default function BlogPage({ blog }: BlogPageProps) {
  return <BlogDetails blog={blog} />;
}
