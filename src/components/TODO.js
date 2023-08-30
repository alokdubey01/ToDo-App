import React, { useEffect, useState } from 'react'
import { IoIosRemove } from 'react-icons/io'
import { BsCheckLg, BsCheck, BsStopwatch, BsPlus } from 'react-icons/bs'
import { BiDotsHorizontalRounded, BiEdit } from 'react-icons/bi'
import axios from 'axios'
import { FiEdit3 } from 'react-icons/fi'

export default function TODO() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('')
  const [todoEditing, setTodoEditing] = useState(null)
  const [todoUpdate, setTodoUpdate] = useState(null)
  const [showInput, setShowInput] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      text: todo,
      completed: false,
      date: new Date().toLocaleDateString()
    }

    axios.post('http://localhost:5000/todo', newTodo)
      .then(res => {
        console.log(res.data);
        setTodo('')
      })
      .catch(err => {
        console.log(err);
      })
  }

function updateTodo(e, id){
  e.stopPropagation()
  setTodoUpdate(id)
}

function handleUpdate(e){
  e.preventDefault()
  
  axios.put(`http://localhost:5000/todo/${todoUpdate}`, {text: todoEditing})
    .then(res => {
      console.log(res.data);
      setTodoUpdate(null)
      setTodoEditing(null)
    })
    .catch(err => {
      console.log(err);
      setTodoUpdate(null)
      setTodoEditing(null)
    })
}

  // getting the event and the id
  function deleteTodo(e, id) {
    e.stopPropagation()

    axios.delete(`http://localhost:5000/todo/${id}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  function completeTodo(e, id) {
    e.stopPropagation()

    axios.patch(`http://localhost:5000/todo/${id}`, { completed: true })
      .then(res => {
        console.log(res.data);
        axios.post('http://localhost:5000/doing', {
          text: res.data.text,
          date: res.data.date
        })
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    const getTodos = async () => {
      await axios.get('http://localhost:5000/todos')
        .then(res => {
          setTodos(res.data)
        })
        .catch(err => {
          console.log(err);
          window.location.reload()
        })
    }

    getTodos()
  })

  return (
    <div className="justify-between items-center mb-4">
      <div className='flex justify-between items-center bg-white rounded-md py-3 px-4 m-4 w-auto'>
        <h1 className="font-bold uppercase">Todo List</h1>
        <div className="flex gap-2">
          <button className='bg-[#eaeaea] cursor-pointer items-center justify-center rounded-full p-0.5' onClick={() => setShowInput(!showInput)}>{showInput ? <IoIosRemove /> : <BsPlus />}</button>
          <button className='bg-[#eaeaea] cursor-pointer items-center justify-center rounded-full flex gap-0 p-0.5'>
            <BiDotsHorizontalRounded />
          </button>
        </div>
      </div>
      {showInput === true && (<div className="h-auto w-full flex items-center justify-center">
        <div className="bg-white rounded-md px-6 py-3 m-4 mt-0 w-full">
          <div>
            <div className="items-center">
              <form onSubmit={handleSubmit}>
                <input type='text' className="w-full outline-none" placeholder='Enter a title...' value={todo} onChange={(e) => setTodo(e.target.value)} />
              </form>
            </div>
          </div>
        </div>
      </div>)}
      <>
        {todos.length === 0 ? (<>
          {showInput === false ? (<div className="h-auto w-full flex items-center justify-center">
            <div className="bg-white rounded-md px-6 py-3 m-4 mt-0 w-full">
              <div>
                <div className="items-center">
                  <form onSubmit={handleSubmit}>
                    <input type='text' className="w-full outline-none" placeholder='Enter a title...' value={todo} onChange={(e) => setTodo(e.target.value)} />
                  </form>
                </div>
              </div>
            </div>
          </div>) : null}
        </>) : (<div className="h-auto w-full flex items-center justify-center">
          <div className="w-full">
            {todos.map((todo, index) => (
              <div className={`${todo.completed === false ? 'bg-white' : 'bg-slate-200'} rounded-md p-6 m-4 mt-0`} key={index}>
                <div className="flex justify-between items-center mb-4">
                  <h1 className="flex items-center justify-center text-[11px] gap-1">
                    <BsStopwatch className='text-[11px]' />
                    {todo.date}
                  </h1>
                  {todo.completed === false ? (<div className="flex gap-2">
                    <div className='bg-blue-400 text-white cursor-pointer rounded-full p-0.5' onClick={(e) => completeTodo(e, todo._id)}><BsCheck /></div>
                    <button className='bg-green-400 text-white cursor-pointer items-center justify-center rounded-full flex gap-0 p-1' onClick={(e) => updateTodo(e, todo._id)}>
                      <FiEdit3 className="text-xs" />
                    </button>
                    <div className='bg-red-500 text-white cursor-pointer rounded-full flex gap-0 p-0.5' onClick={(e) => deleteTodo(e, todo._id)}>
                      <IoIosRemove />
                    </div>
                  </div>) : null}
                </div>
                <div>
                  <div className="items-center">
                    {todoUpdate === todo._id ? (<form onSubmit={handleUpdate}>
                      <input type='text' className="w-full outline-none" placeholder='Enter a title...' defaultValue={todo.text} onChange={(e) => setTodoEditing(e.target.value)} />
                    </form>) : (<p className="w-full text-base font-semibold">{todo.text}</p>)}
                    <div className='flex justify-between gap-1 w-6/12 mt-2'>
                      <div className='h-1 w-8 bg-slate-300 rounded-full' />
                      <div className='h-1 w-8 bg-sky-300 rounded-full' />
                      <div className='h-1 w-8 bg-orange-300 rounded-full' />
                      <div className='h-1 w-8 bg-green-300 rounded-full' />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>)}
      </>
    </div>
  )
}
