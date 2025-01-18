
const apiEndpoint = process.env.CODERSHUBINC_API_ENDPOINT
const projectId = process.env.PROJECT_ID
const cryptEndpoint = process.env.CRYPT_ENDPOINT

class auth {


    async login(email: string, password: string) {
        try {
            const response = await fetch(`${apiEndpoint}/appwrite/auth/login`, 
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        projectId: projectId,
                        apiEndpoint: cryptEndpoint,
                    })
                }
            )
            return response;
        } catch (error) {
            return error;
        }
    }

    async signUp(email: string, password: string , name: string) {
        try {
            const response = await  ''
            return response;
        } catch (error) {
            return error;
        }
    }
}


const Auth = new auth();
export default Auth;