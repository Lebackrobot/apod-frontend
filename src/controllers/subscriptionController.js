import axios from "axios"

const subscriptionController = {
    create: async (subscription) => {
        return await axios.post('https://apod-backend.onrender.com/subscriptions', subscription)
    }
}

export default subscriptionController