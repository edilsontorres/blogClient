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

export interface IapiResponse {
    data: IPost[]
    totalPages: number
    totalPosts: number
    page: number
    pageSize: number
}

export interface Image {
    link: string;
}

const listPost = async (): Promise<IapiResponse> => {
    const { data } = await DefaultConetion().get('/posts/list');
    return data;
}

const listPostPagination = async (page: number): Promise<IapiResponse> => {
    const { data } = await DefaultConetion().get(`/posts/list?page=${page}`);
    return data;
}

const listPostById = async (slug: string) => {
    const { data } = await DefaultConetion().get(`/posts/${slug}`);
    return data;
}

const newPost = async (newPost: Omit<IPost, 'id, slug'>) => {
    await DefaultConetion().post('/posts/novopost', newPost, {
        'headers': {
            'Content-Type': 'multipart/form-data'
        }
    });

}

const UploadImgEditor = async () => {
    await DefaultConetion().post('/posts/editor');
}

const getThumb = async (id: number): Promise<Image> => {
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
    listPostPagination,
    listPostById,
    newPost,
    updatePost,
    removePost,
    UploadImgEditor,
    getThumb
}