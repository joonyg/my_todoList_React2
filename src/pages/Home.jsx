import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import todomodule, {
  addTodo,
  switchTodo,
  delTodo,
} from '../redux/modules/todomodule'

function Home() {
  const gettodo = useSelector(state => state.todosmd)

  console.log(gettodo)

  const dispatch = useDispatch()
  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')

  const inputTitle = event => {
    settitle(event.target.value)
  }
  const inputContent = event => {
    setcontent(event.target.value)
  }

  const newgetTodo = () => {
    dispatch(
      addTodo({
        id: String(gettodo.length + 1),
        title: title,
        content: content,
      })
    )
  }
  const successBt = id => {
    dispatch(switchTodo(id))
  }

  const deleteBt = id => {
    dispatch(delTodo(id))
  }
  return (
    <TodoBox>
      제목 :{' '}
      <input
        value={title}
        onChange={event => {
          inputTitle(event)
        }}
      />
      내용 :{' '}
      <input
        value={content}
        onChange={event => {
          inputContent(event)
        }}
      />
      <button onClick={newgetTodo}>추가하기</button>
      <div>
        미완료된거
        -----------------------------------------------------------------------------------------------------
      </div>
      {gettodo
        .filter(item => item.isDone === false)
        .map(todo => (
          <div key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.contents}</p>
            <button onClick={() => successBt(todo.id)}>완료버튼</button>
            <button onClick={() => deleteBt(todo.id)}>삭제버튼</button>
          </div>
        ))}
      <div>
        완료된거-----------------------------------------------------------------------------------------------------
        {gettodo
          .filter(item => item.isDone === true)
          .map(todo => (
            <div key={todo.id}>
              <p>{todo.title}</p>
              <p>{todo.contents}</p>
              <button onClick={() => successBt(todo.id)}>완료버튼</button>
              <button onClick={() => deleteBt(todo.id)}>삭제버튼</button>
            </div>
          ))}
      </div>
    </TodoBox>
  )
}

const TodoBox = styled.div`
  background-color: gray;
`

export default Home
