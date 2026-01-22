import { Stack , Tabs } from "expo-router";
import ProfileSetting from "./setting";

export default function ProfileLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="index"options={{headerTitle:"Profile"}}/>
      <Tabs.Screen name="setting" options={{headerTitle:"ProfileSetting"}}/>
      <Tabs.Screen name="detail" options={{headerTitle:"ProfileDetail"}}/>
    </Tabs>
  );
}
