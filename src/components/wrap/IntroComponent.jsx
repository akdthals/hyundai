import React from 'react';
import Section4Component from './intro/Section4Component';
import Section5Component from './intro/Section5Component';
import Section6Component from './intro/Section6Component';
import {Link} from 'react-router-dom';

function IntroComponent({confirmModalOpen}) {
   
    return (
        <div id="main">
            <Link to="/womenFashion">우먼</Link>
            <Link to="/youngCasual">영</Link>
            <Link to="/signup">회원가입</Link>
            <Link to="/mypageMain">마이페이지가기</Link>
            <Section4Component/>
            <Section5Component/>
            <Section6Component/>
        </div>
    );
}

export default IntroComponent;