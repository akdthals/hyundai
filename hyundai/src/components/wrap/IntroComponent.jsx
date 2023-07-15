import React from 'react';
import Section4Component from './intro/Section4Component';
import Section5Component from './intro/Section5Component';
import Section6Component from './intro/Section6Component';

function IntroComponent(props) {
    return (
        <div id="main">
            <Section4Component/>
            <Section5Component/>
            <Section6Component/>
        </div>
    );
}

export default IntroComponent;