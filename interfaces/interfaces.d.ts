interface Story {
  id: number;
  title: string;
  poster_path: object;
  post_date: string;
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
  post_date: string;
  runtime: string;
  vote_count: number;
  text: string;
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
