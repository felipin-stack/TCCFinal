import http from './http-common';
const API_URL = "http://localhost:8080";

const getAllClientes = () => {
    return http.mainInstance.get(API_URL + '/cliente');
};



const ClienteService = {
    getAllClientes,
}

export default ClienteService;