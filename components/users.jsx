"use client"; 
import Link from "next/link";
async function Users({users}){
    return (
        <ul>
        {users.map(user => (
          <Link key={user.id} href={"users${user.id}"}>
            <li className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between" onClick={() => {alert(user.id)}}>
        
                <div>
                    <h5 className="font-bold"> {users.id} {user.first_name} {user.last_name}</h5>
                    <p className="text-slate-300"> email: {user.email} </p>
                </div>
        
                <img src={user.avatar} className="rounded-full w-20"/>
            </li>
          </Link>
        ))}
      </ul>
    )


}
export default Users