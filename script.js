window.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.code');

  // Focus the first input on load
  inputs[0].focus();

  inputs.forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
      const key = e.key;

      if (key >= '0' && key <= '9') {
        input.value = ''; // Clear existing
        setTimeout(() => {
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }, 10);
      } else if (key === 'Backspace') {
        input.value = '';
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }
    });

    // For mobile devices where input isn't caught on keydown
    input.addEventListener('input', () => {
      const value = input.value;
      if (value && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });
  });
});
