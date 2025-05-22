
document.addEventListener('DOMContentLoaded', () => {
  const keys = document.querySelectorAll('.key');
  const button = document.querySelector('.button');
  const firstScreen = document.querySelector('.firstScreen');
  const secondScreen = document.querySelector('.secondScreen');
  const boxes = document.querySelectorAll('.box');
  const modal = document.getElementById('modal');

  // Початково кнопка неактивна
  button.classList.add('inactive');

  keys.forEach((key, index) => {
    key.addEventListener('click', () => {
      // Знімаємо активність з усіх ключів
      keys.forEach((k, i) => {
        k.classList.remove('active');
        k.style.backgroundImage = `url('images/key${i + 1}.webp')`;
        k.style.transform = 'scale(1)';
      });

      // Активуємо натиснутий ключ
      key.classList.add('active');
      key.style.backgroundImage = `url('images/key${index + 1}-active.webp')`;
      key.style.transform = 'scale(1.28)';

      // Активуємо кнопку
      button.classList.remove('inactive');
    });
  });

  // Обробка кліку по кнопці
  button.addEventListener('click', () => {
    if (button.classList.contains('inactive')) {
      console.log('Кнопка ще не активна!');
      return;
    }

    firstScreen.style.display = 'none';
    secondScreen.style.display = 'block';

  });

  // Обробка попапа
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      
      modal.style.display = 'flex';
      document.body.classList.add('modal-open');
      
    });
  });
});
