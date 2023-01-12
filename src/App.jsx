import { useEffect, useState } from 'react'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import './App.css'
import axios from 'axios'

function App() {

  const [finalUserList, setFinalUserList] = useState([])
  const [editedUser, setEditedUser] = useState(null)

  useEffect(() => {
    axios.get('https://users-crud1.herokuapp.com/swagger')
    .then(res => setFinalUserList(res.data))
  }, [])

  const getProducts = () => {
    axios.get('https://users-crud1.herokuapp.com/swagger')
    .then(res => setFinalUserList(res.data))
  }

  const addUser = (NewUser) => {
    setFinalUserList([...finalUserList, NewUser],
      axios.post('https://users-crud1.herokuapp.com/swagger', NewUser))
      .then(() => getProducts)
  }

  const editUser = (user) => {
    setEditedUser(user)
  }

  const updateUser = (user) => {
    user.id = editedUser.id
    const index = finalUserList.findIndex(user => user.id === editedUser.id)
    finalUserList[index] = user
    setFinalUserList([...finalUserList])
  }

  const deleteUser = (user) => {
    const filter = finalUserList.filter( item => item.id !== user.id )
    setFinalUserList(filter)
  }

  return (
    <div className="App">
      <UserForm addUser={addUser}
                editedUser={editedUser}
                updateUser={updateUser}/>
      <UserList userList={finalUserList}
                deleteUser={deleteUser}
                editUser={editUser}/>
    </div>
  )
}

export default App
