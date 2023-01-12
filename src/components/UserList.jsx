import React from 'react';

const UserList = ({userList, deleteUser, editUser}) => {
    return (
        <div className='registered-list'>
            <h1>Registered Users</h1>
            <div className='user-list'>
                {userList.map( user => (
                    <div className='user-card' key={user.id}>
                        <p><b>Name: </b>{user.name}</p>
                        <p><b>Last Name: </b>{user.lastName}</p>
                        <p><b>Email: </b>{user.email}</p>
                        <p><b>Birthday: </b>{user.birthday}</p>
                        <button onClick={() => deleteUser(user)}>Delete</button>
                        <button onClick={() => editUser(user)}>Edit</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;