import {PhotoType} from "../types/types";
import axios from "axios";

const _accessKey = '18kE-8Xtsdrc1ryjClsPR7TGBLs4bYHkSBXrS2PZJDw'

export const api = {
    getPhotosList(page = 1, size = 20) {
        return axios.get<Array<PhotoType>>(`https://api.unsplash.com/photos?page=${page}&per_page=${size}&client_id=${_accessKey}`)
            .then(response => response.data)
    },
    getPhoto(photoId: string) {
        return axios.get<PhotoType>(`https://api.unsplash.com/photos/${photoId}?client_id=${_accessKey}`)
            .then(response => response.data)
    }
}