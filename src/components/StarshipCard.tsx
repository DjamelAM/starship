import * as React from "react";
import { Button, Card, Paragraph } from "react-native-paper";
import { StarshipModal } from "./StarshipModal";
import { StyleSheet } from "react-native";
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

  return (
    <Card
      key={id}
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
          Button
        </Button>
      </Card.Content>
    </Card>
  );
};
