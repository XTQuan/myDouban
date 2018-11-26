import axios from 'axios'


const state = {
  events: [],
  temp: [],
  skip: 0,
  eventItem: {}
}

const mutations = {
  loadMore (state, payload) {

    state.events = payload.res;
  },
  getSingleEvent (state, payload) {
    state.eventItem = payload.res
  }
}

const actions = {
  /**
   * Loading more data
   * skip: 3 default
   * count: 3 default
   */
  loadMore ({commit, state}) {
    request
      .get('https://api.douban.com/v2/event/list?loc=108288&start=' +
        state.skip + '&count=3')
      .use(jsonp)
      .end((err, res) => {
        if (!err) {
          commit({
            type: 'loadMore',
            res: res.body.events
          })
        }
      })
  },
  loadList({commit, state}){
    // axios.get("/api/v2/event/list?loc=108288&start=1&count=3")
    axios({
        method:"get",
        baseURL:"/api",
        url:"v2/event/list?loc=108288&start=1&count=3"})
    .then(
        function(response){
            commit({
                type: 'loadMore',
                res: response.data.events
              })
        })



  },
  /**
   * Getting single event
   * id: event id
   */
  getSingleEvent ({commit, state}, payload) {
    return new Promise((resolve, reject) => {
      request
        .get('https://api.douban.com/v2/event/' + payload.id)
        .use(jsonp)
        .end((err, res) => {
          if (!err) {
            commit({
              type: 'getSingleEvent',
              res: res.body
            })
            resolve(res)
          }
        })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
