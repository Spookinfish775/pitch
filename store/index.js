import {dataApi} from "~/static/data-api"

export const state = () => ({
    account: null,
    authorization:null,
})

export const getters = {
    isAuthenticated({authorization}) {
        return !!authorization
    }
}

export const mutations = {
    setAuthorization(state, {data}) {
        state.authorization = data.Authorization
        state.account = data.Account
    },
    logout(state) {
        state.account = null
        state.authorization = null
    }
}

export const actions = {
    async login({commit}, {username, project, password}) {
        const data = await this.$axios.$post(dataApi.login, {
                username,
                project,
                password,
            }, 
            {
                headers: {
                    "account": "8b59a775077536f3b73bb774655b94f6"
                }
            }
        )
        commit('setAuthorization', data)
        this.$router.push("/")
    },
    async logout({commit}) {
        this.$router.push("/login")
        await this.$axios.$post(dataApi.logout)
        commit("logout")
    },

     nuxtClientInit({ commit }) {
        const cookie = this.$cookies.get('auth');
        if (cookie) {
            const authObject = {
                data: {
                    Authorization: cookie.authorization,
                    Account: cookie.account
                }
            }
            commit('setAuthorization', authObject)
        }
    },
}