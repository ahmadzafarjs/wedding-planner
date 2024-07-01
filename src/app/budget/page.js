
'use client';

import { useEffect, useState } from 'react';
import ExpenseDetails from './_components/ExpenseDetails';
import AsideBudget from './_components/AsideBudget';


const dummyData = [
  {
      "_id": "66808344aa2824fd8ee96446",
      "name": "Events",
      "color": "red",
      "expenses": [
          {
              "name": "Banquet hall",
              "estimatedBudget": 2000,
              "_id": "66808344aa2824fd8ee96447"
          },
          {
              "name": "Welcome Party",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d05"
          },
          {
              "name": "Cocktail",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d06"
          },
          {
              "name": "Flowwers",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d07"
          },
          {
              "name": "Barrat",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d08"
          },
          {
              "name": "Meal",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d09"
          },
          {
              "name": "Wedding Cake",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d0a"
          }
      ],
      "tasks": [],
      "__v": 0
  },
  {
      "_id": "6681472754c14cc473e62d04",
      "name": "Catering",
      "color": "green",
      "expenses": [
          {
              "name": "Welcome Party",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d05"
          },
          {
              "name": "Cocktail",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d06"
          },
          {
              "name": "Mehandi",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d07"
          },
          {
              "name": "Barrat",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d08"
          },
          {
              "name": "Meal",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d09"
          },
          {
              "name": "Wedding Cake",
              "estimatedBudget": 1200,
              "finalCost": 0,
              "paid": 0,
              "_id": "6681472754c14cc473e62d0a"
          }
      ],
      "tasks": [
          {
              "name": "Short list caters",
              "dueDate": null,
              "completed": false,
              "timeFrame": "From 4 to 6 months",
              "_id": "6681472754c14cc473e62d0b"
          }
      ],
      "__v": 0
  }
]


export default function Budget() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        async function fetchCategories() {
            const res = await fetch('/api/categories');
            const data = await res.json();
            if (data.success) {
                setCategories(data.data);
            }
        }

        fetchCategories();
    }, []);


    return (
      <>
       {/* Aside */}
       <aside className=" w-[33%]"><AsideBudget data={dummyData} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} /></aside>
       {/* Checklist */}
       {selectedCategory && <div className="w-[66%]"><ExpenseDetails data={dummyData} selectedCategory={selectedCategory} /></div>}
       </>

    );
}
