;(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    127: function (e, t, a) {
      e.exports = a(256)
    },
    196: function (e, t, a) {},
    217: function (e, t, a) {},
    256: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        o = a(28),
        s = a.n(o),
        c = a(13),
        i = a(9),
        l = a(118),
        u = a(263),
        m = a(7),
        d = { isSignedIn: null, userId: null },
        p = a(43),
        v = a(48),
        h = a.n(v),
        b = { display: '', lead: '', paragraph: '' },
        f = Object(i.c)({
          auth: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : d,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case 'SIGN_IN':
                return Object(m.a)(
                  Object(m.a)({}, e),
                  {},
                  { isSignedIn: !0, userId: t.payload }
                )
              case 'SIGN_OUT':
                return Object(m.a)(
                  Object(m.a)({}, e),
                  {},
                  { isSignedIn: !1, userId: null }
                )
              default:
                return e
            }
          },
          searchMovie: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case 'LIST_MOVIES':
                return Object(m.a)(Object(m.a)({}, e), t.payload)
              default:
                return e
            }
          },
          favoriteMovie: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case 'CREATE_MOVIE':
                return Object(m.a)(
                  Object(m.a)({}, e),
                  {},
                  Object(p.a)({}, t.payload._id, t.payload)
                )
              case 'READ_MOVIES':
                return Object(m.a)(
                  Object(m.a)({}, {}),
                  h.a.mapKeys(t.payload, '_id')
                )
              case 'READ_MOVIE':
              case 'UPDATE_MOVIE':
                return Object(m.a)(
                  Object(m.a)({}, e),
                  {},
                  Object(p.a)({}, t.payload._id, t.payload)
                )
              case 'DELETE_MOVIE':
                return h.a.omit(e, t.payload)
              default:
                return e
            }
          },
          form: u.a,
          jumbotron: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : b,
              t = arguments.length > 1 ? arguments[1] : void 0
            switch (t.type) {
              case 'JUMBOTRON':
                return Object(m.a)(Object(m.a)({}, e), t.payload)
              default:
                return e
            }
          },
        }),
        E = (a(195), a(196), a(10)),
        g = a(11),
        y = a(15),
        O = a(14),
        j = a(25),
        w = a(12),
        N = a(20),
        M = Object(N.a)(),
        x = a(261),
        k = a(260),
        S = (a(197), a(257), a(18)),
        I = a.n(S),
        C = a(31),
        T = a(64),
        _ = a.n(T),
        L = _.a.create({
          baseURL: 'https://www.omdbapi.com/?i=tt3896198&apikey=80df80a6',
        }),
        A = _.a.create({ baseURL: 'https://vexuz-movie.herokuapp.com/api' }),
        D = function (e) {
          return (function () {
            var t = Object(C.a)(
              I.a.mark(function t(a) {
                var n
                return I.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), L.get('', { params: { s: e } })
                      case 2:
                        ;(n = t.sent).data.Error,
                          a({ type: 'LIST_MOVIES', payload: n.data }),
                          M.push('/')
                      case 6:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )
            return function (e) {
              return t.apply(this, arguments)
            }
          })()
        },
        F = function () {
          return (function () {
            var e = Object(C.a)(
              I.a.mark(function e(t, a) {
                var n, r
                return I.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = a().auth.userId) || (n = 0),
                          (e.next = 4),
                          A.get('/favorites', { params: { userId: n } })
                        )
                      case 4:
                        ;(r = e.sent),
                          t({ type: 'READ_MOVIES', payload: r.data })
                      case 6:
                      case 'end':
                        return e.stop()
                    }
                }, e)
              })
            )
            return function (t, a) {
              return e.apply(this, arguments)
            }
          })()
        },
        P = function (e) {
          return (function () {
            var t = Object(C.a)(
              I.a.mark(function t(a, n) {
                var r, o
                return I.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (r = n().auth.userId),
                          (t.next = 3),
                          A.get('/favorites/'.concat(e))
                        )
                      case 3:
                        if ((o = t.sent).data.userId === r) {
                          t.next = 6
                          break
                        }
                        return t.abrupt(
                          'return',
                          (o.data = { Error: 'Not found!' })
                        )
                      case 6:
                        a({ type: 'READ_MOVIE', payload: o.data })
                      case 7:
                      case 'end':
                        return t.stop()
                    }
                }, t)
              })
            )
            return function (e, a) {
              return t.apply(this, arguments)
            }
          })()
        },
        R = (function (e) {
          Object(y.a)(a, e)
          var t = Object(O.a)(a)
          function a() {
            var e
            Object(E.a)(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o]
            return (
              ((e = t.call.apply(t, [this].concat(r))).onAuthChange = function (
                t
              ) {
                t
                  ? (e.props.signIn(e.auth.currentUser.get().getId()),
                    e.props.onSetProfile(
                      e.auth.currentUser.get().getBasicProfile().getName()
                    ))
                  : (e.props.signOut(), e.props.onSetProfile('Public Guest')),
                  e.props.readMovies()
              }),
              (e.onSignInClick = function () {
                e.auth.signIn()
              }),
              (e.onSignOutClick = function () {
                e.auth.signOut()
              }),
              e
            )
          }
          return (
            Object(g.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this
                  setTimeout(function () {
                    window.gapi.load('client:auth2', function () {
                      window.gapi.client
                        .init({
                          clientId:
                            '111089652124-09g7rc0ig28946ufighdgl6q2ub42639.apps.googleusercontent.com',
                          scope: 'email',
                        })
                        .then(function () {
                          ;(e.auth = window.gapi.auth2.getAuthInstance()),
                            e.onAuthChange(e.auth.isSignedIn.get()),
                            e.auth.isSignedIn.listen(e.onAuthChange)
                        })
                    })
                  }, 500)
                },
              },
              {
                key: 'renderAuthButton',
                value: function () {
                  return null === this.props.isSignedIn
                    ? r.a.createElement(
                        'button',
                        {
                          className:
                            'btn btn-outline-warning mr-2 my-2 my-sm-0',
                        },
                        r.a.createElement('i', { className: 'google icon' }),
                        'Loading User'
                      )
                    : this.props.isSignedIn
                    ? r.a.createElement(
                        'button',
                        {
                          onClick: this.onSignOutClick,
                          className: 'btn btn-outline-danger mr-2 my-2 my-sm-0',
                          'data-toggle': 'collapse',
                          'data-target': '.navbar-collapse.show',
                        },
                        r.a.createElement('i', { className: 'google icon' }),
                        'Sign Out'
                      )
                    : r.a.createElement(
                        'button',
                        {
                          onClick: this.onSignInClick,
                          className:
                            'btn btn-outline-success mr-2 my-2 my-sm-0',
                        },
                        r.a.createElement('i', { className: 'google icon' }),
                        'Sign In with Google'
                      )
                },
              },
              {
                key: 'render',
                value: function () {
                  return r.a.createElement('div', null, this.renderAuthButton())
                },
              },
            ]),
            a
          )
        })(r.a.Component),
        U = Object(c.b)(
          function (e) {
            return { isSignedIn: e.auth.isSignedIn }
          },
          {
            signIn: function (e) {
              return { type: 'SIGN_IN', payload: e }
            },
            signOut: function () {
              return { type: 'SIGN_OUT' }
            },
            readMovies: F,
          }
        )(R),
        V = a(50),
        B = a(259),
        G = a(262),
        Y =
          (a(217),
          (function (e) {
            Object(y.a)(a, e)
            var t = Object(O.a)(a)
            function a(e, n) {
              var r
              return (
                Object(E.a)(this, a),
                ((r = t.call(this, e, n)).handleShow = r.handleShow.bind(
                  Object(V.a)(r)
                )),
                (r.handleClose = r.handleClose.bind(Object(V.a)(r))),
                (r.state = { show: !1, heading: '', body: '' }),
                r
              )
            }
            return (
              Object(g.a)(a, [
                {
                  key: 'handleShow',
                  value: function (e, t) {
                    this.setState({ show: !0, heading: e, body: t })
                  },
                },
                {
                  key: 'handleClose',
                  value: function () {
                    this.setState({ show: !1 })
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return r.a.createElement(
                      'div',
                      null,
                      r.a.createElement(
                        B.a,
                        {
                          show: this.state.show,
                          onHide: this.handleClose,
                          className: 'my-modal',
                        },
                        r.a.createElement(
                          B.a.Header,
                          { closeButton: !0 },
                          r.a.createElement(B.a.Title, null, this.state.heading)
                        ),
                        r.a.createElement(
                          B.a.Body,
                          null,
                          r.a.createElement('h5', null, this.state.body)
                        ),
                        r.a.createElement(
                          B.a.Footer,
                          null,
                          r.a.createElement(
                            G.a,
                            { variant: 'secondary', onClick: this.handleClose },
                            'Close'
                          )
                        )
                      )
                    )
                  },
                },
              ]),
              a
            )
          })(r.a.Component)),
        J = (function (e) {
          Object(y.a)(a, e)
          var t = Object(O.a)(a)
          function a(e) {
            var n
            return (
              Object(E.a)(this, a),
              ((n = t.call(this, e)).myModal = function (e) {
                n.showModal = e && e.handleShow
              }),
              (n.showMyModal = function (e, t) {
                n.showModal(e, t)
              }),
              (n.onSetProfile = function (e) {
                n.setState({ profile: e })
              }),
              (n.formOnSubmit = function (e) {
                if (!e.search)
                  return n.showMyModal('Invalid Input', 'Please add text.')
                n.props.listMovies(e.search)
              }),
              (n.state = { profile: '' }),
              n
            )
          }
          return (
            Object(g.a)(a, [
              {
                key: 'renderList',
                value: function () {
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(Y, { ref: this.myModal }),
                    r.a.createElement(
                      'header',
                      null,
                      r.a.createElement(
                        'nav',
                        {
                          className:
                            'navbar navbar-expand-lg navbar-light fixed-top bg-light',
                        },
                        r.a.createElement(
                          j.b,
                          {
                            className:
                              'navbar-brand text-success font-weight-bold',
                            to: '/',
                          },
                          'moViEX.UZ'
                        ),
                        r.a.createElement(
                          'button',
                          {
                            className: 'navbar-toggler',
                            type: 'button',
                            'data-toggle': 'collapse',
                            'data-target': '#navbarCollapse',
                            'aria-controls': 'navbarCollapse',
                            'aria-expanded': 'false',
                            'aria-label': 'Toggle navigation',
                          },
                          r.a.createElement('span', {
                            className: 'navbar-toggler-icon',
                          })
                        ),
                        r.a.createElement(
                          'div',
                          {
                            className: 'collapse navbar-collapse',
                            id: 'navbarCollapse',
                          },
                          r.a.createElement(
                            'ul',
                            { className: 'navbar-nav mr-auto' },
                            r.a.createElement(
                              'li',
                              {
                                className: 'nav-item',
                                'data-toggle': 'collapse',
                                'data-target': '.navbar-collapse.show',
                              },
                              r.a.createElement(
                                j.c,
                                {
                                  exact: !0,
                                  className: 'nav-link',
                                  to: '/',
                                  activeClassName: 'active',
                                },
                                'Home'
                              )
                            ),
                            r.a.createElement(
                              'li',
                              {
                                className: 'nav-item',
                                'data-toggle': 'collapse',
                                'data-target': '.navbar-collapse.show',
                              },
                              r.a.createElement(
                                j.c,
                                {
                                  className: 'nav-link',
                                  to: '/favorites',
                                  activeClassName: 'active',
                                },
                                'My Favorites (',
                                r.a.createElement(
                                  'span',
                                  { className: 'text-danger' },
                                  this.props.favoriteLength
                                ),
                                ')'
                              )
                            )
                          ),
                          r.a.createElement(
                            'span',
                            { className: 'navbar-text text-danger mr-2' },
                            'Login as ',
                            this.state.profile
                          ),
                          r.a.createElement(U, {
                            onSetProfile: this.onSetProfile,
                          }),
                          r.a.createElement(
                            'form',
                            {
                              onSubmit: this.props.handleSubmit(
                                this.formOnSubmit
                              ),
                              className: 'form-inline mt-2 mt-md-0',
                            },
                            r.a.createElement(
                              'div',
                              null,
                              r.a.createElement(x.a, {
                                className: 'form-control my-2 my-sm-0',
                                name: 'search',
                                component: 'input',
                                type: 'text',
                                placeholder: 'Type a movie or series',
                              }),
                              r.a.createElement(
                                'button',
                                {
                                  className: 'btn btn-success my-2 my-sm-0',
                                  'data-toggle': 'collapse',
                                  'data-target': '.navbar-collapse.show',
                                  type: 'submit',
                                },
                                'Search'
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                },
              },
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    r.a.Fragment,
                    null,
                    this.renderList()
                  )
                },
              },
            ]),
            a
          )
        })(n.Component),
        q = Object(k.a)({ form: 'searchMovie' })(J),
        z = Object(c.b)(
          function (e) {
            return { favoriteLength: Object.keys(e.favoriteMovie).length }
          },
          { listMovies: D }
        )(q),
        H = a(124),
        X = a.n(H),
        K = (function (e) {
          Object(y.a)(a, e)
          var t = Object(O.a)(a)
          function a() {
            return Object(E.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(g.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.jumbotron(this.props.location.pathname)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.location.pathname !== this.props.location.pathname &&
                    this.props.jumbotron(this.props.location.pathname)
                },
              },
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    'div',
                    { className: 'jumbotron text-light bg-dark m-0 p-2' },
                    r.a.createElement(
                      'div',
                      { className: 'container' },
                      r.a.createElement(
                        'h6',
                        { className: 'text-warning m-0 mt-3' },
                        'You have ',
                        this.props.favoriteLength,
                        ' ',
                        X()('favorite', this.props.favoriteLength),
                        this.props.jumbotronState.display
                      )
                    )
                  )
                },
              },
            ]),
            a
          )
        })(n.Component),
        Q = Object(c.b)(
          function (e) {
            return {
              jumbotronState: e.jumbotron,
              favoriteLength: Object.keys(e.favoriteMovie).length,
            }
          },
          {
            jumbotron: function (e) {
              return (function () {
                var t = Object(C.a)(
                  I.a.mark(function t(a, n) {
                    var r
                    return I.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            '/' === e
                              ? (r = {
                                  display: '. Search and click to add more!',
                                  lead:
                                    'Click posters to add to your favorites.',
                                  paragraph:
                                    'A movie (or series, games, etc.) searching app! Sign in with your Google account, save your favorites, and add your reaction essay. This app is using OMDb API (The Open Movie Database). It is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by their users.',
                                })
                              : '/favorites' === e &&
                                (r = {
                                  display: ' here!',
                                  lead:
                                    'Click the poster image to view details.',
                                  paragraph:
                                    'This app is inspired by YTS (aka YIFY). It is practically became an overnight sensation among movie geeks by hosting high-quality torrents of recently released movies.',
                                }),
                              a({ type: 'JUMBOTRON', payload: r })
                          case 2:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e, a) {
                  return t.apply(this, arguments)
                }
              })()
            },
          }
        )(K),
        W = (function (e) {
          Object(y.a)(a, e)
          var t = Object(O.a)(a)
          function a() {
            var e
            Object(E.a)(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o]
            return (
              ((e = t.call.apply(t, [this].concat(r))).myModal = function (t) {
                e.showModal = t && t.handleShow
              }),
              (e.showMyModal = function (t, a) {
                e.showModal(t, a)
              }),
              (e.addToFavorites = (function () {
                var t = Object(C.a)(
                  I.a.mark(function t(a) {
                    var n, r
                    return I.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              null === (n = e.props.auth.userId) && (n = 0),
                              (t.next = 4),
                              A.get('/favorites', { params: { userId: n } })
                            )
                          case 4:
                            if (
                              ((r = t.sent),
                              !r.data.some(function (e) {
                                return e.imdbID === a.imdbID
                              }))
                            ) {
                              t.next = 9
                              break
                            }
                            return (
                              e.showMyModal(
                                'Already Existed!',
                                ''.concat(a.Title, ' already existed!')
                              ),
                              t.abrupt('return')
                            )
                          case 9:
                            e.props.createMovies(Object(m.a)({}, a)),
                              e.showMyModal(
                                'Added Successfully!',
                                ''.concat(a.Title, ' added successfully!')
                              )
                          case 11:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e) {
                  return t.apply(this, arguments)
                }
              })()),
              (e.searchError = function (t) {
                'False' === t &&
                  e.showMyModal(
                    'Invalid Input',
                    ''.concat(e.props.movies.Error)
                  )
              }),
              e
            )
          }
          return (
            Object(g.a)(a, [
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.searchError(this.props.movies.Response)
                },
              },
              {
                key: 'listMovies',
                value: function () {
                  var e = this
                  return this.props.movies.Search.map(function (t) {
                    return r.a.createElement(
                      'div',
                      { className: 'col p-2', key: t.imdbID },
                      r.a.createElement(
                        'div',
                        { className: 'card' },
                        r.a.createElement(
                          'div',
                          { className: 'card-body' },
                          r.a.createElement('img', {
                            className: 'card-img-top',
                            src: t.Poster,
                            alt: t.Title,
                            title: 'Add to Favorites',
                            onClick: function () {
                              return e.addToFavorites(t)
                            },
                          })
                        ),
                        r.a.createElement(
                          'h5',
                          { className: 'card-title text-dark' },
                          t.Title
                        )
                      )
                    )
                  })
                },
              },
              {
                key: 'displayListMovies',
                value: function () {
                  return this.props.movies.Search
                    ? r.a.createElement(
                        'div',
                        { className: 'row row-cols-1 row-cols-lg-3' },
                        this.listMovies()
                      )
                    : r.a.createElement(
                        'div',
                        { className: 'd-flex justify-content-center' },
                        r.a.createElement(
                          'div',
                          {
                            className: 'spinner-grow text-success',
                            role: 'status',
                          },
                          r.a.createElement(
                            'span',
                            { className: 'sr-only' },
                            'Loading...'
                          )
                        )
                      )
                },
              },
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(Y, { ref: this.myModal }),
                    r.a.createElement(
                      'section',
                      { className: 'list-movie' },
                      r.a.createElement(
                        'div',
                        { className: 'bg-dark text-center' },
                        r.a.createElement(
                          'div',
                          { className: 'container' },
                          this.displayListMovies()
                        )
                      )
                    )
                  )
                },
              },
            ]),
            a
          )
        })(n.Component),
        Z = Object(c.b)(
          function (e) {
            return { movies: e.searchMovie, auth: e.auth }
          },
          {
            listMovies: D,
            createMovies: function (e) {
              return (function () {
                var t = Object(C.a)(
                  I.a.mark(function t(a, n) {
                    var r, o
                    return I.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (r = n().auth.userId) || (r = 0),
                              (t.next = 4),
                              A.post(
                                '/favorites',
                                Object(m.a)(
                                  Object(m.a)({}, e),
                                  {},
                                  { userId: r, reaction: '' }
                                )
                              )
                            )
                          case 4:
                            ;(o = t.sent),
                              a({ type: 'CREATE_MOVIE', payload: o.data })
                          case 6:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e, a) {
                  return t.apply(this, arguments)
                }
              })()
            },
          }
        )(W),
        $ = (function (e) {
          Object(y.a)(a, e)
          var t = Object(O.a)(a)
          function a() {
            var e
            Object(E.a)(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o]
            return (
              ((e = t.call.apply(t, [this].concat(r))).myModal = function (t) {
                e.showModal = t && t.handleShow
              }),
              (e.showMyModal = function (t, a) {
                e.showModal(t, a)
              }),
              e
            )
          }
          return (
            Object(g.a)(a, [
              {
                key: 'listMovies',
                value: function () {
                  var e = this
                  return this.props.movies.map(function (t) {
                    return r.a.createElement(
                      'div',
                      { className: 'col px-0', key: t._id },
                      r.a.createElement(
                        'div',
                        { className: 'card m-2' },
                        r.a.createElement(
                          'div',
                          { className: 'card-body' },
                          r.a.createElement(
                            j.b,
                            { to: '/favorites/read/'.concat(t._id) },
                            r.a.createElement('img', {
                              className: 'card-img-top',
                              src: t.Poster,
                              alt: t.Title,
                            })
                          )
                        ),
                        r.a.createElement(
                          'h5',
                          { className: 'card-title text-dark' },
                          t.Title
                        ),
                        r.a.createElement(
                          'div',
                          { className: 'd-flex justify-content-center' },
                          r.a.createElement(
                            j.b,
                            {
                              to: '/favorites/update/'.concat(t._id),
                              className:
                                '' === t.reaction
                                  ? 'btn btn-sm btn-success mx-3 mb-3'
                                  : 'btn btn-sm btn-warning mx-3 mb-3',
                            },
                            r.a.createElement(
                              'span',
                              null,
                              '' === t.reaction ? 'Add' : 'Edit',
                              ' Reaction'
                            )
                          ),
                          r.a.createElement(
                            'button',
                            {
                              onClick: function () {
                                e.props.deleteMovie(t._id),
                                  e.showMyModal(
                                    'Deleted Successfully!',
                                    ''.concat(t.Title, ' deleted successfully!')
                                  )
                              },
                              className: 'btn btn-sm btn-danger mx-3 mb-3',
                              style: { zIndex: 5 },
                            },
                            'Delete'
                          )
                        )
                      )
                    )
                  })
                },
              },
              {
                key: 'displayListMovies',
                value: function () {
                  return 0 === Object.entries(this.props.movies).length
                    ? r.a.createElement(
                        'div',
                        { className: 'd-flex justify-content-center' },
                        r.a.createElement(
                          'div',
                          {
                            className: 'spinner-grow text-success',
                            role: 'status',
                          },
                          r.a.createElement(
                            'span',
                            { className: 'sr-only' },
                            'Loading...'
                          )
                        )
                      )
                    : r.a.createElement(
                        'div',
                        { className: 'row row-cols-1 row-cols-lg-3' },
                        this.listMovies()
                      )
                },
              },
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(Y, { ref: this.myModal }),
                    r.a.createElement(
                      'section',
                      { id: 'read-movies' },
                      r.a.createElement(
                        'div',
                        { className: 'bg-dark text-center' },
                        r.a.createElement(
                          'div',
                          { className: 'container' },
                          this.displayListMovies()
                        )
                      )
                    )
                  )
                },
              },
            ]),
            a
          )
        })(n.Component),
        ee = Object(c.b)(
          function (e) {
            return {
              movies: Object.values(e.favoriteMovie),
              isSignedIn: e.auth.isSignedIn,
            }
          },
          {
            readMovies: F,
            deleteMovie: function (e) {
              return (function () {
                var t = Object(C.a)(
                  I.a.mark(function t(a) {
                    return I.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), A.delete('/favorites/'.concat(e))
                            )
                          case 2:
                            a({ type: 'DELETE_MOVIE', payload: e })
                          case 3:
                          case 'end':
                            return t.stop()
                        }
                    }, t)
                  })
                )
                return function (e) {
                  return t.apply(this, arguments)
                }
              })()
            },
          }
        )($),
        te = (function (e) {
          Object(y.a)(a, e)
          var t = Object(O.a)(a)
          function a() {
            return Object(E.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(g.a)(a, [
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      'section',
                      { className: 'list-movie' },
                      r.a.createElement(
                        'div',
                        { className: 'bg-dark text-center py-5 mt-5' },
                        r.a.createElement(
                          'div',
                          { className: 'container' },
                          r.a.createElement(
                            'div',
                            { className: 'row' },
                            r.a.createElement(
                              'div',
                              { className: 'col' },
                              'CreateMovie'
                            )
                          )
                        )
                      )
                    )
                  )
                },
              },
            ]),
            a
          )
        })(n.Component),
        ae = (function (e) {
          Object(y.a)(a, e)
          var t = Object(O.a)(a)
          function a() {
            return Object(E.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(g.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  var e = this.props.match.params.id
                  this.props.readMovie(e)
                },
              },
              {
                key: 'renderList',
                value: function () {
                  return this.props.movie
                    ? r.a.createElement(
                        n.Fragment,
                        null,
                        r.a.createElement(
                          'section',
                          { className: 'list-movie' },
                          r.a.createElement(
                            'div',
                            { className: 'bg-dark text-center py-5' },
                            r.a.createElement(
                              'div',
                              { className: 'container' },
                              r.a.createElement(
                                'div',
                                { className: 'row' },
                                r.a.createElement(
                                  'div',
                                  { className: 'col' },
                                  r.a.createElement(
                                    'div',
                                    {
                                      className:
                                        'row no-gutters overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative',
                                    },
                                    r.a.createElement(
                                      'div',
                                      {
                                        className: 'col-auto col-lg-6 mx-auto',
                                      },
                                      r.a.createElement('img', {
                                        src: this.props.movie.Poster,
                                        className: 'card-img-top',
                                        alt: this.props.movie.Title,
                                      })
                                    ),
                                    r.a.createElement(
                                      'div',
                                      {
                                        className:
                                          'col-lg-6 d-flex flex-column position-static',
                                      },
                                      r.a.createElement(
                                        'strong',
                                        {
                                          className:
                                            'd-inline-block mb-2 text-primary',
                                        },
                                        this.props.movie.Type.toUpperCase()
                                      ),
                                      r.a.createElement(
                                        'h3',
                                        { className: 'mb-0' },
                                        this.props.movie.Title
                                      ),
                                      r.a.createElement(
                                        'div',
                                        { className: 'mb-1 text-muted' },
                                        this.props.movie.Year
                                      ),
                                      r.a.createElement(
                                        'p',
                                        { className: 'card-text font-italic' },
                                        this.props.movie.reaction
                                          ? this.props.movie.reaction
                                          : '*No reaction essay yet. Please add.*'
                                      ),
                                      r.a.createElement(
                                        j.b,
                                        {
                                          to: '/favorites/update/'.concat(
                                            this.props.movie._id
                                          ),
                                          className:
                                            '' === this.props.movie.reaction
                                              ? 'btn btn-sm btn-success w-50 mx-auto mx-3'
                                              : 'btn btn-sm btn-warning w-50 mx-auto mx-3',
                                        },
                                        r.a.createElement(
                                          'span',
                                          null,
                                          '' === this.props.movie.reaction
                                            ? 'Add'
                                            : 'Edit',
                                          ' ',
                                          'Reaction'
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    : console.log('Loading')
                },
              },
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(n.Fragment, null, this.renderList())
                },
              },
            ]),
            a
          )
        })(n.Component),
        ne = Object(c.b)(
          function (e, t) {
            return { movie: e.favoriteMovie[t.match.params.id] }
          },
          { readMovie: P }
        )(ae),
        re = (function (e) {
          Object(y.a)(a, e)
          var t = Object(O.a)(a)
          function a() {
            var e
            Object(E.a)(this, a)
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o]
            return (
              ((e = t.call.apply(t, [this].concat(r))).onFormSubmit = function (
                t
              ) {
                e.props.updateMovie(e.props.match.params.id, t)
              }),
              e
            )
          }
          return (
            Object(g.a)(a, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.props.readMovie(this.props.match.params.id)
                },
              },
              {
                key: 'renderList',
                value: function () {
                  if (this.props.movie)
                    return r.a.createElement(
                      n.Fragment,
                      null,
                      r.a.createElement(
                        'section',
                        { className: 'list-movie' },
                        r.a.createElement(
                          'div',
                          { className: 'bg-dark text-center py-5' },
                          r.a.createElement(
                            'div',
                            { className: 'container' },
                            r.a.createElement(
                              'div',
                              { className: 'row' },
                              r.a.createElement(
                                'div',
                                { className: 'col' },
                                r.a.createElement(
                                  'div',
                                  {
                                    className:
                                      'row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative',
                                  },
                                  r.a.createElement(
                                    'div',
                                    {
                                      className:
                                        'col p-4 d-flex flex-column position-static',
                                    },
                                    r.a.createElement(
                                      'h3',
                                      { className: 'mb-0' },
                                      this.props.movie.Title
                                    ),
                                    r.a.createElement(
                                      'div',
                                      { className: 'mb-1 text-muted' },
                                      this.props.movie.Year
                                    ),
                                    r.a.createElement(
                                      'form',
                                      {
                                        onSubmit: this.props.handleSubmit(
                                          this.onFormSubmit
                                        ),
                                      },
                                      r.a.createElement(
                                        'div',
                                        null,
                                        r.a.createElement(
                                          'label',
                                          null,
                                          'Enter your reaction:'
                                        ),
                                        r.a.createElement(x.a, {
                                          className:
                                            'form-control mr-sm-2 mb-2',
                                          name: 'reaction',
                                          component: 'textarea',
                                          rows: '10',
                                        })
                                      ),
                                      r.a.createElement(
                                        'button',
                                        {
                                          className:
                                            'btn btn-success my-2 my-sm-0',
                                          type: 'submit',
                                        },
                                        'Update'
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                },
              },
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(n.Fragment, null, this.renderList())
                },
              },
            ]),
            a
          )
        })(n.Component),
        oe = Object(k.a)({ form: 'updateMovie', enableReinitialize: !0 })(re),
        se = Object(c.b)(
          function (e, t) {
            return {
              movie: e.favoriteMovie[t.match.params.id],
              initialValues: h.a.pick(
                e.favoriteMovie[t.match.params.id],
                'reaction'
              ),
            }
          },
          {
            readMovie: P,
            updateMovie: function (e, t) {
              return (function () {
                var a = Object(C.a)(
                  I.a.mark(function a(n) {
                    var r
                    return I.a.wrap(function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (
                              (a.next = 2), A.patch('favorites/'.concat(e), t)
                            )
                          case 2:
                            ;(r = a.sent),
                              n({ type: 'UPDATE_MOVIE', payload: r.data }),
                              M.goBack()
                          case 5:
                          case 'end':
                            return a.stop()
                        }
                    }, a)
                  })
                )
                return function (e) {
                  return a.apply(this, arguments)
                }
              })()
            },
          }
        )(oe),
        ce = function () {
          return r.a.createElement(
            'div',
            { className: 'container' },
            r.a.createElement('h1', null, 'Page not found. Check URL.')
          )
        },
        ie = (function (e) {
          Object(y.a)(a, e)
          var t = Object(O.a)(a)
          function a() {
            return Object(E.a)(this, a), t.apply(this, arguments)
          }
          return (
            Object(g.a)(a, [
              {
                key: 'render',
                value: function () {
                  return r.a.createElement(
                    n.Fragment,
                    null,
                    r.a.createElement(
                      j.a,
                      { history: M },
                      r.a.createElement(z, null),
                      r.a.createElement(w.b, { component: Q }),
                      r.a.createElement(
                        w.d,
                        null,
                        r.a.createElement(w.b, {
                          path: '/',
                          exact: !0,
                          component: Z,
                        }),
                        r.a.createElement(w.b, {
                          path: '/favorites',
                          exact: !0,
                          component: ee,
                        }),
                        r.a.createElement(w.b, {
                          path: '/favorites/create',
                          exact: !0,
                          component: te,
                        }),
                        r.a.createElement(w.b, {
                          path: '/favorites/read/:id',
                          exact: !0,
                          component: ne,
                        }),
                        r.a.createElement(w.b, {
                          path: '/favorites/update/:id',
                          exact: !0,
                          component: se,
                        }),
                        r.a.createElement(w.b, {
                          path: '/test',
                          exact: !0,
                          component: Y,
                        }),
                        r.a.createElement(w.b, { component: ce }),
                        r.a.createElement(w.a, { to: '/' })
                      )
                    )
                  )
                },
              },
            ]),
            a
          )
        })(n.Component),
        le = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || i.d,
        ue = Object(i.e)(f, le(Object(i.a)(l.a)))
      s.a.render(
        r.a.createElement(c.a, { store: ue }, r.a.createElement(ie, null)),
        document.querySelector('#root')
      )
    },
  },
  [[127, 1, 2]],
])
//# sourceMappingURL=main.9511451d.chunk.js.map
