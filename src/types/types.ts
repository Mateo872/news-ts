export interface Welcome {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  title: string;
  source: Source;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: null;
  name: string;
}

export type Prop = Omit<Article, "source" | "content">;

export enum STATUS {
  OK = "ok",
  INVALIDAPI = "apiKeyInvalid",
}
