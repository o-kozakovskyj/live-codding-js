/* eslint-disable */
// GLOBAL LEX ENV
//   'enviromentRecord': {
  //  'run': {function,
//         console.log('RUN');
//      },
//     'message': 'Test',
//     'weight': 55,
//
//      'createMessenger': function,
//      'messanger1': {},
//      'messanger1': {},
//      'messanger1': {},
//   },
//   'outherLexicalEnv': null
// }

// messenger1
//{
//   'enviromentRecord': {
//     'sendMessage': func,
//     'setSender': func,
//      'setMessage': func,
//      'message': '...',
//      'sender': '...',
//   
//   'outherLexicalEnv': GLOBAL LEX ENV
// }
const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger1 = createMessenger();
const messanger2 = createMessenger();
messanger2.sendMessage('James');
const messanger3 = createMessenger();
run();