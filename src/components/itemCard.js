import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

const ItemCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image
          style={styles.logo}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/1012px-Burger_King_logo.svg.png",
          }}
        />
        <View>
          <Text style={styles.resName}>Burger King</Text>
          <Text>Food</Text>
        </View>
      </View>
      <Image
        style={styles.img}
        source={{
          uri: "https://egypt.burgerking.me/Assets/path/img/burger.png",
        }}
      />
      <View style={styles.cardActions}>
        <Button
          title="Discount"
          color="black"
          onPress={() => alert("Your coupon is 1234")}
        />
        <View>
          <Text>1585 Favourites</Text>
        </View>
      </View>
      <Text style={styles.name}>
        2 Bing King Tower sandwices for 45 EGP instead of 87 EGP
      </Text>
      <Text style={styles.reviews}>5 Stars, 2100 Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    marginBottom: 15,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 12,
  },
  resName: {
    fontWeight: "bold",
  },
  img: {
    width: 250,
    height: 120,
  },
  card: {
    marginRight: 10,
    maxWidth: 220,
  },
  cardActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },

  name: { fontWeight: "700", marginTop: 5 },
  reviews: { color: "lightgray" },
});

export default ItemCard;
