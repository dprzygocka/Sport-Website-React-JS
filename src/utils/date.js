export const formatDate = date => {
    if (date) {
        const newDate = new Date(date);
        const month = newDate.getMonth() + 1;
        return newDate.getDate() + '-' + month + '-' + newDate.getFullYear();
    }
    return date;
}