/* Beispiele für store vuex */

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
var ls = new SecureLS({
  encodingType: 'des',
  isCompression: true,
  encryptionSecret: 'XQ=Ss6MzR.Qp(xt'
})
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
    })
  ],
  modules: {

  }
})
