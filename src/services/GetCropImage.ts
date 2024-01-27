import noImage from '../assets/no-image-placeholder.webp'

const GetCropImage = (url:string) => {
    if(!url) return noImage
    const index = url.indexOf('o/media')+ 'o/media'.length
    const new_url = url.slice(0,index) + "/crop/600/400" + url.slice(index)
    return new_url
}

export default GetCropImage