type note = {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
};

type repo = {
  id: number;
  title: string;
  desc: string;
  technologies: {
    name: string;
    color: string;
  }[];
  stars: number;
  githubLink: string;
  liveLink: string;
  coverImage: string;
  blurHash: string;
};
