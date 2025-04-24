interface Story {
  id: number;
  title: string;
  poster_path: object;
  vote_average: number;
  release_date: string;
  tag: string;
}

interface FeaturedStory {
  id: number;
  title: string;
  poster_path: object;
}

interface FeaturedCardProps {
  story: FeaturedStory;
  index: number;
}

interface StoryDetails {
  id: number;
  poster_path: object;
  title: string;
  release_date: string;
  runtime: string;
  vote_count: number;
  vote_average: number;
  overview: string;
  budget: number;
  revenue: number;
  genres: {
    id: number;
    name: string;
  }[];
  tags: {
    name: string;
  }[];
}

interface StoryInfoProps {
  label: string;
  value?: string | number | null;
}
