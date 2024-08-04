import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";

export const Update = () => {
    const dadosPost = useLocation().state.post;
    const navigate = useNavigate();
    const [postTitle, setPostTitle] = useState(dadosPost.title);
    const [postContent, setPostContent] = useState(dadosPost.content);
    const [postAuthor, setPostAuthor] = useState(dadosPost.author);
   

    const dados:IPost = {
        id: dadosPost.id,
        title: postTitle,
        content: postContent,
        author: postAuthor,
    }
    
    const stopDefAction = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        update(dadosPost.id, dados);
    }

    const update = (id: number, dados:IPost) => {
        if(id != null){
            PostService.updatePost(id, dados);
            return navigate('/');
        } else {
            console.log("Deu azia");
        }
        
        
    }
    
    return(
        <>
           <form onSubmit={stopDefAction}>
                <h3>Titulo:</h3>
                <input type="text" defaultValue={dadosPost.title} onChange={(event) => setPostTitle(event.target.value)}/>

                <h3>Conteudo:</h3>
                <textarea  defaultValue={dadosPost.content} onChange={(event) => setPostContent(event.target.value)}/>

                <h3>Autor:</h3>
                <input type="text" defaultValue={dadosPost.author} onChange={(event) => setPostAuthor(event.target.value)}/>

                <input type="submit"/>
            </form>

        </> 
    )
}