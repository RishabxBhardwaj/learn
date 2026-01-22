import { Text, View } from "react-native";

import { Link } from "expo-router";


import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Index() {
  return (
  <SafeAreaView>
    <View>
      <Text>
        hello
      </Text>
      <Link href="/second">Go to Second Page</Link>
      <Link href="/profile">Go to Profile Page</Link>
      <Link href="/product">Go to Product Page</Link>
    </View>
   </SafeAreaView>
  );
}
