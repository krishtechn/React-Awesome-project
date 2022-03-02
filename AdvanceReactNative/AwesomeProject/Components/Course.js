import { View, Text,FlatList,StyleSheet,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import apidata from "../Components/apidata";


const Course = ({navigation}) => {
  return (
    <View style={styled.mainContainer}>
       <FlatList 
       data={apidata}
       keyExtractor={(items)=>items.id}
       renderItem={(data)=>{
        const {image,price,title,description,course1,course2,coursee} = data.item;
        return <View style={[styled.card,styled.shadows]}>
          <Image source={image} style={styled.imgstyle}/>
          <View style={styled.flextitle}>
          <Text style={[styled.text,{fontSize:20,fontWeight:"600"}]}>{title}</Text>
          <Text style={[styled.text,{fontSize:20,fontWeight:"600"}]}>{price}</Text>
          </View>
          <Text style={[styled.text,{fontSize:15,letterSpacing:0,color:"black",textAlign:"left"}]}>{description}</Text>
          <View style={styled.flextitle}>
            <Text style={[styled.text,{fontSize:20,fontWeight:"600",letterSpacing:1,textTransform:"uppercase"}]}>{course1}</Text>
            <Text style={[styled.text,{fontSize:20,fontWeight:"600",letterSpacing:1,textTransform:"uppercase"}]}>{course2}</Text>
            <Text style={[styled.text,{fontSize:20,fontWeight:"600",letterSpacing:1,textTransform:"uppercase"}]}>{coursee}</Text>
          </View>
          <View style={{display:"flex",alignItems:"center",width:"100%"}}>
          <TouchableOpacity style={[styled.btn,styled.shadows]} onPress={()=>{
           navigation.navigate('UserDataDetails')
          }}>
            <Text style={[styled.text,{fontSize:17,color:"white",}]}>course details</Text>
          </TouchableOpacity>
          </View>
        </View>
       }}
       />
    </View>
  )
}

const styled = StyleSheet.create({
  mainContainer:{
    width:"100%",
    height:"100%",
  },
  card:{
    marginHorizontal:20,
    marginVertical:20,
    borderRadius:6,
    paddingVertical:20,
    paddingHorizontal:15,
    backgroundColor:"white",
    width:450,
   },
  imgstyle:{
    width:"100%",
    height:undefined,
    aspectRatio:1,
  },
  flextitle:{
    display:"flex",
    flexDirection:"row",
    marginBottom:10,
    marginTop:10,
    justifyContent:"space-between",
  },
  btn:{
    backgroundColor:"rgb(78, 175, 167)",
    paddingVertical:10,
    width:"50%",
    display:"flex",
    justifyContent:"center",
    borderRadius:10,
    paddingHorizontal:5,
  },
  text:{
    textTransform:"capitalize",
    letterSpacing:1,
    textAlign:"center",
  },
  shadows:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  }
})

export default Course
