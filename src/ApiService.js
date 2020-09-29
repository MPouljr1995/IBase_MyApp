import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/api';

class ApiService {

  
    fetchUsers() {
        return axios.get(USER_API_BASE_URL+'/user');
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/user' + user.id, user);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/user/' + userId);
    }

    findUserById(userId){
        return axios.get(USER_API_BASE_URL + '/user?id=' + userId);
    }




    getAllProducts(){
      return axios.get(USER_API_BASE_URL + '/product');
    }

    findProductById(productId){
        return axios.get(USER_API_BASE_URL + '/product/' + productId);
    }

    updateProduct(product){
        return axios.put(USER_API_BASE_URL + '/product/' + product.id, product);
    }

    addProduct(product){
        return axios.post(USER_API_BASE_URL,+'/product/'+ product);
    }

    deleteProduct(productId){
        return axios.delete(USER_API_BASE_URL + '/product/' + productId);
    }





    getOrderById(orderId){
        return axios.get(USER_API_BASE_URL + '/order/' + orderId);
    }
    editOrder(order){
        return axios.put(USER_API_BASE_URL + '/order/' + order.id, order);
    }
    deleteOrder(orderId){
        return axios.get(USER_API_BASE_URL + '/order/' + orderId);
    }
    addOrder(order) {
        return axios.post(USER_API_BASE_URL,+'/order/'+ order);
    }






    createShop(shop){
        return axios.post(""+USER_API_BASE_URL, + '/shop/' + shop);
    }
    deleteShop(shopId){
          return axios.delete(USER_API_BASE_URL + '/shop?id=' + shopId);
    }

    findShopById(shopId) {
        return axios.get(USER_API_BASE_URL + '/shop?id=' + shopId);
    }

    editShop(shop){
        return axios.put(USER_API_BASE_URL + '/shop/' + shop.id, shop);
    }

}

export default new ApiService();
