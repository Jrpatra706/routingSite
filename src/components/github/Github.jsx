import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Jrpatra706')
    //     .then(response =>response.json()).then(data =>{
    //         console.log(data);
    //         setData(data);
    //     })
    // },[]);
  return (
    <div>
        <div className=' text-center m-3 bg-gray-700 text-white p-3 text-3xl'>
            Github username : {data.login}
            <img src={data.avatar_url} width={250} alt="" />
        </div>
    </div>
  )
}

export default Github

export const githubLoader= async ()=>{
    const response = await fetch('https://api.github.com/users/Jrpatra706');
    return response.json();
};