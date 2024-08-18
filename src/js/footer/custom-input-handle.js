
  export function setupInputHandlers() {
    const inputContainers = document.querySelectorAll('.js-custom-input-container');
  
    inputContainers.forEach(container => {
      const input = container.querySelector('.js-custom-input');      
      input.addEventListener('input', handleCustomInput);
    });
  }

  function handleCustomInput(event) {
    const input = event.target;
    const container = input.closest('.js-custom-input-container'); 
    const textMeasurer = container.querySelector('.footer-text-measurer'); 

    textMeasurer.textContent = input.value; 
    const textWidth = textMeasurer.offsetWidth;  
    const inputWidth = input.offsetWidth;  
   
    if (textWidth >= inputWidth) {
      const maxLength = input.value.length; 
      input.value = input.value.slice(0, maxLength) + '...';
    }
  }