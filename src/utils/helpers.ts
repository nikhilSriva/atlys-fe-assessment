import {formatDistanceToNow} from "date-fns";

const convertTimeToHumanReadable = (timestamp) => {
    if (!timestamp)
        return '';
    return formatDistanceToNow(new Date(timestamp), {
        includeSeconds: true,
        addSuffix: true
    })
}
export {convertTimeToHumanReadable}
