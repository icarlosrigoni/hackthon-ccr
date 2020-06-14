import axios from 'axios';

const baseUrl = 'https://ccrapi.herokuapp.com/api/'

function getNearestPoint(info) {
    var response = null

    axios.get(`${baseUrl}/getNearestPoint`, {
        params: {
            lat: info.lat,
            lng: info.lng
        }
    }).then((response) => { response = response })
    return response
}

function getShipping(info) {
    var response = null

    axios.get(`${baseUrl}/getNearestPoint`, {
        params: {
            distance: info.distance,
            axes: info.axes,
            cargoType: info.cargoType
        }
    }).then((response) => { response = response })
    return response
}

export default getNearestPoint
export default getShipping