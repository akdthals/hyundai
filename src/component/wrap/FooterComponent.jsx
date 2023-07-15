import React from 'react';

export default function FooterComponent() {
    return (
        <footer id="footer">
            <div className="row1">
                <ul className='menu'>
                    <li><a href="">현대백화점그룹</a></li>
                    <li><a href="">공지사항</a></li>
                    <li><a href="">윤리경영</a></li>
                    <li><a href="">사회공헌</a></li>
                    <li><a href="">이용약관</a></li>
                    <li><a href="">개인정보 처리방침</a></li>
                </ul>
            </div>
            <div className="container">

                <div className="row2">
                    <div className='logo'>
                        <a href=""><img src="./KHB/img/footer_logo.png" alt="" /></a>
                    </div>
                    <div className='info'>
                        <p>주식회사 현대백화점 대표이사 : 김형종 외 2인 서울시 강남구 테헤란로98길 12</p>
                        <p>사업자등록번호 : 211-87-21455 <a href="!#">[사업자정보 확인]</a>  통신판매업신고 : 2010-서울강남-01882</p>
                        <p>홈페이지/앱 문의 : <a href="">customerservice@thehyundai.com</a>고객센터 :<strong>1800-2233</strong></p>
                        <p>호스팅서비스 : (주)현대백화점</p>
                        <p className='copy'>CopyrightⓒHyundai Department Store. All rights reserved.</p>
                        <p>Where's Wally?ⓒDreamWorks Distribution Limited. All rights reserved.</p>
                    </div>
                    <div className='sns'>
                        <a href=""><img src="./KHB/img/footer-icon.png" alt="" /></a>
                    </div>
                </div>
                <div className="row3">
                    <div className="left">
                        <img src="./KHB/img/footer_row3.png" alt="" />
                        <span>|</span>
                        <img src="./KHB/img/footer_row3_02.png" alt="" />
                        <span>|</span>
                        <img src="./KHB/img/footer_row3_03.png" alt="" />
                        <span>|</span>
                        <img src="./KHB/img/footer_row3_04.png" alt="" />
                    </div>
                    <div className="right">
                        <img src="./KHB/img/footer_row3_left.png" alt="" />
                    </div>

                </div>
            </div>
        </footer>
    );
}