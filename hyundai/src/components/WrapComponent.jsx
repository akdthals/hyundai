import React from 'react';
import IntroComponent from './wrap/IntroComponent';
import WomenFashionSubComponent from './wrap/sub_title_page/WomenFashionSubComponent';
import YoungCasualSubComponent from './wrap/sub_title_page/YoungCasualSubComponent';
import SignUpComponent from './wrap/main_sub/SignUpComponent';
import ConfirmModal from './wrap/ConfirmModal';
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
        isConfirmModal: false // true 모달열기  false 모달닫기    
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

    return (
        <div id="wrap">
            <SignUpComponent timer={timer} timerCounterfn={timerCounterfn} confirmModalOpen={confirmModalOpen}/>
            <WomenFashionSubComponent/>
            <YoungCasualSubComponent/>
            <IntroComponent/>


            {
                modal.isConfirmModal && <ConfirmModal confirmMsg={modal.confirmMsg} confirmModalClose={confirmModalClose} />
            }
        </div>
    );
}

export default WrapComponent;