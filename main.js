!(function (o) {
  var r = {};
  function n(a) {
    if (r[a]) return r[a].exports;
    var e = (r[a] = { i: a, l: !1, exports: {} });
    return o[a].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  (n.m = o),
    (n.c = r),
    (n.d = function (o, r, a) {
      n.o(o, r) || Object.defineProperty(o, r, { enumerable: !0, get: a });
    }),
    (n.r = function (o) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(o, "__esModule", { value: !0 });
    }),
    (n.t = function (o, r) {
      if ((1 & r && (o = n(o)), 8 & r)) return o;
      if (4 & r && "object" == typeof o && o && o.__esModule) return o;
      var a = Object.create(null);
      if (
        (n.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: o }),
        2 & r && "string" != typeof o)
      )
        for (var e in o)
          n.d(
            a,
            e,
            function (r) {
              return o[r];
            }.bind(null, e)
          );
      return a;
    }),
    (n.n = function (o) {
      var r =
        o && o.__esModule
          ? function () {
              return o.default;
            }
          : function () {
              return o;
            };
      return n.d(r, "a", r), r;
    }),
    (n.o = function (o, r) {
      return Object.prototype.hasOwnProperty.call(o, r);
    }),
    (n.p = ""),
    n((n.s = 1));
})([
  function (o, r, n) {
    "use strict";
    o.exports = function (o) {
      var r = [];
      return (
        (r.toString = function () {
          return this.map(function (r) {
            var n = (function (o, r) {
              var n = o[1] || "",
                a = o[3];
              if (!a) return n;
              if (r && "function" == typeof btoa) {
                var e =
                    ((l = a),
                    (t = btoa(unescape(encodeURIComponent(JSON.stringify(l))))),
                    (d = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                      t
                    )),
                    "/*# ".concat(d, " */")),
                  c = a.sources.map(function (o) {
                    return "/*# sourceURL="
                      .concat(a.sourceRoot || "")
                      .concat(o, " */");
                  });
                return [n].concat(c).concat([e]).join("\n");
              }
              var l, t, d;
              return [n].join("\n");
            })(r, o);
            return r[2] ? "@media ".concat(r[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (r.i = function (o, n, a) {
          "string" == typeof o && (o = [[null, o, ""]]);
          var e = {};
          if (a)
            for (var c = 0; c < this.length; c++) {
              var l = this[c][0];
              null != l && (e[l] = !0);
            }
          for (var t = 0; t < o.length; t++) {
            var d = [].concat(o[t]);
            (a && e[d[0]]) ||
              (n &&
                (d[2]
                  ? (d[2] = "".concat(n, " and ").concat(d[2]))
                  : (d[2] = n)),
              r.push(d));
          }
        }),
        r
      );
    };
  },
  function (o, r, n) {
    "use strict";
    n.r(r);
    n(2);
    new (n(5))(".rellax");
  },
  function (o, r, n) {
    var a = n(3),
      e = n(4);
    "string" == typeof (e = e.__esModule ? e.default : e) &&
      (e = [[o.i, e, ""]]);
    var c = { insert: "head", singleton: !1 };
    a(e, c);
    o.exports = e.locals || {};
  },
  function (o, r, n) {
    "use strict";
    var a,
      e = function () {
        return (
          void 0 === a &&
            (a = Boolean(window && document && document.all && !window.atob)),
          a
        );
      },
      c = (function () {
        var o = {};
        return function (r) {
          if (void 0 === o[r]) {
            var n = document.querySelector(r);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (o) {
                n = null;
              }
            o[r] = n;
          }
          return o[r];
        };
      })(),
      l = [];
    function t(o) {
      for (var r = -1, n = 0; n < l.length; n++)
        if (l[n].identifier === o) {
          r = n;
          break;
        }
      return r;
    }
    function d(o, r) {
      for (var n = {}, a = [], e = 0; e < o.length; e++) {
        var c = o[e],
          d = r.base ? c[0] + r.base : c[0],
          i = n[d] || 0,
          g = "".concat(d, " ").concat(i);
        n[d] = i + 1;
        var p = t(g),
          s = { css: c[1], media: c[2], sourceMap: c[3] };
        -1 !== p
          ? (l[p].references++, l[p].updater(s))
          : l.push({ identifier: g, updater: v(s, r), references: 1 }),
          a.push(g);
      }
      return a;
    }
    function i(o) {
      var r = document.createElement("style"),
        a = o.attributes || {};
      if (void 0 === a.nonce) {
        var e = n.nc;
        e && (a.nonce = e);
      }
      if (
        (Object.keys(a).forEach(function (o) {
          r.setAttribute(o, a[o]);
        }),
        "function" == typeof o.insert)
      )
        o.insert(r);
      else {
        var l = c(o.insert || "head");
        if (!l)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        l.appendChild(r);
      }
      return r;
    }
    var g,
      p =
        ((g = []),
        function (o, r) {
          return (g[o] = r), g.filter(Boolean).join("\n");
        });
    function s(o, r, n, a) {
      var e = n
        ? ""
        : a.media
        ? "@media ".concat(a.media, " {").concat(a.css, "}")
        : a.css;
      if (o.styleSheet) o.styleSheet.cssText = p(r, e);
      else {
        var c = document.createTextNode(e),
          l = o.childNodes;
        l[r] && o.removeChild(l[r]),
          l.length ? o.insertBefore(c, l[r]) : o.appendChild(c);
      }
    }
    function b(o, r, n) {
      var a = n.css,
        e = n.media,
        c = n.sourceMap;
      if (
        (e ? o.setAttribute("media", e) : o.removeAttribute("media"),
        c &&
          btoa &&
          (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(c)))),
            " */"
          )),
        o.styleSheet)
      )
        o.styleSheet.cssText = a;
      else {
        for (; o.firstChild; ) o.removeChild(o.firstChild);
        o.appendChild(document.createTextNode(a));
      }
    }
    var m = null,
      f = 0;
    function v(o, r) {
      var n, a, e;
      if (r.singleton) {
        var c = f++;
        (n = m || (m = i(r))),
          (a = s.bind(null, n, c, !1)),
          (e = s.bind(null, n, c, !0));
      } else
        (n = i(r)),
          (a = b.bind(null, n, r)),
          (e = function () {
            !(function (o) {
              if (null === o.parentNode) return !1;
              o.parentNode.removeChild(o);
            })(n);
          });
      return (
        a(o),
        function (r) {
          if (r) {
            if (
              r.css === o.css &&
              r.media === o.media &&
              r.sourceMap === o.sourceMap
            )
              return;
            a((o = r));
          } else e();
        }
      );
    }
    o.exports = function (o, r) {
      (r = r || {}).singleton ||
        "boolean" == typeof r.singleton ||
        (r.singleton = e());
      var n = d((o = o || []), r);
      return function (o) {
        if (
          ((o = o || []),
          "[object Array]" === Object.prototype.toString.call(o))
        ) {
          for (var a = 0; a < n.length; a++) {
            var e = t(n[a]);
            l[e].references--;
          }
          for (var c = d(o, r), i = 0; i < n.length; i++) {
            var g = t(n[i]);
            0 === l[g].references && (l[g].updater(), l.splice(g, 1));
          }
          n = c;
        }
      };
    };
  },
  function (o, r, n) {
    "use strict";
    n.r(r);
    var a = n(0),
      e = n.n(a)()(!1);
    e.push([
      o.i,
      "",
    ]),
      (r.default = e);
  },
  function (o, r, n) {
    (function (n) {
      var a, e, c;
      "undefined" != typeof window && window,
        (e = []),
        void 0 ===
          (c =
            "function" ==
            typeof (a = function () {
              var o = function (r, n) {
                "use strict";
                var a = Object.create(o.prototype),
                  e = 0,
                  c = 0,
                  l = 0,
                  t = 0,
                  d = [],
                  i = !0,
                  g =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    function (o) {
                      return setTimeout(o, 1e3 / 60);
                    },
                  p = null,
                  s = !1;
                try {
                  var b = Object.defineProperty({}, "passive", {
                    get: function () {
                      s = !0;
                    },
                  });
                  window.addEventListener("testPassive", null, b),
                    window.removeEventListener("testPassive", null, b);
                } catch (o) {}
                var m =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    clearTimeout,
                  f =
                    window.transformProp ||
                    (function () {
                      var o = document.createElement("div");
                      if (null === o.style.transform) {
                        var r = ["Webkit", "Moz", "ms"];
                        for (var n in r)
                          if (void 0 !== o.style[r[n] + "Transform"])
                            return r[n] + "Transform";
                      }
                      return "transform";
                    })();
                (a.options = {
                  speed: -2,
                  verticalSpeed: null,
                  horizontalSpeed: null,
                  breakpoints: [576, 768, 1201],
                  center: !1,
                  wrapper: null,
                  relativeToWrapper: !1,
                  round: !0,
                  vertical: !0,
                  horizontal: !1,
                  verticalScrollAxis: "y",
                  horizontalScrollAxis: "x",
                  callback: function () {},
                }),
                  n &&
                    Object.keys(n).forEach(function (o) {
                      a.options[o] = n[o];
                    }),
                  n &&
                    n.breakpoints &&
                    (function () {
                      if (
                        3 === a.options.breakpoints.length &&
                        Array.isArray(a.options.breakpoints)
                      ) {
                        var o,
                          r = !0,
                          n = !0;
                        if (
                          (a.options.breakpoints.forEach(function (a) {
                            "number" != typeof a && (n = !1),
                              null !== o && a < o && (r = !1),
                              (o = a);
                          }),
                          r && n)
                        )
                          return;
                      }
                      (a.options.breakpoints = [576, 768, 1201]),
                        console.warn(
                          "Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted"
                        );
                    })(),
                  r || (r = ".rellax");
                var v =
                  "string" == typeof r ? document.querySelectorAll(r) : [r];
                if (v.length > 0) {
                  if (
                    ((a.elems = v),
                    a.options.wrapper && !a.options.wrapper.nodeType)
                  ) {
                    var h = document.querySelector(a.options.wrapper);
                    if (!h)
                      return void console.warn(
                        "Rellax: The wrapper you're trying to use doesn't exist."
                      );
                    a.options.wrapper = h;
                  }
                  var y,
                    u = function () {
                      for (var o = 0; o < d.length; o++)
                        a.elems[o].style.cssText = d[o].style;
                      var r, n;
                      (d = []),
                        (c = window.innerHeight),
                        (t = window.innerWidth),
                        (r = t),
                        (n = a.options.breakpoints),
                        (y =
                          r < n[0]
                            ? "xs"
                            : r >= n[0] && r < n[1]
                            ? "sm"
                            : r >= n[1] && r < n[2]
                            ? "md"
                            : "lg"),
                        k(),
                        (function () {
                          for (var o = 0; o < a.elems.length; o++) {
                            var r = x(a.elems[o]);
                            d.push(r);
                          }
                        })(),
                        C(),
                        i &&
                          (window.addEventListener("resize", u), (i = !1), j());
                    },
                    x = function (o) {
                      var r,
                        n = o.getAttribute("data-rellax-percentage"),
                        e = o.getAttribute("data-rellax-speed"),
                        l = o.getAttribute("data-rellax-xs-speed"),
                        d = o.getAttribute("data-rellax-mobile-speed"),
                        i = o.getAttribute("data-rellax-tablet-speed"),
                        g = o.getAttribute("data-rellax-desktop-speed"),
                        p = o.getAttribute("data-rellax-vertical-speed"),
                        s = o.getAttribute("data-rellax-horizontal-speed"),
                        b = o.getAttribute("data-rellax-vertical-scroll-axis"),
                        m = o.getAttribute(
                          "data-rellax-horizontal-scroll-axis"
                        ),
                        f = o.getAttribute("data-rellax-zindex") || 0,
                        v = o.getAttribute("data-rellax-min"),
                        h = o.getAttribute("data-rellax-max"),
                        u = o.getAttribute("data-rellax-min-x"),
                        x = o.getAttribute("data-rellax-max-x"),
                        k = o.getAttribute("data-rellax-min-y"),
                        z = o.getAttribute("data-rellax-max-y"),
                        j = !0;
                      l || d || i || g
                        ? (r = { xs: l, sm: d, md: i, lg: g })
                        : (j = !1);
                      var C = a.options.wrapper
                        ? a.options.wrapper.scrollTop
                        : window.pageYOffset ||
                          document.documentElement.scrollTop ||
                          document.body.scrollTop;
                      a.options.relativeToWrapper &&
                        (C =
                          (window.pageYOffset ||
                            document.documentElement.scrollTop ||
                            document.body.scrollTop) -
                          a.options.wrapper.offsetTop);
                      var S =
                          a.options.vertical && (n || a.options.center) ? C : 0,
                        E =
                          a.options.horizontal && (n || a.options.center)
                            ? a.options.wrapper
                              ? a.options.wrapper.scrollLeft
                              : window.pageXOffset ||
                                document.documentElement.scrollLeft ||
                                document.body.scrollLeft
                            : 0,
                        A = S + o.getBoundingClientRect().top,
                        T = o.clientHeight || o.offsetHeight || o.scrollHeight,
                        M = E + o.getBoundingClientRect().left,
                        R = o.clientWidth || o.offsetWidth || o.scrollWidth,
                        I = n || (S - A + c) / (T + c),
                        N = n || (E - M + t) / (R + t);
                      a.options.center && ((N = 0.5), (I = 0.5));
                      var Y =
                          j && null !== r[y]
                            ? Number(r[y])
                            : e || a.options.speed,
                        L = p || a.options.verticalSpeed,
                        O = s || a.options.horizontalSpeed,
                        U = b || a.options.verticalScrollAxis,
                        F = m || a.options.horizontalScrollAxis,
                        X = w(N, I, Y, L, O),
                        B = o.style.cssText,
                        H = "",
                        P = /transform\s*:/i.exec(B);
                      if (P) {
                        var W = P.index,
                          q = B.slice(W),
                          _ = q.indexOf(";");
                        H = _
                          ? " " + q.slice(11, _).replace(/\s/g, "")
                          : " " + q.slice(11).replace(/\s/g, "");
                      }
                      return {
                        baseX: X.x,
                        baseY: X.y,
                        top: A,
                        left: M,
                        height: T,
                        width: R,
                        speed: Y,
                        verticalSpeed: L,
                        horizontalSpeed: O,
                        verticalScrollAxis: U,
                        horizontalScrollAxis: F,
                        style: B,
                        transform: H,
                        zindex: f,
                        min: v,
                        max: h,
                        minX: u,
                        maxX: x,
                        minY: k,
                        maxY: z,
                      };
                    },
                    k = function () {
                      var o = e,
                        r = l;
                      if (
                        ((e = a.options.wrapper
                          ? a.options.wrapper.scrollTop
                          : (
                              document.documentElement ||
                              document.body.parentNode ||
                              document.body
                            ).scrollTop || window.pageYOffset),
                        (l = a.options.wrapper
                          ? a.options.wrapper.scrollLeft
                          : (
                              document.documentElement ||
                              document.body.parentNode ||
                              document.body
                            ).scrollLeft || window.pageXOffset),
                        a.options.relativeToWrapper)
                      ) {
                        var n =
                          (
                            document.documentElement ||
                            document.body.parentNode ||
                            document.body
                          ).scrollTop || window.pageYOffset;
                        e = n - a.options.wrapper.offsetTop;
                      }
                      return (
                        !(o == e || !a.options.vertical) ||
                        !(r == l || !a.options.horizontal)
                      );
                    },
                    w = function (o, r, n, e, c) {
                      var l = {},
                        t = (c || n) * (100 * (1 - o)),
                        d = (e || n) * (100 * (1 - r));
                      return (
                        (l.x = a.options.round
                          ? Math.round(t)
                          : Math.round(100 * t) / 100),
                        (l.y = a.options.round
                          ? Math.round(d)
                          : Math.round(100 * d) / 100),
                        l
                      );
                    },
                    z = function () {
                      window.removeEventListener("resize", z),
                        window.removeEventListener("orientationchange", z),
                        (a.options.wrapper
                          ? a.options.wrapper
                          : window
                        ).removeEventListener("scroll", z),
                        (a.options.wrapper
                          ? a.options.wrapper
                          : document
                        ).removeEventListener("touchmove", z),
                        (p = g(j));
                    },
                    j = function () {
                      k() && !1 === i
                        ? (C(), (p = g(j)))
                        : ((p = null),
                          window.addEventListener("resize", z),
                          window.addEventListener("orientationchange", z),
                          (a.options.wrapper
                            ? a.options.wrapper
                            : window
                          ).addEventListener(
                            "scroll",
                            z,
                            !!s && { passive: !0 }
                          ),
                          (a.options.wrapper
                            ? a.options.wrapper
                            : document
                          ).addEventListener(
                            "touchmove",
                            z,
                            !!s && { passive: !0 }
                          ));
                    },
                    C = function () {
                      for (var o, r = 0; r < a.elems.length; r++) {
                        var n = d[r].verticalScrollAxis.toLowerCase(),
                          i = d[r].horizontalScrollAxis.toLowerCase(),
                          g = -1 != n.indexOf("x") ? e : 0,
                          p = -1 != n.indexOf("y") ? e : 0,
                          s = -1 != i.indexOf("x") ? l : 0,
                          b =
                            (p +
                              (-1 != i.indexOf("y") ? l : 0) -
                              d[r].top +
                              c) /
                            (d[r].height + c),
                          m = (g + s - d[r].left + t) / (d[r].width + t),
                          v =
                            (o = w(
                              m,
                              b,
                              d[r].speed,
                              d[r].verticalSpeed,
                              d[r].horizontalSpeed
                            )).y - d[r].baseY,
                          h = o.x - d[r].baseX;
                        null !== d[r].min &&
                          (a.options.vertical &&
                            !a.options.horizontal &&
                            (v = v <= d[r].min ? d[r].min : v),
                          a.options.horizontal &&
                            !a.options.vertical &&
                            (h = h <= d[r].min ? d[r].min : h)),
                          null != d[r].minY &&
                            (v = v <= d[r].minY ? d[r].minY : v),
                          null != d[r].minX &&
                            (h = h <= d[r].minX ? d[r].minX : h),
                          null !== d[r].max &&
                            (a.options.vertical &&
                              !a.options.horizontal &&
                              (v = v >= d[r].max ? d[r].max : v),
                            a.options.horizontal &&
                              !a.options.vertical &&
                              (h = h >= d[r].max ? d[r].max : h)),
                          null != d[r].maxY &&
                            (v = v >= d[r].maxY ? d[r].maxY : v),
                          null != d[r].maxX &&
                            (h = h >= d[r].maxX ? d[r].maxX : h);
                        var y = d[r].zindex,
                          u =
                            "translate3d(" +
                            (a.options.horizontal ? h : "0") +
                            "px," +
                            (a.options.vertical ? v : "0") +
                            "px," +
                            y +
                            "px) " +
                            d[r].transform;
                        a.elems[r].style[f] = u;
                      }
                      a.options.callback(o);
                    };
                  return (
                    (a.destroy = function () {
                      for (var o = 0; o < a.elems.length; o++)
                        a.elems[o].style.cssText = d[o].style;
                      i || (window.removeEventListener("resize", u), (i = !0)),
                        m(p),
                        (p = null);
                    }),
                    u(),
                    (a.refresh = u),
                    a
                  );
                }
                console.warn(
                  "Rellax: The elements you're trying to select don't exist."
                );
              };
              return o;
            })
              ? a.apply(r, e)
              : a) || (o.exports = c);
    }.call(this, n(6)));
  },
  function (o, r) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (o) {
      "object" == typeof window && (n = window);
    }
    o.exports = n;
  },
]);