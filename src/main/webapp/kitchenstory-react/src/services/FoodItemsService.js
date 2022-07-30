import axios from "axios";

const FOOD_ITEMS_BASE_URL = "http://localhost:8080/api/v1/listAllFoodItems";
const ADD_ITEMS_BASE_URL = "http://localhost:8080/api/v1/listAllFoodItems/addItems";
const HOME_BASE_URL = "http://localhost:8080/api/v1/Home/AddUser";
class FoodItemsService{

    getFoodItems() {
        return axios.get(FOOD_ITEMS_BASE_URL);
    }
    createFoodItems(food) {
        return axios.post(ADD_ITEMS_BASE_URL,food);
    }
    getFoodItemsSearch(food)
    {
        return axios.get(FOOD_ITEMS_BASE_URL,food)
    }
    createUser(user) {
        return axios.post(HOME_BASE_URL,user);
    }

}
export default new FoodItemsService();