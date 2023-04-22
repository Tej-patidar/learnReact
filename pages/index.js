import Create from "@/components/Create"
import { useState } from "react"

const index = () => {

const [tasks, setTasks] = useState([])




//   const changeHandler=(v)=>{
//     console.log('changed');
// console.log(v.target.value);
//   }
let taskslist=( <h4 className="p-2 bg-light">No task found in the Tasklist</h4> )
if(tasks.length > 0){
  taskslist=tasks.map((task,index)=>(
    <li key={task.id} className="d-flex justify-content-between p-4">{task.title} <i onClick={()=> deletehandler(task.id)} className="ri-delete-bin-2-fill text-danger"></i></li>
  )
)}
const deletehandler=(id)=>{
const copytasks=tasks.filter((task)=> task.id !== id);
console.log(copytasks);
setTasks(copytasks)
}
  return (
    
<div>
  <Create/>
      <hr />
      <h2>Pending Task</h2>
     {taskslist}
    </div>
  )
}

export default index;