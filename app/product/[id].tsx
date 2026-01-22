import { View, Text, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>User ID: {id}</Text>

      <Image
        source={{ uri: `https://avatars.githubusercontent.com/u/${id}` }}
        style={{ width: 120, height: 120, borderRadius: 60, marginTop: 20 }}
      />
    </View>
  );
}
