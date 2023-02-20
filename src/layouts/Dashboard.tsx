import React, {useContext, useEffect} from 'react';
import {Navigate, redirect, useNavigate} from "react-router-dom";
import logo from '../assets/images/Moneey_App_Icon_1.png';
import '../App.css';
import {Link} from "react-router-dom";
import {AuthContext} from "../contexts/Auth";
import "../styles/dashboard.css";
import Happy from "../assets/images/happyicon.png";
import Star from "../assets/images/star.png";
import Star2 from "../assets/images/star2.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStopwatch} from "@fortawesome/free-solid-svg-icons";

interface props {
    children: React.ReactChildren | HTMLElement | string;
    onClick?: () => void;
}
const Dashboard: React.FC<props> = ({children}) => {

    const {user, setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setUser(null)
            navigate('/', {replace: true})
        }, 120000);
    }, [user]);

    const comingSoon = [
        {
            img: Happy,
        },
        {
            img: Star,
        },
        {
            img: Star2,
        },
    ]

    if (!user || !user.name) {
        return <Navigate replace to="/" />
    }

    return (
        <>
            <header className={'header'}>
                <div className="container-fluid mx-0" style={{
                    borderBottomStyle: 'solid',
                    borderBottomWidth: 'thin',
                    borderBottomColor: '#DCE2EA'
                }}>
                    <nav className={'navbar navbar-expand-lg bg-body-tertiary '}>
                        <Link to={'#'}>
                            <img src={logo} alt=""/>
                        </Link>
                    </nav>
                </div>
            </header>


            <div className="container-fluid mt-3">

                <div className="row">
                    <>
                        {children}
                    </>
                    <div className="d-none d-md-block col-md-4 border-0 rounded py-5 px-5" style={{backgroundColor: '#F7F7F7'}}>
                        <div className="pt-4 pb-2">

                            <div className="pt-1 pb-5">
                                <div className="d-flex justify-content-around border-0 p-3 w-50 rounded-5 bg-custom-gray text-success fw-semibold">
                                    <i className="fa-regular fa-stopwatch">
                                        <FontAwesomeIcon className="text-success fw-semibold" icon={faStopwatch}/>
                                    </i><span>Coming soon</span>
                                </div>
                            </div>


                            <div className="mb-3 p-3 rounded" style={{background: "#FFFFFF"}}>

                                {
                                    comingSoon.map((item, index)=>(
                                        <div key={index} className="d-flex justify-content-between align-items-center my-3">
                                            <div className="rounded-2 bg-light p-3">
                                                <img src={item.img} alt="" />
                                            </div>
                                            <div className="w-75">
                                                <div className="bg-light cus-height rounded-3 w-100 my-2"></div>
                                                <div className="bg-light cus-height rounded-3 w-75 my-2"></div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div className='text-center mt-4'>
                                <h2 className="cus-notify-h2">
                                    Notifications
                                </h2>

                                <p className="cus-notify-text">
                                    Receive notifications about your rider performance, efficiency reviews and a lot more
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Dashboard;