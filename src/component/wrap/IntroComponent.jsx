import React from 'react';
import Section7Component from './intro/Section7Component';
import Section9Component from './intro/Section9Component';
import Guerlain from './intro/detailpage/Guerlain';
import Sub1Component from './sub/Sub1Component';
import Sub2Component from './sub/Sub2Component';

export default function IntroComponent() {
    return (
        <main id='main'>
            <Section7Component/>
            <Section9Component/>
            <Sub1Component/>
            <Sub2Component />
            <Guerlain/>
        </main>
    );
}