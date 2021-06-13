const limitTitle = (title, limit = 15) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, curr) => {
            if (acc + curr.length <= limit) {
                newTitle.push(curr);
            }
            return acc + curr.length;
        }, 0);

        return `${newTitle.join(' ')}...`;
    }
    return title;
}

export { limitTitle };