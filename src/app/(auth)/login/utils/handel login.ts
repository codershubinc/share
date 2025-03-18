import Auth from "@/utils/codershubinc/auth.util";

const handleEmailPassLogin = async (
    data: any,
    setLoading: any,
    setNavigating: any,
    setErrorMessage: any,
    router: any
) => {
    setLoading(true);
    setErrorMessage("");
    try {
        const response = await Auth.login(data.email, data.password);
        console.log('Login response:', response);
        setNavigating(true);
        router.push('/dashboard');
    } catch (error) {
        console.error('Login error:', error);
        setErrorMessage("Invalid email or password. Please try again.");
    } finally {
        setLoading(false);
    }
};


export default handleEmailPassLogin;