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

document.getElementById('phone').onclick = function() {
  alert('Вы поднимаете трубку и слышите голос: "Толя, это Дмитришин, я тебе прислал письмо, мне срочно нужен ответ, посмотри. Ты понял?"');
  var desition = confirm('Голос Дмитришина показался Вам очень грубым. Хотите ли послать его куда подальше?');
  if (desition) {
    alert('Дмитришин позвонил Черкасову и теперь Вас вызываеют к нему в кабинет. Похоже, у вас неприятности...');
    kabinet.classList.add('animate');
  } else {
    alert('Невероятное самообладание! Идите уже прочтите это злосчастное письмо!');
    kabinet.classList.add('animate');
  }
  this.classList.remove('mini-phone-enabled');
  this.classList.add('mini-phone-disabled');
};

// Плохое решение. Вы отстранены от проекта ХМАО. Конец игры!
