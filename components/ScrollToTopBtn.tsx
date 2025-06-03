import { Image, ScrollView, TouchableOpacity } from "react-native";

import { icons } from "@/constants/icons";

const ScrollToTopBtn = ({
  scrollRef,
  isVisible,
}: {
  scrollRef: React.RefObject<ScrollView>;
  isVisible: boolean;
}) => {
  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  if (!isVisible) return null;

  return (
    <TouchableOpacity
      className="absolute bottom-16 right-5 rounded-full bg-tertiary p-3 shadow-md shadow-tertiary"
      onPress={scrollToTop}
    >
      <Image
        source={icons.arrow}
        className="h-8 w-8 -rotate-90"
        tintColor="#BFD8BD"
      />
    </TouchableOpacity>
  );
};

export default ScrollToTopBtn;
