import React, { useEffect } from 'react';
import Header from "../../components/Main/Header/Header";
import bg from '../../images/bg.jpg'
import { useDispatch, useSelector } from "react-redux";
import { getUsersSum, getUserSum } from "../../redux/actions/products";

const Home = (props) => {
    const dispatch = useDispatch()
    const data = JSON.parse(localStorage.getItem('sberbankUserToken'))

    console.log(data.userId)

    useEffect(() => {
        console.log(data.userId)
        dispatch(getUserSum(data.userId))
        dispatch(getUsersSum())
    }, []);

    const {userSum, usersSum} = useSelector(state => state.products)
    console.log(userSum)

    return (
        <>
            <div>
                <Header path={props.match.path}/>
                <img src={bg} alt="" style={{position: 'absolute', height: 'calc(100vh - 203px)', marginTop: '-65px'}} />
                <div style={{display: 'flex', maxWidth: 1130, marginLeft: 100}}>
                    <div className="card" style={{width: 300, marginRight: 70, borderRadius: 8}}>
                        <div className="card-header">
                            Общий баланс по аккаунту
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>{userSum ? userSum.toFixed(2) : 0} ₽</p>
                            </blockquote>
                        </div>
                    </div>
                    <div className="card" style={{width: 300, borderRadius: 8}}>
                        <div className="card-header">
                            Средний баланс наших пользователей
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>{usersSum ? usersSum.toFixed(2) : 0} ₽</p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;