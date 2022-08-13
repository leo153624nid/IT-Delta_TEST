import axios from 'axios'

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
    // Обновить или добавить машину
    // patchUserCar(userId, car, index) {
    //     return axiosInstance.patch(`${userId}/userCars/${index}.json`, {
    //         ...car,
    //     })
    // },
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
