import React from 'react'
import UserContext from '../context/usercontext'
import { useContext } from 'react' 
function Profile() {
    const {user} = useContext(UserContext);
    if (!user){ 
        console.log('hello')
        return <div className=" flex items-center justify-center bg-slate-500">please login</div>}

    return  <div className=" flex items-center justify-center bg-slate-500">Welcome {user.username} </div>
}

export default Profile