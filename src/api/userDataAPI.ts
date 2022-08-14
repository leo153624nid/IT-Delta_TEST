/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import axios from 'axios'
import { Comment } from '../store/slices/imgSlice'

const axiosInstance = axios.create({
    baseURL: 'https://boiling-refuge-66454.herokuapp.com/images',
})

const userDataAPI = {
    // Получить данные пользователя
    getUserData() {
        return axiosInstance.get(``).then((response) => response.data)
    },
    // Получить данные фотографии
    getImageData(imageId: number) {
        return axiosInstance
            .get(`/${imageId}`)
            .then((response) => response.data)
    },
    // Добавить комментарий к фотографии
    postImageComment(imageId: number, comment: Comment) {
        return axiosInstance
            .post(`/${imageId}/comments`, {
                comment,
            })
            .then((response) => response.data)
    },
}

export default userDataAPI
