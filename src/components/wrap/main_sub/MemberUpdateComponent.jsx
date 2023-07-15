import React from 'react';
import axios from 'axios';
function MemberUpdateComponent(props) {

    const [state, setState]=React.useState({
        기존비밀번호: '',
        비밀번호: '',
        비밀번호확인: '',
        아이디: sessionStorage.getItem('user_id'),
    })

    const onPwChange=(e)=>{
        e.preventDefault();
        axios({
            // 이름, 생년월일, 휴대폰번호를 전송한다.
            url:'/hyundai/updateAction.jsp',
            method: 'POST',
            data:{},
            params: {
                "old_user_pw": state.기존비밀번호,
                "user_pw": state.비밀번호,
                "user_id": state.아이디,
            }
        })
        .then((res)=>{
            console.log( res );
            console.log( res.data );
            const result = res.data;
            try {                    
                if( result === null ){                  
                }
                else{
                    console.log(result.아이디);
                }
            } catch (error) {
                console.log( error );
            }
        })
        .catch((err)=>{
            console.log(`AXIOS 실패! ${err} `)
        }); 
    }
    return (
        <section id="memberUpdate">
            <div className="container">
                <div className="title"></div>
                <div className="content">
                    <div className="input-box">
                        <ul>
                            <li>
                                <label htmlFor="">더현대닷컴 아이디</label>
                                <span>변수아이디</span>
                            </li>
                            <li>
                                <label htmlFor="">
                                    더현대닷컴 비밀번호
                                    <input type="password" />
                                </label>
                            </li>
                        </ul>
                    </div>
                    <button type="submit">확인</button>
                </div>

                {

                    
                    <div className="update-box">
                        <div className="title-box">

                        </div>
                        <div className="info-box">
                            <ul>
                                <li>
                                    <span className="title">아이디</span>
                                    <span className="information">아이디변수</span>
                                </li>
                                <li>
                                    <span className="title">이름</span>
                                    <span className="information">아이디변수</span>
                                </li>
                                <li>
                                    <span className="title">비밀번호</span>
                                        <button>변경하기</button>
                                        <div className="pw-box">
                                            <h4>비밀번호 변경</h4>
                                            <form action="" onSubmit={onPwChange}>
                                                <input type="text" placeholder='기존 비밀번호' onChange={(e)=>{setState({...state,기존비밀번호:e.target.value})}} value={state.기존비밀번호} />
                                                <input type="text" placeholder='새 비밀번호' onChange={(e)=>{setState({...state,비밀번호:e.target.value})}} value={state.비밀번호}/>
                                                <input type="text" placeholder='비밀번호 확인' onChange={(e)=>{setState({...state,비밀번호확인:e.target.value})}} value={state.비밀번호확인}/>
                                                <p>* 8~30자 이내로 영문자, 숫자 특수문자 중 2가지 이상 포함</p>
                                                <button type="submit">확인</button>
                                            </form>
                                        </div>

                                </li>
                                <li>
                                    <span className="title">생년월일</span>
                                    <span className="information">아이디변수</span>
                                </li>
                                <li>
                                    <span className="title">휴대폰 번호</span>
                                    <span className="information">아이디변수</span>
                                </li>
                                <li>
                                    <span className="title">더현대닷컴 마케팅정보 수신 동의 <strong>[선택]</strong></span>
                                    <span className="information">
                                        <input type="checkbox" name="optinal-agree" id="" />SMS/알림톡
                                        <input type="checkbox" name="optinal-agree" id="" />전화상담
                                        <input type="checkbox" name="optinal-agree" id="" />이메일
                                    </span>
                                </li>
                            </ul>
                            <button>확인</button>

                            <div className="delete-box">
                                <p>탈퇴를 원하시면 우측의 회원탈퇴 버튼을 눌러주세요</p>
                                <a href="">회원탈퇴</a>
                            </div>
                        </div>
                    </div>


                }
            </div>
        </section>
    );
}

export default MemberUpdateComponent;