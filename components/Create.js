import React from 'react'
import { useState } from "react";
import { nanoid } from "nanoid";
const Create = (props) => {
    console.log(props);
    const {tasks, setTasks} = props;
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const todocreate = (e) => {
        e.preventDefault();
        // console.log(object);
        const todo = {
            id: nanoid(),
            title,
            desc,

        }
        // const copytasks = [...tasks];
        // copytasks.push(todo);
        // setTasks(copytasks);
        // Shorthand of three lines is -- setTask[...task,todo]
        setTasks([...tasks,todo]);
        console.log(todo);
        setTitle(''),
            setDesc('')
    }
    return (
<>
            {props.children}
        <div className="container w-50 bg-light">
            <form onSubmit={todocreate}>
                <h1 className="bg-dark fw-light text-light">Create An Amazing ToDO List With Tarun</h1>
                <input type="text" placeholder="Title" className="form-control"
                    onChange={(e) => setTitle(e.target.value)} value={title} /><br />

                <input type="text" placeholder="Desc" className="form-control" onChange={(e) => setDesc(e.target.value)} value={desc} /><br />
                <button className="btn btn-primary">Create Todo</button>
            </form>
        </div>
        </>
    )
}

export default Create;