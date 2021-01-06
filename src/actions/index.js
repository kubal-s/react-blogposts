import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';
export const fetchPostsAndUsers = () =>{
    return async function(dispatch,getState){
        console.log("About to fetch posts")
        await(dispatch(fetchPosts));
        console.log("Fetched posts")
    }
}
export const fetchPosts =  () =>{
    return async function (dispatch,getState){
        const response = await jsonPlaceholder.get('/posts')
        dispatch({
            type:"FETCH_POSTS",
            payload:response.data
        })
    }
}
export const fetchUser = (id) => {
    return async function(dispatch,getState){
        const response = await jsonPlaceholder.get(`/users/${id}`)
        dispatch({
            type:"FETCH_USER",
            payload:response.data
        })
    }
}
// export const fetchUser = (id) => {
// below we can also write as async dispatch =>{....}
//     return async function(dispatch,getState){
//         const response = await jsonPlaceholder.get(`/users/${id}`)
//         dispatch({
//             type:"FETCH_USER",
//             payload:response.data
//         })
//     }
// }


// function of  _.memoize is that it doesnt execute the operations for the
// same passed variable but only return s the result
// in our case this stil makes calls for each user id as the 
// return fucntion is a function itself
// even if we make the inner function memoize instead of outer we still face
// the same issue as a new function is created in memory each time 
// export const fetchUser = _.memoize(function(id){
//     return async function(dispatch,getState){
//         const response = await jsonPlaceholder.get(`/users/${id}`)
//         dispatch({
//             type:"FETCH_USER",
//             payload:response.data
//         })
//     }
// });



// Below is final memoized version

// export const fetchUser = (id) => {
//     return function(dispatch,getState){
//         _fetchUser(id,dispatch)
//     }
// }

// const _fetchUser = _.memoize(async(id,dispatch)=>{
//     const response = await jsonPlaceholder.get(`/users/${id}`)
//     dispatch({
//         type:"FETCH_USER",
//         payload:response.data
//     })
// })



