import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
    theme: {
      //Zelf theme colors instellen
      error: '#CC99FF'
    }
  },
});
