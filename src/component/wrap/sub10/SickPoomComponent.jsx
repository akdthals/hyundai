import React from 'react';
import './scss/sickpoom.scss'
import $ from'jquery'


export default function SickPoomComponent () {
    React.useEffect(()=>{
        const $middleSlideContainer     = $('#sickpoom .middle-slide-container');
        const $middleSlideWrap          = $('#sickpoom .middle-slide-wrap');
        const $middleSlide              = $('#sickpoom .middle-slide');
        const $slidea              = $('#sickpoom .slide a');
    
        let cnt=0;
        let setId =0;
        function mainSlide(){
          $('#sickpoom .middle-slide-wrap').stop().animate({left: `${-100*cnt}%`},600,()=>{
            if(cnt > 4) cnt=0;
            if(cnt < 0) cnt=4;
            $('#sickpoom .middle-slide-wrap').stop().animate({left: `${-100*cnt}%`},0)
          });
    
          pageNation();
        }
        function nextCount(){
          cnt++;
          mainSlide();
        }
        function prevCount(){
          cnt--;
          mainSlide();
        }
        function autoTimer(){
          setId = setInterval(nextCount, 3000);
        }
        autoTimer();
        
        $middleSlideContainer.on({
          mouseenter(){
            clearInterval(setId);
          },
          mouseleave(){
            autoTimer();
          }
        })
        $slidea.on({
          click(e){
              e.preventDefault();
          }
      })  
        function pageNation(){
          $('#sickpoom .middle-page-btn').removeClass('on');
          $('#sickpoom .middle-page-btn').eq( cnt > 4 ? 0 : cnt).addClass('on');
        }
    
        $('#sickpoom .middle-page-btn').each(function(idx){
          $(this).on({
              click(e){
                  e.preventDefault();
                  clearInterval(setId);
                  cnt = idx; 
                  mainSlide();
                  autoTimer();
              }
          });
      });
      },[])
      React.useEffect(()=>{
        const $bottomSlideContainer    = $('#sickpoom .bottom-slide-container');
        const $bottomSlideWrap          = $('#sickpoom-slide-wrap');
        const $bottomSlide             = $('#sickpoom .bottom-slide');
        const $bottomSlidea              = $('#sickpoom .bottom-slide a');
    
        let cnt=0;
        let setId =0;
        function mainSlide(){
          $('#sickpoom .bottom-slide-wrap').stop().animate({left: `${-100*cnt}%`},700,()=>{
            if(cnt > 6) cnt=0;
            if(cnt < 0) cnt=6;
            $('#sickpoom .bottom-slide-wrap').stop().animate({left: `${-100*cnt}%`},0)
          });
    
          pageNation();
        }
        function nextCount(){
          cnt++;
          mainSlide();
        }
        function prevCount(){
          cnt--;
          mainSlide();
        }
        function autoTimer(){
          setId = setInterval(nextCount, 3000);
        }
        autoTimer();
        
        $bottomSlideContainer.on({
          mouseenter(){
            clearInterval(setId);
          },
          mouseleave(){
            autoTimer();
          }
        })
        $bottomSlidea.on({
          click(e){
              e.preventDefault();
          }
      })  
        function pageNation(){
          $('#sickpoom .bottom-left-page-btn-box').removeClass('on');
          $('#sickpoom .bottom-left-page-btn-box').eq( cnt > 6 ? 0 : cnt).addClass('on');
        }
    
        $('#sickpoom .bottom-left-page-btn-box').each(function(idx){
          $(this).on({
              click(e){
                  e.preventDefault();
                  clearInterval(setId);
                  cnt = idx; 
                  mainSlide();
                  autoTimer();
              }
          });
      });
      },[])
    return (
        <div id='sickpoom'>
            <div className="container">
            <div className="top">
            <div className="title">
              <div className="top-title">
                <ul>
                  <li>
                    <h1>Home</h1>
                  </li>
                  <li>
                    <img src="./img/HSM/sub10/sub914.png" alt="" />
                  </li>
                  <li>
                    <h2>
                      식품
                      <div className="top-title-text-box">
                        <ul>
                          <li>
                            <h5>화장품</h5>
                            <img src="./img/HSM/sub10/sub937.png" alt="" />
                          </li>
                          <li>
                            <h5>명품/잡화</h5>
                            <img src="./img/HSM/sub10/sub937.png" alt="" />
                          </li>
                          <li>
                            <h5>여성패션</h5>
                            <img src="./img/HSM/sub10/sub937.png" alt="" />
                          </li>
                          <li>
                            <h5>영캐주얼</h5>
                            <img src="./img/HSM/sub10/sub937.png" alt="" />
                          </li>
                          <li>
                            <h5>진/이지</h5>
                            <img src="./img/HSM/sub10/sub937.png" alt="" />
                          </li>
                          <li>
                            <h5>남성패션</h5>
                            <img src="./img/HSM/sub10/sub937.png" alt="" />
                          </li>
                          <li>
                            <h5>유아동/문화</h5>
                            <img src="./img/HSM/sub10/sub937.png" alt="" />
                          </li>
                          <li>
                            <h5>스포츠/레저</h5>
                            <img src="./img/HSM/sub10/sub937.png" alt="" />
                          </li>
                          <li>
                            <h5>리빙/가전</h5>
                            <img src="./img/HSM/sub10/sub937.png" alt="" />
                          </li>
                          <li>
                            <h5>식품</h5>
                            <img src="./img/HSM/sub10/sub937.png" alt="" />
                          </li>
                        </ul>
                      </div>
                    </h2>
                  </li>
                  <li>
                    <a href="!#">
                      <img src="./img/HSM/sub10/icon_down_new.png" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bottom-title">
                <h2>식품</h2>
              </div>
            </div>
          </div>
          <div className="middle1">
            <div className="middle1-left-box">
              <div className="left-box-top">
                <h1>식품</h1>
              </div>
              <div className="left-box-bottom">
                <ul>
                  <li>
                    <a href="!#">
                      <h5>
                      그로서리
                        <div className="left-box-bottom1">
                          <ul>
                            <li>
                              <a href="!#">수입오일/소스</a>
                            </li>
                            <li>
                              <a href="!#">간편식/안주</a>
                            </li>
                          </ul>
                        </div>
                      </h5>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <h5>
                      디저트
                        <div className="left-box-bottom2">
                          <ul>
                            <li>
                              <a href="!#">베이커리/쿠키</a>
                            </li>
                            <li>
                              <a href="!#">초콜릿/젤리/캔디</a>
                            </li>
                          </ul>
                        </div>
                      </h5>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <h5>
                      차/커피/음료
                        <div className="left-box-bottom3">
                          <ul>
                            <li>
                              <a href="!#">차</a>
                            </li>
                            <li>
                              <a href="!#">과일차/청</a>
                            </li>
                            <li>
                              <a href="!#">선물세트</a>
                            </li>
                            <li>
                              <a href="!#">커피</a>
                            </li>
                            <li>
                              <a href="!#">과일주스/이온음료</a>
                            </li>
                          </ul>
                        </div>
                      </h5>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <h5>
                      건강식품/홍상
                        <div className="left-box-bottom4">
                          <ul>
                            <li>
                              <a href="!#">홍삼/인삼/수삼</a>
                            </li>
                            <li>
                              <a href="!#">비타민</a>
                            </li>
                            <li>
                              <a href="!#">오메가/루테인</a>
                            </li>
                            <li>
                              <a href="!#">칼슘/마그네슘/철분</a>
                            </li>
                            <li>
                              <a href="!#">유산균</a>
                            </li>
                            <li>
                              <a href="!#">콜라겐/다이어트</a>
                            </li>
                            <li>
                              <a href="!#">초유/산양유</a>
                            </li>
                            <li>
                              <a href="!#">꿀/프로폴리스</a>
                            </li>
                            <li>
                              <a href="!#">기타 건강식품</a>
                            </li>
                          </ul>
                        </div>
                      </h5>
                    </a>
                  </li>
                  <li>
                    <a href="!#">
                      <h5>
                      기프티콘
                        <div className="left-box-bottom5">
                          <ul>
                            <li>
                              <a href="!#">스타벅스</a>
                            </li>
                            <li>
                              <a href="!#">커피빈</a>
                            </li>
                            <li>
                              <a href="!#">배스킨라빈스</a>
                            </li>
                            <li>
                              <a href="!#">피그인더가든</a>
                            </li>
                            <li>
                              <a href="!#">라그릴리아</a>
                            </li>
                          </ul>
                        </div>
                      </h5>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="middle1-right-box">
              <div className="middle-slide-container">
                <div className="middle-slide-view">
                  <ul className="middle-slide-wrap">
                    <li className="middle-slide slide5">
                      <a href="!#">
                        <img src="./img/HSM/sub10/sickpoom33.jpg" alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide1">
                      <a href="!#">
                        <img src="./img/HSM/sub10/sickpoom34.jpg" alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide2">
                      <a href="!#">
                        <img src="./img/HSM/sub10/sickpoom35.jpg" alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide3">
                      <a href="!#">
                        <img src="./img/HSM/sub10/sickpoom36.jpg" alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide4">
                      <a href="!#">
                        <img src="./img/HSM/sub10/sickpoom37.jpg" alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide5">
                      <a href="!#">
                        <img src="./img/HSM/sub10/sickpoom33.jpg" alt="" />
                      </a>
                    </li>
                    <li className="middle-slide slide1">
                      <a href="!#">
                        <img src="./img/HSM/sub10/sickpoom34.jpg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="middle-page-btn-box">
                <span>
                  <a href="!#" className="middle-page-btn on">
                  산지스토리관
                  </a>
                </span>
                <span>
                  <a href="!#" className="middle-page-btn">
                  현대식품관투홈
                  </a>
                </span>
                <span>
                  <a href="!#" className="middle-page-btn">
                  미식선물
                  </a>
                </span>
                <span>
                  <a href="!#" className="middle-page-btn">
                  청과 큐레이션박스
                  </a>
                </span>
                <span>
                  <a href="!#" className="middle-page-btn">
                  퓨이탄프라이드
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="middle2">
            <div className="middle2-left">
              <h1>전체브랜드보기</h1>
              <a href="!#">
                <img src="./img/HSM/sub10/sub937.png" alt="" />
              </a>
            </div>
            <div className="middle2-right">
              <ul>
                <li>
                  <label htmlFor="userSearch">
                    <input
                      type="text"
                      name="user_search"
                      id="userSearch"
                      placeholder="브랜드검색"
                    />
                  </label>
                </li>
                <li>
                  <h2>
                    <a href="!#">
                      <img src="./img/HSM/sub10/sickpoom02.png" alt="" />
                    </a>
                  </h2>
                </li>
              </ul>
            </div>
          </div>
          <div className="middle3">
            <span>
                <h1>SPECIAL BRAND</h1>
            </span>
            <div className="middle3-pics">
                <ul>
                    <li><a href="!#"><img src="./img/HSM/sub10/sickpoom40.jpg" alt="" /></a></li>
                    <li><a href="!#"><img src="./img/HSM/sub10/sickpoom41.jpg" alt="" /></a></li>
                    <li><a href="!#"><img src="./img/HSM/sub10/sickpoom42.jpg" alt="" /></a></li>
                </ul>
            </div>
          </div>
          <div className="bottom">
            <span>
              <h1>MD추천상품</h1>
            </span>
            <div className="bottom-all">
              <div className="bottom-left-page-btn">
                <ul>
                  <li className="bottom-left-page-btn-box on">
                    <h1>만전식품</h1>
                    <img src="./img/HSM/sub10/bg_green_arrow.png" alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h2>벨로타벨로타</h2>
                    <img src="./img/HSM/sub10/bg_green_arrow.png" alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h3>한결영농</h3>
                    <img src="./img/HSM/sub10/bg_green_arrow.png" alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h4>식도락푸트(백화점)</h4>
                    <img src="./img/HSM/sub10/bg_green_arrow.png" alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h5>에코솔트(백화점)</h5>
                    <img src="./img/HSM/sub10/bg_green_arrow.png" alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h5>이천미감</h5>
                    <img src="./img/HSM/sub10/bg_green_arrow.png" alt="" />
                  </li>
                  <li className="bottom-left-page-btn-box">
                    <h5>비스테까</h5>
                    <img src="./img/HSM/sub10/bg_green_arrow.png" alt="" />
                  </li>
                </ul>
              </div>
              <div className="bottom-right-box">
                <div className="bottom-slide-container">
                  <div className="bottom-slide-view">
                    <ul className="bottom-slide-wrap">
                    <li className="bottom-slide slide19">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom63.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>45,000</strong>원
                                </h1>
                                <h3>[더현대]비스테까 티라미수 골드메디오 2구세트</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide20">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom63.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>33,000</strong>원
                                </h1>
                                <h3>[더현대]비스테까 티라미수 골드피콜로 3구세트(혼합)</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide21">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom63.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>31,000</strong>원
                                </h1>
                                <h3>[더현대]비스테까 티라미수 골드피콜로 3구세트</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide1">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom50.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>21,000</strong>원
                                </h1>
                                <h3>[반달바닿] 일품 기장 우량다시마 300g</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide2">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom51.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>11,000</strong>원
                                </h1>
                                <h3>[반달바닿] 간편한 한끼미역 150g</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide3">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom52.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>14,000</strong>원
                                </h1>
                                <h3>[반달바닿] 완도 자른 다시마 200g</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide4">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom53.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>22,000</strong>원
                                </h1>
                                <h3>벨로타벨로타 투론 히호나 1+1</h3>                                
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide5">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom54.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>22,000</strong>원
                                </h1>
                                <h3>
                                벨로타벨로타 투론 알리칸테 1+1
                                </h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide6">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom55.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>36,000</strong>원
                                </h1>
                                <h3>[Bellota-Bellota] 뽈뽀</h3>                                
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide7">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom56.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>36,000</strong>원
                                </h1>
                                <h3>
                                [한결영농] 십장생 찹쌀 10kg
                                </h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide8">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom57.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>35,500</strong>원
                                </h1>
                                <h3>
                                [한결영농] 십장생 찰현미 10kg
                                </h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide9">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom58.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>24,500</strong>원
                                </h1>
                                <h3>
                                [한결영농] 고창 찰보리쌀 10kg
                                </h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide10">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom59.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>42,000</strong>원
                                </h1>
                                <h3>
                                [식도락푸드] 꽃게탕 밀키트 1.4kg (2∼3인분)+[식도락푸드] 꽃게어간장 500ml
                                </h3>
                              </div>
                              <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide11">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom60.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>34,000</strong>원
                                </h1>
                                <h3>
                                [식도락푸드] 순살간장게장 (124g/2)
                                </h3>
                              </div>
                              <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide12" >
                      <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom60.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>34,000</strong>원
                                </h1>
                                <h3>
                                [식도락푸드] 순살간장게장 (124g/2)
                                </h3>
                              </div>
                              <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide13">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom61.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>54,000</strong>원
                                </h1>
                                <h3>[에코솔트] 더 맑은 굵은소금 10kg</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide14">
                      <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom60.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>34,000</strong>원
                                </h1>
                                <h3>
                                [식도락푸드] 순살간장게장 (124g/2)
                                </h3>
                              </div>
                              <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide15">
                      <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom60.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>34,000</strong>원
                                </h1>
                                <h3>
                                [식도락푸드] 순살간장게장 (124g/2)
                                </h3>
                              </div>
                              <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide16">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom62.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>29,900</strong>원
                                </h1>
                                <h3>[이천] 이천미감 같이밥먹자 선물세트</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide17">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom63.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>45,900</strong>원
                                </h1>
                                <h3>[이천] 이천미감 풍요의 식탁 선물세트</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide18">
                      <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom60.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>34,000</strong>원
                                </h1>
                                <h3>
                                [식도락푸드] 순살간장게장 (124g/2)
                                </h3>
                              </div>
                              <div className="down-text-box">
                              <h5>현대백화점5%</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide19">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom45.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>45,000</strong>원
                                </h1>
                                <h3>[더현대]비스테까 티라미수 골드메디오 2구세트</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide20">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom48.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>33,000</strong>원
                                </h1>
                                <h3>[더현대]비스테까 티라미수 골드피콜로 3구세트(혼합)</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide21">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom49.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>31,000</strong>원
                                </h1>
                                <h3>[더현대]비스테까 티라미수 골드피콜로 3구세트</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점</h5>
                                <h3>무료배송</h3>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide1">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom50.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>21,000</strong>원
                                </h1>
                                <h3>[반달바닿] 일품 기장 우량다시마 300g</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide2">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom51.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>11,000</strong>원
                                </h1>
                                <h3>[반달바닿] 간편한 한끼미역 150g</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="bottom-slide slide3">
                        <ul>
                          <li>
                            <div className="bottom-slide-img-box">
                              <a href="!#">
                                <img src="./img/HSM/sub10/sickpoom52.jpg" alt="" />
                              </a>
                            </div>
                            <div className="bottom-slide-text-box">
                              <div className="up-text-box">
                                <h1>
                                  <strong>14,000</strong>원
                                </h1>
                                <h3>[반달바닿] 완도 자른 다시마 200g</h3>
                              </div>
                              <div className="down-text-box">
                                <h5>현대백화점5%</h5>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>
            
        </div>
    );
};

