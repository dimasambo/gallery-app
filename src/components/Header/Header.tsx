import {FC} from "react";
import {StyledHeader} from "./StyledHeader";

export const Header: FC = () => {
    return <StyledHeader>
        <div className={'logoWrapper'}>
            <div className={'logoName'}>Photo Gallery</div>
        </div>
    </StyledHeader>
}