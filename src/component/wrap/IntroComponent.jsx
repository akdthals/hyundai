import React from 'react';
import Section1Component from './intro/Section1Component';
import Section2Component from './intro/Section2Component';
import Section3Component from './intro/Section3Component';
import ChildrenCultureComponent from './sub_title_page/ChildrenCultureComponent';
import CartComponent from './cart/CartComponent';
export default function IntroComponent() {
    return (
        <div id='main'>
            <CartComponent/>
            <ChildrenCultureComponent />
            {/* <Section1Component /> */}
            {/* <Section2Component /> */}
            {/* <Section3Component /> */}
        </div>
    );
}