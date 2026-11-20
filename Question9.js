// Create a function factory that generates customized discount calculators for different discount percentages.

function DiscountCalculator(discount) {
    return function(amount) {
        return amount - (amount * discount/ 100);
    };
}

const discount20 = DiscountCalculator(20);
const discount40 = DiscountCalculator(40);

console.log(discount20(1000)); 
console.log(discount40(1000)); 