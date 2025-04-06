interface Story {
  id: Number;
  title: string;
  cover_img: object;
  vote_average: number;
  publish_date: string;
  tag: string;
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
