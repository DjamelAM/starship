import * as React from 'react';
import { Button, Card, Paragraph } from 'react-native-paper';
import { StarshipModal } from './StarshipModal';




export const StarshipCard = (
    {
        name, model, crew
    }: {
        name: string,
        model: string,
        crew: string
    }) => {
    const [visible, setVisible] = React.useState(false);
    const hideModal = () => setVisible(false);
    let state: boolean;
    return (
    
        <Card>
            <Card.Title title={name} />
            <Card.Content>
                <Paragraph>{model}</Paragraph>
                <Paragraph>{crew}</Paragraph>
                {/* <CardItem button onPress={() => () => {
            return (<StarshipModal />); */}
               {/*  {visible ? (<StarshipModal state={false} />) : (<StarshipModal state={false}/>)} */}
            
                <Button onPress={() => { setVisible(true) }}>Button</Button>

        
            </Card.Content>
        </Card>
    )
}
