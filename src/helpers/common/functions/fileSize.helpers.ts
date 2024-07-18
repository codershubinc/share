import toast from "react-hot-toast"

const fileSize = (sizeInBytes: number) => {
    let fileSize = sizeInBytes + ' bytes'
    if (sizeInBytes < 1024 * 1024) {

        (sizeInBytes / 1024).toFixed(2)

        fileSize = (sizeInBytes / 1024).toFixed(2) + 'KB'
    } else if (sizeInBytes < 1024 * 1024 * 1024) {
        (sizeInBytes / 1024 / 1024).toFixed(2)

        fileSize = (sizeInBytes / 1024 / 1024).toFixed(2) + 'MB'
    } else {

        (sizeInBytes / 1024 / 1024 / 1024).toFixed(2)

        fileSize = (sizeInBytes / 1024 / 1024 / 1024).toFixed(2) + 'GB'
    }
    return fileSize
}

interface fileSizeSafeCheckOptions {
    maxFileSize: number
    fileSizeInBytes: number
    makeTost: boolean | false

}
const fileSizeCheckSafe = ({ maxFileSize, fileSizeInBytes, makeTost }: fileSizeSafeCheckOptions) => {
    if ((fileSizeInBytes / 1024 / 1024) >= maxFileSize) {
        if (makeTost) {
            toast.error(`file size could not be exited more than ${maxFileSize} mb`)
        }
        return false
    }
    return true
}


export {
    fileSize,
    fileSizeCheckSafe
}