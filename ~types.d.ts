interface Note {
  id: string;
  title: string;
  content: string;
  tag: Tag['slug'];
  updatedAt?: string;
  createdAt?: string;
  isRecent?: boolean;
}

interface Tag {
  id: string;
  name: string;
  slug: string;
}
