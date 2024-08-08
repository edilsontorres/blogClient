import { useEffect, useState } from "react";
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";
import { useNavigate } from "react-router-dom";
import * as D from "./DashboardStyle";
import { Footer } from "../../shared/components/footer/Footer";
import { DataPost } from "../../shared/components/data/dataPost";

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

  const home = () => {
    navigate('/')
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

      <D.dashboardHeader>
        <h2>Dashboard - Centro de controle</h2>
      </D.dashboardHeader>
       
      <D.dashboardContainer>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Titulo</th>
              <th>Ação</th>
            </tr> 
          </thead>
          {post.map((post, index) =>
            <tbody key={index}>
              <tr>
                <td><DataPost data ={post.createdAt} /></td>
                <td><p>{post.title}</p></td>
                <td>
                  <button onClick={() => dadosPost(post)}>Editar</button>
                  <button onClick={() => deletePost(post.id)}>Excluir</button>
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </D.dashboardContainer>

      

      {/* <h1>Lista de Artigos</h1>
      <button onClick={novoPost}>Novo Post</button>
      <button onClick={home}>Home</button>
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
      </table> */}
      <Footer />
    </>

   
  );
}