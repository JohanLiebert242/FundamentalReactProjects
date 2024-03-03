const caculateTotal = (cart) => {
    let totalAmount = 0;
    let totalPrice = 0;

    for (let { price, amount } of cart.values()) {
        totalAmount += amount;
        totalPrice += amount * price;
    }

    return { totalAmount, totalPrice };
};

export default caculateTotal;
