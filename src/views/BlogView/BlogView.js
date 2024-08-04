import "./BlogView.css"
import { useParams } from "react-router-dom"
import blogs from "../../data"

function BlogView() {

    const {id} = useParams()

    const selectedBlog = blogs.find((blogObject)=>blogObject.id ===id)
console.log(selectedBlog)

  return (
    <div className="view">
    <h1 className="title">{selectedBlog.title}</h1>
    <p className="info">
        <img src={selectedBlog.author.avatar} alt="author" height={"40px"} className="avatar-img"/>
      
    </p><br/>
    <span className="authorinfo"> {selectedBlog.author.name} | {selectedBlog.date}</span>
    <br/><br/>
    <span className="content" >{selectedBlog.content}</span>
    </div>


  )
}

export default BlogView