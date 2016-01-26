if (typeof require.ensure !== 'function') {
  require.ensure = (d, c) => c(require)
}

export default {
  path: '/',
  component: require('../containers/App'),
  indexRoute: { component: require('../containers/Home') },
  childRoutes: [
    { path: 'count',
      getComponent(location, cb) {
        require.ensure([], () => {
          cb(null, require('../containers/Count'))
        }, 'count')
      }
    },
    { path: '*',
      component: require('../containers/Error/NotFound'),
      status: 404
    }
  ]
}
