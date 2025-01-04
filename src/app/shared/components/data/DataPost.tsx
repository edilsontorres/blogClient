import { FormatData } from "../../services/Data/FormatData"
import * as D from './DataPostStyle';

export const DataPost = (props: {data: string}) => {

    const data = FormatData(props.data);

    return(
        
        <D.Style>
            <a href="https://google.com" target="_blank">
                {data}
            </a>
        </D.Style>
        
    )
}