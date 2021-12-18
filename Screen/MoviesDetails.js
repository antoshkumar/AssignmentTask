import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
const MoviesDetails=({ navigation,route: { params } })=> {
    const { release_date } = params;
    const {poster_path}=params;
    const { overview } = params;
    const { original_title } = params;
    const {popularity}=params;
    const {vote_count}=params;
    const {vote_average}=params;
    const {original_language}=params;
    return (
      <View style={{flex:1}}>
            <View style={styles._ImageRow}>
                <Image style={styles.imageView}
                    source={poster_path}
                />
                <TouchableOpacity onPress={()=>{}}><Text style={styles.watchNowText}>Watch now</Text></TouchableOpacity>
            </View>
            <View style={styles._DescriptinView}>
                <Text style={styles.titleText}>{original_title}</Text>
                <Text>{release_date}</Text>
                <Text style={{fontSize:15}}>language: {original_language}</Text>
                <Text style={{fontSize:15}}>popularity: {popularity}</Text>
                <Text style={{fontSize:15}}>vote_count: {vote_count}</Text>
                <Text style={{fontSize:15}}>vote_average: {vote_average}</Text>
                <View style={styles.favoriteView}>
                  <TouchableOpacity onPress={()=>{}}><Image style={styles.heartIcon}
                  source={require('../assets/heart.png')} /></TouchableOpacity>
                </View>
                <Text style={{fontSize:18,color:'black',fontWeight:'bold'}}>overview :</Text>
                <Text style={{fontSize:15}}>{overview}</Text>
            </View>
      </View>
    );
  }

  export default MoviesDetails;

  const styles=StyleSheet.create({
    _ImageRow:{
        height:'53%',
        width:'95%',
        alignSelf:'center'
    },
    imageView:{
        height:300,
        width:'100%',
      
       alignSelf:'center',
       resizeMode:'contain', 
    },
    watchNowText:{
        height:50,
        textAlignVertical:'center',
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold',
        color:'red'
    },
    _DescriptinView:{
       height:'47%',
        width:'95%',
        alignSelf:'center'
    },
    titleText:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    favoriteView:{
        height:40,
        width:40,
        // borderWidth:1,
        borderRadius:25,
        backgroundColor:'pink'
    },
    heartIcon:{
        height:25,
        width:25,
        marginTop:7,
        marginLeft:7,
        tintColor:'white'
    }
  })