import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import FooterComponent from './wrap/FooterComponent';
import IntroComponent from './wrap/IntroComponent';
export default function WrapComponent() {
    return (
        <div id='wrap'>
            <HeaderComponent/>
            <IntroComponent/>
            <FooterComponent/>
        </div>
    );
}