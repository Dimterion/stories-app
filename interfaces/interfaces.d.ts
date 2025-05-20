interface StoryCardProps {
  id: number;
  title: string;
  poster_path?: object;
  post_date?: string;
}

interface FeaturedStory {
  id: number;
  title: string;
  poster_path?: object;
}

interface FeaturedCardProps {
  index: number;
  story: FeaturedStory;
}

interface StoryDetails {
  id: number;
  title: string;
  poster_path?: string;
  post_date?: string;
  text: string;
  tags: {
    name: string;
  }[];
}

interface StoryInfoProps {
  label?: string;
  value?: string | number | null;
}

interface Story {
  id: number;
  title: string;
  poster_path?: ImageSourcePropType;
  post_date?: string;
  text: string;
  tags?: Array;
  featured?: boolean;
}

interface TabIconProps {
  icon: ImageSourcePropType;
  focused: boolean;
}
