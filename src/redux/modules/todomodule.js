const ADD_TODO = 'todomodule/ADD_TODO'
const DELETE_TODO = 'todomodule/DELETE_TODO'
const SWITCH_TODO = 'todomodule/SWITCH_TODO'

export const addTodo = payload => ({
  type: ADD_TODO,
  payload: payload,
})
export const delTodo = id => ({
  type: DELETE_TODO,
  payload: { id },
})

export const switchTodo = id => ({
  type: SWITCH_TODO,
  payload: { id },
})

const initialState = [
  {
    id: '1',
    title: '제목',
    contents: '내용',
    isDone: false,
  },
  {
    id: '2',
    title: '제목2',
    contents: '내용2',
    isDone: false,
  },
]

const todosmd = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: action.payload.id,
        title: action.payload.title,
        contents: action.payload.content,
        isDone: false,
      }
      return [newTodo, ...state]
    case DELETE_TODO:
      const delid = action.payload.id
      const delbt = state.filter(item => item.id !== delid)
      return delbt
    case SWITCH_TODO:
      const onSuccessBT = action.payload.id
      return state.map(todo => {
        if (todo.id === onSuccessBT) {
          return { ...todo, isDone: true }
        }
        return todo
      })

    default:
      return state
  }
}

export default todosmd
