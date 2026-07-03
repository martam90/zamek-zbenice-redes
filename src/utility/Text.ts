export const addNbsp = (text: string): string =>
  text.replace(/\b([aiksvzou])\s+/gi, "$1\u00A0");
