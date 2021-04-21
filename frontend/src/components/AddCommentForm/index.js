import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../store/post';



function AddComment () {
const dispatch = useDispatch();
let [post, setPost] = useState('');
const user = useSelector((state) => state.session.user);

const submitPost = (event) => {
    event.preventDefault();
   
    const payload = {
        post,
        userId: user.id,
        username: user.username
    }

    dispatch(addPost(payload))
    setPost('');
}

    return (

        <form onSubmit={submitPost}>
          
            <label></label>
            <input
                type='text'
                onChange={event => setPost(event.target.value)}
                name='post'
                value={post}
             
            >
            </input>
          
         
        </form>
    )
}

export default AddComment;