import React from 'react';
import Header from "../../components/Main/Header/Header";
import classes from "./NewCard.module.css";

import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import card4 from '../../images/card4.png'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const cards = [{name: 'Visa Classic', src: card2}, {name: 'Lion Sberbank', src: card3}, {
    name: 'All lifes matter',
    src: card4
},]

const NewCard = (props) => {
    return (
        <div>
            <Header path={props.match.path}/>
            <div className={classes.wrap}>
                <div className={classes.container}>
                    <CardDeck>
                        {cards.map((card, index) =>
                            <Card key={index}>
                                <Card.Img variant="top" src={card.src}/>
                                <Card.Body>
                                    <Card.Title>{card.name}</Card.Title>
                                    <Card.Text>
                                        Оформляя эту карту сейчас Вы помогаете миру стать лучше
                                    </Card.Text>
                                </Card.Body>
                                <Link to={'/new/card/selected'}><Button variant="success" style={{width: '100%'}}>Оформить</Button></Link>
                            </Card>
                        )
                        }
                    </CardDeck>
                </div>
            </div>

        </div>
    );
};

export default NewCard;
