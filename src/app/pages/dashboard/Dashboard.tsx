import { useEffect, useState } from "react";
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const[post, setPost] = useState<IPost[]>([]);
  const navigator = useNavigate();
  

  useEffect(()=>{
    PostService.listPost()
    .then((result) => {
      setPost(result);
    });
  }, []);

  const dadosPost = (post:IPost) => {
    return navigator(`/postagens`, { state:{post: post} });
    
  }

  return (
    <>
      <h1>Lista de Artigos</h1>
      <table>
        <thead>
          <tr>
            <td>Titulo</td>
            <td>Autor</td>
            <td>Ação</td>
          </tr> 
        </thead>
        {post.map((post, index) =>
          <tbody key={index}>
            <tr>
              <td><p>{post.title}</p></td>
              <td><p>{post.author}</p></td>
              <td>
                <button onClick={()=> dadosPost(post)}>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          </tbody>
        )}
      </table>
      
    </>
  );
}