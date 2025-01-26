import { useEffect, useState } from "react";
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";
import { Thumb } from "../home/thumb";
import * as R from "./ReadingPageStyle";
import { useParams } from "react-router-dom";
import * as H from "../home/HomeStyle";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Footer } from "../../shared/components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { DataPost } from "../../shared/components/data/DataPost";

export const ReadingPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const idParam = Number(id);
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    PostService.listPostById(idParam)
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  const redrectHome = () => {
    return navigate(`/`);
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
          <H.HeadContarinerLogo  onClick={() => redrectHome()}>
            <h2>Logo do blog</h2>
          </H.HeadContarinerLogo>
        </H.HeadContainerArea>

      </H.HeadContainer>

      {!loading ? (
        <R.Container>
          <R.TitleContainer>
            <h1>{post?.title}</h1>
          </R.TitleContainer>
          <R.AuthorContainer>
            <R.AuthorContent>
              <h4>{post?.author}</h4>
            </R.AuthorContent>
            <p>•</p>
            <DataPost data={post!.createdAt} />
          </R.AuthorContainer>
          <hr />
          <R.divImage>
            <Thumb id={post!.id} />
          </R.divImage>
          <R.BodyContent>
            <div dangerouslySetInnerHTML={{ __html: post!.content }} />
          </R.BodyContent>
        </R.Container>
      ) : (<div>Carregando conteúdo ...</div>) }
      <Footer />
    </>
  )
}