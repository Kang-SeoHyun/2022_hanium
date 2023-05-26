import { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom' // 설치한 패키지
import Chatting from "../components/Chatting";
//헤더
import Header from '../components/Header';
import $ from 'jquery';

function ProgramAttend(props) { //프로그램 클릭 후 입장한 화면(채팅, 투표가 가능하다.)
    const navigate = useNavigate();
    const [userid, setUserId] = useState(props.userid);

    /* useEffect(() => {
        if(userid === null){
            alert('로그인 후 이용 가능합니다.');
            navigate('/login');
        }
    }); */


    $(document).ready(function(){

        $('#btn01').on('click', function(){
            $('#vote01').css({
                width: '25%'
            });

            $('#vote01 b').text('메르세데스-EQ : 25%');
        })

    });

    return (

        <div className='screen'>
            <Header />
            <div className="d-flex justify-content-between container">
                <div className="videoFrame">
                    <div className="youtube">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/uiGN4yhsi7I?controls=0&amp;start=2013&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="vote-wrap">
                        <div class="vote-current">
                            <strong>시즌 FE 팀 우승 예상 투표</strong>
                            <div class="vote-currentbar">
                                <span id="vote01" style={{width: '21%'}}><b>메르세데스-EQ : 21%</b></span>
                                <span style={{width: '11%'}}><b>로킷 벤추리 레이싱 : 11%</b></span>
                                <span style={{width: '7%'}}><b>DS 테치타 : 7%</b></span>
                                <span style={{width: '28%'}}><b>재규어 TCS 레이싱 : 28%</b></span>
                                <span style={{width: '5%'}}><b>엔비전 레이싱 : 5%</b></span>
                                <span style={{width: '18%'}}><b>태그호이어 포르쉐 : 18%</b></span>
                                <span style={{width: '2%'}}><b>아발란치 안드레티 : 2%</b></span>
                                <span style={{width: '3%'}}><b>마힌드라 레이싱 : 3%</b></span>
                                <span style={{width: '3%'}}><b>닛산 E.DAMS : 3%</b></span>
                                <span style={{width: '1%'}}><b>니오 333 FE팀 : 1%</b></span>
                                <span style={{width: '1%'}}><b>드래곤/펜스케 오토스포트 : 1%</b></span>
                            </div>
                        </div>
                        <div class="vote-list">
                            <ul>
                                <li>
                                    <p>메르세데스-EQ</p>
                                    <button type="button" id="btn01" className="btn btn-outline-info btn-sm">vote</button>
                                </li>
                                <li>
                                    <p>로킷 벤추리 레이싱</p>
                                    <button type="button" className="btn btn-outline-info btn-sm">vote</button>
                                </li>
                                <li>
                                    <p>DS 테치타</p>
                                    <button type="button" className="btn btn-outline-info btn-sm">vote</button>
                                </li>
                                <li>
                                    <p>재규어 TCS 레이싱</p>
                                    <button type="button" className="btn btn-outline-info btn-sm">vote</button>
                                </li>
                                <li>
                                    <p>엔비전 레이싱</p>
                                    <button type="button" className="btn btn-outline-info btn-sm">vote</button>
                                </li>
                                <li>
                                    <p>태그호이어 포르쉐</p>
                                    <button type="button" className="btn btn-outline-info btn-sm">vote</button>
                                </li>
                                <li>
                                    <p>아발란치 안드레티</p>
                                    <button type="button" className="btn btn-outline-info btn-sm">vote</button>
                                </li>
                                <li>
                                    <p>마힌드라 레이싱</p>
                                    <button type="button" className="btn btn-outline-info btn-sm">vote</button>
                                </li>
                                <li>
                                    <p>닛산 E.DAMS</p>
                                    <button type="button" className="btn btn-outline-info btn-sm">vote</button>
                                </li>
                                <li>
                                    <p>니오 333 FE팀</p>
                                    <button type="button" className="btn btn-outline-info btn-sm">vote</button>
                                </li>
                                <li>
                                    <p>드래곤/펜스케 오토스포트</p>
                                    <button type="button" className="btn btn-outline-info btn-sm">vote</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Chatting userid={userid} />
            </div>
        </div>
    )
}

export default ProgramAttend;