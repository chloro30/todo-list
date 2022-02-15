import './scss/AddTodo.scss';
import InputTodo from './InputTodo';

export default function AddTodo({createInput, isClick, onInsert}) {
    const classn = isClick ? "clicked" : "";

    return (
        <div className={`AddTodo ${classn}`}>
            <InputTodo createInput={createInput} isClick={isClick} onInsert={onInsert} />
        </div>
    );
}