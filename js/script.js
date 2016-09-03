// Обрабатывает клик по кнопке на дисклеймере
document.getElementById('letsPlayButton').addEventListener('click', startGame);
function startGame() {
  document.getElementById('disclaimer').style.display='none';
  document.getElementById('fullgame').style.display='block';
}
// Дисклеймер исчезает, появляется сама игра

document.getElementById('tolya').addEventListener('click', firstMove);
function firstMove() {
  document.getElementById('tolya').removeEventListener('click', firstMove);

  this.style.left = this.getBoundingClientRect().left + 'px';
  this.style.top = this.getBoundingClientRect().top + 'px';
  this.style.position = 'fixed';

  var commentContainer = document.getElementById('comment');
  var commentIntro = '- Привет! Меня зовут Толик! Теперь ты можешь мной управлять с помощью стрелочек на твоей клавиатуре. (Которая, конечно же, сделана под брендом DEPO?) Посмотри справа внизу, похоже, тебе кто-то звонит!';
  commentContainer.innerHTML = commentIntro;
  phone.classList.remove('mini-phone-disabled');
  phone.classList.add('mini-phone-enabled');

  document.getElementById('phone').addEventListener('click', callPhone);
  function callPhone() {
    document.getElementById('phone').removeEventListener('click', callPhone);

    var commentDmitrishinCallFirst = 'Ты поднимаешь трубку и слышишь голос: "Толя, это Дмитришин, я тебе прислал письмо, мне срочно нужен ответ, посмотри. Ты понял?". Голос Дмитришина показался тебе очень грубым. Хочешь ли послать его куда подальше?';
    commentContainer.innerHTML = commentDmitrishinCallFirst;
    this.classList.remove('mini-phone-enabled');
    this.classList.add('mini-phone-disabled');

    showButtons();

    noButton.addEventListener('click', noButtonClick);
    yesButton.addEventListener('click', yesButtonClick);

    function noButtonClick() {
      hideButtons();
      var commentMailFirst = 'У тебя нереальное терпение! Вот это самоконтроль! Иди прочти уже это злосчастное письмо.';
      commentContainer.innerHTML = commentMailFirst;
      mail.classList.add('animate');
      document.getElementById('mail').addEventListener('click', readEmail);
      function readEmail() {
        var email1 = 'Ты открыл Оутлук, и среди кучи непрочитанных писем нашел письмо от Димтришина: "Толя, где расчеты, блять? Я какой день жду. Если сегодня их у меня не будет, я ищу другого поставщика!!!" Ты пиздец растерян. Что будешь делать?';
        commentContainer.innerHTML = email1;
        mail.classList.remove('animate');

        document.getElementById('options').style.display='block';
        var optionFirst = 'Нужно подойти к Лене и обсудить расчет';
        option1.innerHTML = optionFirst;
        var optionSecond = 'Сделать расчет самому';
        option2.innerHTML = optionSecond;
        var optionThird = 'Посовещаться с Селезневым';
        option3.innerHTML = optionThird;

        document.getElementById('option1').addEventListener('click', doOption1);
        function doOption1() {
          var lenaWait = 'Лена ждет тебя у своего рабочего места!';
          commentContainer.innerHTML = lenaWait;
          document.getElementById('options').style.display='none';
          lena.classList.add('animate');
        }
        document.getElementById('option2').addEventListener('click', doOption2);
        function doOption2() {
          var doMath = 'Бросай свою жопу на стул и давай заполняй PL';
          commentContainer.innerHTML = doMath;
          document.getElementById('options').style.display='none';
          pl.classList.add('animate');
        }

        document.getElementById('option3').addEventListener('click', doOption3);
        function doOption3() {
          var findSeleznev = 'Нужно поймать Селезнева, он все летает где-то тут по офису.';
          commentContainer.innerHTML = findSeleznev;
          document.getElementById('options').style.display='none';
          seleznev.classList.add('animate');
        }
        document.getElementById('mail').removeEventListener('click', readEmail);
      }
    }

    function yesButtonClick() {
      hideButtons();
      var commentDmitrishinCallCherkasov = 'Дмитришин позвонил Черкасову и теперь тебя вызывают к нему в кабинет. Похоже, у тебя неприятности...';
      commentContainer.innerHTML = commentDmitrishinCallCherkasov;
      kabinet.classList.add('animate');
      document.getElementById('kabinet').addEventListener('click', visitCherkasov);
      function visitCherkasov() {
        var visit1 = 'Ты входишь в кабинет Черкасова. Он стоит и зло смотрит на тебя! "Толя, меня твой Дмитришин заебал. Избавь меня, пожалуйста, от него!!" Как поступишь?';
        commentContainer.innerHTML = visit1;
        kabinet.classList.remove('animate');
        document.getElementById('options').style.display='block';

        var optionFirst = 'Найти виновных!!!';
        option1.innerHTML = optionFirst;
        var optionSecond = 'Попросить Лену отстранить тебя от проекта!';
        option2.innerHTML = optionSecond;
        var optionThird = 'Извиниться и пообещать все исправить';
        option3.innerHTML = optionThird;

        document.getElementById('option1').addEventListener('click', doOption1);
        function doOption1() {
          var commentFindGuilty = 'Будем искать виновных! Кликни на виноватого!';
          commentContainer.innerHTML = commentFindGuilty;
          document.getElementById('options').style.display='none';
          kabinet.classList.add('animate');
          lena.classList.add('animate');
          seleznev.classList.add('animate');
          document.getElementById('option1').removeEventListener('click', doOption1);
        }
        document.getElementById('option2').addEventListener('click', doOption2);
        function doOption2() {
          var lenaWait = 'Лена ждет тебя у своего рабочего места!';
          commentContainer.innerHTML = lenaWait;
          document.getElementById('options').style.display='none';
          lena.classList.add('animate');
          document.getElementById('option2').removeEventListener('click', doOption2);
        }

        document.getElementById('option3').addEventListener('click', doOption3);
        function doOption3() {
          var appologize = 'Вы дико извиняетесь, говорите много красивых слов, обещаете непременно все-все исправить и, вроде, Черкасов немного успокаивается. Но вам все равно нужно разобраться с этим злосчастным письмом...';
          commentContainer.innerHTML = appologize;
          document.getElementById('options').style.display='none';
          mail.classList.add('animate');
          document.getElementById('mail').addEventListener('click', readEmail);
          function readEmail() {
            var email1 = 'Ты открыл Оутлук, и среди кучи непрочитанных писем нашел письмо от Димтришина: "Толя, где расчеты, блять? Я какой день жду. Если сегодня их у меня не будет, я ищу другого поставщика!!!" Ты пиздец растерян. Что будешь делать?';
            commentContainer.innerHTML = email1;
            mail.classList.remove('animate');

            document.getElementById('options').style.display='block';
            var optionFirst = 'Нужно подойти к Лене и обсудить расчет';
            option1.innerHTML = optionFirst;
            var optionSecond = 'Сделать расчет самому';
            option2.innerHTML = optionSecond;
            var optionThird = 'Посовещаться с Селезневым';
            option3.innerHTML = optionThird;

            document.getElementById('option1').addEventListener('click', doOption1);
            function doOption1() {
              var lenaWait = 'Лена ждет тебя у своего рабочего места!';
              commentContainer.innerHTML = lenaWait;
              document.getElementById('options').style.display='none';
              lena.classList.add('animate');
            }
            document.getElementById('option2').addEventListener('click', doOption2);
            function doOption2() {
              var doMath = 'Сади свою жопу на стул и давай заполняй PL';
              commentContainer.innerHTML = doMath;
              document.getElementById('options').style.display='none';
              pl.classList.add('animate');
            }

            document.getElementById('option3').addEventListener('click', doOption3);
            function doOption3() {
              var findSeleznev = 'Нужно поймать Селезнева, он все летает где-то тут по офису.';
              commentContainer.innerHTML = findSeleznev;
              document.getElementById('options').style.display='none';
              seleznev.classList.add('animate');
            }
          }
        }
        document.getElementById('kabinet').removeEventListener('click', visitCherkasov);
      }
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

// События по клику на подсказки в левом верхнем углу
document.getElementById('andrew1').addEventListener('click', getHelp1);
function getHelp1() {
  andrew1.classList.add('andrew_used');
  var hint1 = '&#171Толя, блядь! Покровительство - это, конечно, хорошо, но до опредленных пределов!&#187';
  hint_text.innerHTML = hint1;
  document.getElementById('hint').style.display = 'block';
  document.getElementById('andrew1').removeEventListener('click', getHelp1);
}

document.getElementById('andrew2').addEventListener('click', getHelp2);
function getHelp2() {
  andrew2.classList.add('andrew_used');
  var hint2 = '&#171Учись задавать вопросы, блядь, Толя!&#187';
  hint_text.innerHTML = hint2;
  document.getElementById('hint').style.display='block';
  document.getElementById('andrew2').removeEventListener('click', getHelp2);
}
document.getElementById('andrew3').addEventListener('click', getHelp3);
function getHelp3() {
  andrew3.classList.add('andrew_used');
  var hint3 = '&#171Контролируй доставку корреспонденции, Толя!&#187';
  hint_text.innerHTML = hint3;
  document.getElementById('hint').style.display='block';
  document.getElementById('andrew3').removeEventListener('click', getHelp3);
}

document.getElementById('close').addEventListener('click', closeHint);
function closeHint() {
  document.getElementById('hint').style.display = 'none';
}
//

// Показать и скрыть кнопки да/нет
function showButtons () {
  document.getElementById('noButton').style.display='inline';
  document.getElementById('yesButton').style.display='inline';
}
function hideButtons () {
  document.getElementById('noButton').style.display='none';
  document.getElementById('yesButton').style.display='none';
}
// Плохое решение. Вы отстранены от проекта ХМАО. Конец игры!
