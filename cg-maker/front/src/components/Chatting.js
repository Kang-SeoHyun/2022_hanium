import { useState } from "react";
import $ from 'jquery';

$(document).ready(function(){
    var nowHours = new Date().getHours().toString().padStart(2, '0');
    var nowMinutes = (new Date().getMinutes() - 1 ).toString().padStart(2, '0');
    var nowDate = nowHours + ':' + nowMinutes;
    $('.message-wrap .time').text(nowDate);
});

function Chatting(props) { //채팅 컴포넌트
    const [inputChat, setInputChat] = useState('');
    
    const userid = props.userid;

    const onChatChange = e => {
        setInputChat(e.target.value);
    }

    const onChatSubmit = e => {
        var messageHtml = '';
        $(document).ready(function(){
            var messageText = $('#floatingTextarea').val();
            var nowHours = new Date().getHours().toString().padStart(2, '0');
            var nowMinutes = new Date().getMinutes().toString().padStart(2, '0');
            var nowDate = nowHours + ':' + nowMinutes;
            
            messageHtml += '<li>';
            messageHtml += '<p class="user-name">한이음</p>';
            messageHtml += '<div class="message-wrap">';
            messageHtml += '<p class="message">';
            messageHtml += messageText;
            messageHtml += '</p>';
            messageHtml += '<span class="time">';
            messageHtml += nowDate;
            messageHtml += '</span>';
            messageHtml += '</div></li>';

            $('.chatList ul').append(messageHtml);
            $('#floatingTextarea').val('');

        });
    }


    return (
        <div className="chatContainer">
            <div className="chatList">
                <ul>
                    <li>
                        <p className="user-name">유진</p>
                        <div className="message-wrap">
                            <p className="message">재밋겟당~</p>
                            <span className="time"></span>
                        </div>
                    </li>
                    <li>
                        <p className="user-name">민혜</p>
                        <div className="message-wrap">
                            <p className="message">ㅋㅋ재규어 한 표</p>
                            <span className="time"></span>
                        </div>
                    </li>
                    <li>
                        <p className="user-name">서현</p>
                        <div className="message-wrap">
                            <p className="message">휴 잘 좀 해라</p>
                            <span className="time"></span>
                        </div>
                    </li>
                    <li>
                        <p className="user-name">중원</p>
                        <div className="message-wrap">
                            <p className="message">꿀잼~</p>
                            <span className="time"></span>
                        </div>
                    </li>
                    <li>
                        <p className="user-name">동영</p>
                        <div className="message-wrap">
                            <p className="message">직관하고싶다</p>
                            <span className="time"></span>
                        </div>
                    </li>
                    <li>
                        <p className="user-name">정희</p>
                        <div className="message-wrap">
                            <p className="message">ㅠㅠ배고파</p>
                            <span className="time"></span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="d-flex justify-content-between chatTextareaContainer">
                <textarea className="form-control" placeholder="의견을 자유롭게 입력하세요." id="floatingTextarea" value={inputChat} onChange={onChatChange} ></textarea>
                <button className="btn btn-primary" onClick={onChatSubmit}>
                    Send
                </button>
            </div>
        </div>
    )
}

export default Chatting;