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
        bottom: 20,
        right: 20,
        borderRadius: 50,
        backgroundColor: "#1B263B",
        padding: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      onPress={scrollToTop}
    >
      <Image
        source={icons.arrow}
        style={{ width: 24, height: 24, transform: [{ rotate: "-90deg" }] }}
        tintColor="#FFFFFF"
      />
    </TouchableOpacity>
  );
};

export default ScrollToTopBtn;
