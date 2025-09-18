//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

// Focus first input on load
inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      input.value = ''; // Clear before typing new number
      setTimeout(() => {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }, 10);
    } else if (e.key === 'Backspace') {
      input.value = '';
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });

  input.addEventListener('input', () => {
    // For mobile: auto-move if a digit is entered
    const value = input.value;
    if (value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});

