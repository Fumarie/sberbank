import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Header from "../../components/Main/Header/Header";
import axios from "axios";

const NewCardSelect = (props) => {
    const [cardData, setCardData] = useState({
        name: '', type: 0, cvv: '', user_id: 0, balance: 0, validthru: '2025-06-01'
    })

    const validate = () => {
        return cardData.name.length > 0 && cardData.cvv.length === 3
    }

    const changeHandler = event => {
        const data = JSON.parse(localStorage.getItem('sberbankUserToken'))
        console.log(data.userId)
        console.log(cardData)
        setCardData({ ...cardData, [event.target.name]: event.target.value, user_id: data.userId})
    }

    const submitHandler = async event => {
        event.preventDefault()
        console.log(cardData)
        try {
            const data = await axios.post('http://localhost:8080/api/card/', {
                ...cardData
            }).then(response => response.data)

            console.log('Response login', data)

            if (data) {
                window.location.href = `/${data}`
            }

            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Header path={props.match.path}/>
            <Form onSubmit={submitHandler} style={{
                margin: '0 auto',
                maxWidth: '400px'}}>
                <Form.Group size="lg" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        as="select"
                        name="name"
                        autoFocus
                        type="text"
                        value={cardData.name}
                        onChange={changeHandler}
                    >
                        <option>Visa Classic</option>
                        <option>Visa Gold</option>
                        <option>Mastercard</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group size="lg" controlId="type">
                    <Form.Label>type</Form.Label>
                    <Form.Control
                        as="select"
                        name="type"
                        value={cardData.type}
                        onChange={changeHandler}
                        disabled
                    >
                        <option>0</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group size="lg" controlId="cvv">
                    <Form.Label>cvv</Form.Label>
                    <Form.Control
                        type="text"
                        name="cvv"
                        value={cardData.cvv}
                        onChange={changeHandler}
                    />
                </Form.Group>
                <Button variant="success" block size="lg" type="submit" disabled={!validate()}>
                    Create
                </Button>
            </Form>
        </div>
    );
};

export default NewCardSelect;
