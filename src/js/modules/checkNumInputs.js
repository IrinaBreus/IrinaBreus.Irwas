const checkNamInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(num => (
        num.addEventListener('input', () => {
            num.value = num.value.replace(/\D/, '');
        })
    ));
};

export default checkNamInputs;