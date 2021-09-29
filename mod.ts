export default function isNumeric(stringToCheck: string) {
  return Promise.resolve(isNumericSync(stringToCheck));
}

export function isNumericSync(value: string): boolean {
  return (value !== "") && !isNaN(Number(value));
}
