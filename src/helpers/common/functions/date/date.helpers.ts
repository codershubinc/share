

interface DateOptions {
    format: 'YYYY-MM-DD' | 'DD-MM-YYYY'
}
const currentDate = ({ format }: DateOptions) => {
    if (format === 'YYYY-MM-DD') {
        return new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate();
    } else if (format === 'DD-MM-YYYY') {
        return new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear();
    }
}





export {
    currentDate
}