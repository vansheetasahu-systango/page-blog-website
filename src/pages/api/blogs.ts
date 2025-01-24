import { NextApiRequest, NextApiResponse } from "next";

const API_URL = "https://6787e220c4a42c9161089db1.mockapi.io/blogs";

// Define the type for a Blog
interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  image?: string;
  date: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  if (method === "GET") {
    try {
      // Fetching blogs from the mock API
      const response = await fetch(API_URL);
      const blogs: Blog[] = await response.json();

      // If there's no blog data, return an empty array
      if (!blogs || blogs.length === 0) {
        return res.status(200).json([]);
      }

      const searchQuery = query.query?.toString().toLowerCase() || "";

      // Filter blogs based on the search query
      const filteredBlogs = blogs.filter((blog) => {
        // Ensure the fields exist before accessing them
        const title = blog.title.toLowerCase();
        const description = blog.description.toLowerCase();
        const content = blog.content.toLowerCase();

        return (
          title.includes(searchQuery) ||
          description.includes(searchQuery) ||
          content.includes(searchQuery)
        );
      });

      res.status(200).json(filteredBlogs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch blogs" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
