import { useEffect, useState } from "react";
import { IPost, PostService } from "../../../shared/services/Api/Posts/PostService";
import { Thumb } from "../../../shared/services/Thumb/thumb";
import * as R from "./ReadingPageStyle";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { DataPost } from "../../components/data/DataPost";
import { Header } from "../../components/header/Header";

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

  return (

    <>
      <Header />

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