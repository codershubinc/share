import axios from "axios";

const createSession = async (
    secret: string,
    userId: string
) => {
    try {
        const codershubincEndpoint = process.env.NEXT_PUBLIC_CODERSHUBINC_ENDPOINT
        console.log('create session data given', secret, userId)
        console.log('create session endpoint ', codershubincEndpoint);
        ;
        const response = await axios.get(`${codershubincEndpoint}/appwrite/auth/gSession`,
            {
                params: {
                    secret,
                    userId
                }, headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true
            }
        )
        return response.data
    } catch (error) {
        console.log('create session error', error);
        throw error
    }
}

export default createSession;