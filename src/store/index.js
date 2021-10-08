import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const getDefaultState = () => {
  return {
    user: null,
    employees: []
  }
}

const fetchData = (ms) => {
  return new Promise((resolve, reject) => {
  if (ms > 100000000) {reject('слишком долго ждать')}
  setTimeout(() => {
    resolve({name: 'Ivan', age: 30, profession: 'manager'})
  }, ms)
})
}

const fetchEmployees = (ms) => {
  return new Promise((resolve, reject) => {
  if (ms > 100000000) {reject('слишком долго ждать')}
  setTimeout(() => {
    resolve(
      [
        {name: 'Anna', age: 18, profession: 'hr'},
        {name: 'Olga', age: 18, profession: 'coder'},
        {name: 'Sergey', age: 22, profession: 'coder'},
        {name: 'Andrey', age: 25, profession: 'coder'},
        {name: 'Pavel', age: 30, profession: 'coder'}
      ]
    )
  }, ms)
})
}

export default new Vuex.Store({
  state: {
    user: null,
    employees: []
  },
  actions: {
    reset (context) {
      context.commit('resetState')
    },
    getUserInfo ({commit}) {
      fetchData(3000).then(result => commit('updateUser', result))
                     .catch(error => console.log(error))
    },
    getEmployees ({commit}) {
      fetchEmployees(5000).then(result => commit('updateEmployees', result))
      .catch(error => console.log(error))
    }
  },
  mutations: {
    resetState () {
      Object.assign(state, getDefaultState())
    },
    updateUser (state, payload) {
      state.user = payload
    },
    updateEmployees (state, payload) {
      state.employees = payload
    }
  },
  getters: {
    onlyCoders (state) {
      return state.employees.filter (e => e.profession === 'coder')
    }
  },
  modules: {
  }
})
