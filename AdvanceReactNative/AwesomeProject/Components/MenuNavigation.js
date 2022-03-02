import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const MenuNavigation = () => {
    const navigation = useNavigation();
  return (
    <View style={styled.menu}>
      <TouchableOpacity style={styled.btn} onPress={()=>navigation.navigate("About")}>
          <Text style={styled.btntext}>About</Text>
      </TouchableOpacity>

      
      <TouchableOpacity style={styled.btn} onPress={()=>navigation.navigate("Services")}>
          <Text style={styled.btntext}>Services</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styled.btn} onPress={()=>navigation.navigate("Course")}>
          <Text style={styled.btntext}>Course</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styled.btn} onPress={()=>navigation.navigate("Student")}>
          <Text style={styled.btntext}>UserData</Text>
      </TouchableOpacity>
      
 

    </View>
  )
}

const styled = StyleSheet.create({
 menu:{
     display:"flex",
     flexDirection:"row",
     justifyContent:"space-around",
     padding:10,
     width:"100%",
     backgroundColor:"rgb(228, 228, 229)",
 },
 btntext:{
     fontSize:13,
     fontWeight:"bold",
     letterSpacing:1,
     textTransform:"uppercase",
     color:"black",
 }
})

export default MenuNavigation