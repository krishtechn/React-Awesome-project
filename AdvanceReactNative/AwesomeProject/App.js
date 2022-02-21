import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
       <NavigationContainer>
         <Stack.Navigator>
           <Stack.Screen name="Home">
             {(props)=><Home {...props} title="Welcome to" subtitle="Technical krish" desc="Hello my name is krishna kharal i am from Baytari i am a IT professional, freelancer, app developer,website developer,Software engineer." btn1="join facebook" btn2="join youtube" link1="https://www.facebook.com/krish.kharal.14/" link2="https://www.youtube.com/channel/UCF5oO43y67XYOfJRiPif1rw"/>}
           </Stack.Screen>
        <Stack.Screen name="About">
          {(props)=><HomeScreen {...props} channel="Technical krish" address="Waling-13" />}
        </Stack.Screen>
      </Stack.Navigator>
       </NavigationContainer>
  )
}

const HomeScreen = ({channel,address})=>{
  return (
    <View>
      <Text>Home page {channel} {address}</Text>
    </View>
  )
}

export default App