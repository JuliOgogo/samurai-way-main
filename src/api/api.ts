import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'api-key': '1be0657b-9ae5-4d5f-9112-827d776371f6'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => {
            return res.data
        })
    },
    follow(userID: number) {
        return instance.post(`/follow/${userID}`)
    },
    unfollow(userID: number) {
        return instance.delete(`/follow/${userID}`)
    },
    getProfile(userID: number) {
        return instance.get(`profile/` + userID)
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    }
}

/*
export const getUsers = (currentPage: number = 1, pageSize: number = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => {
        return res.data
    })
}*/
