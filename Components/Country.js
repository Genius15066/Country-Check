import React from 'react';
import { StyleSheet, Text, View,Image,TouchableHighlight } from 'react-native';
import { useHistory } from "react-router-dom";

const Country = (props) => {
    const { name, capital, flag } = props.country;
    const history=useHistory()

   const handlePress=(name) =>{
        let url=`/details/${name}`
        history.push(url);
      }
    return (
        <TouchableHighlight onPress={()=>handlePress(name)}>
            
            <View style={styles.country_info} >
                <Text style={styles.name_style}>{name}</Text>
                <Text style={styles.capital_style}>{capital}</Text>
            </View>
        </TouchableHighlight>
    );
};

export default Country;

const styles = StyleSheet.create({
   country_info: {
       backgroundColor:'#222233',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin:'.2%',
      padding:'5%',
    },
    name_style:{
        fontSize:28,
        color:'#AACCFF',
        textAlign: 'center',
        marginBottom:15,
        
    },
    capital_style:{
        fontSize:19,
        color:'#0ded56',
        
    }
  
  });