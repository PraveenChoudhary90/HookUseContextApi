
import { useContext } from 'react'
import './App.css'
import Authapp from './AuthApp'
import UnAuthapp from './UnAuthApp'
import { mylogcontext } from './LoginContext'

function App() {
 
const {user} = useContext(mylogcontext);
  return (
    <>
      <h1>Welcome To My Login App</h1>
      {user.auth?<Authapp/>: <UnAuthapp/>}
    </>
  )
}

export default App
