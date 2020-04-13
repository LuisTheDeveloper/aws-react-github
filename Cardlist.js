import React from 'react';
import Card from './Card';
import { render } from 'react-dom';

const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
);


export default CardList;