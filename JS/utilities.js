function getInputValueByID(elementID) {
    const inputElement = document.getElementById(elementID);
    const inputValue = parseFloat(inputElement.value);
    inputElement.value = '';
    return inputValue;
}

function getElementValueByID(elementID) {
    const Element = document.getElementById(elementID);
    const ElementValue = parseFloat(Element.innerText);
    return ElementValue;
}

function setElementValueByID(elementID, setText) {
    const Element = document.getElementById(elementID);
    Element.innerText = setText;
}