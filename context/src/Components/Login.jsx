import React, {useState, useContext} from 'react'
import UserContext from '../context/usercontext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }


  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl mb-6 text-center">Login</h2>
      
      {/* Username Input */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
        />
      </div>

      {/* Password Input */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>

      {/* Login Button */}
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  </div>

  )
}

export default Login