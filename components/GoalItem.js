import { StyleSheet } from "react-native";

function GoalItem() {
  return (
    <View style={styles.goalsItem}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
}

export default GoalItem;
