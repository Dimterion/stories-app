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
  cover_img: string;
  title: string;
  publish_date: string;
  length: string;
  vote_average: number;
  overview: string;
  tag: string;
}
