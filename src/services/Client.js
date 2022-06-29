import {baseUrl} from "../constants/rete";

let axios = require('axios');

let token = localStorage.getItem('token');
/**
 * wrapper del metodo axios per effettuare la richiesta get
 * @param url url relativo (non assoluto) dell'API da utilizzare
 * @param config.elem eventuale porzione aggiuntiva di url che identifica la risorsa richieesta attraverso l'API
 * @param config.params parametri passati come stringa di query
 * @param config.header header http della richiesta di API
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get(url, config = {elem: "", params: {}, headers: {}}){
    if (token) {
        return axios.get(_getUrl(url, config.elem), _getConfig(config, token)).then(({data}) => data);
    }
    return axios.get(_getUrl(url, config.elem), _getConfig(config)).then(({data}) => data);
}

/**
 * wrapper del metodo axios per effettuare la richiesta post
 * @param url url relativo (non assoluto) dell'API da utilizzare
 * @param config.elem eventuale porzione aggiuntiva di url che identifica la risorsa richieesta attraverso l'API
 * @param config.params parametri passati come stringa di query
 * @param config.header header http della richiesta di API
 * @param config.body body della richiesta post
 * @returns {Promise<AxiosResponse<any>>}
 */
export function post(url, config = {elem: "", body:{}, params: {}, headers: {}}){
    if(token){
        return axios.post(_getUrl(url, config.elem), config.body,  _getConfig(config, token));
    }
    return axios.post(_getUrl(url, config.elem), config.body,  _getConfig(config));
}

/**
 * wrapper del metodo axios per effettuare la richiesta put
 * @param url url relativo (non assoluto) dell'API da utilizzare
 * @param config.elem eventuale porzione aggiuntiva di url che identifica la risorsa richieesta attraverso l'API
 * @param config.params parametri passati come stringa di query
 * @param config.header header http della richiesta di API
 * @param config.body body della richiesta post
 * @returns {Promise<AxiosResponse<any>>}
 */
export function put(url, config= {elem: "", body:{}, params:{}, headers:{}}){
    if(token){
        return axios.put(_getUrl(url, config.elem), config.body, _getConfig(config, token));
    }
    return axios.put(_getUrl(url, config.elem), config.body, _getConfig(config));
}

/**
 * wrapper del metodo axios per effettuare la richiesta delete
 * @param url url relativo (non assoluto) dell'API da utilizzare
 * @param config.elem eventuale porzione aggiuntiva di url che identifica la risorsa richieesta attraverso l'API
 * @param config.params parametri passati come stringa di query
 * @param config.header header http della richiesta di API
 * @returns {Promise<AxiosResponse<any>>}
 */
export function deleteEl(url, config={elem:"", params:{}, headers:{}}){
    if (token){
        return axios.delete(_getUrl(url, config.elem), _getConfig((config, token)));
    }
    return axios.delete(_getUrl(url, config.elem), _getConfig((config)));
}

export function _getUrl(url, elem = null) {
    return elem ? `${baseUrl}${url}/${elem}` : `${baseUrl}${url}/`;
}

function _getConfig({params = {}, headers = {}}, token = null) {
    if (token) headers['Authorization'] = `${token}`;
    return {
        params: params,
        headers: headers
    };
}