module.exports = () => {
    let result = '';

    if (Math.random() > 0.5) {
        result = 'орел'    
    } else {
        result = 'решка'
    }

    return result;
}