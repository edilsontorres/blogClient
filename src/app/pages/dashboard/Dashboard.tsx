import { useEffect, useState } from "react";
import { IPost, PostService } from "../../shared/services/Api/Posts/PostService";
import { useNavigate } from "react-router-dom";
import * as D from "./DashboardStyle";
import { Footer } from "../../shared/components/footer/Footer";
import { FormatData } from "../../shared/services/Data/FormatData";
import { FaPen, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import avatar from "../../img/avatar.png"
import { Thumb } from "../home/thumb";

export const Dashboard = () => {
  const [post, setPost] = useState<IPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    PostService.listPost()
      .then((data) => {
        setPost(data.posts);
      });
  }, []);

  const dadosPost = (post: IPost) => {
    return navigate(`/postagens`, { state: { post: post } });

  }

  const novoPost = () => {
    navigate('/novopost');
  }

  const deletePost = (id: number) => {
    if (id != null) {
      PostService.removePost(id);
      alert("Post deletado com sucesso!");
      return window.location.reload();
    }
  }

  return (
    <>
      <D.dashboardHeader>
        <D.photoArea>
          <img src={avatar} />
        </D.photoArea>
        <D.nameArea>Edilson Torres</D.nameArea>
      </D.dashboardHeader>

      <D.dashboardContainerTitleArea>
        <D.dashboardContainerTitle>
          <h2>Dashboard</h2>
          <D.actionNewPost onClick={() => novoPost()}>
            <FaPlusCircle />
            <p>Add New Post</p>
          </D.actionNewPost>
        </D.dashboardContainerTitle>
      </D.dashboardContainerTitleArea>

      <D.mainDashboard>
        <D.dashboardContainer>
          {post.map((post, index) =>
            <D.postContainer key={index}>
              <D.thumbPost>
                <Thumb id={post.id} />
              </D.thumbPost>
              <D.tilePost>
                <h2>{post.title}</h2>
                <D.pArea>
                  <D.pAuthor>
                    <p>{post.author}</p>
                  </D.pAuthor>
                  <D.pData>
                    <p>{FormatData(post.createdAt)}</p>
                  </D.pData>
                </D.pArea>
              </D.tilePost>
              <D.actionPost>
                <D.svgArea>
                  <FaPen onClick={() => dadosPost(post)} />
                </D.svgArea>
                <D.svgArea>
                  <FaTrashAlt onClick={() => deletePost(post.id)} />
                </D.svgArea>
              </D.actionPost>
            </D.postContainer>
          )
          }

        </D.dashboardContainer>
      </D.mainDashboard>
      <Footer />
    </>
  );
}
