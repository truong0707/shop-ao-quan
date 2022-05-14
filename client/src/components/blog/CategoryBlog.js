import React from 'react'

export default function CategoryBlog() {
    return (
        <>
            <form><input className='input-search-blog' placeholder='Search...' /></form>

            <div className='list_categories_blog'>
                <h4 style={{ color: '#7fad39' }}><b>Categories</b></h4>
                <p>All</p>
                <p>Beauty(20)</p>
                <p>Food(5)</p>
                <p>Life Style(9)</p>
                <p>Travel(10)</p>
            </div>
        </>
    )
}
