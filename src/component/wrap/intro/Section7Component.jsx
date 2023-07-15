import React from 'react';
import { Section7Slide1Component, Section7Slide2Component, Section7Slide3Component } from './Section7SlideComponent';
export default function Section7Component(){

    
    const [imgBox1,setImgBox1] = React.useState([]); 
    const [imgBox2,setImgBox2] = React.useState([]); 
    const [imgBox3,setImgBox3] = React.useState([]); 
    const [cnt, setCnt] = React.useState(0)
    const [num1, setNum1] = React.useState(0);
    const slideRef = React.useRef();

    // React.useEffect(()=>{ // json 데이터 바인딩
    //     axios({
    //         url:'./KHB/data/sec7slide.json',
    //         method:'get'
    //     })
    //     .then((res)=>{
    //         setImgBox1(res.data.슬라이드1);
    //         setImgBox2(res.data.슬라이드2);
    //         setImgBox3(res.data.슬라이드3);
    //         // console.log(imgBox1);
    //         // console.log(imgBox2);
    //         // console.log(imgBox3);
    //     })
    //     .catch((e)=>{
    //         console.log(e);
    //     });
    // },[]);

    // const mainSlide=()=>{
    //     slideRef.current.style.transition = 'all .3s ease-in-out';
    //     slideRef.current.style.left = `${ -(100 * cnt)}%`;
    //     if(cnt >= 4){

    //         slideRef.current.style.left =`0`;
    //         slideRef.current.style.transition = `none`; 
    //         setCnt(1);
    //     }
    //     else if(cnt <= -1){
    //         slideRef.current.style.left =`-${100 * 3}%`;
    //         slideRef.current.style.transition = 'none';
    //         setCnt(2);
    //     }
        
    // };
    // React.useEffect(()=>{
    //     mainSlide();
    //     console.log(cnt);
    // },[cnt]);
    // tab 클릭시 전환
    const onClickTap=(e, n)=>{
        e.preventDefault();
        setNum1(n);
    }
    // React.useEffect(()=>{
    //     let setId = 0;

    //     const $imgBox1 = $('#section7 .img-box1');
    //     const $imgBox2 = $('#section7 .img-box2');
    //     const $imgBox3 = $('#section7 .img-box3');
    //     const $fadeinout = $('#section7 .fadeinout');

    //     function fadeInOut(){
    //         if(num1 >= 2){
    //             setNum1(0);
    //         }
    //         else {
    //             setNum1(num1+1);
    //         }
    //     }
        
    //     $fadeinout.on({
    //         mouseenter(){
    //             clearInterval(setId);
    //             console.log('enter');
    //         },
    //         mouseleave(){
    //             autoTimer();
    //             console.log('leave');
    //         }
    //     })
    //     autoTimer();
    //     function autoTimer(){
    //         // setId=setInterval(fadeInOut(),1000);
    //     }


        
    //     // $imgBox2.on({
    //     //     mouseenter(){
    //     //         clearInterval(setId);
    //     //         console.log('enter');
    //     //     },
    //     //     mouseleave(){
    //     //         autoTimer();
    //     //         console.log('leave');
    //     //     }
    //     // })
    //     // $imgBox3.on({
    //     //     mouseenter(){
    //     //         clearInterval(setId);
    //     //         console.log('enter');
    //     //     },
    //     //     mouseleave(){
    //     //         autoTimer();
    //     //         console.log('leave');
    //     //     }
    //     // })

    //     // console.log(num1);
    //     // clearInterval(setId);

    // },[]);




    const onClickPrev=(e)=>{
        e.preventDefault();
        // if(cnt <= 0){
        //     setCnt(2);
        // }
        // else {
            setCnt(cnt-1);
        // }
    }
    const onClickNext=(e)=>{
        e.preventDefault();
        // if(cnt >= 3){
        //     setCnt(0);
        // }
        // else {
            setCnt(cnt+1);
        // }
    }


    return (
        <section id="section7">
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>Premium Showroom</h1>
                        <a href="!#">프리미엄쇼룸 전체보기</a>
                    </div>
                    <div className="content">
                        <div className="premiumShowroom-wrap">
                            {/* premiumShowroom tab */}
                            <ul className='MOOOI-tab'>
                                <li>
                                    <button onClick={(e)=>onClickTap(e,0)} className={num1===0?'on':''}><span>MOOOI</span></button>
                                </li>
                                <li>
                                    <button onClick={(e)=>onClickTap(e,1)} className={num1===1?'on':''}><span>POLIFORM</span></button>
                                </li>
                                <li>
                                    <button onClick={(e)=>onClickTap(e,2)} className={num1===2?'on':''}><span>NESPRESSO</span></button>
                                </li>
                            </ul>
                            {/* 큰 슬라이드 박스 */}
                            <div className="middle">
                                <div className={`img-box1 fadeinout${num1===0?' on':''}`}>
                                    <div className="left-img">
                                        <a href="!#">
                                            <img src="./KHB/img/moooi_left.jpg" alt="" />
                                            <div className="bottom-box">
                                                <p>브랜드관 바로가기</p>
                                            </div>
                                        </a>
                                        

                                        </div>
                                    
                                    <div className="right-box">
                                        <div className='logo'>
                                            <img src="./KHB/img/moooi_right.jpg" alt="" />
                                        </div>
                                        <div className='text'>
                                            <p>참신함과 독창적인 가구 디자인</p>
                                        </div>
                                        <Section7Slide1Component/>
                                    </div>
                                </div>
                                
                                <div className={`img-box2 fadeinout${num1===1?' on':''}`}>
                                <div className="left-img">
                                    <a href="!#">
                                        <img src="./KHB/img/poliform_left.jpg" alt="" />
                                        <div className="bottom-box">
                                            <p>브랜드관 바로가기</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="right-box">
                                    <div className='logo'>
                                        <img src="./KHB/img/poliform_right.jpg" alt="" />
                                    </div>
                                    <div className='text'>
                                        <p>이탈리아 럭셔리 가구 브랜드</p>
                                    </div>
                                    {/* <div className='slide-box'>
                                            <div className='arrow'>
                                                <img onClick={onClickNext} className='next-btn' src="./KHB/img/icon_arrow_R.png" alt="" />
                                                <img onClick={onClickPrev} className='prev-btn' src="./KHB/img/icon_arrow_L.png" alt="" />
                                            </div>
                                            <div className="slide-container">
                                                <div className="slide-view">
                                                    <ul ref={slideRef} className="slide-wrap">
                                                        <li className="slide">
                                                            <a href="!#">
                                                                <img src="./KHB/img/moooi_slide03.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li className="slide">
                                                            <a href="!#">
                                                                <img src="./KHB/img/moooi_slide01.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li className="slide">
                                                            <a href="!#">
                                                                <img src="./KHB/img/moooi_slide02.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li className="slide">
                                                            <a href="!#">
                                                                <img src="./KHB/img/moooi_slide03.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li className="slide">
                                                            <a href="!#">
                                                                <img src="./KHB/img/moooi_slide01.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='page-nation'>
                                                    <span className='static-bar'></span>
                                                    <span style={{width:`${(cnt < 3?cnt+1:1) * (100 / 3)}%`}} className='dynamic-bar'></span>
                                                </div>
                                            </div>
                                    </div> */}
                                    <Section7Slide2Component/>
                                </div>
                                </div>
                                
                                <div className={`img-box3 fadeinout${num1===2?' on':''}`}>
                                <div className="left-img">
                                    <a href="!#">
                                        <img src="./KHB/img/nespresso_left.jpg" alt="" />
                                        <div className="bottom-box">
                                            <p>브랜드관 바로가기</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="right-box">
                                    <div className='logo'>
                                        <img src="./KHB/img/nespresso_right.jpg" alt="" />
                                    </div>
                                    <div className='text'>
                                        <p>뛰어난 맛과 향의 프리미엄 커피</p>
                                    </div>
                                    {/* <div className='slide-box'>
                                            <div className='arrow'>
                                                <img onClick={onClickNext} className='next-btn' src="./KHB/img/icon_arrow_R.png" alt="" />
                                                <img onClick={onClickPrev} className='prev-btn' src="./KHB/img/icon_arrow_L.png" alt="" />
                                            </div>
                                            <div className="slide-container">
                                                <div className="slide-view">
                                                    <ul ref={slideRef} className="slide-wrap">
                                                        <li className="slide">
                                                            <a href="!#">
                                                                <img src="./KHB/img/moooi_slide03.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li className="slide">
                                                            <a href="!#">
                                                                <img src="./KHB/img/moooi_slide01.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li className="slide">
                                                            <a href="!#">
                                                                <img src="./KHB/img/moooi_slide02.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li className="slide">
                                                            <a href="!#">
                                                                <img src="./KHB/img/moooi_slide03.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li className="slide">
                                                            <a href="!#">
                                                                <img src="./KHB/img/moooi_slide01.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className='page-nation'>
                                                    <span className='static-bar'></span>
                                                    <span style={{width:`${(cnt < 3?cnt+1:1) * (100 / 3)}%`}} className='dynamic-bar'></span>
                                                </div>
                                            </div>
                                    </div> */}
                                    
                                    <Section7Slide3Component/>
                                </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};