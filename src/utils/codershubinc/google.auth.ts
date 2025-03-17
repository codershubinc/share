import axios from "axios";

const codershubincEndpoint = process.env.NEXT_PUBLIC_CODERSHUBINC_ENDPOINT

class googleAuth {
    async login(
        successRedirect: string,
        failRedirect: string,
    ) {
        try {
            console.log('google login data given', successRedirect, failRedirect)
            console.log('google login endpoint ', codershubincEndpoint);
            ;


            const response = await axios.post(`${codershubincEndpoint}/appwrite/auth/gLogin`, {
                successRedirect,
                failRedirect
            })
            return response.data
        } catch (error) {
            console.log('google login error', error);
            throw error
        }

    }
}

const GoogleAuth = new googleAuth();
export default GoogleAuth;