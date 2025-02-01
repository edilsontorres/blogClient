import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPost, PostService } from "../../../shared/services/Api/Posts/PostService";
import * as H from "./HomeStyle";
import { Thumb } from "../../../shared/services/Thumb/thumb";
import { Footer } from "../../components/footer/Footer";
import { DataPost } from "../../components/data/DataPost";
import { Header } from "../../components/header/Header";



export const Home = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState<IPost[]>([]);

  useEffect(() => {
    PostService.listPost()
    .then((data) =>{
      setPost(data);
    });

  }, []);

  const dadosPost = (slug:string) => {
    return navigate(`post/${slug}`);

  }

  return (
    <>
    <Header />

    <H.LastsPost>
      <h1>Posts mais recentes</h1>
    </H.LastsPost>

      <H.SectionPostGrid>
        {post.map((post, index)=>
          <div id="PostGridArea" key={index}>
            <H.PostGridItemArea>
              <H.ThumbHome onClick={() => dadosPost(post.slug)}>
                <Thumb id={post.id}/>
              </H.ThumbHome>
            </H.PostGridItemArea>
            <DataPost data={post.createdAt} />
            <H.PostTitleItem onClick={() => dadosPost(post.slug)}>
              <h2>{post.title}</h2>
            </H.PostTitleItem>
          </div>
        )}
      </H.SectionPostGrid>

      <Footer />
    
    </>
  );
}