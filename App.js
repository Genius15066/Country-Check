import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Countries from './Components/Countries';
import { NativeRouter, Route, Switch } from "react-router-native";
import CountryDetails from './Components/CountryDetails';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.header_font}>Country</Text>
        </View>

        <ScrollView>
          <Switch>
            <Route exact path="/">
              <Countries />
            </Route>
            <Route exact path="/home">
              <Countries />
            </Route>
            <Route path="/details/:name">
              <CountryDetails />
            </Route >
          </Switch>


        </ScrollView>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '12%'
  },
  header: {
    backgroundColor: '#379683',
    padding: 15,
    fontSize: 28,
    width: '100%',
  },
  header_font: {
    fontSize: 32,
    textAlign: 'center',
    color: '#350b40',
    fontWeight: 'bold',
  }


});


