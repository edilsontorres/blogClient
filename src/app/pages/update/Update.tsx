import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";
import * as U from "./UpdateStyle";
import { Footer } from "../../shared/components/footer/Footer";
import { UploadImg } from "../../shared/components/uploadImg/UploadImg";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export const Update = () => {
    const dadosPost = useLocation().state.post;
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState(dadosPost.title);
    const [postContent, setPostContent] = useState(dadosPost.content);
    const [postAuthor, setPostAuthor] = useState(dadosPost.author);
    const [imgFile, setImgFile] = useState<File>();

    const imgResult = (img: File) => {
        setImgFile(img);
    }
   
    const dados:IPost = {
        id: dadosPost.id,
        title: postTitle,
        content: postContent,
        author: postAuthor,
        img: imgFile!
    }

    const stopDefAction = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        update(dadosPost.id, dados);
    }

    const ckEditorValue = (event: any, editor: ClassicEditor) => {
        const data = editor.getData();
        setPostContent(data);
    }

    const update = (id: number, dados:IPost) => {
        if(id != null){
            PostService.updatePost(id, dados);
            return navigate('/');
        } else {
            console.log("Deu azia");
        }
    }

    const dashboard = () => {
        navigate('/dashboard');
    }
    
    return(
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
                                <input type="text" defaultValue={dadosPost.title} onChange={(event) => setPostTitle(event.target.value)} />
                            </U.titlePostContainer>
                        </U.containerTextArea>

                        <U.containerContentArea>
                            <U.contentPostContainer>
                                <h2>Post</h2>
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={dadosPost.content}
                                    onReady={editor => {
                                        
                                    }}
                                    onChange={ckEditorValue}
                                />
                            </U.contentPostContainer>
                        </U.containerContentArea>

                        <U.containerTextArea>
                            <U.titlePostContainer>
                                <h2>Autor</h2>
                                <input type="text" defaultValue={dadosPost.author} onChange={(event) => setPostAuthor(event.target.value)} />
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
            <Footer />
        </>
    )
}