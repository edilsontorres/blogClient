import { FormatData } from "../../services/Data/FormatData"
import * as D from '../data/dataPostStyle';

export const DataPost = (props: {data: string}) => {

    const data = FormatData(props.data);

    return(
        <>
            <D.Style>{data}</D.Style>
        </>
    )
}