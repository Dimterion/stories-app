import { Text } from "react-native";

export const formatText = (text: string) => {
  const parts = text.split(/(\*.*?\*|_.*?_)/);

  return parts.map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <Text key={index} style={{ fontWeight: "bold" }}>
          {part.slice(1, -1)}
        </Text>
      );
    }

    if (part.startsWith("_") && part.endsWith("_")) {
      return (
        <Text key={index} style={{ fontStyle: "italic" }}>
          {part.slice(1, -1)}
        </Text>
      );
    }

    return <Text key={index}>{part}</Text>;
  });
};
