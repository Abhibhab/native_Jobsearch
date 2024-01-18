import React, { useState } from "react";
import useFetch from "../../../hook/useFetch";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native-web";
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch("search", {
    query: "React developer",
    num_pages: "1",
  });
  console.log(data);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>Popular Jobs</View>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something Went WRong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
