import React, { useEffect, useState } from 'react';
import SingleGun from '../singleGun/SingleGun';
import './AllGun.css';
const AllGun = () => {
    const [guns, setGuns] = useState([])
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
        .then((res) => res.json())
        .then((data) => setGuns(data));
    },[])
    return (
      <div className="container mx-auto">
        <h1 className="text-4xl text-center text-bold my-4">
          Welcome to Chittagong Gun store
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          excepturi alias, quasi culpa sint labore officiis assumenda quas totam
          tempora quo, eos ipsam velit molestiae tempore reprehenderit soluta
          quis iste?
        </p>
        <div className='my-5 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {guns.map((gun) => (
            <SingleGun gun={gun}></SingleGun>
          ))}
        </div>
      </div>
    );
};

export default AllGun;