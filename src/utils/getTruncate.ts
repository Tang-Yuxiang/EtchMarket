import BigNumber from 'bignumber.js';

function removeTrailingZeroes(str: string): string {
  const dotIndex = str.indexOf('.');
  if (dotIndex === -1) {
    return str;
  }
  let temp = str.slice(0, dotIndex + 1) + str.slice(dotIndex + 1).replace(/0+$/, '');

  if (temp.endsWith('.')) {
    temp = temp.replace('.', '');
  }
  return temp;
}

export default function getTruncate(num: string, demical: number) {
  const fmt = {
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 3,
  };

  const formatNum = BigNumber(num).toFormat(demical, BigNumber.ROUND_DOWN, fmt);

  return removeTrailingZeroes(formatNum);
}
