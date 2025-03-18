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
            process.env.NEXT_PUBLIC_GOOGLE_SUCCESS_REDIRECT_URI || 'http://localhost:3000/session',
            process.env.NEXT_PUBLIC_GOOGLE_FAILURE_REDIRECT_URI || 'http://localhost:3000/login',
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