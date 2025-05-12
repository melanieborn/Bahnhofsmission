import { createMemoryHistory, createRouter } from 'vue-router'

import ObdachlosenWiki from '@/components/ObdachlosenWiki.vue'
import FirstSteps from '@/components/FirstSteps.vue'
import AnlaufstellenWiki from '@/components/AnlaufstellenWiki.vue'
import EssenHygiene from '@/components/EssenHygiene.vue'
import AntragWiki from '@/components/AntragWiki.vue'
import HelloWorld from './components/HelloWorld.vue'



const routes = [
  { path: '/', component: HelloWorld },
  { path: '/owiki', component: ObdachlosenWiki },
  { path: '/anlaufstellen', component: AnlaufstellenWiki },
  { path: '/antrag', component: AntragWiki },
  { path: '/first', component: FirstSteps },
  { path: '/essen', component: EssenHygiene },


]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
/*   linkActiveClass: 'text-white',
 */})

export default router