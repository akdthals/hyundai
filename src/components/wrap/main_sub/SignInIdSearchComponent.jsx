import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignInIdSearchComponent(props) {

    const [state, setState]=useState({
        이름: '',
        생년월일: '',
        휴대폰: '',
    });
    const navigate=useNavigate();

    const onSubmitSignupEvent=(e)=>{
        e.preventDefault();
        axios({
            // 이름, 생년월일, 휴대폰번호를 전송한다.
            url:'/hyundai/idSearchAction.jsp',
            method: 'POST',
            data:{},
            params: {
                "user_name": state.이름,
                "user_birth": state.생년월일,
                "user_hp": state.휴대폰
            }
        })
        .then((res)=>{
            console.log( res );
            console.log( res.data );
            const result = res.data;
            try {                    
                if( result === null ){ // null 이면 가입회원이 아닙니다. 회원가입하세요                      
                    alert('가입회원이 아님');
                }
                else{
                    console.log(result.아이디);
                    // 라우터 네비게이트 사용 구현 파미터전송                       
                    navigate('/idSearchResult', {state: {아이디: result.아이디, 가입일: result.가입일}});
                }
            } catch (error) {
                console.log( error );
            }
        
    
        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err} `)
        }); 
    }

    //navigate('/idSearchResult', {state: {아이디: result.아이디, 가입일: result.가입일}});


   
    return (
      <main id="signInIdSearch">
        <div className="container">
            <div className="gap">
                <div className="title">
                    <h1>아이디 찾기</h1>
                </div>
                <div className="content"> 
                    <h2>가입 휴대폰 정보 인증</h2>
                    <form action="" onSubmit={onSubmitSignupEvent}>
                        <div className="input-box">
                            <ul>
                                <li><label htmlFor="">이름</label><input type="text" name="user_name" id="" onChange={(e)=>setState({...state,이름:e.target.value})}/></li>
                                <li><label htmlFor="">생년월일(8자리)</label><input type="text" name="user_birth" id="" onChange={(e)=>setState({...state,생년월일:e.target.value})}/></li>
                                <li><label htmlFor="">휴대폰 번호</label><input type="text" name="user_hp" id="" onChange={(e)=>setState({...state,휴대폰:e.target.value})}/></li>
                            </ul>
                        </div>
                        <div className="pw-search-box">
                            <p>회원 비밀번호가 기억나지 않으시나요?</p>
                            <a href="">비밀번호 찾기</a>
                        </div>
                        <button type="submit">확인</button>

                    </form>

                </div>
            </div>
        </div>



      </main>
    );
}

export default SignInIdSearchComponent;