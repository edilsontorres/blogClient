import { DefaultConetion } from "../../ApiConfig"

interface IPost{
    id: number;
    title: string;
    content: string;
    author: string;
}

const listPost = async (): Promise<IPost[]> => {
    const {data} = await DefaultConetion().get('/postagens');
    return data;
}

const listPostById = () => {
    
}

const newPost = () => { 
    
}

const updatePost = () => {
    
}

const removePost = () => {
    
}

export const PostService = {
    listPost,
    listPostById,
    newPost,
    updatePost,
    removePost

}