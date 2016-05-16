angular.module('starter.services', [])

.factory('Langs', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var langs = [{
    id: 0,
    name: 'JavaScript',
    lastText: 'You on your way?',
    face: 'img/javascript.png',
    link: 'https://wiki.theory.org/YourLanguageSucks#JavaScript_sucks_because'
  }, {
    id: 1,
    name: 'PHP',
    lastText: 'Hey, it\'s me',
    face: 'img/php.png',
    link: 'https://wiki.theory.org/YourLanguageSucks#PHP_sucks_because'
  }, {
    id: 2,
    name: 'Python',
    lastText: 'I should buy a boat',
    face: 'img/python.png',
    link: 'https://wiki.theory.org/YourLanguageSucks#Python_sucks_because'
  }, {
    id: 3,
    name: 'JAVA',
    lastText: 'Look at my mukluks!',
    face: 'img/java.png',
    link: 'https://wiki.theory.org/YourLanguageSucks#Java_sucks_because'
  }, {
    id: 4,
    name: 'C#',
    lastText: 'This is wicked good ice cream.',
    face: 'img/c-sharp.png',
    link: 'https://wiki.theory.org/YourLanguageSucks#C.23_sucks_because'
  }, {
    id: 5,
    name: 'Go Lang',
    lastText: 'Not yet?',
    face: 'img/go.png',
    link: 'https://wiki.theory.org/YourLanguageSucks#Go_sucks_because'
  }];

  return {
    all: function() {
      return langs;
    },
    remove: function(lang) {
      langs.splice(langs.indexOf(lang), 1);
    },
    get: function(langId) {
      for (var i = 0; i < langs.length; i++) {
        if (langs[i].id === parseInt(langId)) {
          return langs[i];
        }
      }
      return null;
    }
  };
});
