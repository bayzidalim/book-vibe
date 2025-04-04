import React, { useEffect, useState } from 'react';

const [books,setBooks]=useState([]);
useEffect(()=>{
        fetch('./booksData.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
},[])

const Books = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center'>Books</h2>
            <p>{books.length}</p>
        </div>
    );
};

export default Books;

/* 
1.State to store the book
2.useEffect
3.fetch to load data
4. Set the data to the book state


*/