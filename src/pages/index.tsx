import BlogList from "@/components/Blog/BlogList";
import ShareBlog from "./blog/create/ShareBlog";
import Header from "@/components/Header/Header";
import { fetchBlogs } from "@/utils/api";

interface HomeProps {
  searchQuery?: string;
}

export default async function Home({ searchQuery = "" }: HomeProps) {
  const blogs = await fetchBlogs(searchQuery);

  return (
    <main className="container mx-auto px-4 py-6">
      <Header />
      <ShareBlog />
      <h1 className="text-2xl font-bold mb-4">Welcome to the Blog Website</h1>
      <BlogList blogs={blogs} />
    </main>
  );
}
