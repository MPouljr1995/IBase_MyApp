import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class PoulApiService {

    fetchUsers() {
        return axios.get(API_URL + 'user');
    }

    editUser(user) {
        return axios.put(API_URL + 'user' + user.id, user);
    }

    deleteUser(userId) {
        return axios.delete(API_URL + 'user/' + userId);
    }

    findUserById(userId){
        return axios.get(API_URL + 'user/' + userId);
    }

    
}

export default new PoulApiService();