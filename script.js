document.addEventListener('DOMContentLoaded', () => {
  const keys = document.querySelectorAll('.key');
  const button = document.querySelector('.button');
  const firstScreen = document.querySelector('.firstScreen');
  const secondScreen = document.querySelector('.secondScreen');
  const boxes = document.querySelectorAll('.box');
  const modal = document.getElementById('modal');
  const buttonText = document.querySelector('.button--text');
  const corner = document.querySelectorAll('.corner');

  button.classList.add('inactive');
  buttonText.classList.add('inactive-text');

  corner.forEach((k, i) => {
    k.style.backgroundImage= `url('./images/button-elem-noActive.png')`;
  })

  keys.forEach((key, index) => {
    key.addEventListener('click', () => {
      keys.forEach((k, i) => {
        k.classList.remove('active');
        k.style.backgroundImage = `url('images/key${i + 1}.webp')`;
        k.style.transform = 'scale(1)';
      });

      key.classList.add('active');
      key.style.backgroundImage = `url('images/key${index + 1}-active.webp')`;
      key.style.transform = 'scale(1.28)';

      corner.forEach((k, i) => {
        k.style.backgroundImage= `url('./images/button-elem.webp')`;
      })

      button.style.boxShadow = "0px 0px 19px 0px rgba(238, 255, 0, 1)";

      button.classList.remove('inactive');
      buttonText.classList.remove('inactive-text');
      button.classList.add('pulse');
    });
  });

  button.addEventListener('click', () => {
    if (button.classList.contains('inactive')) {
      console.log('Кнопка ще не активна!');
      return;
    }

    firstScreen.style.display = 'none';
    secondScreen.style.display = 'block';

    console.log('smooth')

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

  });

  // Обробка попапа
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      
      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
    });
  });
});
