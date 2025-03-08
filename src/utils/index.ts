export * from './getTimeAgoString';
function removeSpecialCharactersAfterFirstComma(inputString: string) {
  // 使用正则表达式匹配第一个逗号后的内容并去除挨着的换行符、回车符和制表符
  const regex = /^(.*?),([\n\r\t]+)/;
  const matches = inputString.match(regex);

  if (matches && matches.length === 3) {
    const firstPart = matches[1];
    const secondPart = matches[2]; // 去除挨着的换行符、回车符和制表符
    return `${firstPart},${secondPart}`;
  }

  // 如果没有逗号或格式不匹配，直接返回原始字符串
  return inputString;
}

export function extractDataFromDataURL(data: string) {
  const dataURL = removeSpecialCharactersAfterFirstComma(data);
  // 使用正则表达式匹配 Data URL 格式
  const regex = /^data:(.*?),(.*?)$/;
  const matches = dataURL.match(regex);
  if (!matches || matches.length !== 3) {
    console.error('Invalid Data URL format');
  }

  // 提取数据部分（第二个匹配项）
  const dataPart = matches?.[2] || '';
  const mimeType = matches?.[1] || '';
  return [mimeType, dataPart];
}

export function isValidJSON(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}

export const splitDatauri = (str: string): string[] => {
  const arr = str.split(',');
  const pre = arr.shift();
  return [pre, arr.join(',')] as string[];
};

export function getTreeHeight(length: number) {
  return Math.max(Math.ceil(Math.log2(length)), 1);
}

export const fillArray = <T>(arr: T[], length: number, value: T): T[] => {
  const arrCopy = [...arr];
  if (length > arr.length) {
    arrCopy.push(...Array(length - arr.length).fill(value));
  }
  return arrCopy;
};

export const completedSize = (height: number) => {
  return Math.pow(2, height);
};

export const chunk = <T>(array: T[], size: number): T[][] =>
  Array(Math.ceil(array.length / size))
    .fill(0)
    .map((_, i) => array.slice(i * size, (i + 1) * size));
