import React, {useState} from 'react';
import logo from '../assets/images/Moneey_App_Icon_1.png';
import frame1 from '../assets/images/Frame 8755.png';
import frame11 from '../assets/images/Frame 8757.png';
import frame111 from '../assets/images/Frame 8758.png';
import Ticked from '../assets/images/tick-circle.png';

import '../App.css';

interface props {
    children: React.ReactChildren | HTMLElement | string;
}

const AuthLayout: React.FC<props> = ({children}) => {
    const [select, setSelect] = useState(0);

    const items = [
        {
            img: frame111,
            heading: "Monitor your Earnings",
            paragraph: "Easily see how much your businesses are earning  on each transaction and watch your earnings rise."
        },
        {
            img: frame11,
            heading: "Manage your Businesses",
            paragraph: "Easily see how much your businesses are earning  on each transaction and watch your earnings rise."
        },
        {
            img: frame1,
            heading: "Delegate to Staff",
            paragraph: "Easily see how much your businesses are earning  on each transaction and watch your earnings rise."
        },
    ];

    const handleClick = (index: any) =>{
        setSelect(index)
    }

    return (
        <>
            <div className={'container-fluid'}>
                <div className="row">
                    <div className={'d-none col-md-5 d-md-block p-5'}>
                        <header>
                            <section className="mb-2">
                                <img src={logo} alt=""/>
                            </section>

                            <section>
                                <h1 className="lg-fs-32">
                                    Hi There, See What's new
                                </h1>

                                <p className="lg-fs-16-p">
                                    Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient
                                </p>
                            </section>
                        </header>

                            <div className="">
                                {
                                    items.map((item, index) => (
                                        <div key={index} onClick={()=>handleClick(index)} className={select === index? "selected-item border-0 d-flex align-items-center my-2 justify-content-between p-2 cursor-" : "border-0 d-flex align-items-center my-2 justify-content-between p-2 cursor-p"}>
                                            <div className="me-4">
                                                <img src={item.img} alt=""/>
                                            </div>
                                            <div>
                                                <h3 className={select === index? "app-fs-16-selected" : "app-fs-16"}>
                                                    {item.heading}
                                                </h3>
                                                <p className={select === index? "app-fs-12-selected" : "app-fs-12"}>
                                                    {item.paragraph}
                                                </p>
                                            </div>
                                            <div className={select === index? "" : "d-none"}>
                                                <img src={Ticked} alt=""/>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        
                    </div>

                    <div className={'col-md-7 py-5 d-flex d-flex align-items-center justify-content-center bg-light'}>
                        <>{children}</>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AuthLayout;