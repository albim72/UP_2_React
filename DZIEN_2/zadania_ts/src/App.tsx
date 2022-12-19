import React,{useState,useEffect,useMemo,useCallback} from "react";
import List,{Todo} from "./List";

const initialTodos =[
  {id:1, task:'idź na koncert'},
  {id:2, task:'podpisz umowę'},
  {id:3, task:'stwórz nowego konto na serwerze'},
  {id:4, task:'idź na terning'}
]

function App(){
  const [todoList,setTodoList] = useState(initialTodos)
  const [task,setTask] = useState('')
  const [term,setTerm] = useState('')

  const printTodoList = useCallback(()=> {
    console.log('Modyfikowanie elementu todoList',todoList)
  },[todoList])

  useEffect(()=>{
    printTodoList()
  },[todoList,printTodoList])

  const handleCreate = () => {
    const newTodo = {
      id:Date.now(),
      task
    }
    setTodoList([...todoList,newTodo])
    setTask('')
  }
  const handleSearch = () => {
    setTerm(task)
  }

  const handleDelete = useCallback((taskId:number) => {
    const newTodoList = todoList.filter((todo:Todo)=>todo.id !== taskId)
    setTodoList(newTodoList)
  },[todoList])

  const filteredTodoList = useMemo(()=>todoList.filter((todo:Todo)=> {
    return todo.task.toLowerCase().includes(term.toLowerCase())
  }),[term,todoList])

  return (
      <div>
        <input
        type="text"
        value={task}
        onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleCreate}>Utwórz zadanie</button>
        <button onClick={handleSearch}>Szukaj zadanie</button>

        <List todoList={filteredTodoList} handleDelete={handleDelete}/>
      </div>
  )
}

export default App
