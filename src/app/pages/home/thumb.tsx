export const Thumb = (props: {id: number}) => {
    const img = `http://localhost:5070/api/postagens/foto/${props.id}`;

    return(
        <>
            <img src={img} />
        </>
    )
}