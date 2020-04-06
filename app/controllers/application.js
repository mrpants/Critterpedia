import Controller from '@ember/controller';
import {inject as service } from '@ember/service';

export default Controller.extend({
  settings: service('settings'),
  intl: service(),

  actions: {
    setLanguage(language) {
      this.set('settings.language', language);
      return this.intl.setLocale([language]);
    }
  }
});