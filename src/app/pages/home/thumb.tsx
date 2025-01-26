import { useEffect, useState } from "react";
import { Image, PostService } from "../../shared/services/Api/Posts/PostService";

export const Thumb = (props: { id: number }) => {
    const [data, setData] = useState<Image | null>(null);

    useEffect(() => {
        PostService.getThumb(props.id)
            .then((res) => {
                setData(res);
            });
    }, [])

    return (
        <>

            {data ? (<img src={data.link} />) : (<p>Carregando...</p>)}

        </>
    )
}