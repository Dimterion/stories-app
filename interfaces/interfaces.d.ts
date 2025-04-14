interface Story {
  id: Number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  tag: string;
}

interface TrendingStory {
  searchTerm: string;
  story_id: number;
  title: string;
  count: number;
  poster_url: string;
}

interface TrendingCardProps {
  story: TrendingStory;
  index: number;
}

interface StoryDetails {
  id: number;
  poster_path: string;
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
  production_companies: {
    name: string;
  }[];
}

interface StoryInfoProps {
  label: string;
  value?: string | number | null;
}
