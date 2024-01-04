import { useState, useEffect } from "react";
import BlogList from "./Blog-list";

export default function Home(){
const [blogs, setBlogs] = useState([
    {title:"My new title 1", body:"sample body of the blog..", author:"siyam", id:1},
    {title:"My new title 2", body:"sample body of the blog..", author:"Fayas", id:2},
    {title:"My new title 3", body:"sample body of the blog..", author:"Jamseeth", id:3}
]);

const [name, setName] = useState("siyam");

useEffect(() => {
    console.log("use effect runs..");
    console.log(name);

},[name]);

const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

    return(
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs..." handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === "siyam")} title={"Siyam's Blog"}/> */}
            <p>{name}</p>
            <button onClick={() => setName("fayas")}>change name</button>
        </div>
    )
}