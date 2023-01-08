import roundNumber from '../RoundNumber';

const PLACES_TO_ROUND_TO = 2;

const formatMultiple = (number = 0) => {
    const roundedNumber = roundNumber(number, PLACES_TO_ROUND_TO) || 0;
    const formattedMultiple = `${roundedNumber}x`;
    return formattedMultiple;
};

export default formatMultiple;
