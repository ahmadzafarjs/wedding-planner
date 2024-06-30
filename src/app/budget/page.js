// src/app/budget/page.js

'use client';

import { useEffect, useState } from 'react';

export default function Budget() {
    const [categories, setCategories] = useState([]);

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
        <div >
            <h1>Budget</h1>
            
        </div>
    );
}
