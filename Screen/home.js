import React from 'react';
import { StyleSheet,View,Text,FlatList,Image, TouchableOpacity
} from 'react-native';

import movies from '../apiData/movies'
   const HomeScreen=({navigation})=>{
     return (
       <View style={styles.container}>
         <Text style={{height:40,width:'100%',fontSize:20,fontWeight:'bold'}}>Watch Movies.</Text>
         <FlatList
             data={movies.results}
             renderItem={({ item }) =>
             <View style={styles._listData}>
                <Image style={styles._imageView}
                  source={item.poster_path}
                />
                <TouchableOpacity onPress={() => { navigation.navigate("MoviesDetails", item) }}><Text style={styles._titleText}>{item.title}</Text></TouchableOpacity>
                <Text style={styles._releaseDateText}>{item.release_date}</Text> 
             </View>
          }
          keyExtractor={item => item.id}
         />
                   
       </View>
     )
   }

export default HomeScreen;

const styles=StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center'
},
_listData:{
  height:380,
  width:'100%',
  marginTop:10,
  backgroundColor:'lightgray'
},
_imageView:{
    height:300,
     width:'95%',
    borderWidth:1,
    alignSelf:'center',
    resizeMode:'contain',
},
_titleText:{
  height:40,
  width:'100%',
  textAlignVertical:'center',
  textAlign:'center',
  // borderWidth:1,
  fontSize:18,
  fontWeight:'bold',
  color:'black'
},
_releaseDateText:{
  height:30,
  width:'100%',
  textAlignVertical:'center',
  textAlign:'center',
  // borderWidth:1
},

})
