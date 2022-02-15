import './scss/Todolist.scss';
import { IoTrashOutline } from 'react-icons/io5';
import { MdOutlineCheckCircleOutline, MdRadioButtonUnchecked } from 'react-icons/md';

export default function Todolist({todos, isDoneToggle, deleteTodo}) {
    return (
        <div className="Todolist">
            {todos.map((todo, index) => (
                <div key={index} className={ (todo.isDone) ? 'item done': 'item' } >
                    <span className={(todo.isDone) ? 'checkbox checked' : "checkbox" }  onClick={() => isDoneToggle(todo.id)}>{(todo.isDone) ? <MdOutlineCheckCircleOutline /> : <MdRadioButtonUnchecked /> }</span>
                    <span className='text' onClick={() => isDoneToggle(todo.id)}>{todo.text}</span>
                    <span className='del'><span onClick={() => deleteTodo(todo.id)}><IoTrashOutline /></span></span>
                </div>
            ))}

{/*         예시
            <div className="item">
                <span className="checkbox">O</span>
                <span className="text">프로젝트 생성하기</span>
                <span className="del">삭제</span>
            </div>
            <div className="item">
                <span className="checkbox">O</span>
                <span className="text">프로젝트 생성하기</span>
                <span className="del">삭제</span>
            </div>
*/}

        </div>
    );
}