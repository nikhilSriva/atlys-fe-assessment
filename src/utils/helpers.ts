import {formatDistanceToNow} from "date-fns";

const convertTimeToHumanReadable = (timestamp) => {
    if (!timestamp)
        return '';
    return formatDistanceToNow(new Date(timestamp), {
        includeSeconds: true,
        addSuffix: true
    })
};

const executeFunctionWithTransition = (fn) => {
    if (document.startViewTransition) {
        document.startViewTransition(() => {
            return fn()
        })
    } else
        return fn()
}
export {convertTimeToHumanReadable, executeFunctionWithTransition}
