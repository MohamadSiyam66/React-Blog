import { useState, useEffect } from "react";
import BlogList from "./Blog-list";

export default function Home(){

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

    return(
        <div className="home">
            {isLoading && <p>Loading...</p>}
            {blogs && <BlogList blogs={blogs} title="All Blogs..." handleDelete={handleDelete}/>}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === "siyam")} title={"Siyam's Blog"}/> */}
            {/* <p>{name}</p> */}
            {/* <button onClick={() => setName("fayas")}>change name</button> */}
        </div>
    )
}