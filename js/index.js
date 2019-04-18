var SCROLLER_LENGTH = 0;
var HEIGHT = 7;
var theInput1 = $('#theInput1');
var theInput2 = $('#theInput2');
var theInput3 = $('#theInput3');
var fps = 30;
var myMessage1 = textToLED('');
var myMessage2 = textToLED('');
var myMessage3 = textToLED('');
var leftPointer = SCROLLER_LENGTH + 1;
var rightPointer = 0;
var furthestLeftPoint1 = 0 - myMessage1.length;
var furthestLeftPoint2 = 0 - myMessage2.length;
var furthestLeftPoint3 = 0 - myMessage3.length;

function buttonClick() {
  window.location.reload();
}

theInput1.change(function () {
  myMessage1 = textToLED(this.value);
  furthestLeftPoint1 = 0 - myMessage1.length;
  leftPointer = SCROLLER_LENGTH + 1;
  draw1();
});

theInput2.change(function () {
  myMessage2 = textToLED(this.value);
  furthestLeftPoint2 = 0 - myMessage2.length;
  leftPointer = SCROLLER_LENGTH + 1;
  draw2();
});

theInput3.change(function () {
  myMessage3 = textToLED(this.value);
  furthestLeftPoint3 = 0 - myMessage3.length;
  leftPointer = SCROLLER_LENGTH + 1;
  draw3();
});

function setLight(row, col, state) {
  var theLight = $('.' + (0 + row) + '_' + col);

  if (theLight.hasClass('on') && !state) {
    theLight.removeClass('on');
    theLight.addClass('off');
  } else if (theLight.hasClass('off') && state) {
    theLight.removeClass('off');
    theLight.addClass('on');
  }
}

function drawMessage1(messageArray, leftPointer) {
  var messageLength = messageArray.length;
  var totalScrollLength = SCROLLER_LENGTH + messageLength;

  if (messageLength > 0) {

    for (var col = 0; col < messageLength; col++) {
      for (var row = 0; row < HEIGHT; row++) {
        var offsetCol = leftPointer + col;

        if (offsetCol < SCROLLER_LENGTH || offsetCol >= 0) {
          setLight(row, offsetCol, messageArray[col][row]);
        }
      }
    }
  }
}


function drawMessage2(messageArray, leftPointer) {
  var messageLength = messageArray.length;
  var totalScrollLength = SCROLLER_LENGTH + messageLength;

  if (messageLength > 0) {

    for (var col = 0; col < messageLength; col++) {
      for (var row = 0; row < HEIGHT; row++) {
        var offsetCol = leftPointer + col;

        if (offsetCol < SCROLLER_LENGTH || offsetCol >= 0) {
          setLight(row + 8, offsetCol, messageArray[col][row]);
        }
      }
    }
  }
}


function drawMessage3(messageArray, leftPointer) {
  var messageLength = messageArray.length;
  var totalScrollLength = SCROLLER_LENGTH + messageLength;

  if (messageLength > 0) {

    for (var col = 0; col < messageLength; col++) {
      for (var row = 0; row < HEIGHT; row++) {
        var offsetCol = leftPointer + col;

        if (offsetCol < SCROLLER_LENGTH || offsetCol >= 0) {
          setLight(row + 16, offsetCol, messageArray[col][row]);
        }
      }
    }
  }
}

function textToLED(theWord) {
  var theMessage = [];
  theWord = theWord.toUpperCase();
  for (var i = 0; i < theWord.length; i++) {
    theMessage.push(charToLED(theWord.charAt(i)));
    theMessage.push(charToLED());
  }

  var flatten = [];
  flatten = flatten.concat.apply(flatten, theMessage);

  return flatten;
}

function pressedEsc() {
  document.addEventListener('keyup', function (e) {
    if (e.keyCode == 27)
      window.location.reload();
  })
}

