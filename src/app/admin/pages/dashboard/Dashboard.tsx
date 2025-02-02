import { useEffect, useState } from "react";
import { IPost, PostService } from "../../../shared/services/Api/Posts/PostService";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as D from "./DashboardStyle";
import { FormatData } from "../../../shared/services/Data/FormatData";
import { FaPen, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import avatar from "../../../../assets/avatar.png"
import { Thumb } from "../../../shared/services/Thumb/thumb";
import { Pagination } from "../../../shared/pagination/Pagination";


export const Dashboard = () => {
  const [post, setPost] = useState<IPost[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")|| "1", 10);
  const [totalPages, setTotalPages] = useState<number>(1);
  const navigate = useNavigate();

  useEffect(() => {
    const url = page === 1;

    if (url) {
      PostService.listPost()
        .then((data) => {
          setPost(data.data);
          setTotalPages(data.totalPages);
        })
    } else {
      PostService.listPostPagination(page)
        .then((data) => {
          setPost(data.data)
          setTotalPages(data.totalPages);
        });
    }
  }, [page]);
  
  const dadosPost = (slug:string) => {
    return navigate(`/postagens/${slug}`);

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

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) }); // Atualiza a URL ao mudar de página
  };

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
                  <FaPen onClick={() => dadosPost(post.slug)} />
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
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange}/>
    </>
  );
}
