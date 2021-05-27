(function (global, $) {
  var Greetr = function (firstname, lastname, language) {
    //function varructor to generate the object
    return new Greetr.init(firstname, lastname, language);
  };

  var lang = ['en', 'fr', 'ru'];

  var greetings = {
    en: 'Hi',
    fr: 'Salut',
    ru: 'Привет',
  };

  var formalGreetings = {
    en: 'Hello',
    fr: 'Bonjour',
    ru: 'Здравствуйте',
  };

  var logMessages = {
    en: 'Welcome,',
    fr: 'Bienvenu(e),',
    ru: 'Добро пожаловать,',
  };

  Greetr.prototype = {
    fullName: function () {
      return this.firstname + ' ' + this.lastname;
    },

    langCheck: function () {
      if (!lang.includes(this.language)) {
        throw 'Language is not supported';
      }
    },
    greeting: function () {
      return greetings[this.language] + ', ' + this.firstname;
    },

    greetingFormal: function () {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    greet: function (formal) {
      var msg;
      if (formal) {
        msg = this.greetingFormal();
      } else {
        msg = this.greeting();
      }
      if (console) {
        console.log(msg);
      }
      return this;
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ' ' + this.fullName() + '!');
      }
      return this;
    },
    setLang: function (i) {
      this.language = i;
      this.validate();
      return this;
    },
  };

  Greetr.init = function (firstname, lastname, language) {
    var self = this; //precautionary measure, to ensure this is same and does not point to the global window object
    self.firstname = firstname || '';
    self.lastname = lastname || '';
    self.language = language || 'en';
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
