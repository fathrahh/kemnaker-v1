// Node_modules
import { useEffect, useState } from "react";
import { View, StyleSheet, Pressable, Alert, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// Components
import Typography from "../../components/Typography";
import SafeAreaStatusBar from "../../components/SafeAreaStatusBar";
import COLORS from "../../constants/colors";
import SearchBar from "../../components/SearchBar";
// Assets
import Icon from "../../assets/icons";
import JobsSection from "../../section/HomeScreen/JobsSection";
import PopularCourses from "../../section/HomeScreen/PopularCourses";
import PopularJobOffers from "../../section/HomeScreen/PopularJobOffers";

export default function HomeScreen() {
  const [userName, setUserName] = useState("");
  const [search, setSearch] = useState("");
  const getUserName = async () => {
    const user = await AsyncStorage.getItem("username");
    setUserName(user);
  };

  const onChangeSearch = (text: string) => setSearch(text);

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <SafeAreaStatusBar>
      <ScrollView>
        <View style={[styles.container, styles.header]}>
          <View>
            <Typography
              style={styles.greeting}
              variant="RalewayBold"
              color="neutral"
            >
              Halo,
            </Typography>
            <Typography
              style={[styles.greeting, styles.username]}
              variant="RalewayBold"
            >
              {userName}
            </Typography>
          </View>
          <Pressable
            style={{
              width: 35,
              height: 35,
              borderRadius: 35 / 2,
              borderColor: COLORS.primary.main,
              borderStyle: "solid",
              borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {}}
          >
            <Icon name="notification" />
          </Pressable>
        </View>
        <View style={[styles.container, styles.main]}>
          <View style={[styles.filterSection]}>
            <SearchBar
              value={search}
              onChangeText={onChangeSearch}
              styleContainer={{
                marginRight: 16,
              }}
              onPressSearch={() => Alert.alert(search)}
            />
            <Pressable style={styles.filter}>
              <Icon name="filter" color={"#FFFFFF"} />
            </Pressable>
          </View>
          <JobsSection />
          <PopularCourses />
          <PopularJobOffers />
        </View>
      </ScrollView>
    </SafeAreaStatusBar>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#FFFFFF",
    shadowOffset: {
      height: 0.75,
      width: 0,
    },
    shadowRadius: 12,
    elevation: 30,
    shadowColor: "rgba(21, 64, 106, 0.8)",
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  filterSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  filter: {
    width: 40,
    height: 34,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: COLORS.primary.main,
  },
  greeting: {
    fontSize: 18,
    textTransform: "capitalize",
  },
  username: {
    fontSize: 20,
  },
  main: {
    flex: 1,
  },
});
