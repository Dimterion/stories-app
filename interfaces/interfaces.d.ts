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
