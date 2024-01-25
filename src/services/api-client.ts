import axios from 'axios'

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"d8c296cfde2141fd9060626c94f883dc"
    }
})