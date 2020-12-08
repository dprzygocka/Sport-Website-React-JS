export const formatTime = date => {
    if (date) {
        return date.substring(11, 16)
    }
    return date;
}