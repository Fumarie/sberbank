import React, { useContext, useState } from 'react';
import Header from "../../components/Main/Header/Header";
import classes from "./Profile.module.css";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const inputStyle = {
    border: '1px solid black',
    marginBottom: 6
}

const Profile = (props) => {
    const {profile} = useSelector(state => state.profile)
    const auth = useContext(AuthContext)
    const [openChange, setOpenChange] = useState(false)
    const [profileData, setProfileData] = useState({
        fio: '', phonenumber: '', email: '',
        birthdate: '', city: '', inn: ''
    })

    const changeHandler = event => {
        event.preventDefault()
        console.log(profileData)
        setProfileData({...profileData, [event.target.name]: event.target.value})
    }

    const cancelHandler = () => {
        setProfileData({
            fio: '', phonenumber: '', email: '',
            birthdate: '', city: '', inn: ''
        })
        setOpenChange(false)
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(profileData)
        const id = props.match.params.id
        try {
            const data = await axios.put(`http://localhost:8080/api/user/`, {
                ...profileData, id
            }).then(response => response.data)
            console.log(data)
            setOpenChange(false)
        } catch (e) {
            console.log(e)
        }
    }

    const deleteUser = async () => {
        const object = JSON.parse(localStorage.getItem('sberbankUserToken'))
        console.log(object.userId)
        try {
            const data = await axios.delete(`http://localhost:8080/api/user/${object.userId}`).then(response => response.data)
            auth.logout()
            window.location.href = `/login`
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <Header path={props.match.path}/>
            <div className={classes.wrap}>
                <div className={classes.container}>
                    <div>
                        {!openChange ? <>
                                <div>Имя: {profile.fio}</div>
                                <div>Номер телефона: {profile.phonenumber}</div>
                                <div>email: {profile.email}</div>
                                <div> Дата рождения: {new Date(profile.birthdate).toDateString()}</div>
                                <div> Город: {profile.city}</div>
                                <div> ИНН: {profile.inn}</div>
                            </>
                            :
                            <form style={{display: 'flex', flexDirection: 'column', maxWidth: 250}} onSubmit={submitHandler}>
                                Имя: <input name="fio" style={inputStyle} value={profileData.fio} onChange={changeHandler}/>
                                Номер телефона: <input name="phonenumber" style={inputStyle} value={profileData.phonenumber} onChange={changeHandler}/>
                                email: <input name="email" type="email" style={inputStyle} value={profileData.email} onChange={changeHandler}/>
                                Дата рождения: <input name="birthdate" type="date" style={inputStyle} value={profileData.birthdate} onChange={changeHandler}/>
                                Город: <input name="city" style={inputStyle} value={profileData.city} onChange={changeHandler}/>
                                ИНН: <input name="inn" style={inputStyle} value={profileData.inn} onChange={changeHandler}/>
                                {openChange &&
                                <>
                                    <Button variant="danger" type="submit">Сохранить</Button>
                                    <Button style={{marginTop: 6}} variant={!openChange ? 'success' : 'primary'}
                                            onClick={!openChange ? () => setOpenChange(!openChange) : cancelHandler}>{!openChange ? 'Изменить' : 'Отмена'}</Button>
                                </>
                                }
                            </form>
                        }
                    </div>
                    {!openChange &&
                    <><Button variant={!openChange ? 'success' : 'primary'}
                                            onClick={() => setOpenChange(!openChange)}>{!openChange ? 'Изменить' : 'Отмена'}</Button>
                        <Button style={{marginLeft: 4}} variant={'danger'} onClick={deleteUser}>Удалить пользователя</Button>
                    </>}
                </div>
            </div>
        </>
    );
};

export default Profile;