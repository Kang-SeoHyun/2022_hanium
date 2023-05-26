import { useEffect, useState } from 'react';
import $ from 'jquery';
//페이지 이동
import { useNavigate } from 'react-router-dom' // 설치한 패키지
//헤더
import Header from '../components/Header';
import Popup from "../components/Popup";

import Img01 from '../assets/img/programLogo1.jpg';
import Img02 from '../assets/img/programLogo2.png';
import Img03 from '../assets/img/programLogo3.jpg';
import Img04 from '../assets/img/programLogo4.jpg';
import Img05 from '../assets/img/programLogo5.jpg';
import Img06 from '../assets/img/programLogo6.jpg';

function Data(props) {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const userid = props.userid;

    useEffect(() => {
        if(userid){
            alert('로그인 되어있습니다.');
            navigate('/')
        }
    })

    const [err, setErr] = useState(false); //로그인 실패 state

    const loginSubmit = e => {
        e.preventDefault()
        const { email, password } = values;
        //더미데이터
        if (email === 'junghee0592@gmail.com' && password === '12341234') {
            //localStorage 추가
            localStorage.setItem('user', email);
            navigate('/')
        }
        else {
            alert('입력한 아이디와 비밀번호를 확인하세요.');
            setErr(true);
        }

    }

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
        setErr(false)
    }

    $(document).ready(function(){
        $('.data-cardlist li').on('click', function(){
            var thisPopup = $(this).attr('data-open');
            
            $('.popup-container').hide();

            $('.popup-wrap').show();
            $("#"+thisPopup).show();
        });
    });

    return (

        <div className='screen'>
            <Header />
            <div className='container data'>
                <div className="row">
                    <div className="col-3 m-2">
                        <div>
                            <ul className="list-group">
                                <li className="list-group-item active">All Genres</li>
                                <li className="list-group-item">뉴스</li>
                                <li className="list-group-item">시사/교양</li>
                                <li className="list-group-item">드라마</li>
                                <li className="list-group-item">예능</li>
                                <li className="list-group-item">스포츠</li>
                                <li className="list-group-item">어린이</li>
                                <li className="list-group-item">영화</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col m-2">
                        <div className="data-cardlist">
                            <ul>
                                <li data-open="popup01">
                                    <div className="card-thumb">
                                        <img src={Img01}/>
                                    </div>
                                    <div className="card-info">
                                        <strong><em>진행중</em>뮤직뱅크</strong>
                                        <p>예상 1위 후보는?</p>
                                        <span>2022.10.06</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="card-thumb">
                                        <img src={Img02}/>
                                    </div>
                                    <div className="card-info">
                                        <strong>신상출시 편스토랑</strong>
                                        <p>내가 제일 먹고 싶은 이번 주 신상은?</p>
                                        <span>2022.10.01</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="card-thumb">
                                        <img src={Img03}/>
                                    </div>
                                    <div className="card-info">
                                        <strong>으라차차 내 인생</strong>
                                        <p>내가 생각하는 연말 베스트 커플 상은?</p>
                                        <span>2022.09.30</span>
                                    </div>
                                </li>
                                <li data-open="popup02">
                                    <div className="card-thumb">
                                        <img src={Img04}/>
                                    </div>
                                    <div className="card-info">
                                        <strong>1박 2일</strong>
                                        <p>가장 보고싶은 다음 주 여행지는?</p>
                                        <span>2022.09.24</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="card-thumb">
                                        <img src={Img05}/>
                                    </div>
                                    <div className="card-info">
                                        <strong>우리말 겨루기</strong>
                                        <p>우승할 것 같은 팀은?</p>
                                        <span>2022.09.19</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="card-thumb">
                                        <img src={Img06}/>
                                    </div>
                                    <div className="card-info">
                                        <strong>TV쇼 진품명품</strong>
                                        <p>내 예상 가격은?</p>
                                        <span>2022.09.18</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <nav><ul class="pagination"><li class="page-item active"><a class="page-link">1</a></li><li class="page-item"><a class="page-link">2</a></li><li class="page-item"><a class="page-link">3</a></li><li class="page-item"><a class="page-link">4</a></li></ul></nav>
                    </div>
                </div>
            </div>
            <Popup />
        </div>
    )
}

export default Data;