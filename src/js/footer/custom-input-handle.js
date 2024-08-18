
const maxLength = 30;

export function setupInputHandlers() {
  const customInputsRef = document.querySelectorAll('.js-custom-input');
  customInputsRef.forEach(input => {
    input.addEventListener('change', handleChange);
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
  });
}

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }
  return text;
}

function handleChange(event) {
    const input = event.target; 
    const currentText = input.value;
    const originalText = input.getAttribute('data-original-text');
    if  (originalText) {
        input.setAttribute('data-original-text', currentText);
    }     
    if (currentText.length > maxLength) {
      input.value = truncateText(currentText, maxLength);
    }
  }
  
  function handleFocus(event) {
    const input = event.target;
    const originalText = input.getAttribute('data-original-text');
    if (originalText) {
      input.value = originalText;
    }
  }

  function handleBlur(event) {
    const input = event.target;   
    const originalText = input.getAttribute('data-original-text');
    if  (originalText) {
        input.setAttribute('data-original-text', currentText);
    }     
    if (currentText.length > maxLength) {
      input.value = truncateText(currentText, maxLength);
    }
  }
