import { useEffect, useState } from "react";
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";
import * as H from "./HomeStyle";
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import { Thumb } from "./thumb";
import { Footer } from "../../shared/components/footer/Footer";



export const Home = () => {

  const [post, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    PostService.listPost()
    .then((response) => {
      setPost(response);
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
            <h2>Logo do blog</h2>
          </H.HeadContarinerLogo>
        </H.HeadContainerArea>

      </H.HeadContainer>

      <H.SectionPostGrid>
        {post.map((post, index)=>
          <div id="PostGridArea" key={index}>
            <H.PostGridItemArea>
              <H.ThumbHome>
                <Thumb id={post.id}/>
              </H.ThumbHome>
            </H.PostGridItemArea>
            <H.PostTitleItem>
              <h2><a href="https://www.google.com" target="_blank">{post.title}</a></h2>
            </H.PostTitleItem>
            <div>
              {post.createdAt.toString()}
            </div>
          </div>
        )}
      </H.SectionPostGrid>

      <Footer />
    
    </>
  );
}