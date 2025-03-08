import { PairsData, PairsToken } from '@/services/facet/types';

export default function getFacetTokenInfo(pairsData: PairsData, token?: PairsToken) {
  const pairsList = Object.values(pairsData);

  let result = { balance: '0', allowances: '0' };

  console.log(token?.symbol, 'symbol');

  if (!token) {
    return result;
  }

  result = {
    balance: pairsList[0].user_balances.token1,
    allowances: pairsList[0].user_allowances.token1,
  };

  if (token.symbol !== 'FETH') {
    const item = pairsList.find((item) => item.token0.address === token.address);
    if (item) {
      result = {
        balance: item.user_balances.token1,
        allowances: item.user_allowances.token1,
      };
    }
  }

  return result;
}
