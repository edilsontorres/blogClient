import { useState, FormEvent, forwardRef } from "react";
import { PostService } from "../../shared/services/Api/Posts/PostService";
import { useNavigate } from "react-router-dom";

export const NewPost = () => {
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');
    const [postAuthor, setPostAuthor] = useState('');
   

    const post = {
        title: postTitle,
        content: postContent,
        author: postAuthor
    }

    const stopDefAction = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        newPost(post);
    }

    const uploadImg = async (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        const file = formData.get('img') as File;
        if(file && file.size > 0){
            formData.append("img", file.name);
            formData.append("img", file);
            await PostService.image(formData);
        }
        else{
             console.log("deu zica");
        }
        
    }

    const newPost = async (post:any) => {
            await PostService.newPost(post);
            alert("Post criado com sucesso!");
            return navigate('/');     
    }
    return(
        <>
            <form onSubmit={stopDefAction}>
                <h3>Titulo:</h3>
                <input type="text" onChange={(event) => setPostTitle(event.target.value)} />

                <h3>Conteudo:</h3>
                <textarea onChange={(event) => setPostContent(event.target.value)} />

                <h3>Autor:</h3>
                <input type="text" onChange={(event) => setPostAuthor(event.target.value)} />

                <input type="submit" value={"Enviar"} />

            </form>

            <form onSubmit={uploadImg}>
                <h3>Imagens:</h3>
                <input type="file" name="img" />
                <input type="submit" value={"Enviar Imagem"} />
            </form>
            
        </>
    )
}