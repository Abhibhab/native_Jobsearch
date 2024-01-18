import React from "react";
import {
  Text,
  View,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  SafeAreaView,
} from "react-native-web";
import { Stack, useRouter, useGlobalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  ScreenHeaderBtn,
  Welcome,
  Nearbyjobs,
  Popularjobs,
  Company,
  JobTabs,
  JobAbout,
  JobFooter,
  Specifics,
  NearbyJobCard,
} from "../../components";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES } from "../../constants";
const JobDetails = () => {
  return <Text>JobDetails</Text>;
};

export default JobDetails;
