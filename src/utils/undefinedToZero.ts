export const undefinedToZero = (unknownVar: any): number => {
  if (typeof unknownVar === "number") return unknownVar;
  if (isNaN(unknownVar)) return 0;
  return Number(unknownVar);
};
