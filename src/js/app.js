import Popover from './components/popover/popover';

document.addEventListener('DOMContentLoaded', () => {
  const randomButton = (document.querySelector('.random-button'));

  const popover = new Popover(randomButton, 'Подсказка', 'При нажатии этой кнопки происходит чудо');

  randomButton.addEventListener('mouseover', popover.popoverEventMouseOver);
  randomButton.addEventListener('mouseout', popover.popoverEventMouseOut);
});
