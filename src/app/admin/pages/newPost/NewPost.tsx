import { useState, FormEvent } from "react";
import { PostService } from "../../../shared/services/Api/Posts/PostService";
import { useNavigate } from "react-router-dom";
import * as N from "./NewPostStyle";
import { UploadImg } from "../../componets/uploadImg/UploadImg";
import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import 'froala-editor/js/plugins/paragraph_style.min.js';
import 'froala-editor/js/plugins/align.min.js';

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

        if(post.title == null || post.content == null || post.author == null || post.img == null){
            alert("Erro ao criar post, todos os campos são obrigatórios");
        }
        newPost(post);
    }

    const froalaEditorValue = (data: any) => {
        setPostContent(data);
    }

    const newPost = async (post: any) => {
        await PostService.newPost(post);
        alert("Post criado com sucesso");
        navigate("/dashboard");
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
                                <h2>Título*</h2>
                                <input type="text" onChange={(event) => setPostTitle(event.target.value)} />
                            </N.titlePostContainer>
                        </N.containerTextArea>

                        <N.containerContentArea>
                            <N.contentPostContainer>
                                <h2>Post*</h2>
                                <FroalaEditor
                                    config={{
                                        heightMin: 300,
                                        heightAuto: true,
                                        heightMax: 900,
                                        placeholderText: 'Qual assunto de hoje?',
                                        imageUpload: true,
                                        imageUploadURL: `http://localhost:5070/api/posts/editor`,
                                        imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif']
                                    }
                                    }
                                    onModelChange={froalaEditorValue}
                                />
                            </N.contentPostContainer>
                        </N.containerContentArea>

                        <N.containerTextArea>
                            <N.titlePostContainer>
                                <h2>Autor*</h2>
                                <input type="text" onChange={(event) => setPostAuthor(event.target.value)} />
                            </N.titlePostContainer>
                        </N.containerTextArea>

                        <N.thumbContainer>
                            <h2>Thumb do post*</h2>
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
        </>
    )
}