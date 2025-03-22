import Auth from "@/utils/codershubinc/auth.util"
import { setUser } from "./authSlice"
import { AppDispatch } from "./store"

const setStore = async (dispatch: AppDispatch): Promise<void> => {
    try {
        console.log("Setting store")

        const user = await Auth.getUser()
        console.log("User:", user)

        if (!user?.user?.$id) {
            console.log("User not found")
            return
        }

        dispatch(
            setUser(
                user.user
            ),
        )
    } catch (error) {
        console.error("Error in setStore:", error)
        throw error
    }
}

export default setStore
