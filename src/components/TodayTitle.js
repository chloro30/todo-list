import './scss/TodayTitle.scss';
import { useState } from 'react';

/*
날짜와 시간에 대한 정보값을 얻거나 설정할 수 있는 객체

Date객체 생성방법
let date = new Date();

Date 객체 주요 메소드
    getFullYear() : 4자리 연도 값을 반환
    getMonth() : 월 값을 반환 (0~11)
                 1월을 0월로 표현하기 때문에 +1을 해주어야 함.
    getDate() : 일 값을 반환
    getDay() : 요일 값을 반환 (0~6)
               0(일요일), ... , 6(토요일)
    getHours() : 시간 값을 반환 (0~23)
    getMinutes() : 분 값을 반환 (0~59)
    getSeconds() : 초 값을 반환 (0~59)
    toLocaleDateString() : 지역의 날짜 정보로 문자열을 반환
    toLocaleTimeString() : 지역의 시간 정보로 문자열을 반환
*/

export default function TodayTitle({remain}) {
    
    const date = new Date();
    let day='O요일';

    switch(date.getDay()) {
        case 0:
            day='일요일';
            break;
        case 1:
            day='월요일';
            break;
        case 2:
            day='화요일';
            break;
        case 3:
            day='수요일';
            break;
        case 4:
            day='목요일';
            break;
        case 5:
            day='금요일';
            break;
        case 6:
            day='토요일';
            break;
    }

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    

    setInterval(() => {
        const today = new Date();

        setHours(today.getHours());
        setMinutes(today.getMinutes());
        setSeconds(today.getSeconds());
        
    }, 500);
    

    return (
        <div className='TodayTitle'>
            <div className="date">{date.getFullYear()}년 {date.getMonth()+1}월 {date.getDate()}일</div>
            <p className="day">{day}</p>
            <div className="rest">
                <span>할 일: <span>{remain}개 남음</span></span>
                <span className='restTime'>남은 하루: {(23-hours) >= 10 ? (23-hours) : '0'+(23-hours) }시간 {( (59-minutes) > 9) ? 59-minutes : '0'+ (59-minutes) }분 {((59-seconds) > 9 ? (59-seconds) : '0'+ (59-seconds) )}초</span>
            </div>
        </div>
    );
}