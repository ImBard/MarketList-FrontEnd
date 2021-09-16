import axios from "axios"

class UserService {

    async Cadastrar(data) {
        return axios({
            url: "http://192.168.0.3:3000/cadastrar",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const userService = new UserService()
export default userService