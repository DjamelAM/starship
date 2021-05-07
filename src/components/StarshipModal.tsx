import React from "react";
import { Modal, Portal, Provider, Text } from "react-native-paper";
import { StarshipCard } from "./StarshipCard";
import { StyleSheet } from "react-native";

export const StarshipModal = ({
  state,
  starship,
}: {
  state: boolean;
  starship: any;
}) => {
  const [visible, setVisible] = React.useState(false);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 20,
  };

  return (
    <>
      {
        <Modal visible={state} onDismiss={hideModal} style={styles.modal}>
          <Text>Name :{starship.name}</Text>
          <Text>Manufacturer :{starship.manufacturer}</Text>
          <Text>Cost :{starship.cost_in_credits}</Text>
        </Modal>
      }
    </>
  );
};
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",

    backgroundColor: "grey",
  },
});
