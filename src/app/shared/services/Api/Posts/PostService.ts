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

export interface Image {
    link: string;
}

const listPost = async (): Promise<IPost[]> => {
    const { data } = await DefaultConetion().get('/postagens');
    return data;
}

const listPostById = async (id: number) => {
    const { data } = await DefaultConetion().get(`/postagens/postagemby/${id}`);
    return data;
}

const newPost = async (newPost: Omit<IPost, 'id'>) => {
    await DefaultConetion().post('/postagens/novapostagem', newPost, {
        'headers': {
            'Content-Type': 'multipart/form-data'
        }
    });

}

const UploadImgEditor = async () => {
    await DefaultConetion().post('/postagens/editor');
}

const getThumb = async (id:number): Promise<Image> => {
    const { data } = await DefaultConetion().get(`http://localhost:5070/api/postagens/foto/${id}`);
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
    removePost,
    UploadImgEditor,
    getThumb
}