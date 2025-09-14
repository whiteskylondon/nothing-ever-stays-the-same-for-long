export interface Photo {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  tags: string[];
  series?: string;
  date: string;
  location?: string;
  commentary: string;
}

export interface Video {
  id: string;
  youtubeId: string;
  title: string;
  thumbnail?: string;
  date: string;
  tags: string[];
  commentary: string;
}

export interface Series {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  coverPhotoId?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  author: string;
  social: {
    instagram?: string;
    youtube?: string;
    vimeo?: string;
  };
}
