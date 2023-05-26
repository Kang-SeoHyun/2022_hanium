import { useState } from 'react';
//페이지 이동
import { useNavigate } from 'react-router-dom' // 설치한 패키지
//헤더
import Header from '../components/Header';
import $ from 'jquery';

function Join(props) {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [err, setErr] = useState(false); //로그인 실패 state

    const joinSubmit = e => {
        e.preventDefault()
        alert('회원가입에 성공하였습니다.')
        navigate('/login')
    }

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        
        setErr(false)
    }



    //selectbox 생년월일 생성
    $(document).ready(function () {
        var now = new Date();
        var year = now.getFullYear();
        var mon = (now.getMonth() + 1) > 9 ? '' + (now.getMonth() + 1) : '0' + (now.getMonth() + 1);
        var day = (now.getDate()) > 9 ? '' + (now.getDate()) : '0' + (now.getDate());
    
        //년도 selectbox만들기               
        for (var i = 1900; i <= year; i++) {
        $('#year').append('<option value="' + i + '">' + i + '년</option>');
        }
    
        // 월별 selectbox 만들기            
        for (var i = 1; i <= 12; i++) {
        var mm = i > 9 ? i : "0" + i;
        $('#month').append('<option value="' + mm + '">' + mm + '월</option>');
        }
    
        // 일별 selectbox 만들기
        for (var i = 1; i <= 31; i++) {
        var dd = i > 9 ? i : "0" + i;
        $('#day').append('<option value="' + dd + '">' + dd + '일</option>');
        }
    
        if ($('#year > option').val() == '') {
        }


        
        $('#checkPassword').on('keyup', function(){
            var pww = $('#inputPassword').val();
            var pwck = $(this).val();

            if (pww != pwck) {
            $('#chk02').text('비밀번호가 일치하지 않습니다');
            
            } else {
            $('#chk02').text('');
            }

        });


    
    });


    return (

        <div className='screen'>
            <Header />
            <div className='container'>
                <div className='joinContainer'>
                    <div className='text-center title'>Join</div>
                    <div className='text-center'>회원가입 정보를 입력해주세요.</div>

                    <form className='g-3 loginForm' onSubmit={joinSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='inputemail' className='form-label label-required' >이메일</label>
                            <input type='email' className='form-control' id='inputEmail' placeholder='you@example.com' name="email" value={values.email} onChange={handleChange} required />
                        </div>
                        <div className='row'>
                            <div className="col-md-6 mb-3 d-flex flex-column">
                                <label htmlFor='inputPassword' className='form-label label-required'>비밀번호</label>
                                <input type='password' className='form-control' id='inputPassword' minLength={8} maxLength={20} placeholder='*한글, 영어 포함 8자 이상*' name="password" value={values.password} onChange={handleChange} 
                                pattern="^(?=.*[a-z])(?=.*[0-9]).{8,20}$" required/>

                            </div>
                            <div className="col-md-6 mb-3 d-flex flex-column">
                                <label htmlFor='checkPassword' className='form-label label-required'>비밀번호 확인</label>
                                <input type='password' className='form-control' id='checkPassword' minLength={8} maxLength={20} name="checkpassword" value={values.checkpassword} onChange={handleChange} 
                                pattern="^(?=.*[a-z])(?=.*[0-9]).{8,20}$" required/>

                                <p className="warning-text" id="chk02"/>
                            </div>
                        </div>

                        <hr className='mb-4'></hr>
                        
                        <div className='row mb-3'>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor='inputName' className='form-label label-required'>이름</label>
                                <input type='text' className='form-control' id='inputName' placeholder='홍길동' name="name" value={values.name} onChange={handleChange} required/>
                            </div>
                            <div className='col-6 d-flex flex-column'>
                                <label htmlFor='gender' className='form-label label-required'>성별</label>
                                <div className='gender-group'>
                                    <div className='custom-control custom-control-inline custom-radio'>
                                        <input type="radio" name="chk_gender" class="custom-control-input" value="남성"id="male" required></input>
                                        <label for="male" htmlfor="male" className="custom-control-label">남성</label>
                                    </div>
                                    <div className='custom-control custom-control-inline custom-radio'>
                                        <input type="radio" name="chk_gender" class="custom-control-input" value="여성"id="female" required></input>
                                        <label for="female" htmlfor="female" className="custom-control-label">여성</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-3 col-12 d-flex flex-column">
                            <label for="birth" className="form-label label-required">생년월일</label>
                            <div className="row">
                                <div className="col-4">
                                    <select className="form-select custom-select d-block w-100" id="year" name="yy" required>
                                        <option value=""> 년 </option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <select className="form-select custom-select d-block w-100" id="month" name="mm" required>
                                        <option value=""> 월 </option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <select className="form-select custom-select d-bloc w-100" id="day" name="dd" required>
                                        <option value=""> 일 </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='inputaddress' className='form-label'>주소</label>
                            <input type='text' className='form-control' id='inputAddress' name="address" value={values.address} onChange={handleChange} />
                        </div>

                        <hr className='mb-4'></hr>


                        <div className="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="aggrement01" required/>
                        <label className="custom-control-label" for="aggrement01">만 14세 이상입니다.<span className='warn'>(필수)</span></label>
                        </div>

                        <div className="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="aggrement02" required/>
                        <label className="custom-control-label" for="aggrement02">개인정보 수집 및 이용에 동의합니다.<span className='warn'>(필수)</span></label>
                        </div>

                        <button className={err ? "w-100 btn btn-lg btn-primary disabled" : "w-100 btn btn-lg btn-primary"} type="submit">Sign up</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Join;