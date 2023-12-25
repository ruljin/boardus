export const checkIsGameCategoryValid = (
  gameCategory: string[],
  formGameCategory: string[]
) => formGameCategory.every((category) => gameCategory.includes(category));
