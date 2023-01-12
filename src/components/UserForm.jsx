import React, { useEffect, useState } from 'react';

const UserForm = ({addUser, editedUser, updateUser}) => {

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [birthday, setBirthday] = useState("")

    useEffect(() => {
        if (editedUser !== null) {
            setName(editedUser.name)
            setLastName(editedUser.lastName)
            setEmail(editedUser.email)
            setBirthday(editedUser.birthday)
        }
    }, [editedUser])

    const submit = e => {
        e.preventDefault()
        const NewUser = {
            id: Date.now(),
            name: name,
            lastName: lastName,
            email: email,
            birthday: birthday
        }
        if (editedUser) {
            updateUser(NewUser)
        } else {
            addUser(NewUser)
        }
    }

    return (
        <form action="" onSubmit={submit} className="sign-up-card">
            <div>
                <label htmlFor="name">Name</label> <input id="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label> <input id="lastName" type="text" value={lastName} onChange={e => setLastName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">E-mail</label> <input id="email" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="birthday">Birthday</label> <input id="birthday" type="date" value={birthday} onChange={e => setBirthday(e.target.value)}/>
            </div>
            <button>Submit</button>
        </form>
    );
};

export default UserForm;