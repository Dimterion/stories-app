import { StyleSheet, Text } from "react-native";

export const formatText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*|__.*?__|_[^_]*?_|\*.*?\*)/g);
  const textStyles = StyleSheet.create({
    bold: {
      fontWeight: "bold",
    },
    italic: {
      fontStyle: "italic",
    },
  });

  if (!text) {
    return null;
  }

  return parts.map((part, index) => {
    if (
      part.startsWith("**") &&
      part.endsWith("**") &&
      part.length > 2 &&
      part !== "**"
    ) {
      return (
        <Text key={index} style={textStyles.bold}>
          {part.slice(2, -2)}
        </Text>
      );
    }

    if (
      part.startsWith("*") &&
      part.endsWith("*") &&
      part.length > 1 &&
      part !== "**"
    ) {
      return (
        <Text key={index} style={textStyles.italic}>
          {part.slice(1, -1)}
        </Text>
      );
    }

    return <Text key={index}>{part}</Text>;
  });
};
