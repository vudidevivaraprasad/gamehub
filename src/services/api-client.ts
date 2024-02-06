import axios from 'axios'

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"d8c296cfde2141fd9060626c94f883dc"
    }
})