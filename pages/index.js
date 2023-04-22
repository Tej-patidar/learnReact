import { useState } from "react";
import { nanoid } from "nanoid";
const index = () => {
const [title, setTitle] = useState("")
const [desc, setDesc] = useState("")

const todocreate=(e)=>{
e.preventDefault();
// console.log(object);
const todo={
  id:nanoid(),
  title,
  desc,

}
console.log(todo);
setTitle(''),
setDesc('')
}

//   const changeHandler=(v)=>{
//     console.log('changed');
// console.log(v.target.value);
//   }

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
     <li className="d-flex justify-content-between p-4">Item 1  <i className="ri-delete-bin-2-fill text-danger"></i></li>
    </div>
  )
}

export default index;