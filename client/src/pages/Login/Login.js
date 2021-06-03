import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';
import { ReactSVG } from 'react-svg'
import "./Login.css";
import sberbankSVG from '../../images/logo.svg'
import axios from "axios";
import { useAuth } from "../../hooks/auth.hook";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth()

    function validateForm() {
        return email.length > 0 && password.length > 4;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const data = await axios.post('http://localhost:8080/api/auth/login', {
                email,
                password
            }).then(response => response.data)

            console.log('Response login', data)

            if(data && data.token) {
                console.log(data.id)
                console.log(data.token)
                auth.login(data.token, data.id)
                window.location.href = "/"
            }
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="LoginWrap">
            <div className="Login">
                <ReactSVG style={{textAlign: "center"}} src={sberbankSVG} />
                <Form onSubmit={handleSubmit}>
                    <Form.Group size="lg" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="success" block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
}