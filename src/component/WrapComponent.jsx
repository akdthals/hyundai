import React from 'react';
import FooterComponent from './wrap/FooterComponent';
import HeaderComponent from './wrap/HeaderComponent';
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