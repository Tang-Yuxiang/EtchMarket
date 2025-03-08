import BigNumber from 'bignumber.js';

export const numberFormatUnit = (value: string) => {
  let result: { value: string | number; unit: string } = { value, unit: '' };

  if (new BigNumber(value).isNaN()) {
    result.value = '--';
    return result;
  }

  const k = 1000;

  const units = ['', 'K', 'M', 'B'];

  if (new BigNumber(value).gte(k)) {
    const s = new BigNumber(value);
    const i = Math.floor(Math.log(new BigNumber(value).toNumber()) / Math.log(k));

    result = {
      value: new BigNumber(value).div(Math.pow(k, i)).toString(),
      unit: units[i],
    };
  }

  return result;
};