function charToLED(theChar) {
  var theLed = [];
  switch (theChar) {
    case 'A':
      theLed = [[false, false, true, true, true, true, true],
      [false, true, false, false, true, false, false],
      [true, false, false, false, true, false, false],
      [false, true, false, false, true, false, false],
      [false, false, true, true, true, true, true]];
      break;
    case 'B':
      theLed = [[true, true, true, true, true, true, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [false, true, true, false, true, true, false]];
      break;
    case 'C':
      theLed = [[false, true, true, true, true, true, false],
      [true, false, false, false, false, false, true],
      [true, false, false, false, false, false, true],
      [true, false, false, false, false, false, true],
      [false, true, false, false, false, true, false]];
      break;
    case 'D':
      theLed = [[true, true, true, true, true, true, true],
      [true, false, false, false, false, false, true],
      [true, false, false, false, false, false, true],
      [true, false, false, false, false, false, true],
      [false, true, true, true, true, true, false]];
      break;
    case 'E':
      theLed = [[true, true, true, true, true, true, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, false, false, false, true]];
      break;
    case 'F':
      theLed = [[true, true, true, true, true, true, true],
      [true, false, false, true, false, false, false],
      [true, false, false, true, false, false, false],
      [true, false, false, true, false, false, false],
      [true, false, false, false, false, false, false]];
      break;
    case 'G':
      theLed = [[false, true, true, true, true, true, false],
      [true, false, false, false, false, false, true],
      [true, false, false, false, false, false, true],
      [true, false, false, false, true, false, true],
      [true, true, false, false, true, true, true]];
      break;
    case 'H':
      theLed = [[true, true, true, true, true, true, true],
      [false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false],
      [true, true, true, true, true, true, true]];
      break;
    case 'I':
      theLed = [[false, false, false, false, false, false, false],
      [true, false, false, false, false, false, true],
      [true, true, true, true, true, true, true],
      [true, false, false, false, false, false, true],
      [false, false, false, false, false, false, false]];
      break;
    case 'J':
      theLed = [[false, false, false, false, false, true, false],
      [false, false, false, false, false, false, true],
      [true, false, false, false, false, false, true],
      [true, true, true, true, true, true, false],
      [true, false, false, false, false, false, false]];
      break;
    case 'K':
      theLed = [[true, true, true, true, true, true, true],
      [false, false, false, true, false, false, false],
      [false, false, true, false, true, false, false],
      [false, true, false, false, false, true, false],
      [true, false, false, false, false, false, true]];
      break;
    case 'L':
      theLed = [[true, true, true, true, true, true, true],
      [false, false, false, false, false, false, true],
      [false, false, false, false, false, false, true],
      [false, false, false, false, false, false, true],
      [false, false, false, false, false, false, true]];
      break;
    case 'M':
      theLed = [[true, true, true, true, true, true, true],
      [false, true, false, false, false, false, false],
      [false, false, true, false, false, false, false],
      [false, true, false, false, false, false, false],
      [true, true, true, true, true, true, true]];
      break;
    case 'N':
      theLed = [[true, true, true, true, true, true, true],
      [false, false, true, false, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, false, true, false, false],
      [true, true, true, true, true, true, true]];
      break;
    case 'O':
      theLed = [[false, true, true, true, true, true, false],
      [true, false, false, false, false, false, true],
      [true, false, false, false, false, false, true],
      [true, false, false, false, false, false, true],
      [false, true, true, true, true, true, false]];
      break;
    case 'P':
      theLed = [[true, true, true, true, true, true, true],
      [true, false, false, true, false, false, false],
      [true, false, false, true, false, false, false],
      [true, false, false, true, false, false, false],
      [false, true, true, false, false, false, false]];
      break;
    case 'Q':
      theLed = [[false, true, true, true, true, true, false],
      [true, false, false, false, false, false, true],
      [true, false, false, false, true, false, true],
      [true, false, false, false, false, true, false],
      [false, true, true, true, true, false, true]];
      break;
    case 'R':
      theLed = [[true, true, true, true, true, true, true],
      [true, false, false, true, false, false, false],
      [true, false, false, true, false, false, false],
      [true, false, false, true, false, false, false],
      [false, true, true, false, true, true, true]];
      break;
    case 'S':
      theLed = [[false, true, true, false, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, false, true, true, false]];
      break;
    case 'T':
      theLed = [[true, false, false, false, false, false, false],
      [true, false, false, false, false, false, false],
      [true, true, true, true, true, true, true],
      [true, false, false, false, false, false, false],
      [true, false, false, false, false, false, false]];
      break;
    case 'U':
      theLed = [[true, true, true, true, true, true, false],
      [false, false, false, false, false, false, true],
      [false, false, false, false, false, false, true],
      [false, false, false, false, false, false, true],
      [true, true, true, true, true, true, false]];
      break;
    case 'V':
      theLed = [[true, true, true, true, true, false, false],
      [false, false, false, false, false, true, false],
      [false, false, false, false, false, false, true],
      [false, false, false, false, false, true, false],
      [true, true, true, true, true, false, false]];
      break;
    case 'W':
      theLed = [[true, true, true, true, true, true, false],
      [false, false, false, false, false, false, true],
      [false, false, false, false, true, true, false],
      [false, false, false, false, false, false, true],
      [true, true, true, true, true, true, false]];
      break;
    case 'X':
      theLed = [[true, true, false, false, false, true, true],
      [false, false, true, false, true, false, false],
      [false, false, false, true, false, false, false],
      [false, false, true, false, true, false, false],
      [true, true, false, false, false, true, true]];
      break;
    case 'Y':
      theLed = [[true, false, false, false, false, false, false],
      [false, true, false, false, false, false, false],
      [false, false, true, true, true, true, true],
      [false, true, false, false, false, false, false],
      [true, false, false, false, false, false, false]];
      break;
    case 'Z':
      theLed = [[true, false, false, false, false, true, true],
      [true, false, false, false, true, false, true],
      [true, false, false, true, false, false, true],
      [true, false, true, false, false, false, true],
      [true, true, false, false, false, false, true]];
      break;
    case '-':
      theLed = [[false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false]];
      break;
    case '/':
      theLed = [[false, false, false, false, false, true, true],
      [false, false, false, false, true, false, false],
      [false, false, false, true, false, false, false],
      [false, false, true, false, false, false, false],
      [true, true, false, false, false, false, false]];
      break;
    case '0':
      theLed = [[false, true, true, true, true, true, false],
      [true, false, false, false, true, false, true],
      [true, false, false, true, false, false, true],
      [true, false, true, false, false, false, true],
      [false, true, true, true, true, true, false]];
      break;
    case '1':
      theLed = [[false, false, false, false, false, false, false],
      [true, false, false, false, false, false, true],
      [true, true, true, true, true, true, true],
      [false, false, false, false, false, false, true],
      [false, false, false, false, false, false, false]];
      break;
    case '2':
      theLed = [[false, true, false, false, true, true, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [false, true, true, false, false, false, true]];
      break;
    case '3':
      theLed = [[false, true, false, false, false, true, false],
      [true, false, false, false, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [false, true, true, false, true, true, false]];
      break;
    case '4':
      theLed = [[true, true, true, true, false, false, false],
      [false, false, false, false, true, false, false],
      [false, false, false, false, true, false, false],
      [true, true, true, true, true, true, true],
      [false, false, false, false, true, false, false]];
      break;
    case '5':
      theLed = [[true, true, true, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, false, true, true, false]];
      break;
    case '6':
      theLed = [[false, true, true, true, true, true, false],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, false, true, true, false]];
      break;
    case '7':
      theLed = [[true, false, false, false, false, false, false],
      [true, false, false, false, true, true, true],
      [true, false, false, true, false, false, false],
      [true, false, false, true, false, false, false],
      [true, true, true, false, false, false, false]];
      break;
    case '8':
      theLed = [[false, true, true, false, true, true, false],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [false, true, true, false, true, true, false]];
      break;
    case '9':
      theLed = [[false, true, true, false, false, true, false],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [false, true, true, true, true, true, false]];
      break;
    case '&':
      theLed = [[false, true, true, false, true, true, false],
      [true, false, false, true, false, false, true],
      [true, false, false, true, false, false, true],
      [false, true, true, true, true, true, false],
      [false, false, false, true, false, false, true]];
      break;
    case '+':
      theLed = [[false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false],
      [false, true, true, true, true, true, false],
      [false, false, false, true, false, false, false],
      [false, false, false, true, false, false, false]];
      break;
    case "'":
      theLed = [[false, false, false, false, false, false, false],
      [true, true, true, false, false, false, false],
      [false, false, false, false, false, false, false]];
      break;


    //BLANK CASE
    // case 'f':
    //   theLed = [[false, false, false, false, false, false, false],
    //   [false, false, false, false, false, false, false],
    //   [false, false, false, false, false, false, false],
    //   [false, false, false, false, false, false, false],
    //   [false, false, false, false, false, false, false]];
    //   break;

    default:
      theLed = [[false, false, false, false, false, false, false]];
  }
  return theLed;
}


function draw1() {
  setTimeout(function () {
    requestAnimationFrame(draw1);

    if (leftPointer == furthestLeftPoint1) {
      leftPointer = SCROLLER_LENGTH + 1;
    }

    drawMessage1(myMessage1, leftPointer);
  }, 1000 / fps);
}
function draw2() {
  setTimeout(function () {
    requestAnimationFrame(draw2);

    if (leftPointer == furthestLeftPoint2) {
      leftPointer = SCROLLER_LENGTH + 1;
    }
    drawMessage2(myMessage2, leftPointer);
  }, 1000 / fps);
}
function draw3() {
  setTimeout(function () {
    requestAnimationFrame(draw3);

    if (leftPointer == furthestLeftPoint3) {
      leftPointer = SCROLLER_LENGTH + 1;
    }
    drawMessage3(myMessage3, leftPointer);
  }, 1000 / fps);
}

// function makeSomeHtml() {
//   for (let i = 0; i < 23; i++) {
//     for (let j = 0; j < 120; j++) {
//       let s = "<div class='" + i + "_" + j + " light off'></div>"
//       console.log(s)
//       document.getElementById('allText').append(s)
//     }
//   }
// }