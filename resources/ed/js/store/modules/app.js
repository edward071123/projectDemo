import menu from '../../router/admin/menu'

const app = {
  state : {
    device: {
      isMobile: false,
      isTablet: false
    },
    sidebar: {
      opened: false,
      hidden: false
    },
    effect: {
      translate3d: true
    },
    count: 1,
    items: menu.state.items
  },

  mutations : {
    TOGGLE_DEVICE:(state, device) =>{
      state.device.isMobile = device === 'mobile'
      state.device.isTablet = device === 'tablet'
    },

    TOGGLE_SIDEBAR:(state, opened) =>{
      if (state.device.isMobile) {
        state.sidebar.opened = opened
      } else {
        state.sidebar.opened = true
      }
    },
    EXPAND_MENU: (state, menuItem) => {
      if (menuItem.index > -1) {
        if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
          state.items[menuItem.index].meta.expanded = menuItem.expanded
        }
      } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
        menuItem.item.meta.expanded = menuItem.expanded
      }
    },
    SWITCH_EFFECT:(state, effectItem) =>{
      for (let name in effectItem) {
        state.effect[name] = effectItem[name]
      }
    },
    INCREASE:(state) =>{
      state.count += 1;
    }

  },
  actions: {
    toggleSidebar({ commit }, opened) {
      commit('TOGGLE_SIDEBAR', opened)
    },
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    expandMenu({ commit }, menuItem) {
      if (menuItem) {
        menuItem.expanded = menuItem.expanded || false
        commit('EXPAND_MENU', menuItem)
      }
    },
    switchEffect({ commit }, effectItem) {
      if (effectItem) {
        commit('SWITCH_EFFECT', effectItem)
      }
    },
    logIn({ commit }, params) {
      params.auth.login({
        params: {
          account: params.account,
          password: params.password
        },
        rememberMe: true,
        success: function () { },
        error: function () {
          console.log('123');
         },
        redirect: params.redirect,
        fetchUser: true,
      });       
    },
    logOut({ commit },auth) {
      auth.logout()
    },
    increase({ commit })  {
      commit('INCREASE')
    }
  }
}
export default app

