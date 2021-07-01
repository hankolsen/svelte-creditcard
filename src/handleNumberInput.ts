const handleNumberInput = (event: KeyboardEvent) => {
  const { key } = event;
  if (key.match(/[^0-9]/)) {
    event.preventDefault();
    return false;
  }
  return true;
};

export default handleNumberInput;
