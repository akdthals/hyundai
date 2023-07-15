import React from 'react';

function SignInPwSearchComponent(props) {
    return (
        <main id="pwSearch">
            <div className="container">
                <div className="gap">
                    <div className="title">비밀번호 찾기</div>
                    <div className="content">
                        
                    </div>
                </div>
            </div>
            <li>
            <input type="password" name="" id="pw" placeholder='비밀번호' value={state.비밀번호} onChange={onChangeUserPw1} disabled={state.인증여부?false:true}/>
            <span className={`validation-check ${  state.비밀번호==='' ? '' : (state.isPwError ? 'error' : 'ok')}`}></span>
            <p className={`error-msg${ state.isPwError  ? ' on' : ''}`}>{state.isPwMsg}</p>
            </li>
            <li>
            <input type="password" name="" id="pw2" placeholder='비밀번호 확인' value={state.비밀번호확인} onChange={onChangeUserPw2} disabled={state.인증여부?false:true}/>
            <span className={`validation-check ${  state.비밀번호확인==='' ? '' : (state.isPw2Error ? 'error' : 'ok')}`}></span>
            <p className={`error-msg${ state.isPw2Error  ? ' on' : ''}`}>{state.isPw2Msg}</p>
            </li>





        </main>
    );
}

export default SignInPwSearchComponent;