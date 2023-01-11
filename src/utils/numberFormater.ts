type formatParams = {
  number: number;
  prefix?: string;
  suffix?: string;
  toFixed?: number;
};

export const numberToCurrency = ({
  number,
  prefix = "",
  suffix = "",
  toFixed = 0,
}: formatParams) => {
  const finalNumber = number.toFixed(toFixed).replace(/^[+-]?\d+/, (int) => {
    return int.replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  });

  return `${prefix}${finalNumber}${suffix}`;
};
