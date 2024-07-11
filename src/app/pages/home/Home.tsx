import { useEffect, useState } from "react";
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";
import * as H from "./HomeStyle";



export const Home = () => {

  const [post, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    PostService.listPost()
      .then((result) => {
        setPost(result);
      });
  }, []);

  return (
    <>
      <H.HeadContainer>
        <H.HeadContainerArea>
          <h1>Div 1 logo e nome do site</h1>
        </H.HeadContainerArea>
        <H.HeadContainerArea>
          <h1>Div 2 acesso as redes socias</h1>
        </H.HeadContainerArea>
      </H.HeadContainer>
      
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
              <td>
                <div
                  dangerouslySetInnerHTML={{
                    __html: (post.content)
                  }}
                ></div>
              </td>
              <td><p>{post.author}</p></td>
            </tr>
          </tbody>

        )}
      </table>


    </>
  );
}