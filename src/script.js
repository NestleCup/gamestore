document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  const body = document.body;

  function toggleMenu() {
    const isOpen = nav.style.display === 'block';

    if (isOpen) {
      // Закрываем меню
      nav.style.display = 'none';
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      nav.setAttribute('aria-hidden', 'true');
      // body.style.overflow = '';ы

      // Убираем обработчики
      document.removeEventListener('click', closeOnClickOutside);
      document.removeEventListener('keydown', closeOnEscape);
    } else {
      // Открываем меню
      nav.style.display = 'block';
      burger.classList.add('active');
      burger.setAttribute('aria-expanded', 'true');
      nav.setAttribute('aria-hidden', 'false');

      // Добавляем обработчики для закрытия
      document.addEventListener('click', closeOnClickOutside);
      document.addEventListener('keydown', closeOnEscape);
    }
  }

  function closeOnClickOutside(event) {
    if (!nav.contains(event.target) && !burger.contains(event.target)) {
      toggleMenu();
    }
  }

  function closeOnEscape(event) {
    if (event.key === 'Escape' && nav.style.display === 'block') {
      toggleMenu();
    }
  }

  burger.addEventListener('click', function (event) {
    event.stopPropagation();
    toggleMenu();
  });
});
