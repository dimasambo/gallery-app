import {FC, useEffect} from "react";
import {StyledPhoto} from "./StyledPhoto";
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {actions, requestPhoto} from "../../Redux/gallery/gallery-reducer";
import {AppStateType} from "../../Redux/redux-store";

export const Photo: FC = () => {

    const dispatch = useDispatch()

    const history = useHistory();
    const photoId: string = history.location.pathname.substr(7)

    const photo = useSelector((state: AppStateType) => state.gallery.photo)

    useEffect(() => {
        // @ts-ignore
        dispatch(requestPhoto(photoId))

        return () => {
            dispatch(actions.removePhoto())
        }
    }, [])

    useEffect(() => {
        if(photo) {
            console.log(photo.id)
        }
    }, [photo])

    return <StyledPhoto>
        {photo ? <img src={photo.urls.full}/> : <div className={'loading'}>Loading...</div>}
    </StyledPhoto>
}