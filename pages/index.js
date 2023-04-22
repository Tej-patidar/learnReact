import { useState } from "react";
import { nanoid } from "nanoid";
const index = () => {
const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")
const [tasks, setTasks] = useState("")

const todocreate=(e)=>{
e.preventDefault();
// console.log(object);
const todo={
  id:nanoid(),
  title,
  desc,

}
const copytasks=[...tasks];
copytasks.push(todo);
setTasks(copytasks);

// Shorthand of three lines is -- setTask[...task,todo]
console.log(todo);
setTitle(''),
setDesc('')
}

//   const changeHandler=(v)=>{
//     console.log('changed');
// console.log(v.target.value);
//   }
let taskslist=( <h4 className="p-2 bg-light">No task found in the Tasklist</h4> )
if(tasks.length > 0){
  taskslist=tasks.map((task,index)=>(
    <li className="d-flex justify-content-between p-4">{task.title} <i onClick={()=> deletehandler(task.id)} className="ri-delete-bin-2-fill text-danger"></i></li>
  )
)}
const deletehandler=(id)=>{
const copytasks=tasks.filter((task)=> task.id !== id);
console.log(copytasks);
setTasks(copytasks)
}
  return (
    <div className="container w-50 bg-light">
      <form onSubmit={todocreate}>
        <h1 className="bg-dark fw-light text-light">Create An Amazing ToDO List With Tarun</h1>
        <input type="text" placeholder="Title" className="form-control"
        onChange={(e)=>setTitle(e.target.value)} value={title}/><br />

        <input type="text" placeholder="Desc" className="form-control" onChange={(e)=>setDesc (e.target.value)} value={desc}/><br />
        <button className="btn btn-primary">Create Todo</button>
      </form>

      <hr />
      <h2>Pending Task</h2>
     {taskslist}
    </div>
  )
}

export default index;