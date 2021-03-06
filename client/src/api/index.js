import axios from 'axios';

const url = 'https://memoriesprojectjosephxlara.herokuapp.com/posts';

export const fetchPosts = () => {
    return axios.get(url);
}

export const createPost = (newPost) => {
    return axios.post(url, newPost);
}

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => {
    return axios.patch(`${url}/${id}/likePost`);
}