/* Beispiele für store vuex */

import Vue from 'vue'
import Vuex from 'vuex'
import entry from './modules/entry'
import permissions from './modules/permissions'
import profile from './modules/profile'
import settings from './modules/settings'
import credit from './modules/credit'
import account from './modules/account'
import errors from './modules/errors'
import voucher from './modules/voucher'
import organization from './modules/organization'
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
    account,
    entry,
    permissions,
    profile,
    settings,
    credit,
    errors,
    voucher,
    organization
  }
})
