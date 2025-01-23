const API_URL = "https://6787e220c4a42c9161089db1.mockapi.io/blogs";

export async function fetchBlogs(searchQuery = ""): Promise<Blog[]> {
  try {
    const queryParam = searchQuery ? `?query=${encodeURIComponent(searchQuery)}` : "";
    const res = await fetch(`${API_URL}${queryParam}`);
    if (!res.ok) throw new Error("Failed to fetch blogs");
    return res.json();
  } catch (error) {
    console.error("Error in fetchBlogs:", error);
    throw error;
  }
}
