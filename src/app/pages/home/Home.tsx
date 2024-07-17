import { useEffect, useState } from "react";
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";
import * as H from "./HomeStyle";
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa"



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
          <H.HeadContainerIcons>
            <a href="https://www.google.com" target="_blank"><FaInstagram /></a>
          </H.HeadContainerIcons>
          <H.HeadContainerIcons>
          <a href="https://www.google.com" target="_blank"><FaGithub /></a>
          </H.HeadContainerIcons>
          <H.HeadContainerIcons>
          <a href="https://www.google.com" target="_blank"><FaLinkedin /></a>
          </H.HeadContainerIcons>
        </H.HeadContainerArea>

        <H.HeadContainerArea>
          <H.HeadContarinerLogo>
            <h2>Meu blog logo</h2>
          </H.HeadContarinerLogo>
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