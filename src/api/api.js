import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "eaa5d1a5-0391-41f3-a728-26031d0ebf76"
    }
})

export const UsersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
       return  instance.delete(`follow/${userId}`)
    },
}
