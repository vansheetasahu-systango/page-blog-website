// types.ts
export interface Blog {
    id: string; // Ensure 'id' is always present
    title: string;
    author?: string;
    date?: string;
    image?: string;
    content: string;
  }
  