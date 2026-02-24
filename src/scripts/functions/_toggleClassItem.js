import { _querySelector, _add, _remove } from '../_config.js';

export const addClassItem = (selector, className) => {
  const element = document[_querySelector](selector);
  if (element) {
    element.classList[_add](className);
  }
};

export const removeClassItem = (selector, className) => {
  const element = document[_querySelector](selector);
  if (element) {
    element.classList[_remove](className);
  }
};
