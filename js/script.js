document.getElementById('tolya').addEventListener ('click', playGame);

function playGame() {
  document.getElementById('tolya').removeEventListener('click', playGame);

  this.style.left = this.getBoundingClientRect().left + 'px';
  this.style.top = this.getBoundingClientRect().top + 'px';
  this.style.position = 'fixed';

  var commentContainer = document.getElementById('comment');
  var commentIntro = '- Привет! Я Толик! Теперь ты можешь мной управлять с помощью стрелочек на твоей клавиатуре. (Которая, конечно же, сделана под брендом DEPO?) Посмотри, похоже, тебе кто-то звонит!';
  commentContainer.innerHTML = commentIntro;
  phone.classList.remove('mini-phone-disabled');
  phone.classList.add('mini-phone-enabled');

  document.getElementById('phone').addEventListener ('click', callPhone);

  function callPhone() {
    document.getElementById('phone').removeEventListener ('click', callPhone);

    var commentDmitrishinCallFirst = 'Вы поднимаете трубку и слышите голос: "Толя, это Дмитришин, я тебе прислал письмо, мне срочно нужен ответ, посмотри. Ты понял?". Голос Дмитришина показался Вам очень грубым. Хотите ли послать его куда подальше?';
    commentContainer.innerHTML = commentDmitrishinCallFirst;
    this.classList.remove('mini-phone-enabled');
    this.classList.add('mini-phone-disabled');

    showButtons();

    noButton.addEventListener('click', noButtonClick);
    yesButton.addEventListener('click', yesButtonClick);

    function noButtonClick() {
      hideButtons();
      var commentMailFirst = 'У вас невероятное самообладание! Идите уже прочтите это злосчастное письмо!';
      commentContainer.innerHTML = commentMailFirst;
      mail.classList.add('animate');
    }

    function yesButtonClick() {
      hideButtons();
      var commentDmitrishinCallCherkasov = 'Дмитришин позвонил Черкасову и теперь Вас вызываеют к нему в кабинет. Похоже, у вас неприятности...';
      commentContainer.innerHTML = commentDmitrishinCallCherkasov;
      kabinet.classList.add('animate');
    }
  }
}

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

function showButtons () {
  document.getElementById('noButton').style.display='inline';
  document.getElementById('yesButton').style.display='inline';
}

function hideButtons () {
  document.getElementById('noButton').style.display='none';
  document.getElementById('yesButton').style.display='none';
}

// Плохое решение. Вы отстранены от проекта ХМАО. Конец игры!
