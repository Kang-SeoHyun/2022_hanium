import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import logo from '../assets/img/cgLogo.png';
import { useState } from 'react';

function Header() {
    const [isLogin, setIsLogin] = useState(localStorage.getItem('user'));

    const logout = e => {
       let result = window.confirm('정말 로그아웃 하시겠습니까?') 
       if(result) 
        localStorage.clear();
    }

    return (
        <nav className="nav headerNav">
            <a href="http://localhost:3001/"><img src={logo} /></a>
            <div>
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link" href="/data">데이터 차트</a>
                    </li>
                    {
                        isLogin ? 
                            <li className="nav-item d-flex">
                            <a className="nav-link" href="/" onClick={logout}>로그아웃</a>
                            <a className="nav-link" href="/dashboard">마이페이지</a>
                            </li>
                        :
                            <li className="nav-item">
                                <a className="nav-link" href="/login">로그인</a>
                            </li>
                    }

                </ul>
            </div>

        </nav>
    );
}

export default Header;