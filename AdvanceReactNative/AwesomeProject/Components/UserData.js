import { View, Text,ScrollView,StyleSheet,FlatList,Image,Button,Alert, Linking, ActivityIndicator } from 'react-native'
import React, { useEffect,useState } from 'react'

const UserData = () => {
 const url = "https://thapatechnical.github.io/userapi/users.json";
 const [data,setdata] = useState([]);
 const [isloading,setisloading] = useState(false);

 const getdata = async()=>{
  setisloading(true);
  let data = await fetch(url);
  let newdata = await data.json();
  setdata(newdata);
 }

 if(isloading){
   return <ActivityIndicator size="large" color="red" />
     //</View>
 }

 useEffect(()=>{
   getdata();
   setisloading(false);
 },[])

  return (
    <View style={styled.container}>
      <View style={styled.cards}>
        <FlatList
         data = {data}
         showsVerticalScrollIndicator={false}
         renderItem={(items)=>{
           const {image,name,mobile,email,description} = items.item;
          return <View style={[styled.card,styled.shadows]}>
          <Image source={{
            uri:image,
         }} style={{width:"100%",aspectRatio:1,height:undefined,}} />

          <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
          <Text style={styled.username}>{name}</Text>
          <Text style={styled.username}>{mobile}</Text>
          </View>
          <Text style={[styled.username,{color:"black",fontSize:15,textTransform:"none"}]}>{email}</Text>
          <Text style={{color:"black",width:"100%",textAlign:"center"}}>{description}</Text>
          <Button title='Visit Profile' onPress={()=>{
            Alert.alert("Youtube Channel","are your sure you want to visit my channel",[
              {
                text:"cancle",
              },
              {
                text:"ok",
                onPress:()=>Linking.openURL("https://www.youtube.com/channel/UCF5oO43y67XYOfJRiPif1rw/videos"),
              }
            ])
          }} />
        </View>
         }}
        />
    </View>
    </View>
     )
}

const styled = StyleSheet.create({
  container:{
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  card:{
    backgroundColor:"#fff",
    width:450,
    opacity:0.9,
    marginVertical:20,
    paddingHorizontal:10,
    paddingVertical:10,
    textAlign:"center",
    color:"black",
  },
  username:{
    marginVertical:10,
    textAlign:"center",fontSize:16,fontWeight:"800",color:"black",letterSpacing:1,textTransform:"capitalize"
  },
  shadows:{
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
  },
  cards:{
    width:"100%",
    display:"flex",
    alignItems:"center",
  }
})

export default UserData