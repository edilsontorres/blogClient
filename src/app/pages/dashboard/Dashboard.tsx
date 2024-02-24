import { useEffect, useState } from "react";
import { PostService } from "../../shared/services/Api/Posts/PostService";

export const Dashboard = () => {
  const[post, setPost] = useState<any>([]);

  useEffect(()=>{
    PostService.listPost()
    .then((result) => {
      setPost(result);
    });
  }, []);


  return (
    <>
      {/* Uma maneira de visualizar(redenrizar) um objeto direto na página */}
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </>
  );
}