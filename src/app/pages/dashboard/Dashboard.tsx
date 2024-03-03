import { useEffect, useState } from "react";
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const[post, setPost] = useState<IPost[]>([]);
  const navigate = useNavigate();
  

  useEffect(()=>{
    PostService.listPost()
    .then((result) => {
      setPost(result);
    });
  }, []);

  const dadosPost = (post:IPost) => {
    return navigate(`/postagens`, { state:{post: post} });
    
  }

  const novoPost = () => {
    navigate('/novopost');
  }

  const deletePost = (id: number) => {
    if(id != null){
        PostService.removePost(id);
        alert("Post deletado com sucesso!");
        return window.location.reload();
    }
    
    
}

  return (
    <>
      <h1>Lista de Artigos</h1>
      <button onClick={novoPost}>Novo Post</button>
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
                <button onClick={() => dadosPost(post)}>Editar</button>
                <button onClick={() => deletePost(post.id)}>Excluir</button>
              </td>
            </tr>
          </tbody>
        )}
      </table>
      
    </>
  );
}