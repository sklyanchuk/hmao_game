//
// Дисклеймер
// ---------

document.getElementById('letsPlayButton').addEventListener('click', startGame);
function startGame() {
  document.getElementById('disclaimer').style.display='none';
  document.getElementById('fullgame').style.display='block';
}

//
// Сама игра
// ----------

var character = document.getElementById('tolya');

character.addEventListener('click', firstMove);
function firstMove() {
  character.removeEventListener('click', firstMove);

  window.addEventListener('keydown', moveCharacter);

  character.style.left = character.getBoundingClientRect().left + 'px';
  character.style.top = character.getBoundingClientRect().top + 'px';

  tolya.classList.remove('animate');

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

//
// Персонаж
// -------------------

function moveCharacter(e) {
  var moveDistance = 50;
  switch (e.keyCode) {
    case 37: // влево
      character.style.left = parseInt(character.style.left) - moveDistance + 'px';
      return false;
    case 38: // вверх
      character.style.top = parseInt(character.style.top) - moveDistance + 'px';
      return false;
    case 39: // вправо
      character.style.left = parseInt(character.style.left) + moveDistance + 'px';
      return false;
    case 40: // вниз
      character.style.top = parseInt(character.style.top) + moveDistance + 'px';
      return false;
    }
}

//
// Подсказки
// --------------------

// Элементы всплывающей подсказки:
var hintPopupElement = document.getElementById('hint');
var hintPopupTextElement = document.getElementById('hint_text');
var hintPopupCloseElement = document.getElementById('close');

hintPopupCloseElement.addEventListener('click', closeHint);

// Статус подсказок
var hintStatusElement = document.getElementById('hint_status');

// Элементы, при нажатии на которые появляется подсказка:
var hintTriggerElements = document.querySelectorAll('.andrew-hint');

// Сколько подсказок осталось (изначально столько же сколько элементов):
var hintsAvailable = hintTriggerElements.length;

// Открывает всплывающую подсказку с заданным текстом
function openHint(hintText) {
  hintPopupElement.classList.add('opened');
  hintPopupTextElement.innerText = hintText;
}

// Закрывает всплывающую подсказку
function closeHint() {
  hintPopupElement.classList.remove('opened');
}

// Активирует подсказку из заданного элемента:
function getHelp(element) {
  element.classList.add('andrew_used');
  openHint(element.getAttribute('data-hint'));
  if (hintsAvailable <= 0) {
    hintStatusElement.innerText = 'Больше нет подсказок :(';
  }
}

// Инициализирует события для элементов подсказки
// (события происходят только один раз для каждого элемента)
Array.prototype.slice.call(hintTriggerElements)
  .forEach(function (hintTriggerElement) {
    function once() {
      hintTriggerElement.removeEventListener('click', once);
      hintsAvailable -= 1;
      getHelp(hintTriggerElement);
    }
    hintTriggerElement.addEventListener('click', once);
  });


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
