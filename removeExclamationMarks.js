function removeExclamationMarks(s) {
    return Array.from(s).filter((el) => el != '!').join('');
}