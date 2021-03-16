import * as React from 'react';
import { Card, Paragraph } from 'react-native-paper';


export const StarshipCard = (
    {
        name, model, crew
    }: {
        name: string,
        model: string,
        crew: string
    }) => (
    <Card>
        <Card.Title title={name} />
        <Card.Content>
            <Paragraph>{model}</Paragraph>
            <Paragraph>{crew}</Paragraph>
        </Card.Content>
    </Card>
)
