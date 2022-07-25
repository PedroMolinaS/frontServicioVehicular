import { URL_BACKEND } from "../enviroments/enviroment"

export const postLogin = async (data) => {
    try {
        const response = await fetch(`${URL_BACKEND}/customer/logincustomer`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const json = await response.json()
        return json
    } catch (error) {
        console.error(error)
        throw error
    }
}

