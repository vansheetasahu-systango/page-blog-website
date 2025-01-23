import { NextApiRequest, NextApiResponse } from "next";

const API_URL = "https://6787e220c4a42c9161089db1.mockapi.io/blogs";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  if (method === "GET") {
    try {
      const response = await fetch(API_URL);
      const blogs = await response.json();
      const searchQuery = query.query?.toString().toLowerCase() || "";

      const filteredBlogs = blogs.filter((blog: any) =>
        ["title", "description", "content"].some((key) =>
          blog[key]?.toLowerCase().includes(searchQuery)
        )
      );

      res.status(200).json(filteredBlogs);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch blogs" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
