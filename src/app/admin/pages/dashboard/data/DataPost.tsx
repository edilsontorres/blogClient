import { FormatData } from "../../../../shared/services/Data/FormatData";
import * as D from './DataPostStyle';

export const DataPost = (props: {data: string}) => {

    const data = FormatData(props.data);

    return(
        
        <D.Style>
            {data}
        </D.Style>
        
    )
}