import React, { useState } from 'react'
import axios from 'axios'
import {useEffect} from 'react'

export function CreateUser() {

    const [datos, setDatos] = useState({
        username: '',
        users: []
    });

   const [username,users]=datos;

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        setDatos([...users, res.data]);
    };


    const onChangeUsername = e => {
        setDatos({
            username: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username: username
        });
        setDatos({ username: '' });
        getUsers();
    }

    const deleteUser = async (userId) => {
        const response = window.confirm('are you sure you want to delete it?');
        if (response) {
            await axios.delete('http://localhost:4000/api/users/' + userId);
            getUsers();
        }
    }


    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>Create New User</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                value={username}
                                type="text"
                                onChange={onChangeUsername}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                <ul className="list-group">
                    {
                        this.state.users.map(user => (
                            <li className="list-group-item list-group-item-action" key={user._id} onDoubleClick={() => deleteUser(user._id)}>
                                {user.username}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}


export default CreateUser;