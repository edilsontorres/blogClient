import { useState, FormEvent } from "react";
import { PostService } from "../../shared/services/Api/Posts/PostService";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as N from "./NewPostStyle";
import { Footer } from "../../shared/components/footer/Footer";
import { UploadImg } from "../../shared/components/uploadImg/UploadImg";


export const NewPost = () => {
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postAuthor, setPostAuthor] = useState('');
    const [imgFile, setImgFile] = useState<File>();

    const imgResult = (img: File) => {
        setImgFile(img);

    }

    const stopDefAction = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const post = {
            title: postTitle,
            content: postContent,
            author: postAuthor,
            img: imgFile
        }
        newPost(post);
    }

    const ckEditorValue = (event: any, editor: ClassicEditor) => {
        const data = editor.getData();
        setPostContent(data);
    }

    const newPost = async (post: any) => {
        await PostService.newPost(post);
        alert("Post criado com sucesso!");
        return navigate('/');
    }

    const dashboard = () => {
        navigate('/dashboard');
    }

    return (
        <>
            <N.container>
                <N.containerTitleArea>
                    <N.containerTitle>
                        <h2>Criar novo post</h2>
                    </N.containerTitle>
                </N.containerTitleArea>
                <form onSubmit={stopDefAction}>
                    <N.mainContainerArea>
                        <N.containerTextArea>
                            <N.titlePostContainer>
                                <h2>Título</h2>
                                <input type="text" onChange={(event) => setPostTitle(event.target.value)} />
                            </N.titlePostContainer>
                        </N.containerTextArea>

                        <N.containerContentArea>
                            <N.contentPostContainer>
                                <h2>Post</h2>
                                <CKEditor
                                    editor={ClassicEditor}
                                    onReady={editor => {
                                    }}
                                    onChange={ckEditorValue}
                                />
                            </N.contentPostContainer>
                        </N.containerContentArea>

                        <N.containerTextArea>
                            <N.titlePostContainer>
                                <h2>Autor</h2>
                                <input type="text" onChange={(event) => setPostAuthor(event.target.value)} />
                            </N.titlePostContainer>
                        </N.containerTextArea>

                        <N.thumbContainer>
                            <h2>Thumb do post</h2>
                            <UploadImg img={imgResult} />
                        </N.thumbContainer>
                        <hr />
                        <N.buttonArea>
                            <N.buttonContainer>
                                <button onClick={dashboard} className="cancel">
                                    Cancelar
                                </button>
                                <button className="publish">
                                    Publicar
                                </button>
                            </N.buttonContainer>
                        </N.buttonArea>
                    </N.mainContainerArea>
                </form>
            </N.container>
            <Footer />
        </>
    )
}