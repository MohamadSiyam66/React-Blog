import BlogList from "./Blog-list";
import useFetch from "./useFetch";

export default function Home(){
// const [name, setName] = useState("siyam");
// const handleDelete = (id) => {
//     const newBlogs = blogs.filter(blog => blog.id !== id);
//     setBlogs(newBlogs);
// }

const {data, isLoading, error} = useFetch("http://localhost:8000/blogs")

    return(
        <div className="home">
            {isLoading && <p>Loading...</p>}
            {error && <div>{error}</div>}
            {data && <BlogList blogs={data} title="All Blogs..."/>}
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author === "siyam")} title={"Siyam's Blog"}/> */}
            {/* <p>{name}</p> */}
            {/* <button onClick={() => setName("fayas")}>change name</button> */}
        </div>
    )
}