export const checkIsGameMechanicsValid = (
  gameMechanics: string[],
  formGameMechanics: string[]
) => formGameMechanics.every((mechanics) => gameMechanics.includes(mechanics));
