import "./home.css"
import blogs from "./../../data"
import BlogCard from "../../components/blog card/BlogCard"

function Home() {

  
  return (
    <div className="blog-container">
    {
      blogs.map((blogObject, i)=>{
      const {
        id,
        title,
        content,
        author,
        date,
      
      } = blogObject

      return (
        <BlogCard
        key={i}
        id={id}
        title={title}
        content={content}
        author={author}
        date={date}
        
        />)

    
      
    })
  }
    </div>
 
  )
}

export default Home