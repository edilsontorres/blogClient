import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";
import * as H from "./HomeStyle";
import {FaInstagram, FaLinkedin, FaGithub} from "react-icons/fa";
import { Thumb } from "./thumb";
import { Footer } from "../../shared/components/footer/Footer";
import { DataPost } from "../../shared/components/data/DataPost";



export const Home = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    PostService.listPost()
    .then((data) =>{
      setPost(data);
    });

  }, []);

  const dadosPost = (id:number) => {
    return navigate(`/titulo-post/${id}`);

  }

 
 
  
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
              <H.ThumbHome onClick={() => dadosPost(post.id)}>
                <Thumb id={post.id}/>
              </H.ThumbHome>
            </H.PostGridItemArea>
            <DataPost data={post.createdAt} />
            <H.PostTitleItem onClick={() => dadosPost(post.id)}>
              <h2>{post.title}</h2>
            </H.PostTitleItem>
          </div>
        )}
      </H.SectionPostGrid>

      <Footer />
    
    </>
  );
}