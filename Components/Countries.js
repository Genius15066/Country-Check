import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Country from './Country';

const Countries = () => {
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
    const url='https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
    return (
        <View>
          {
            countries.map(country=><Country key={country.alpha3Code} country={country}/>)
          }
        </View>
    );
};

export default Countries;