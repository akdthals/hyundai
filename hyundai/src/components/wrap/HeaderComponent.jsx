import React from 'react';

export default function HeaderComponent() {
    return (
        <header id='header'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <div className="title-up">
                            <div className="left">
                                <ul>
                                    <li>
                                        <img src="./img/intro/team005.png" alt="" />
                                    </li>
                                    <li>
                                        <img src="./img/intro/gatefront_logo_btn_arrow.png" alt="" />
                                    </li>
                                </ul>
                            </div>
                            <div className="center">
                                <label htmlFor=""><input type="text" name='' id=''  /></label>
                               <h1><a href="!#"><img src="./img/introteam006.png" alt="" /></a></h1>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <h2>로그인/회원</h2>
                                        <img src="../../../public/img/intro/icon_down_new.png" alt="" />
                                    </li>
                                    <li>
                                        <h5>고객센터</h5>
                                    </li>
                                    <li>
                                        <h4>장바구니</h4>
                                        <img src="../../../public/img/intro/team010.png" alt="" />
                                    </li>
                                    <li>
                                        <h3>바로접속</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="title-down">
                            <div className="left">
                                <ul>
                                    <li>
                                        <img src="../../../public/img/intro/icon_burger.svg" alt="" />
                                    </li>
                                    <li>
                                        <h2>Gift</h2>
                                    </li>
                                    <li>
                                        <h2>New</h2>
                                    </li>
                                    <li>
                                        <h2>Store In</h2>
                                    </li>
                                    <li>
                                        <h2>Show-Room</h2>
                                    </li>
                                    <li>
                                        <h2>Re.Green</h2>
                                    </li>
                                    <li>
                                        <h2>Event</h2>
                                    </li>
                                </ul>
                            </div>
                            <div className="right">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}