import { csrfFetch } from "./csrf";

const ADD_POST = 'home/addPost';
const GET_POSTS = 'home/getPosts';
const DELETE_POST = 'home/deletePost';

const setPosts = (posts) => {
    return {
        type: GET_POSTS,
        payload: posts
    };
};

const newPost = (post) => {
    return {
        type: ADD_POST,
        payload: post
    };
};

const removePost = (postId) => {
    return { 
        type: DELETE_POST,
        payload: postId
    }
}

export const deletePost = (postId) => async (dispatch) => {
    const response = await csrfFetch('/api/posts', {
        method: 'DELETE',
        body: JSON.stringify({postId})
    })
    dispatch(removePost(postId))
    return response
}

export const addPost = ({post, userId, username}) => async (dispatch) => {
  const response = await csrfFetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({post, userId})
  })
  const data = await response.json();
 data.User = {username}

  
  dispatch(newPost(data))
}

export const getPosts = () => async (dispatch) => {
    const response = await fetch('/api/posts');
    const data = await response.json();
    dispatch(setPosts(data.posts));
  
};

// const initialState = {posts: {}, errors: []};

const postsReducer = (postState = {}, action) => {
 

    switch (action.type) {
        case GET_POSTS:
            const posts = action.payload
            const allPosts = {}
            for (const post of posts) {
                allPosts[post.id] = post
            }
            return allPosts
            // newState = Object.assign({}, state);
            // newState.posts = action.payload;
            // return newState;
            // const allPosts = []
            // action.posts.forEach((post) => {
            //     allPosts.push({[post.id]: post})
            // });
            // return { posts: allPosts}
        // case ADD_POST:
        //     newState = Object.assign({}, state);
        //     if (action.payload.errors) {
        //         newState.errors = action.payload.errors;
        //     } else {
        //         newState.posts.push(action.payload);
        //     } 
        //     return newState;
        // case DELETE_POST:
        //     newState = Object.assign({}, state);

        //     newState.posts.forEach((post, index) => {
        //         if (post.id === action.payload){
        //             delete newState.posts[index]
        //         }
        //     })
        //     return newState;
        default:
            return postState;
    }
}

export default postsReducer;