import GoogleAuth from "@/utils/codershubinc/google.auth";

const handleGoogleLogin = async (
    setLoading: any,
    setNavigating: any,
    setErrorMessage: any,
    router: any
) => {
    setLoading(true);
    setErrorMessage("");
    try {
        const response = await GoogleAuth.login(
            'http://localhost:3000/session',
            'http://localhost:3000/login'
        );
        console.log('Google login response:', response);
        setNavigating(true);
        router.push(response?.uri || '/');
    } catch (error) {
        console.error('Google login error:', error);
        setErrorMessage("Google login failed. Please try again.");
    } finally {
        setLoading(false);
    }
};


export default handleGoogleLogin;