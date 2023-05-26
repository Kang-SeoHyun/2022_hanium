import { useEffect, useState } from 'react';
//페이지 이동
import { useNavigate } from 'react-router-dom' // 설치한 패키지
//헤더
import Header from '../components/Header';

function Login(props) {
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

    const onClickJoin = e => {
        navigate('/join')
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
                <div className='loginContainer'>
                    <div className='text-center title' >Login</div>
                    <div className='text-center'>회원가입한 아이디와 비밀번호를 입력해주세요.</div>

                    <form className='row g-3 loginForm' onSubmit={loginSubmit}>
                        <div className='col-12 d-flex flex-column'>
                            <label htmlFor='inputID' className='form-label'>ID</label>
                            <input type='email' className='form-control' id='inputID' placeholder='cgmaker2022@cg.com' name="email" value={values.email} onChange={handleChange} />
                        </div>
                        <div className="col-12 d-flex flex-column">
                            <label htmlFor='inpuPassword' className='form-label'>PASSWORD</label>
                            <input type='password' className='form-control' id='inpuPassword' minLength={8} placeholder='*한글, 영어 포함 8자 이상*' name="password" value={values.password} onChange={handleChange} />
                        </div>

                        <button className={err ? "w-100 btn btn-lg btn-primary disabled" : "w-100 btn btn-lg btn-primary"} type="submit">Sign in</button>
                    </form>
                    <div onClick={onClickJoin}>회원가입</div>
                </div>

            </div>
        </div>
    )
}

export default Login;