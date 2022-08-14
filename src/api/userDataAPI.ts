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
    // Добавить комментарий
    postImageComment(imageId: number, comment: Comment) {
        return axiosInstance
            .post(`/${imageId}/comments`, {
                comment,
            })
            .then((response) => response.data)
    },
    // Удалить машину
    // deleteUserCar(userId, index) {
    //     return axiosInstance.delete(`${userId}/userCars/${index}.json`)
    // },
    // Обновить или добавить заправку
    // patchUserFuel(userId, fuel, carIndex, fuelIndex) {
    //     return axiosInstance.patch(
    //         `${userId}/userCars/${carIndex}/fuelings/${fuelIndex}.json`,
    //         {
    //             ...fuel,
    //         }
    //     )
    // },
    // Удалить заправку
    // deleteUserFuel(userId, carIndex, fuelIndex) {
    //     return axiosInstance.delete(
    //         `${userId}/userCars/${carIndex}/fuelings/${fuelIndex}.json`
    //     )
    // },
    // Обновить или добавить прочие расходы
    // patchUserEtc(userId, etc, carIndex, etcIndex) {
    //     return axiosInstance.patch(
    //         `${userId}/userCars/${carIndex}/etc/${etcIndex}.json`,
    //         {
    //             ...etc,
    //         }
    //     )
    // },
    // Удалить прочие расходы
    // deleteUserEtc(userId, carIndex, etcIndex) {
    //     return axiosInstance.delete(
    //         `${userId}/userCars/${carIndex}/etc/${etcIndex}.json`
    //     )
    // },
}

export default userDataAPI
