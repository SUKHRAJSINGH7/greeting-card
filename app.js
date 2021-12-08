const nameInput = document.getElementById('name-input');
const nameHeader = document.getElementById('name-header');
nameInput.addEventListener('input', () => {
  nameHeader.textContent = nameInput.value;
});

const avatarSelect = document.getElementById('styles-select');
const avatarImage = document.getElementById('avatar-santa');
avatarSelect.addEventListener('change', () => {
  avatarImage.src = avatarSelect.value;
});

const descriptionTextarea = document.getElementById('description-textarea');
const descriptionDisplay = document.getElementById('description-display');
descriptionTextarea.addEventListener('input', () => {
  descriptionDisplay.textContent = descriptionTextarea.value;
});

const themeSelect = document.getElementById('theme-select');
const character = document.getElementById('character');
themeSelect.addEventListener('change', () => {
  character.classList.value = '';
  character.classList.add(themeSelect.value);
});

const exportButton = document.getElementById('export-button');
console.log(exportButton);
exportButton.addEventListener('click', async () => {
  const dataUrl = await domtoimage.toPng(character);
  const link = document.createElement('a');
  link.download = nameInput.value + '.png';
  link.href = dataUrl;
  link.click();
});