export const getMultipleSelectValues = (
  selectedOptions: HTMLCollectionOf<HTMLOptionElement>
) => Array.from(selectedOptions).map((selectedOption) => selectedOption.value);
