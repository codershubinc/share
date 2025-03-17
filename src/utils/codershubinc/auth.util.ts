
const apiEndpoint = process.env.NEXT_PUBLIC_CODERSHUBINC_API_ENDPOINT
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
const cryptEndpoint = process.env.NEXT_PUBLIC_CRYPT_ENDPOINT

class auth {


    async login(email: string, password: string) {
        try {
            console.log('apiEndpoint', apiEndpoint);
            const response = await fetch(`${apiEndpoint}/appwrite/auth/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                    credentials: 'include',
                    mode: 'cors',

                }
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