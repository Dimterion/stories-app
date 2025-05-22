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
      style={{
        position: "absolute",
        bottom: 30,
        right: 20,
        borderRadius: 50,
        backgroundColor: "#1B263B",
        padding: 10,
        shadowColor: "#1B263B",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 5,
      }}
      onPress={scrollToTop}
    >
      <Image
        source={icons.arrow}
        style={{ width: 25, height: 25, transform: [{ rotate: "-90deg" }] }}
        tintColor="#BFD8BD"
      />
    </TouchableOpacity>
  );
};

export default ScrollToTopBtn;
