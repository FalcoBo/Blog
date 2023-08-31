const downloadButton = document.getElementById('CV');
downloadButton.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = 'BOUCEBAINE THEO STAGEALTERNANCE.pdf';
  link.download = 'BOUCEBAINE THEO STAGEALTERNANCE.pdf';
  link.click();
});
