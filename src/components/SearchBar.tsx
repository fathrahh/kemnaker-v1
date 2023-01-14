import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Icon from "../assets/icons";
import COLORS from "../constants/colors";
import fonts from "../constants/font";

interface Props {
  styleContainer?: StyleProp<ViewStyle>;
  styleTextField?: StyleProp<TextStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPressSearch?: () => void;
}

export default function SearchBar({
  styleContainer,
  styleTextField,
  onPressSearch,
  ...other
}: Props) {
  return (
    <View style={[styles.container, styleContainer]}>
      <TextInput
        style={[styles.textField, styleTextField]}
        placeholderTextColor={"#8A8A8A"}
        {...other}
      />
      <Pressable style={styles.icon} onPress={onPressSearch}>
        <Icon name="search" />
      </Pressable>
    </View>
  );
}

SearchBar.defaultProps = {
  placeholder: "Search Me!!",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderColor: COLORS.primary.main,
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    color: COLORS.primary.main,
  },
  textField: {
    fontFamily: fonts.Roboto.Regular,
    flex: 1,
  },
  icon: {
    marginLeft: 5,
    padding: 2.5,
  },
});
