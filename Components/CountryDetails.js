import React, { useState, useEffect } from 'react';
import { ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import { useHistory, useParams } from "react-router-dom";

const CountryDetails = () => {
    const [singleCountry, setSingleCountry] = useState({});

    const { name } = useParams()

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            .then(res => res.json())
            .then(data => setSingleCountry(data.[0]))
    }, [])

    const { region, capital, currencies, languages, population, area, demonym } = singleCountry;


    const history = useHistory();

    const handleToHome = (name) => {
        let url = `/home`
        history.push(url);
    }
    return (
        <View style={styles.detail_container}>
            <Text style={styles.textmain}>
                {name}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.text_head}>Capital</Text> : {capital}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.text_head}>Region</Text> : {region}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.text_head}> Nationality</Text> : {demonym}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.text_head}> Area</Text> : {area}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.text_head}>Population</Text> : {population}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.text_head}>Currency</Text> : {currencies?.[0].name}
            </Text>
            <Text style={styles.text}>
                <Text style={styles.text_head}>Language</Text> : {languages?.[0].name}
            </Text>


            <Button
                title="Back to Home"
                color="#1c3334"
                onPress={() => handleToHome()}
            />

        </View>
    );
};

export default CountryDetails;

const styles = StyleSheet.create({
    detail_container: {
        backgroundColor: '#0b0c10',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        padding: 28
    },
    text: {
        padding: 17,
        fontSize: 22,
        textAlign: 'center',
        color: 'white'
    },
    textmain: {
        padding: 18,
        fontSize: 32,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#ffe400'
    },
    text_head: {
        color: '#f13c20',
    }


});
