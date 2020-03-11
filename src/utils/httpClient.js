import Axios from "axios";
import _config from "../config";

export class HttpClient {
    static get(url, config ={}) {
        return Axios.get(_config.server + url, config)
    }
}