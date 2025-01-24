const API_URL = "https://6787e220c4a42c9161089db1.mockapi.io/blogs";

export interface Blog {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  description: string;
  content: string;
}

export async function fetchBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Failed to fetch blogs");
    return await res.json();
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
}

export async function fetchBlogById(id: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) throw new Error("Failed to fetch blog by ID");
    return await res.json();
  } catch (error) {
    console.error("Error fetching blog by ID:", error);
    return null;
  }
}
