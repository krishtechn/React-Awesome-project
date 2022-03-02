import { View, Text,StyleSheet,FlatList,Linking,Alert,Image,Button, } from 'react-native'
import React, { useEffect, useState } from 'react';

const Services = () => {
    const url = "https://thapatechnical.github.io/userapi/users.json";
    const [data,setdata] = useState([]);

    const getdata = async()=>{
        const fdata = await fetch(url);
        const data = await fdata.json();
        setdata(data);
    }

    useEffect(()=>{
        getdata();
    },[])

  return (
    <View style={styled.maincontainer}>
        <View style={styled.cards}>
            <FlatList 
            data = {data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=>item.id}
            renderItem={Card}
            />
    </View>
    </View>
  )
}


const Card = (items)=>{
    const {userId,name,website,email,mobile,image,description} = items.item;
 return <View style={[styled.card,styled.shadows]}>
     <Image source={{uri:image}} style={styled.imgstyle}/>
    <View style={styled.Biodata}>
    <Text style={{fontSize:25,fontWeight:"800",letterSpacing:1,}}>{name}</Text>
<View style={{display:"flex",marginVertical:10,justifyContent:"space-between",flexDirection:"row-reverse"}}>
<Text style={{fontSize:15,fontWeight:"300",color:"black",letterSpacing:1,}}>{email}</Text>
<Text style={{fontSize:15,fontWeight:"300",letterSpacing:1,}}>{mobile}</Text>
</View>
     <Text style={{fontSize:15,textAlign:"left",marginBottom:10,color:"black",fontWeight:"100",fontFamily:""}}>{description}</Text>
     <Button title="Visit website" onPress={()=>{
         Linking.openURL(website);
     }}/>
    </View>
 </View>
}

const styled = StyleSheet.create({
    maincontainer:{
        backgroundColor:"white",
        width:"100%",
        height:"100%",
    },
    cards:{
        width:"100%",
        display:"flex",
        alignItems:"center",
    },
    card:{
        backgroundColor:"white",
        marginHorizontal:18,
        width:450,
        marginVertical:10,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:10,
        display:"flex",
        justifyContent:"space-between",
        flexDirection:"column"
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
    imgstyle:{
        height:undefined,
        aspectRatio:1,
    },
    Biodata:{
        marginHorizontal:10,
        marginVertical:10,
    }
})

export default Services