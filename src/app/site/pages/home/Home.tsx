import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IPost, PostService } from "../../../shared/services/Api/Posts/PostService";
import * as H from "./HomeStyle";
import { Thumb } from "../../../shared/services/Thumb/thumb";
import { Footer } from "../../components/footer/Footer";
import { DataPost } from "../../components/data/DataPost";
import { Header } from "../../components/header/Header";
import { Pagination } from "../../../shared/pagination/Pagination";



export const Home = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")|| "1", 10);
  const [post, setPost] = useState<IPost[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  
 
  useEffect(() => {
    const url = page === 1;
    if (url) {
      PostService.listPost()
        .then((data) => {
          setTotalPages(data.totalPages);
          setPost(data.data);
        })
    } else {
      PostService.listPostPagination(page)
        .then((data) => {
          setTotalPages(data.totalPages);
          setPost(data.data)
        });
    }
  }, [page]);

  const dadosPost = (slug: string) => {
    return navigate(`post/${slug}`);

  }

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) }); // Atualiza a URL ao mudar de página
  };

  return (
    <>
      <Header />

      <H.SectionPostGrid>
        {post.map((post) => (
          <div id="PostGridArea" key={post.id}>
            <H.PostGridItemArea>
              <H.ThumbHome onClick={() => dadosPost(post.slug)}>
                <Thumb id={post.id} />
              </H.ThumbHome>
            </H.PostGridItemArea>
            <DataPost data={post.createdAt} />
            <H.PostTitleItem onClick={() => dadosPost(post.slug)}>
              <h2>{post.title}</h2>
            </H.PostTitleItem>
          </div>
        ))}
      </H.SectionPostGrid>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange}/>
      <Footer />

    </>
  );
}