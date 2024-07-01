"use client"

import { FaShuttleVan } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import InputBudget from "./InputBudget";
import { useState } from "react";

export default function ExpenseDetails({data, selectedCategory}) {
    const filteredCategory = data.find((cat) => cat._id === selectedCategory);
    const [expenses, setExpenses] = useState(filteredCategory.expenses);

    const estimatedBudget = expenses?.reduce((acc, exp)=> acc + exp.estimatedBudget, 0)
    const finalCost = expenses?.reduce((acc, exp)=> acc + exp.finalCost, 0);

    console.log(filteredCategory,estimatedBudget, finalCost);
    return <section className="border-2 rounded-lg">
        <div className="flex items-center justify-center flex-col gap-2 py-8">
            <FaShuttleVan className="text-4xl" />
            <h2 className="text-2xl font-semibold">{filteredCategory.name}</h2>
            <div className="flex items-center justify-center gap-5">
                <h4>Estimated budget: <b>{estimatedBudget}</b></h4>
                <h4>Final Cost: <b>{finalCost}</b></h4>
                <button className="flex gap-2 items-center"><RiDeleteBin6Line /> Remove</button>
            </div>
            <div className="w-[30%] mt-2 px-3 py-1 text-xs italic text-white bg-green-600 rounded-full">{estimatedBudget}</div>
        </div>
        <table className="w-full border-t-2">
        <thead>

            <tr className="text-slate-600 font-thin grid grid-cols-4 justify-center ">
                {["EXPENSE", "ESITMATED BUDGET", "FINAL COSE", "PAID"].map((header, i)=> {
                    return <th  className="font-light py-2 border-b-2" key={i}>{header}</th>
                })}
            </tr>
        </thead>
        <tbody>
          {expenses?.map((expense, index) => (
            <tr
              key={index}
              className="text-center grid grid-cols-4 border-b-2"
            >
              <td className="text-left font-semibold text-sm p-4 ">{expense.name}</td>
              <td className="text-sm p-4"><InputBudget value={expense.estimatedBudget} /></td>
              <td className="text-sm p-4"><InputBudget value={expense.finalCost} /></td>
              <td className="text-sm p-4"><InputBudget value={expense.paid} /></td>
            
            </tr>
          ))}
            
        </tbody>
            
        </table>
    </section>
}