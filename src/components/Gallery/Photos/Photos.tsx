import {PhotoType} from "../../../types/types";
import {FC} from "react";
import {Card} from "./Card/Card";
import {StyledPhotos} from "./StyledPhotos";
import Masonry from "react-masonry-css";


type PropsType = {
    items: Array<PhotoType>
}

const breakpoints = {
    default: 4,
    1500: 3,
    1150: 2,
    800: 1
}

export const Photos: FC<PropsType> = ({items}) => {

    return <StyledPhotos>
        <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            {items.length === 0
                ? <div>No Results</div>
                : items.map((item) => {
                    return <Card key={item.id} item={item}/>
                })
            }
        </Masonry>
    </StyledPhotos>
}