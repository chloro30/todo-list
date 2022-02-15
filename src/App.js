import './App.css';
import TodayTemplate from './components/TodayTemplate';
import TodayTitle from './components/TodayTitle';
import Todolist from './components/Todolist';
import AddTodo from './components/AddTodo';
import { useState, useRef } from 'react'; 


function App() {

  //할 일 들을 담은 배열을 state로 선언
  const [todos, setTodos] = useState(
    [
      {
        id: 1,
        text: "점심 메뉴 정하기",
        isDone: true        
      },
      {
        id: 2,
        text: "리액트 공부하기",
        isDone: false        
      },
      {
        id: 3,
        text: "TypeScript 공부하기",
        isDone: false
      }
    ]
  );
  
  //id에 사용할 고유 숫자를 생성
  const idx = useRef(4);


  //todos 배열 변수에 value를 추가하는 함수
  function onInsert(value) {
    const todo = {
      id: idx.current,
      text: value,
      isDone: false
    }

    setTodos( [...todos, todo] ); //spread구문.. 
                                  //todos에 기존배열 todos를 넣고, 추가로 todo를 추가한다.

    idx.current += 1;
  }

  //할 일을 toggle 하면 해당 id의 todo.isDone이 반전되는 함수
  function isDoneToggle(id) {
    setTodos(
      todos.map(todo => (todo.id === id) ? {...todo, isDone: !todo.isDone} : todo)
    );
  }

  //삭제를 클릭하면 해당 요소를 todos에서 제거되는 함수
  function deleteTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    );
  }





  
  //미완료(isDone이 false)인 할 일들의 갯수
  const remain = todos.filter(todo => todo.isDone === false).length;

  //'+'버튼을 클릭한 상태인지 관리하는 state    => state가 변경될 때 재렌더링 되므로 재렌더링을 위해 state로 다룬다.
  const [ isClick, setIsClick ] = useState(false);
  
  //버튼을 클릭하면 입력창이 나오도록 className을 변경해주는 함수
  function createInput() {
    // alert('클릭!');
    setIsClick(!isClick);
  }

  return (
    <div className="App">
      <TodayTemplate>
        <TodayTitle remain={remain} />
        <Todolist todos={todos} isDoneToggle={isDoneToggle} deleteTodo={deleteTodo} />
        <AddTodo createInput={createInput} isClick={isClick} onInsert={onInsert}/>
      </TodayTemplate>
    </div>
  );
}

export default App;
