document.addEventListener('DOMContentLoaded', function () {
  const copyButton = document.getElementById('copyButton');

  if (copyButton) {
    copyButton.addEventListener('click', function () {
      const textToCopy = 'LCB30';

      navigator.clipboard.writeText(textToCopy).then(function () {
        copyButton.style.transform = 'scale(1.2)';

        setTimeout(function () {
          copyButton.style.transform = 'scale(1)';
        }, 300);
      }).catch(function (error) {
        console.error('Failed to copy text: ', error);
      });
    });
  } else {
    console.error('Element with id "copyButton" not found.');
  }
});