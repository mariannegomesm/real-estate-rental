import baseApi from "../../services";

class AddressUserServices {
    static newUser(data){
        return baseApi.post("/users", data)
    }
}

export default AddressUserServices;