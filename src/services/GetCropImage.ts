const GetCropImage = (url:string) => {
    const index = url.indexOf('o/media')+ 'o/media'.length
    console.log(index)
    const new_url = url.slice(0,index) + "/crop/600/400" + url.slice(index)
    return new_url
}

export default GetCropImage