export const formatAddress = (address: string) => {
  return address ? address.slice(0, 5) + '...' + address.slice(-5) : '';
};
