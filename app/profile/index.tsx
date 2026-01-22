import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ProfileIndex(){
    return(
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
            <Text>This My Profile</Text>
            <Link href={"/profile/setting"}>Profile Settings</Link>
        </View>
    )
}