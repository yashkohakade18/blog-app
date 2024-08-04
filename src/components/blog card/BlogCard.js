import "./BlogCard.css";

import {Link} from 'react-router-dom';

function BlogCard({id,title,content,author,date,})
{
    return(
      
        <Link className="blog-card" to={`/blog/${id}`} >
          <h2 className="blog-title">{title}</h2>
          <p className="blog-content-preview">
            {content.substring(0,100)}...
          </p>
          <div className="author-card">
            <img src={author.avatar} alt="author" className="author-avatar"/>
            <span className="author-name">{author.name}</span>
            <span className="blog-date">{date}</span>
          </div>
         
       </Link>
    )
}

export default BlogCard