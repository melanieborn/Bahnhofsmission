import axios from 'axios'
import { handleError, handleResponse } from '../helpers/api'
import store from '../store'

const apiCmsClient = axios.create({
  baseURL: `${window.config.VUE_APP_CMS_API_BASE_URL}`
})

function getHeader() {
  return {
    headers: { Authorization: 'bearer ' + store.getters.jwtToken }
  }
}

export const cmsService = {
  fetchContent,
  filterCMSContent,
  get,
  getContent,
  fetchErrorContent,
  letterTemplate
}

// fetches content from the cms-middleware
async function fetchContent(form) {
  // async trigger for error fetch
  return Promise.reject(form)
  // store.dispatch('loadErrors')
  // return apiCmsClient
  //   .get(form)
  //   .then(response => {
  //     let result = response.data[0] ? response.data[0] : response.data
  //     return result
  //   })
  //   .catch(handleError)
}

async function fetchErrorContent(form) {
  return Promise.reject(form)
  // return apiCmsClient
  //   .get(form)
  //   .then(response => {
  //     let result = response.data[0] ? response.data[0] : response.data
  //     return result
  //   })
  //   .catch(handleError)
}
function get(array, filterValue, replaceValues = {}) {
  let cmsContent = this.filterCMSContent(array, filterValue)

  // replace placeholder with replacement-value
  for (const [key, value] of Object.entries(replaceValues)) {
    cmsContent = cmsContent.replace(key, value)
  }

  return cmsContent
}
function getContent(array, filterValue) {
  return this.filterCMSContent(array, filterValue)
}
function filterCMSContent(array, filterValue) {
  array = array.data || array
  const filtered = array.filter(
    content =>
      content.name === filterValue
  )
  if (filtered.length !== 0) {
    // return content if found
    const firstIndex = filtered[0]
    const returnValue = firstIndex === undefined ? '' : firstIndex.content
    return returnValue
  } 
}
function letterTemplate(payload) {
  return apiCmsClient
    .get('/stationery', payload, getHeader())
    .then(handleResponse)
    .catch(e => {
      return handleError(e)
    })
}
