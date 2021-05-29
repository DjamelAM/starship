import * as React from "react";
import { Button, Card, Paragraph } from "react-native-paper";
import { StarshipModal } from "./StarshipModal";
import { StyleSheet } from "react-native";
import { AppRoute } from "../navigation/AppRoute";
import { useNavigation } from "@react-navigation/native";
export const StarshipCard = ({
  name,
  model,
  crew,
  starship,
  id,
}: {
  name: string;
  model: string;
  crew: string;
  starship: any;
  id: number;
}) => {
  const [visible, setVisible] = React.useState(false);

  const hideModal = () => setVisible(false);
  const navigation = useNavigation();
  return (
    <Card
      key={name}
      onPress={() => {
        setVisible(false);
      }}
    >
      <Card.Title title={name} />
      <Card.Content>
        <Paragraph>{model}</Paragraph>
        <Paragraph>{crew}</Paragraph>
        {/* <CardItem button onPress={() => () => {
            return (<StarshipModal />); */}
        {visible ? (
          <StarshipModal state={true} starship={starship} />
        ) : (
          <StarshipModal state={false} starship={starship} />
        )}
        {/* <StarshipModal state={false} ></StarshipModal> */}
        <Button
          onPress={() => {
            setVisible(true);
          }}
        >
          Modal
        </Button>
        <Button
          onPress={() =>
            navigation.navigate(AppRoute.STARSHIP_DETAILS, {
              starship: starship,
            })
          }
        >
          Go to details
        </Button>
      </Card.Content>
    </Card>
  );
};
