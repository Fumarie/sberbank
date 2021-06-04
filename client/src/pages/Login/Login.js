import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from 'react-bootstrap';
import { ReactSVG } from 'react-svg'
import "./Login.css";
import sberbankSVG from '../../images/logo.svg'
import axios from "axios";
import { useAuth } from "../../hooks/auth.hook";
import { Link } from "react-router-dom";

export default function Login(props) {
    console.log(props.match.params)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [registrationData, setRegistrationData] = useState({
        email: "", password: "", fio: "", phonenumber: "", city: "", birthdate: "", inn: ""
    })

    const auth = useAuth()

    function validateLogin() {
        return email.length > 0 && password.length > 4;
    }

    function validateRegister() {
        return registrationData.email.length > 0 && registrationData.password.length > 4 && registrationData.fio.length > 3 && registrationData.phonenumber.length === 11 && registrationData.city.length > 0 && registrationData.inn.length > 0 && registrationData.fio.split(' ').length === 3
    }

    async function handleLogin(event) {
        event.preventDefault();
        try {
            const data = await axios.post('http://localhost:8080/api/auth/login', {
                email,
                password
            }).then(response => response.data)

            console.log('Response login', data)

            if (data && data.token) {
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

    async function handleRegister(event) {
        event.preventDefault()
        try {
            console.log(registrationData)
            const data = await axios.post('http://localhost:8080/api/auth/registration', {
                ...registrationData
            }).then(response => response.data)

            console.log('Response register', data)

            if (data && data.token) {
                console.log(data.id)
                console.log(data.token)
                auth.login(data.token, data.id)
                window.location.href = "/"
            }
        } catch(e) {
            console.log(e)
        }
    }

    const changeHandler = event => {
        console.log(registrationData)
        setRegistrationData({ ...registrationData, [event.target.name]: event.target.value })
    }

    return (
        <div className="LoginWrap">
            <div className="Login">
                <ReactSVG style={{textAlign: "center"}} src={sberbankSVG}/>
                {
                    props.match.path === '/login' ?
                        <Form onSubmit={handleLogin}>
                            <Form.Group size="lg" controlId="email" name="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    autoFocus
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password" name="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="success" block size="lg" type="submit" disabled={!validateLogin()}>
                                Login
                            </Button>
                            <Link to={'/register'}>Нет аккаунта? Зарегистрируйтесь</Link>
                        </Form>
                    : //REGISTRATION FORM
                        <Form onSubmit={handleRegister}>
                            <Form.Group size="lg" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email"
                                    autoFocus
                                    type="email"
                                    value={registrationData.email}
                                    onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    value={registrationData.password}
                                    onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="fio">
                                <Form.Label>FIO</Form.Label>
                                <Form.Control
                                    name="fio"
                                    type="text"
                                    value={registrationData.fio}
                                    onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="phone">
                                <Form.Label>PhoneNumber</Form.Label>
                                <Form.Control
                                    name="phonenumber"
                                    type="text"
                                    value={registrationData.phonenumber}
                                    onChange={changeHandler}
                                />
                            </Form.Group>
                            <Form.Group size="lg" controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    name="city"
                                    type="text"
                                    value={registrationData.city}
                                    onChange={changeHandler}
                                />
                                <Form.Group size="lg" controlId="date" >
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        name="birthdate"
                                        type="date"
                                        value={registrationData.birthdate}
                                        onChange={changeHandler}
                                    />
                                </Form.Group>
                                <Form.Group size="lg" controlId="inn">
                                    <Form.Label>INN</Form.Label>
                                    <Form.Control
                                        name="inn"
                                        type="text"
                                        value={registrationData.inn}
                                        onChange={changeHandler}
                                    />
                                </Form.Group>
                            </Form.Group>
                            <Button variant="success" block size="lg" type="submit" disabled={!validateRegister()}>
                                Register
                            </Button>
                            <Link to={'/login'}>Уже есть аккаунт? Войти</Link>
                        </Form>
                }
            </div>
        </div>
    );
}