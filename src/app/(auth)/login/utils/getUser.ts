import Auth from "@/utils/codershubinc/auth.util";

const fetchUser = async (
    setLoading: any,
    setErrorMessage: any,
    router: any
) => {
    try {
        setLoading(true);
        const response = await Auth.getUser();
        if (response?.user.$id) {
            setErrorMessage('User already logged in. Redirecting to share page...');
            router.push('/share');
        }
        console.log('User:', response);
    } catch (error) {
        console.error('Error fetching user:', error);
    } finally {
        setLoading(false);
    }
};

export default fetchUser;