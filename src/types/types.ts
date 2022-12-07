export type PhotoType = {
    id: string
    created_at: string
    updated_at: string
    width: number
    height: number
    color: string
    blur_hash: string
    likes: number
    liked_by_user: boolean
    description: string
    alt_description: string
    user: any
    current_user_collections: Array<any>
    urls: {
        "raw": string
        "full": string
        "regular": string
        "small": string
        "thumb": string
    }
    links: any
}