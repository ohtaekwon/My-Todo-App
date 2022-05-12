import {createStore} from 'vuex'

import about from './about.js'

export default createStore({
  modules:{
    about:about  
  }
})
