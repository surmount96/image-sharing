import apiInstance from "./apiInstance";

class ApiService {

    async fetchNasaImages(){
        return await apiInstance.get();
    }
}

const instance = new ApiService;
export default instance;