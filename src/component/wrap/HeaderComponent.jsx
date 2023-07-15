import React from 'react';
import './scss/header.scss';
export default function HeaderComponent() {
    return (
        <header id='header'>
            <div className="container">
                <div className="logo">
                    <h1>
                        <a href="!#">
                            <img src="./CYS/img/header/thehyundai_header_cart1.png" alt="" />
                        </a>
                    </h1>
                </div>
            </div>
        </header>
    );
}