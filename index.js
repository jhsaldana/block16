/*
calculate prescription cost
if customer has subscription they will receive 25% discount
if customer has coupon, they will receive $10 dollar discount after subscription discount
show total for each customer separately
create function to calculate grand total after applicable disounts
*/

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

/*
calculate the total refill cost for each customer without coupons or dicounts first
cost without coupon or dicount is number of refils times price per refill
*/

const totalPrice =  (obj) => {
    let total = obj.pricePerRefill * obj.refills;
    return total;
} 

//determine if customer has subscription, if yes dicount by 25% to get total

function subscriptionPrice(obj, total) {
    let subPrice = total;
    if (obj.subscriptioino) {
        subPrice =  total * .75;
    }
    return subPrice
}

/*
take subtotal with subscription discount applied if applicable
and check for coupon and apply coupon as well to calculae final amount
*/

function finalPrice(obj, subPrice) {
    let final = subPrice;
    if (obj.coupon) {
        final = subPrice - 10;
    }
    return final;
}

/*
At end of script, return and log the string "Your grand total is ${finalAmount}." 
for each customer by name
*/

