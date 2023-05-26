import { useState } from "react";
import $ from 'jquery';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['NCT 127', 'IVE (아이브)', 'NMIXX', 'NewJeans', '소녀시대', 'ITZY (있지)'],
    datasets: [
      {
        label: '# of Votes',
        data: [403, 1106, 0, 480, 665, 336],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  export const data02 = {
    labels: ['전라남도 벌교읍', '충청남도 계룡산', '경상북도 울진군', '인천광역시 백령도'],
    datasets: [
      {
        label: '# of Votes',
        data: [15, 11, 7, 17],
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  $(document).ready(function(){
        $('.popup-header .btn-close, .popup-bg').on('click', function(){
            $('.popup-container').hide();
            $('.popup-wrap').hide();
        });
    });


function Popup(props) { //팝업 컴포넌트

    return (
        <div className="popup-wrap">
            <div className="popup-container" id="popup01">
                <div className="popup-header">
                    <strong>뮤직뱅크</strong>
                    <button type="button" className="btn-close">닫기</button>
                </div>
                <div className="popup-info">
                    <strong>예상 1위 후보는?</strong>
                    <div className="chart-wrap">
                        <Pie data={data} />
                    </div>
                </div>
            </div>

            <div className="popup-container" id="popup02">
                <div className="popup-header">
                    <strong>1박2일</strong>
                    <button type="button" className="btn-close">닫기</button>
                </div>
                <div className="popup-info">
                    <strong>예상 1위 후보는?</strong>
                    <div className="chart-wrap">
                        <Pie data={data02} />
                    </div>
                </div>
            </div>

            <div className="popup-bg"></div>
        </div>
    )
}

export default Popup;