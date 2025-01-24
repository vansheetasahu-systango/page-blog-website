import BlogDetails from "../../components/Blog/BlogDetails";
import styles from "../../styles/blog[id].module.css";

interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
}

async function fetchBlogDetails(id: string): Promise<Blog> {
  const res = await fetch(`https://6787e220c4a42c9161089db1.mockapi.io/blogs/${id}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch blog details");
  }
  return res.json();
}

interface BlogPage {
  params: { id: string };
}

export async function getServerSideProps(context: { params: { id: string } }) {
  const { id } = context.params;
  const blog = await fetchBlogDetails(id);

  return {
    props: { blog },
  };
}

const BlogPage = ({ blog }: { blog: Blog }) => {
  return (
    <div className={styles.container}>
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogPage;
