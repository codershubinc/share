import axios from "axios";

const apiEndpoint = process.env.NEXT_PUBLIC_CODERSHUBINC_ENDPOINT

class auth {


    async login(email: string, password: string) {
        try {
            console.log('apiEndpoint', apiEndpoint);
            if (!email || !password) throw new Error('Email and password are required')
            console.log('email', email, password);

            const response = await axios.get(`${apiEndpoint}/appwrite/auth/login`,
                {
                    params: {
                        email,
                        password
                    },
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                },

            )
            return response;
        } catch (error) {
            throw error;
        }
    }

    async signUp(email: string, password: string, name: string) {
        try {
            const response = await ''
            return response;
        } catch (error) {
            return error;
        }
    }
}


const Auth = new auth();
export default Auth;