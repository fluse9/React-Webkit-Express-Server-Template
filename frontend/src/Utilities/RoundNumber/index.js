const roundNumber = (number = 0, placesToRoundTo = 0) => {
    const roundedNumber = parseFloat(number.toFixed(placesToRoundTo));
    return roundedNumber;
};

export default roundNumber;
