const navigation = document.querySelector('.nav');
const page = document.querySelector('.page');

navigation?.addEventListener('click', onBurgerBtnClick);

function onBurgerBtnClick(e) {
  if (!e.target.parentNode.matches('.burger') && !e.target.matches('.burger')) {
    return;
  }

  this?.classList.toggle('opened');
  page?.classList.toggle('open');
}
