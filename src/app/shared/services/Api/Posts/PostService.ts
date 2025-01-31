import { DefaultConetion } from "../../ApiConfig"

export interface IPost {
    id: number
    title: string
    content: string
    author: string
    img: File | undefined
    createdAt: string
    slug: string
    lastDateUpdate: string

}

export interface Image {
    link: string;
}

const listPost = async (): Promise<IPost[]> => {
    const { data } = await DefaultConetion().get('/posts');
    return data;
}

const listPostById = async (slug: string) => {
    const { data } = await DefaultConetion().get(`/posts/${slug}`);
    return data;
}

const newPost = async (newPost: Omit<IPost, 'id'>) => {
    await DefaultConetion().post('/posts/novapost', newPost, {
        'headers': {
            'Content-Type': 'multipart/form-data'
        }
    });

}

const UploadImgEditor = async () => {
    await DefaultConetion().post('/posts/editor');
}

const getThumb = async (id:number): Promise<Image> => {
    const { data } = await DefaultConetion().get(`http://localhost:5070/api/posts/foto/${id}`);
    return data;
}

const updatePost = async (id: number, postUpdate: IPost): Promise<IPost> => {
    const { data } = await DefaultConetion().put(`/posts/editarpostagem/${id}`, postUpdate, {
        'headers': {
            'Content-Type': 'multipart/form-data'
        }
    });
    return data;
}

const removePost = async (id: number): Promise<undefined> => {
    await DefaultConetion().delete(`/posts/${id}`);
    return undefined;
}



export const PostService = {
    listPost,
    listPostById,
    newPost,
    updatePost,
    removePost,
    UploadImgEditor,
    getThumb
}