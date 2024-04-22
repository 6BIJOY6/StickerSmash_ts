import { Pressable, StyleSheet, Text } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
type IconName = 'refresh' | 'save-alt'; // You can't pass string as MaterialIcon props.

interface props {
  icon: IconName;
  label: string;
  onPress: () => void;
}

export default function IconButton({ icon, label, onPress }: props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
