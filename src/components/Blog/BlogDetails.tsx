 "use client";

import styles from "./BlogDetails.module.css";
import Image from "next/image";

interface Blog {
  title: string;
  author?: string; // Make author optional
  date?: string;   // Make date optional
  image?: string;  // Make image optional
  description: string;
  content: string;
}

interface BlogDetailsProps {
  blog: Blog;
}

const BlogDetails = ({ blog }: BlogDetailsProps) => {
  const handleBack = () => {
    if (typeof window !== "undefined") {
      
      window.history.back();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={blog.image || "/images/default-thumbnail.jpg"}
          alt={blog.title || "Blog Thumbnail"}
          className={styles.thumbnail}
          width={500}
          height={300}
          priority
        />
      </div>

      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>{blog.title || "Untitled Blog"}</h1>
        <p className={styles.meta}>
          <span>
            By <strong>{blog.author || "Anonymous"}</strong>
          </span>{" "}
          |{" "}
          <span>
            <em>{blog.date ? new Date(blog.date).toISOString().slice(0, 10) : "Unknown Date"}</em>
          </span>
        </p>
        <p className={styles.description}>
          {blog.description || "No description available."}
        </p>
        <div className={styles.content}>
          <p>{blog.content || "No content available."}</p>
        </div>
        <button className={styles.backButton} onClick={handleBack}>
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
