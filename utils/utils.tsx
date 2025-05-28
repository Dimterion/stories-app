import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

export const formatText = (text: string): ReactNode => {
  if (!text) return null;

  const textParts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_)/g);
  const boldRegex = /^\*\*[^*]+\*\*$/;
  const italicRegex = /^\*[^*]+\*$/;
  const boldAndItalicRegex = /^_[^_]+_$/;

  const textStyles = StyleSheet.create({
    bold: {
      fontWeight: "bold",
    },
    italic: {
      fontStyle: "italic",
    },
    boldAndItalic: {
      fontWeight: "bold",
      fontStyle: "italic",
    },
  });

  return textParts.map((part, index) => {
    // Bold text
    if (boldRegex.test(part)) {
      return (
        <Text key={index} style={textStyles.bold}>
          {part.slice(2, -2)}
        </Text>
      );
    }

    if (italicRegex.test(part)) {
      // Italic text
      return (
        <Text key={index} style={textStyles.italic}>
          {part.slice(1, -1)}
        </Text>
      );
    }

    if (boldAndItalicRegex.test(part)) {
      // Bold and italic text
      return (
        <Text key={index} style={textStyles.boldAndItalic}>
          {part.slice(1, -1)}
        </Text>
      );
    }

    // Default text
    return <Text key={index}>{part}</Text>;
  });
};
