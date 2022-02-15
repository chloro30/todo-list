import './scss/InputTodo.scss';
import { useState } from 'react';

export default function InputTodo({createInput, isClick, onInsert}) {
    //input에 입력한 값을 담아줄 변수를 state로 선언
    const [value, setValue] = useState("");

    //input에 입력한 값을 value에 저장하는 함수
    function onChange(e) {
        setValue(e.target.value);
    }

    //input에 값을 입력 완료 후 form을 submit하면 실행되는 함수
    function onSubmit(e) {
        e.preventDefault();
        onInsert(value);
        setValue("");
    }


    //'+'버튼 클릭하면 추가해줄 className
    const classn = isClick ? "clicked" : "";

    return (
        <form className="InputTodo" onSubmit={onSubmit}>
            <input className={classn} type="text" onChange={onChange} value={value} placeholder="할 일을 입력 후 Enter를 누르세요." />
            <button className={classn} type="button" onClick={() => createInput()}>
                <div>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </form>
    );
}