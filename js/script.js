alert('Приветствую тебя, искатель приключений! Сегодня ты окунешься в потрясающий мир проекта ХМАО! Для начала давай познакомимся с главным персонажем нашей игры, кликни в фигурку человечка в центре страницы.');

document.getElementById('tolya').onclick = function() {
  this.style.left = this.getBoundingClientRect().left + 'px';
  this.style.top = this.getBoundingClientRect().top + 'px';

  this.style.position = 'fixed';
  alert("Привет! Я Толик! Теперь ты можешь мной управлять! (короч, юзай кнопки влево, вверх там и т.д.)");
  };

document.getElementById('tolya').onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: // влево
      this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
      return false;
    case 38: // вверх
      this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
      return false;
    case 39: // вправо
      this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
      return false;
    case 40: // вниз
      this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
      return false;
    }
};
