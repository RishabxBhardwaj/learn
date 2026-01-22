import { Link } from "expo-router";
import { View , Text , } from "react-native";
Link
export default function ProfileSetting() {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Link dismissTo href={"/"}>Go back to Home</Link>
    </View>
  )
}
