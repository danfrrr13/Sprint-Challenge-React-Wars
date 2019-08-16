import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const CharacterCard = props => {
    return (
        <Card>
            <Card.Content>
            <Card.Header>{props.character.name}</Card.Header>
            <Card.Meta>
                <span className='date'>{props.character.birth_date}</span>
            </Card.Meta>
            <Card.Description>
                This character has been in {props.character.films.length} Star Wars films
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                Star Wars Character
            </Card.Content>
        </Card>
    )
}

export default CharacterCard;