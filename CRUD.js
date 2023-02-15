import React, { useState } from "react";


const IntialValues = [
    {
        id: 1,
        email:"srinu@gmail.com",
        name:"srinivas",
        job:"frontEnd"
    },
    {
        id: 2,
        email:"hari@gmail.com",
        name:"hari",
        job:"backend"
    },
    {
        id: 3,
        email:"vikram@gmail.com",
        name:"vikram",
        job:"ux"
    },
    {
        id: 4,
        email:"vignesh@gmail.com",
        name:"srivigneshnivas",
        job:"ui"
    }, 
];
const App = () => {
    const [user, setUser] = useState(IntialValues);
    const [create, setCreate] = useState({ email:"",name: "", id: "", job: "" });

    // targating values
    const InputChange = (e) => {
        setCreate({ ...create, [e.target.name]: e.target.value })
    }

    // Add user values
    const AddUser = () => {
        setUser((prev) => [...prev, create]);
        setCreate({ email:"",name: "", id: "", job: "" });
    };

    // delete fn
    const deletHandler = (id) => {
        const deleteEntry = user.filter((obj) => {
            return obj.id !== id;
        });
        setUser(deleteEntry);
    };

     // update fn
    const handletheUpdate = (obj) => {
        setCreate(obj);
    };
    return (
        <div>
            <h1> create user</h1>
            <div>
                <p><input value={create.id} name="id" onChange={(e) => InputChange(e)} placeholder="enter Id" /></p>
                <p><input value={create.email} name="email" onChange={(e) => InputChange(e)} placeholder="enter Email" /></p>
                <p><input value={create.name} name="name" onChange={(e) => InputChange(e)} placeholder="enter Name" /></p>
                <p><input value={create.job} name="job" onChange={(e) => InputChange(e)} placeholder="enter Job" /></p>
                <button onClick={AddUser}> Add</button>
            </div>
            {user.map((obj) => {
                return (
                    <div className="cards">
                        <h4>
                            <span style={{ marginRight: "1rem" }}>{obj.id}</span>
                            <span style={{ marginRight: "1rem" }}>{obj.email}</span>
                            <span style={{ marginRight: "1rem" }}>{obj.name}</span>
                            <span style={{ marginRight: "1rem" }}>{obj.job}</span>
                            <button onClick={() => { handletheUpdate(obj) }}>update</button>
                            <button onClick={() => { deletHandler(obj.id) }}> delete</button>
                        </h4>
                    </div>
                );
            })}
        </div>
    );
};
export default App;
