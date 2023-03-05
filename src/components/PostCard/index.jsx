import "./style.css";
export const PostCard = (post) =>{
  
    return(
        <div className='post'>
         <img src={post.cover} alt={post.title}></img>
         <div className='post-content'  > 
           <h1>{post.id}</h1>
           <p> {post.body}</p>
         </div>
       </div>
    )
}