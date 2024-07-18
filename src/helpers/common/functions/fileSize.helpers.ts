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

}
const fileSizeCheckSafe = ({ maxFileSize, fileSizeInBytes }: fileSizeSafeCheckOptions) => {
    if ((fileSizeInBytes / 1024 / 1024) >= maxFileSize) {
        toast.error(`File size should be less than ${maxFileSize} mb`)
        console.error(`File size should be less than ${maxFileSize} mb`)
        return false
    }
    return true
}


export {
    fileSize,
    fileSizeCheckSafe
}