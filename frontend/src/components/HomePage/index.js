import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, deletePost } from '../../store/post';
// import AddComment from '../AddCommentForm/index';
// import './index.css';

function HomePage () {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  console.log(posts)

useEffect(() => {
    dispatch(getPosts())
}, [dispatch])

const renderPost = () => {
  return Object.values(posts).map(post => {
    return (
      <li>{post.body}</li>
    )
  })
}
  return(
    <>
  <ul>
    {renderPost()}

  </ul>
  <ul>{Object.values(posts).map(post => {
    return (<h3>{post.body}</h3>)
  })}</ul>
  </>
  )
}
// const messagesEndRef = useRef(null)
// const messageEl = useRef(null)

// const [post, setPosts] = useState(posts.posts);

//     const scrollToBottom = () => {  // scrolls the element's parent container such that the element on which scrollIntoView() is called
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }

//  useEffect(() => { //runs scrollToBottom on component load
//    scrollToBottom()
//  }, []);

// useEffect(() => { //pushes chat messages down to bottom on page load
//     if (messageEl) {
//       messageEl.current.addEventListener('load', event => {
//         const { currentTarget: target } = event;
//         target.scroll({ top: target.scrollHeight});
//       });
//     }
// }, [])

// useEffect(() => { //pushes chat messages down to bottom when adding a new message
//     if (messageEl) {
//       messageEl.current.addEventListener('DOMNodeInserted', event => {
//         const { currentTarget: target } = event;
//         target.scroll({ top: target.scrollHeight});
//       });
//     }
// }, [])


// useEffect(() => {
//     dispatch(getPosts())
// }, [dispatch])

// useEffect(() => {
//     setPosts(posts.posts)
// },[posts.posts.length])


//     return (
        
//         <div>
//             <h1>Chat</h1>
//         <div className='container' ref={messageEl}>
//                 {post.length > 0 ? post.map(post => <p key={post.id}> {post.User?.username} {post.createdAt.slice(0, 10)}  <br/>
//                  {post.body} <button onClick={() => dispatch(deletePost(post.id))} >X</button>  </p>) : null}
//             <div ref={messagesEndRef} />
//         </div>
//             <AddComment />
//         </div>
//     )
// }

export default HomePage;