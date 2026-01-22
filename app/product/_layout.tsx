import { Stack } from "expo-router";

export default function ProductLayout(){
    return(
        <Stack screenOptions={{headerShown:true}}>
            <Stack.Screen name="index" options={{
                headerShown:false
            }}/>
            <Stack.Screen name="[id]" options={{
                headerShown:true,
                headerTitle:"Productdetail",
                presentation:"formSheet"
            }}/>

        </Stack>
    )
}