export const checkIsGameTypeValid = (
  gameType: string[],
  formGameType: string[]
) => formGameType.every((type) => gameType.includes(type));
