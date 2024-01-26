const GetCropImage = (url:string) => {
    if(!url) return url
    const index = url.indexOf('o/media')+ 'o/media'.length
    const new_url = url.slice(0,index) + "/crop/600/400" + url.slice(index)
    return new_url
}

export default GetCropImage