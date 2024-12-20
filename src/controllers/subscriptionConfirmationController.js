import axios from "axios"

const subscriptionConfirmationController = {

    confirm: async (token) => {
        return await axios.post('https://apod-backend.onrender.com/subscription-confirmations', token)
    } 
}

export default subscriptionConfirmationController