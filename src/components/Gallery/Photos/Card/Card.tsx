import {PhotoType} from "../../../../types/types";
import {FC} from "react";
import {StyledCard} from "./StyledCard";
import { Link } from "react-router-dom";

type UserPropsType = {
    item: PhotoType
}

export const Card: FC<UserPropsType> = ({item}) => {

    return <StyledCard>
        <Link to={'/photo/' + item.id}>
            <div className={'cardWrapper'}>
                <div className={'cardImgBox'}>
                    <img src={item.urls.small}/>
                </div>
                <div className={'cardNameBox'}>
                    <span>Title: {item.alt_description || 'no title'}</span>
                </div>
                <div className={'cardNameBox'}>
                    <span>Author: {item.user.first_name || 'no description'}</span>
                </div>
            </div>
        </Link>
    </StyledCard>
}