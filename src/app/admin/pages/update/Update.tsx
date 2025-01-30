import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { IPost, PostService } from "../../../shared/services/Api/Posts/PostService";
import * as U from "./UpdateStyle";
import { UploadImg } from "../../componets/uploadImg/UploadImg";
import FroalaEditor from "react-froala-wysiwyg";
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins/image.min.js';


export const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const idParam = Number(id);
    const [postTitle, setPostTitle] = useState<string>('');
    const [postContent, setPostContent] = useState<string>('');
    const [postAuthor, setPostAuthor] = useState<string>('');
    const [create, setCreate] = useState<string>('');
    const [imgFile, setImgFile] = useState<File>();
    const [post, setPost] = useState<IPost>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        PostService.listPostById(idParam)
            .then((res) => {
                setPost(res);
                setPostTitle(res.title || "");
                setPostContent(res.content || "");
                setPostAuthor(res.author || "");
                setCreate(res.createdAt);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Erro ao carregar post:", error);
                setLoading(false);
            });
    }, [idParam]);

    if (loading) {
        <div>Carregando dados...</div>
    }

    const setData = () => {
        const dataNow = new Date();
        const formatData = dataNow.toISOString();
        return formatData;
    }

    const imgResult = (img: File) => {
        setImgFile(img);
    }

    const froalaEditorValue = (data: string) => {
        setPostContent(data);
    }

    const dados: IPost = {
        id: idParam,
        title: postTitle,
        content: postContent,
        author: postAuthor,
        img: imgFile,
        createdAt: create,
        lastDateUpdate: setData()
    }

    const stopDefAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        update(idParam, dados);
    }

    const update = (id: number, dados: IPost) => {
        if (id != null) {
            PostService.updatePost(id, dados);
            alert("Post criado com sucesso!");
            return navigate('/dashboard');
        } else {
            console.log("Deu azia");
        }
    }

    const dashboard = () => {
        navigate('/dashboard');
    }

    return (
        <>
            <U.container>
                <U.containerTitleArea>
                    <U.containerTitle>
                        <h2>Atualizar Post</h2>
                    </U.containerTitle>
                </U.containerTitleArea>
                <form onSubmit={stopDefAction}>
                    <U.mainContainerArea>
                        <U.containerTextArea>
                            <U.titlePostContainer>
                                <h2>Título</h2>
                                <input type="text" defaultValue={postTitle} onChange={(event) => setPostTitle(event.target.value)} />
                            </U.titlePostContainer>
                        </U.containerTextArea>

                        <U.containerContentArea>
                            <U.contentPostContainer>
                                <h2>Post</h2>
                                <FroalaEditor
                                    onModelChange={froalaEditorValue}
                                    model={postContent}
                                    config={{
                                        heightMin: 300,
                                        heightAuto: true,
                                        heightMax: 500,
                                        imageUpload: true,
                                        imageUploadURL: `http://localhost:5070/api/postagens/editor`,
                                        imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif']
                                    }
                                    }

                                />
                            </U.contentPostContainer>
                        </U.containerContentArea>

                        <U.containerTextArea>
                            <U.titlePostContainer>
                                <h2>Autor</h2>
                                <input type="text" defaultValue={postAuthor} onChange={(event) => setPostAuthor(event.target.value)} />
                            </U.titlePostContainer>
                        </U.containerTextArea>

                        <U.thumbContainer>
                            <h2>Thumb do post</h2>
                            <UploadImg img={imgResult} />
                        </U.thumbContainer>
                        <hr />
                        <U.buttonArea>
                            <U.buttonContainer>
                                <button onClick={dashboard} className="cancel">
                                    Cancelar
                                </button>
                                <button className="publish">
                                    Atualizar
                                </button>
                            </U.buttonContainer>
                        </U.buttonArea>
                    </U.mainContainerArea>
                </form>
            </U.container>
        </>
    )
}