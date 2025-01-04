import { DefaultConetion } from "../../ApiConfig"

export interface IPost {
    id: number
    title: string
    content: string
    author: string
    img: File | undefined
    createdAt: string
    lastDateUpdate: string

}

const listPost = async (): Promise<any> => {
    const { data } = await DefaultConetion().get('/postagens');
    return data;
}

const listPostById = async (id: number) => {
    const { data } = await DefaultConetion().get(`/postagens/${id}`);
    return data.path;
}

const newPost = async (newPost: Omit<IPost, 'id'>): Promise<IPost> => {
    const { data } = await DefaultConetion().post('/postagens/novapostagem', newPost, {
        'headers': {
            'Content-Type': 'multipart/form-data'
        }
    });
    return data;
}

const updatePost = async (id: number, postUpdate: IPost): Promise<IPost> => {
    const { data } = await DefaultConetion().put(`/postagens/editarpostagem/${id}`, postUpdate, {
        'headers': {
            'Content-Type': 'multipart/form-data'
        }
    });
    return data;
}

const removePost = async (id: number): Promise<undefined> => {
    await DefaultConetion().delete(`/postagens/${id}`);
    return undefined;
}



export const PostService = {
    listPost,
    listPostById,
    newPost,
    updatePost,
    removePost
}