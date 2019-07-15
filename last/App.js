

import React, {Component} from 'react';
import {FlatList, Image,Alert,Text, View,TouchableOpacity,StyleSheet} from 'react-native';




export default class App extends Component
{
  constructor(props){
    super(props)
    this.state={
      data:[
        {
         name: 'NASSCOM GCC Conclave 2019',
         DATE: 'DATE-25 Apr 2019-26 Apr 2019',
        VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
         id:0,
         pic:require('./1.png')
        },{
          name: 'NASSCOM GCC Conclave 2019',
          DATE: 'DATE-25 Apr 2019-26 Apr 2019',
         VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
         id:1,
         pic:require('./1.png')
        },
        {
          name: 'NASSCOM GCC Conclave 2019',
          DATE: 'DATE-25 Apr 2019-26 Apr 2019',
         VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
         id:2,
        
         pic:require('./1.png')
        },
        {
          name: 'NASSCOM GCC Conclave 2019',
          DATE: 'DATE-25 Apr 2019-26 Apr 2019',
         VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
         id:3,
         pic:require('./1.png')
        },
        {
          name: 'NASSCOM GCC Conclave 2019',
          DATE: 'DATE-25 Apr 2019-26 Apr 2019',
         VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
          id:4,
          pic:require('./1.png')
         },        {
          name: 'NASSCOM GCC Conclave 2019',
          DATE: 'DATE-25 Apr 2019-26 Apr 2019',
         VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
          id:4,
          pic:require('./1.png')
         },{
          name: 'NASSCOM GCC Conclave 2019',
          DATE: 'DATE-25 Apr 2019-26 Apr 2019',
         VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
          id:5,
          pic:require('./1.png')
         },{
          name: 'NASSCOM GCC Conclave 2019',
          DATE: 'DATE-25 Apr 2019-26 Apr 2019',
         VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
          id:6,
          pic:require('./1.png')
         },
         {
          name: 'NASSCOM GCC Conclave 2019',
          DATE: 'DATE-25 Apr 2019-26 Apr 2019',
         VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
          id:7,
          pic:require('./1.png')
         },{
          name: 'NASSCOM GCC Conclave 2019',
          DATE: 'DATE-25 Apr 2019-26 Apr 2019',
         VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
          id:8,
          pic:require('./1.png')
         },
         {
          name: 'NASSCOM GCC Conclave 2019',
          DATE: 'DATE-25 Apr 2019-26 Apr 2019',
         VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
          id:8,
          pic:require('./1.png')
         },
         {
          name: 'NASSCOM GCC Conclave 2019',
          DATE: 'DATE-25 Apr 2019-26 Apr 2019',
         VENUE: 'VENUE-Conrad,Bengaluru,Karnataka',
          id:9,
          pic:require('./1.png')
         },
      ]
    }
  }
 
 Show = (item) =>{
   Alert.alert(
  'Profile',
  item.name+ " " + item.age + " " + item.company,
  [
    {text:'Delete', onPress: () => this.Delete(item.id)},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  {cancelable: false},
);
  }



  render() 
  {
    return (
      <View style={{backgroundColor:'grey'}}>
        <View style={styles.header}>
          <View style={{flex:2,justifyContent:'center',alignItems:'center',}}>
             <Text style={{ fontSize: 20,fontStyle:'arial',fontWeight: 'bold',}}>Conference List</Text>
          </View>
          
        </View>
          <FlatList
          extraData={this.state}
           data={this.state.data}
           renderItem={({item}) =>
           ( 
             <TouchableOpacity onPress={() =>this.Show(item)} style={{padding:10,  paddingBottom:10}}>
               <View style={styles.inner_box}>
                 <View style={{flex:0.5}}>
                   <Image style={styles.image} source={item.pic}/>
                 </View>
                   <View style={{flex:2}}>
                    <Text style={{fontWeight: 'bold',fontSize: 15,fontStyle:'Arial'}}>{item.name}</Text>
                    <Text style={{marginTop:10,fontStyle:'Arial'}}>{item.DATE}</Text>
                    <Text style={{marginTop:5,fontStyle:'Arial'}}>{item.VENUE}</Text>
                  </View>
               </View>
              </TouchableOpacity>
            )}
          />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  header:{
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems:'center',
    height: 40,
    flexDirection:'row'
  },
  inner_box:{
    flexDirection:'row',
    backgroundColor:'#E7E9EE',
    borderWidth: 0.5,
    padding:25,
borderRadius:18
  },
  image:{
  width:70,
  height:70,

  }
});
