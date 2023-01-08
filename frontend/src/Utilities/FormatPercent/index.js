import roundNumber from '../RoundNumber';

const PLACES_TO_ROUND_TO = 2;

const formatPercent = (number = 0) => {
    const roundedNumber = roundNumber(number, PLACES_TO_ROUND_TO) || 0;
    const formattedPercent = `${100 * roundedNumber}%`;
    return formattedPercent;
};

export default formatPercent;
