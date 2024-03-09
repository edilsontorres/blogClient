import { useEffect, useState } from "react";
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";

export const Home = () => {

    const[post, setPost] = useState<IPost[]>([]);

    useEffect(()=>{
        PostService.listPost()
        .then((result) => {
          setPost(result);
        });
      }, []);

    return(
    <>
      <h1>Lista de Artigos</h1>
      <table>
        <thead>
          <tr>
            <td>Titulo</td>
            <td>Conteudo</td>
            <td>Autor</td>
          </tr> 
        </thead>
        {post.map((post, index) =>
          <tbody key={index}>
            <tr>
              <td><p>{post.title}</p></td>
              <td><p>{post.content}</p></td>
              <td><p>{post.author}</p></td>
            </tr>
          </tbody>
        )}
      </table>
      
      
    </>
  );
}