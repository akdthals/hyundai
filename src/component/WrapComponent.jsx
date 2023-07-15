import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderComponent from './wrap/HeaderComponent';
import FooterComponent from './wrap/FooterComponent';
import IntroComponent from './wrap/IntroComponent';
import NotView404PageComponent from './wrap/NotView404PageComponent';
import {GlobalContext} from '../context/GlobalContext';
import NoticeWriteFromPageComponent from './wrap/main_sub_bbs/NoticeWriteFromPageComponent';
import NoticeUpdateFromComponent from './wrap/main_sub_bbs/NoticeUpdateFromComponent';

//서브 페이지
import GageonComponent from '../component/wrap/sub9/GageonComponent'
import SickPoomComponent from '../component/wrap/sub10/SickPoomComponent'

// 공지사항
import NoticeComponent from './wrap/main_sub_bbs/NoticeComponent';

export default function WrapComponent() {

    const [isAdmin, setIsAdmin] = React.useState(true);
    return (
        <div id='wrap'>
            <GlobalContext.Provider value={{isAdmin}}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path='/' element={<HeaderComponent/>}>
                        <Route index element={<IntroComponent/>}/>
                        <Route path='/intro' element={<IntroComponent/>}/>
                        <Route path='/sub9' element={<GageonComponent/>}/>
                        <Route path='/sub10' element={<SickPoomComponent/>}/>
                        <Route path='/customer' element={<NoticeComponent/>}/>
                        <Route path='/*' element={<NotView404PageComponent/>}/>
                        <Route path='/notice_write'    element={<NoticeWriteFromPageComponent />} />
                        <Route path='/notice_update'    element={<NoticeUpdateFromComponent />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
            </GlobalContext.Provider>
        </div>
    );
}
