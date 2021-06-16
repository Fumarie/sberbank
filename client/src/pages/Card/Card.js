import React, { useEffect, useState } from 'react';
import Header from "../../components/Main/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "../../redux/actions/products";
import classes from "./Card.module.css"
import CardInfo from "../../components/Main/CardInfo/CardInfo";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Form from "react-bootstrap/Form";

const Card = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCard(props.match.params.id))
    }, [props.match.params.id]);

    const [openMenu, setOpenMenu] = useState(false)
    const [cardData, setCardData] = useState({
        name: '', cvv: ''
    })

    const changeHandler = event => {
        setCardData({...cardData, [event.target.name]: event.target.value})
    }

    const validate = () => {
        return cardData.name.length > 2 && cardData.cvv.length === 3
    }

    const {card} = useSelector(state => state.products)

    const deleteCard = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/card/${props.match.params.id}`).then(response => response.data)
            window.location.href = `/`
        } catch (e) {
            console.log(e)
        }
    }

    const updateCard = async event => {
        event.preventDefault()
        try {
            await axios.put(`http://localhost:8080/api/card/`, {
                ...cardData, id: props.match.params.id
            }).then(response => response.data)
            window.location.href = `/`
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div>
                <Header/>
                <div>
                    <div className={classes.wrap}>
                        <div className={classes.container}>
                            {
                                !openMenu ?
                                <CardInfo card={card}/>
                                : <Form onSubmit={updateCard} style={{
                                        maxWidth: '400px', marginTop: '70px'}}>
                                        <Form.Group size="lg" controlId="name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                autoFocus
                                                name="name"
                                                type="text"
                                                value={cardData.name}
                                                onChange={changeHandler}
                                            />
                                        </Form.Group>
                                        <Form.Group size="lg" controlId="password">
                                            <Form.Label>CVV</Form.Label>
                                            <Form.Control
                                                name="cvv"
                                                type="text"
                                                value={cardData.cvv}
                                                onChange={changeHandler}
                                            />
                                        </Form.Group>
                                        <Button style={{marginBottom: 25}} variant="primary" block size="lg" type="submit" disabled={!validate()}>
                                            UPDATE
                                        </Button>
                                    </Form>
                            }
                            <Button variant="danger" onClick={deleteCard}>Удалить карту</Button>
                            <Button style={{marginLeft: 12}} variant={!openMenu ? 'success' : 'primary'} onClick={() => setOpenMenu(!openMenu)}>{!openMenu ? 'Изменить' : 'Отмена'}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
