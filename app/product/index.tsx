import { Link, useRouter } from "expo-router";
import { View, Text, Button, Pressable } from "react-native";


const getRandomUserId = () => {
  return Math.floor(Math.random() * 1000000).toString();
};
const router = useRouter();
export default function ProductPage() {


    function handelNavigation (){
        const newId = getRandomUserId();
        router.push({pathname:"/product/[id]",params:{id:newId}})
    }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Pressable onPress={handelNavigation}>
        Random Profile Detail
    </Pressable>
    </View>
  );
}
