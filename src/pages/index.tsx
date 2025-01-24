import { GetServerSideProps, NextPage } from "next";
import { Blog } from "@/utils/types";
import BlogList from "@/components/Blog/BlogList";
import Header from "@/components/Header/Header";
// import { fetchBlogs } from "../utils/api";
import ShareBlog from "./blog/create/ShareBlog";

interface HomeProps {
  blogs: Blog[];
}

const Home: NextPage<HomeProps> = ({ blogs }) => {
  return (
    <main className="container mx-auto px-4 py-6">
      <Header />
      <h1 className="text-2xl font-bold mb-4">Welcome to the Blog Website</h1>
      <ShareBlog />

      {/* Displaying the filtered blogs */}
      <BlogList blogs={blogs || []} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const searchQuery = query.query?.toString() || "";
    const res = await fetch(`http://localhost:3000/api/blogs?query=${searchQuery}`);
    const blogs = await res.json();
    
    return { props: { blogs } };
  } catch (error) {
    console.error("Error in getServerSideProps:", error);
    return { props: { blogs: [] } };
  }
};

export default Home;