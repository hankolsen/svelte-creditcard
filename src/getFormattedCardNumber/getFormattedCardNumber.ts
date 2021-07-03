import { CreditCardIssuers } from '@/getCardIssuer/getCardIssuer';

const getFormattedCardNumber = ([$number, $issuer]) => {
  if ($issuer === CreditCardIssuers.AMERICANEXPRESS) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const [_, ...amexNumbers] =
      ($number ?? '')
        .padEnd(15, '#')
        .match(/([\d|#]{1,4})([\d|#]{1,6})([\d|#]{1,5})/) || [];
    return amexNumbers.join(' ');
  }

  return ($number ?? '')
    .padEnd(16, '#')
    .match(/([\d|#]{1,4})/g)
    ?.join(' ');
};

export default getFormattedCardNumber;
