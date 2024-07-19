interface FunctionIntervalProps {

    timeInSec: number
    functionProp: () => void
}



class interval {

    Interval(timeInSec: number) {
        const intervalId = setInterval(() => {
            return console.log('Hello, world!');
        }, timeInSec * 1000);

        // Clean up the interval on component unmount
        () => clearInterval(intervalId);
        return intervalId
    }
    FunctionInterval({ timeInSec, functionProp }: FunctionIntervalProps) {
        const intervalId = setInterval(() => {
            return functionProp()
        }, timeInSec * 1000);

        // Clean up the interval on component unmount
        () => clearInterval(intervalId);
        return intervalId
    }






}

const Interval = new interval()

export default Interval