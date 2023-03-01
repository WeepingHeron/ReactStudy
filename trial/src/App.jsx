import React, { useState } from 'react';
import './App.css'

/**
 * 기능 구현
 * 1. 완료하기 / 완료취소하기 (위치 이동)                                    INITIAL_STATE에 isDone추가하고 false/true 오가게 만들기
 * 2. 삭제하기                                                              onDeleteHandler를 만들고 filter를 썼었다, filter로 억지 조건을 써서 없애버리기
 * 
 * 그 후에 고민할 것
 * 1. 컴포넌트 분리 (Card)
 *    <li>
          <strong>{todo.title}</strong>
          <p>{todo.body}</p>
      </li>
      이 부분을 components/Card.jsx 로 분리해주세요.
    
 * 2. css수정
 */

export default function App(){
  const INITIAL_STATE = [                                                    // isDone 추가로 완료/취소 기초 만들기
    {
      id: 1,
      title:'할 일 제목1',
      body: '할 일 내용1',
      isDone: false
    },
    {
      id: 2,
      title:'할 일 제목2',
      body: '할 일 내용2',
      isDone: false
    },
    {
      id: 3,
      title:'할 일 제목3',
      body: '할 일 내용3',
      isDone: true
    }
  ]

  const [todoList, setTodoList] = useState(INITIAL_STATE)                   // setTodoList를 어디에 써야할까

  const addList = (event) => {                                    
    const newTodo = {id:4, title, body, isDone: false}                                                                         // 이걸로 추가 구현, event를 쓴 건 기억나는데 어떻게 쓰는지는 기억이 나지 않는다...
    setTodoList([...todoList, newTodo])                          // 추가는 되는데 title과 body를 가져와야 한다
    }

//   const deleteList = (event) => {
//   setTodoList(todoList.filter(id !== title))                              // 충족할 수 없는 조건을 !==로 넣어서 해당 todo 지우고 나머지 살리기
//     }

//   const doneList = (event) => {
//   setTodoList(isDone)                                                     // isDone false에서 true로
//   }

//   const undoList = (event) => {
//   setTodoList(isDone)                                                     // isDone true에서 false로
//   }

  const [title, setTitle] = useState()

  const [body, setBody] = useState()

  return <>
      <header className='header'>
        <h1>My Todo List</h1>
      </header>
      
      <section className="input-list">
        <div>
          <label htmlFor="title">제목</label>
          <input id="title" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div>
          <label htmlFor="body">내용</label>
          <input id="body" type="text" value={body} onChange={(event) => setBody(event.target.value)}/>
        </div>
        <button onClick={addList}>추가하기</button>
      </section>

      <section>
        <ul>
          {
          todoList.map((todo) => {
            return todo.isDone===false && <li>
              <strong>{todo.title}</strong>
              <p>{todo.body}</p>
            </li>
          })
          }
        </ul>
        <ul>
            <button onClick>삭제하기</button>
        </ul>

        <ul>
          {    
          todoList.map((todo) => {
            return todo.isDone && <li>
              <strong>{todo.title}</strong>
              <p>{todo.body}</p>
            </li>
          })
          }
        </ul>
        <ul>
            <button onClick>삭제하기</button>
        </ul>
      </section>
  </>
}

// 1. input에 onChange를 사용하는 이유
// 먼저 HTML <input> 요소는 웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤을 생성한다.
// onchange는 user가 어떠한 element의 select를 변경했을 시 작동한다.
// ex) <select onchange = 'myFunction()'>
// onchange는 HTML element의 value의 변동이 있을 때 작동한다.
// 텍스트 입력 요소인 경우에는 요소 변경이 끝날 때가 아니라 포커스를 잃을 때 이벤트가 발생한다.
// 그래서 input에 onChange를 사용하는 이유는
// 웹 기반 양식에서 value의 변동이 있을 경우 특정 함수가 작동하기 위한 트리거를 발생시키기 위함이다.

// 2. onChange의 (event)=>event.target.value가 의미하는 것
// e.target은 특정 이벤트가 발생하는 태그를 가리킨다. 그렇기 때문에 input태그를 가리키게 된다.
// 그러므로 이 때 e.target value는 input태그에 입력되는 값을 의미한다. 


// 3. body input 연결해서 해당 값으로 새 카드 생성하기


// 4. input의 value가 의미하는것
// input태그가 생성한 대화형 컨트롤에 작성된 사용자의 데이터를 의미한다.

// + React에서는 false를 반환해도 기본 동작을 방지할 수 없다. 반드시 preventDefault를 명시적으로 호출해야 한다.