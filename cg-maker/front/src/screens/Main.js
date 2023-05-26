import { useEffect, useState } from 'react';
//페이지 이동
import { useNavigate } from 'react-router-dom' // 설치한 패키지
//헤더
import Header from '../components/Header';

function Main(props) {
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

    return (

        <div className='screen'>
            <Header />
            <div className='container'>
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
                    <p>현재 16개의 방송-채팅방이 활성화되어 있습니다.</p>
                    <input type="text" name="query" className="form-control my-3" placeholder="Search..." value=""/>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="clickable">제목
                                    <i className="fa fa sort-asc"></i></th>
                                <th className="clickable">분류</th>
                                <th className="clickable">방송 시간</th>
                                <th className="clickable">참여자 수</th>
                                <th className="clickable"></th>
                                <th className="clickable"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href="https://program.kbs.co.kr/1tv/sports/sportscast/pc/index.html">KBS 스포츠 중계석</a>
                                </td>
                                <td>스포츠</td>
                                <td>25:15</td>
                                <td>87657</td>
                                <td>
                                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                                </td>
                                <td>
                                    <a href="/Program" className="btn btn-success btn-sm">Join</a>
                                </td>
                                </tr><tr><td><a href="/movies/s0130">6시 내고향</a></td><td>시사/교양</td><td>18:00</td><td>865</td><td><i className="fa fa-heart-o" aria-hidden="true"></i></td><td><button className="btn btn-success btn-sm">Join</button></td></tr><tr><td><a href="/movies/mtwtf0900">KBS 아침 뉴스타임</a></td><td>뉴스</td><td>09:00</td><td>2342</td><td><i className="fa fa-heart-o" aria-hidden="true"></i></td><td><button className="btn btn-success btn-sm">Join</button></td></tr><tr><td><a href="/movies/ss2140">거상 김만덕</a></td><td>드라마</td><td>14:10</td><td>43243</td><td><i className="fa fa-heart-o" aria-hidden="true"></i></td><td><button className="btn btn-success btn-sm">Join</button></td></tr><tr><td><a href="/movies/s0010">독립영화관</a></td><td>영화</td><td>24:10</td><td>546</td><td><i className="fa fa-heart-o" aria-hidden="true"></i></td><td><button className="btn btn-success btn-sm">Join</button></td></tr></tbody></table><nav><ul className="pagination"><li className="page-item active"><a className="page-link">1</a></li><li className="page-item"><a className="page-link">2</a></li><li className="page-item"><a className="page-link">3</a></li><li className="page-item"><a className="page-link">4</a></li></ul></nav></div></div>

            </div>
        </div>
    )
}

export default Main;