import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Card = ({product}: any) => {
    return (
        <View style={styles.card}>
                    <>
                    <View style={styles.image_BOX}>

                        <Image
                            source={{ uri: product.image }}
                            style={styles.imager}
                            />
                            </View>

                        <Text style={styles.title}>{product.title}</Text>

                        <Text style={styles.rating}>⭐{product.rating.rate}</Text>

                        <Text style={styles.price}>${product.price}</Text>

                        <Text style={styles.description}>
                            {product.description.slice(0,100)}...
                        </Text>
            <Button title="Add to Cart" onPress={() => console.log('Added to Cart')} />
                    </>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 310,
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 20,
    },
    image_BOX:{
        width: 300,
        height:450,
        alignItems:'center',
        justifyContent:'center'

    },
    imager: {
        width: 150,
        marginHorizontal:'auto',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    rating: {
        fontSize: 16,
        color: '#f1c40f',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#27ae60',
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: '#7f8c8d',
        marginBottom: 15,
    },
});

export default Card;

