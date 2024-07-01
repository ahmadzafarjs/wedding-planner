"use client"

import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";



const categories = [
  { name: "Events", amount: 270284, details: [{ name: "Sangeet: Venue rental", amount: 100852 }] },
  { name: "Catering", amount: 465938, details: [] },
  // Add other categories here...
];



export default function AsideBudget({data, setSelectedCategory}) {
    return <section>
        <ul  className='border-2 rounded-lg mr-5'>
            <li  className='flex items-center gap-5 justify-start w-full p-3 border-b-2 text-red-500'><IoIosAddCircleOutline className='text-2xl' /> <span> New category </span></li>
            {data   .map(cat=> {
                return (
                <li key={cat._id} >
                <button className='flex items-center gap-20 justify-between w-full p-3 border-b-2 hover:border-r-4' onClick={()=> setSelectedCategory(cat._id)}>
                    <h3 className='text-lg'>{cat.name}</h3>

                    <div className='flex gap-5 items-center justify-between'>

                    <p className='text-lg text-slate-700 italic'>{cat.expenses.reduce((acc, exp)=> acc + exp.estimatedBudget, 0)}</p>
                        <FaAngleRight />
                    </div>
                </button>
                </li>
                )
            })}
        </ul>
    </section>
}