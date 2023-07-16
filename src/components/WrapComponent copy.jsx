import React, { useEffect } from 'react';
import IntroComponent from './wrap/IntroComponent';
import WomenFashionSubComponent from './wrap/sub_title_page/WomenFashionSubComponent';
import YoungCasualSubComponent from './wrap/sub_title_page/YoungCasualSubComponent';
import SignUpComponent from './wrap/main_sub/SignUpComponent';
import ConfirmModal from './wrap/ConfirmModal';
import SignInComponent from './wrap/main_sub/SignInComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignInIdSearchComponent from './wrap/main_sub/SignInIdSearchComponent';
import IdSearchResultComponent from './wrap/main_sub/IdSearchResultComponent';
import PwSearchResetComponent from './wrap/main_sub/PwSearchResetComponent';
import MypageComponent from './wrap/main_sub/MypageComponent';
import MemberUpdateComponent from './wrap/main_sub/MemberUpdateComponent';
import HeaderComponent from './wrap/HeaderComponent';
import SignInPwSearchComponent from './wrap/main_sub/SignInPwSearchComponent';
import MemberDeleteComponent from './wrap/main_sub/MemberDeleteComponent';
function WrapComponent(props) {
    //타이머 변수와 타이머 함수 넘겨주기
    const [timer, setTimer]=React.useState({
        minutes: 2,
        seconds: 59,
        setId: 0,
        timerMsg: '',
        isTimer: false,
        isEnd: false,
    
    });
    
    const timerCounterfn=()=>{
        let setId=0;
        let minutes=2;
        let seconds=59;
        let timerMsg='';
        let isEnd=false;
        let isTimer=true;
        setId=setInterval(function(){
            seconds--;
            if(seconds<0){
                seconds=59;
                minutes--;
                if(minutes<0){
                    clearInterval(setId);
                    seconds=0;
                    minutes=0;
                    timerMsg='유효시간이 경과 되었습니다.';//모달창에 띄울 메시지
                    isTimer=true; //모달창 true
                    confirmModalOpen(timerMsg);
                }
            }
            setTimer({
                ...timer,
                seconds: seconds,
                minutes: minutes,
                timerMsg: timerMsg,
                setId: setId,
                isTimer: isTimer
            })
        }, 1000);//1초에 한 번 실행
    
    }


    const [modal, setModal]  =  React.useState({
        confirmMsg: '모달창에 자식창에서 보내온 타이틀 메시지내용입니다.',
        isConfirmModal: false, // true 모달열기  false 모달닫기   
        isSignInModal: false //로그인 모달
        });
      const confirmModalOpen=(msg)=>{
        setModal({
            ...modal,
            confirmMsg: msg,
            isConfirmModal: true
            });
        }
        const confirmModalClose=()=>{
            setModal({
                ...modal,
                isConfirmModal: false
            })
        }
        //로그인 창 열기 닫기 구현
        const onSignInON=(e)=>{
            setModal({
                ...modal,
                isSignInModal: true
                });
        }
        const onSignInOff=(e)=>{
            setModal({
                ...modal,
                isSignInModal: false
                });
        }

        //로그인 관련 함수
        const [isLogin, setIsLogin]=React.useState(false);
        useEffect(()=>{
            //useEffect훅 써서 해결
            if(sessionStorage.getItem('user_id')!=null){
                setIsLogin(true);
            }
        },[])
        const onLogout=(e)=>{
            sessionStorage.removeItem('user_id');   
            setIsLogin(false);     
        }

    return (
        <div id="wrap">
            {
                modal.isConfirmModal && <ConfirmModal confirmMsg={modal.confirmMsg} confirmModalClose={confirmModalClose} />
            }
            {
                !isLogin&&<button onClick={onSignInON}>로그인2</button>
            }
                        {
                isLogin&&<button onClick={onLogout}>로그아웃</button>
            }
            <BrowserRouter>
            {
                modal.isSignInModal&&<SignInComponent onSignInOff={onSignInOff}/>
            }
                <Routes>
                   <Route path='/' element={<HeaderComponent isLogin={isLogin}/>}>
                        <Route index element={<IntroComponent/>}/>
                        <Route path='/main' element={<IntroComponent/>}/>
                        <Route path='/womenFashion' element={<WomenFashionSubComponent/>}/>
                        <Route path='/youngCasual' element={<YoungCasualSubComponent/>}/>
                        <Route path='/signup' element={<SignUpComponent timer={timer} timerCounterfn={timerCounterfn} confirmModalOpen={confirmModalOpen}/>}/>
                        <Route path='/idSearch' element={<SignInIdSearchComponent/>}/>
                        <Route path='/idSearchResult' element={<IdSearchResultComponent/>}/>
                        <Route path='/pwSearch' element={<SignInPwSearchComponent/>}/>
                        <Route path='/pwSearchReset' element={<PwSearchResetComponent/>}/>
                        <Route path='/mypageMain/memberDelete' element={<MemberDeleteComponent/>}/>
                   </Route>
                     
                        <Route path='/mypageMain' element={<MypageComponent/>}/>
                    
                </Routes>
            </BrowserRouter>
          
            


        </div>
    );
}

export default WrapComponent;