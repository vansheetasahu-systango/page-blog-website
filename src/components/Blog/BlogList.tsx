import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  description: string;
  image?: string;
}

interface BlogListProps {
  blogs: Blog[];
}

export default function BlogList({ blogs }: BlogListProps) {
  if (!blogs || blogs.length === 0) {
    return <p>No blogs available at the moment. Please check back later.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
          <div className="p-4 border rounded shadow">
            <img
              src={blog.image || "/images/default-thumbnail.jpg"}
              alt={blog.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-lg font-bold mt-2">{blog.title}</h2>
            <p>{blog.description.slice(0, 100)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
