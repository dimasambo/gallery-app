import React, {FC, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {actions, requestPhotosList} from "../../Redux/gallery/gallery-reducer";
import {Photos} from "./Photos/Photos";
import {AppStateType} from "../../Redux/redux-store";
import {StyledGallery} from "./StyledGallery";

export const Gallery: FC = () => {
    const items = useSelector((state: AppStateType) => state.gallery.photosList)

    const [fetching, setFetching] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(actions.removePhotosList())
        }
    }, [])

    useEffect(() => {
        if (fetching) {
            // @ts-ignore
            dispatch(requestPhotosList((items.length / 20) + 1))
            setFetching(false)
        }
    }, [fetching])

    useEffect(() => {

        document.addEventListener('scroll', scrollHandler)

        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [items])

    const scrollHandler = () => {
        if ((document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight) < 1)) {
            document.removeEventListener('scroll', scrollHandler)
            setFetching(true)
        }
    }


    return <StyledGallery>
        {items && <Photos items={items}/>}
    </StyledGallery>
}