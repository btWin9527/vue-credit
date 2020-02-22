import {getCookie, setCookie, removeCookie} from '@/utils/cookies'
import {login} from "@/api/user";
import cacheConst from "@/constant/cacheConst";

let userKey = cacheConst.userKey;
const state = {
  userInfo: getCookie(userKey),// 用户信息
}

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}
const actions = {
  login({commit}, userInfo) {
    const {account, password} = userInfo;
    return new Promise((resolve, reject) => {
      login({account, password}).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default {
  namespaced: true,//用于在全局引用此文件里的方法时标识这一个的文件名
  state,
  mutations,
  actions
}
