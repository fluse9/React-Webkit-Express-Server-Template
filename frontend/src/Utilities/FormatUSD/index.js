import roundNumber from '../RoundNumber';

const PLACES_TO_ROUND_TO = 2;

const formatUSD = (number = 0) => {
    const roundedNumber = roundNumber(number, PLACES_TO_ROUND_TO) || 0;
    const formattedUSD = `$${roundedNumber}`;
    return formattedUSD;
};

export default formatUSD;
