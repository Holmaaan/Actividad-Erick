import {Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Slot } from "expo-router";
import { Link } from "expo-router";

export default function App() {
  return (
    
    <View className="flex-1 items-center justify-center bg-white">

    
      <Text className ="text-4xl"> Holman Espitia   </Text>
      <StatusBar style="auto"/>
      <Link href="/profile" style={{color:'blue'}}>ir a profile </Link>
    
    </View>
  
)
}

