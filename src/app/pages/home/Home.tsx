import { useEffect, useState } from "react";
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";
import * as H from "./HomeStyle";
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import img1 from "./images/acara.jpg";


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

      <H.SectionPostGrid>
        {post.map((post, index)=>
          <H.PostGridItem>
            <img src={img1}/>
            <H.PostTitleItem>
              <a href="https://www.google.com" target="_blank">{post.title}</a>
            </H.PostTitleItem>
          </H.PostGridItem>
        )}
       
      </H.SectionPostGrid>
    </>
  );
}