import { Link } from "expo-router";
import { View , Text} from "react-native";

export default function SecondPage(){
    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
           
                <Link dismissTo href={"/"}> Go HOME</Link>
           
        </View>
    )
}