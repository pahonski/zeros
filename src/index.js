module.exports = function getZerosCount(number) {
  // your implementation
    let counter = 5;
    let zeros = 0;

    function getFactorialZeros(counter) {
        if (number / counter >= 1) {
            zeros += Math.floor(number / counter);
            counter *= 5;
            getFactorialZeros(counter);
        } else {
            return;
        }
    }

    getFactorialZeros(counter);

    return zeros;

};
