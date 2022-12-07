import {PhotoType} from "../../types/types";
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {api} from "../../api/api";

const initialState = {
    photosList: [] as Array<PhotoType>,
    photo: null as PhotoType | null
}

export type InitialStateType = typeof initialState

const galleryReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'GALLERY/SET_PHOTOS_LIST':
            return {
                ...state,
                photosList: [...state.photosList, ...action.payload.data]
            }
        case 'GALLERY/SET_PHOTO':
            return {
                ...state,
                photo: {...action.payload.photo}
            }
        case 'GALLERY/REMOVE_PHOTOS_LIST':
            return {
                ...state,
                photosList: []
            }
        case 'GALLERY/REMOVE_PHOTO':
            return {
                ...state,
                photo: null
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setPhotosList: (data: Array<PhotoType>) => (
        {
            type: 'GALLERY/SET_PHOTOS_LIST',
            payload: {data}
        } as const
    ),
    setPhoto: (photo: PhotoType) => (
        {
            type: 'GALLERY/SET_PHOTO',
            payload: {photo}
        } as const
    ),
    removePhotosList: () => (
        {
            type: 'GALLERY/REMOVE_PHOTOS_LIST'
        } as const
    ),
    removePhoto: () => (
        {
            type: 'GALLERY/REMOVE_PHOTO'
        } as const
    )
}

type ThunkType = BaseThunkType<ActionsType>

export const requestPhotosList = (page: number): ThunkType => {
    return async (dispatch) => {
        const data: Array<PhotoType> = await api.getPhotosList(page);
        dispatch(actions.setPhotosList(data));
    }
}

export const requestPhoto = (photoId: string): ThunkType => {
    return async (dispatch) => {
        const data: PhotoType = await api.getPhoto(photoId);
        dispatch(actions.setPhoto(data));
    }
}

export default galleryReducer;