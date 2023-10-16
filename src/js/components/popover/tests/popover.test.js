import { fireEvent } from '@testing-library/react';
import Popover from '../popover';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
let dom = '';
let popover = '';
let randomButton = '';

beforeEach(() => {
  dom = new JSDOM('<div class="container"><button class="random-button">Это кнопка</button></div>');

  global.window = dom.window;
  global.document = dom.window.document;
});

test('mouse over', () => {
  randomButton = dom.window.document.querySelector('.random-button');

  popover = new Popover(randomButton, 'Заголовок', 'Текст подсказки');
  randomButton.addEventListener('mouseover', popover.popoverEventMouseOver);

  fireEvent.mouseOver(randomButton);

  expect(dom.window.document.body.querySelector('.popover-title').textContent).toBe('Заголовок');
  expect(dom.window.document.body.querySelector('.popover-body').textContent).toBe('Текст подсказки');

  expect(popover.componentElement).not.toBe(undefined);
});

test('destroy popover', () => {
  randomButton.addEventListener('mouseout', popover.popoverEventMouseOut);
  fireEvent.mouseOut(randomButton);

  expect(popover.componentElement).toBe(undefined);
});
