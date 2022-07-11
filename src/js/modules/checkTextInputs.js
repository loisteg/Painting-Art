const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      input.value = input.value.replace(/[^а-яё 0-9]/gi, "");
    });
  });
};

export default checkTextInputs;
