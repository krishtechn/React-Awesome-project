import { View, Text,Button, ScrollView} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Components/Home';
import About from './Components/About';
import Userdata from "./Components/UserData";
import Course from './Components/Course';
import UserDataDetails from './Components/UserDataDetails';
import Services from './Components/Services';
import Login from './Components/Login';


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>

         {/* initialRouteName is the first page after app is open */}
         <Stack.Navigator initialRouteName="Login">

           {/* Home page with props passing */}
           <Stack.Screen name="Home">
             {(props)=><Home {...props} title="Welcome to" subtitle="Technical krish" desc="Hello my name is krishna kharal i am from Baytari i am a IT professional, freelancer, app developer,website developer,Software engineer." btn1="join facebook" btn2="join youtube" link1="https://www.facebook.com/krish.kharal.14/" link2="https://www.youtube.com/channel/UCF5oO43y67XYOfJRiPif1rw"/>}
           </Stack.Screen> 

           {/* about page no props passing */}
           <Stack.Screen name="About" component={About}/>

           <Stack.Screen name="Login" component={Login}/>


           {/* Contact page no props passing */}

           {/* about page no props passing */}
           <Stack.Screen name="Course" component={Course}/>

           {/* Student page no props passing */}
           <Stack.Screen name="Student" component={Userdata}/>

           <Stack.Screen name="UserDataDetails" component={UserDataDetails}/>

           <Stack.Screen name="Services" component={Services}/>

          </Stack.Navigator>
          {/* it is shown in all page because it is outside a Stack.Navigator it's just like button navigation */}
          {/* <Button onPress={()=>alert("hello")} title="Home page"/> */}
      
       </NavigationContainer>
  )
}

//passing props and get data using destructuring.
// const HomeScreen = ({channel,address})=>{
//   return (
//     <View>
//       <Text>Home page {channel} {address}</Text>
//     </View>
//   )
// }

export default App