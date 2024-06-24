import { useState, FormEvent } from "react";
import { PostService } from "../../shared/services/Api/Posts/PostService";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as N from "./NewPostStyle";


export const NewPost = () => {
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postAuthor, setPostAuthor] = useState('');

  
    
    const stopDefAction = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const file = formData.get('img') as File;
        if(file && file.size > 0){
            formData.append("img", file.name);
            formData.append("img", file);

            const post = {
                title: postTitle,
                content: postContent,
                author: postAuthor,
                img: file
            }
            newPost(post);
        }

        const cleaningUpEvent = event.currentTarget.value = null;
        const post = {
            title: postTitle,
            content: postContent,
            author: postAuthor,
            img: cleaningUpEvent
        }
        newPost(post);

    }
    
    const ckEditorValue = (event:any, editor:ClassicEditor) => {
        let data = editor.getData();
        setPostContent(data); 
    }

    const newPost = async (post:any) => {
        await PostService.newPost(post);
        alert("Post criado com sucesso!");
        return navigate('/');
    }

    return(
        <>
            <N.Container>
                <N.TitleContainer>
                    <N.TitleArea>
                        <h1>Novo Post</h1>
                    </N.TitleArea>
                </N.TitleContainer>
                <N.FormContainer>
                    <form onSubmit={stopDefAction}>
                        <N.InputModelContainer>
                            <N.InputModel type="text" onChange={(event) => setPostTitle(event.target.value)} placeholder="Titulo"/>
                        </N.InputModelContainer>

                        <N.CkeditorContainer>
                            <CKEditor
                                config={{placeholder: "No que você esta pensando hoje?"}}
                                editor={ClassicEditor}
                                onReady={editor => {
                                            
                                }}
                                onChange={ckEditorValue}     
                            />
                        </N.CkeditorContainer>
                        <N.InputModelContainer>
                            <N.InputModel type="text" onChange={(event) => setPostAuthor(event.target.value)} placeholder="Autor"/>
                        </N.InputModelContainer>                        
                        
                        <N.InputFileModel>
                            <label htmlFor="img">Adicionar Mídia</label>
                            <input type="file" name="img" id="img"/>
                        </N.InputFileModel>
                        <N.BotaoContainer>
                            <N.Botao type="submit" value={"Salvar"} />
                        </N.BotaoContainer>
                    </form>
                </N.FormContainer>  
            </N.Container>
                
        </>
    )
}