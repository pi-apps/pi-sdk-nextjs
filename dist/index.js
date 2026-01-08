import Sr from "react";
var ve = { exports: {} }, Te = {}, Oe = {}, Ne = {}, At;
function Tr() {
  return At || (At = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "detectDomainLocale", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    function a(c, r, s) {
      if (c) {
        s && (s = s.toLowerCase());
        for (const u of c) {
          const n = u.domain?.split(":", 1)[0].toLowerCase();
          if (r === n || s === u.defaultLocale.toLowerCase() || u.locales?.some((e) => e.toLowerCase() === s))
            return u;
        }
      }
    }
  })(Ne)), Ne;
}
var Ie = {}, xe = {}, St;
function Or() {
  return St || (St = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "removeTrailingSlash", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    function a(c) {
      return c.replace(/\/$/, "") || "/";
    }
  })(xe)), xe;
}
var De = {}, Ce = {}, Tt;
function Et() {
  return Tt || (Tt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "parsePath", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    function a(c) {
      const r = c.indexOf("#"), s = c.indexOf("?"), u = s > -1 && (r < 0 || s < r);
      return u || r > -1 ? {
        pathname: c.substring(0, u ? s : r),
        query: u ? c.substring(s, r > -1 ? r : void 0) : "",
        hash: r > -1 ? c.slice(r) : ""
      } : {
        pathname: c,
        query: "",
        hash: ""
      };
    }
  })(Ce)), Ce;
}
var Ot;
function Rr() {
  return Ot || (Ot = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "addPathPrefix", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const a = Et();
    function c(r, s) {
      if (!r.startsWith("/") || !s)
        return r;
      const { pathname: u, query: n, hash: e } = (0, a.parsePath)(r);
      return `${s}${u}${n}${e}`;
    }
  })(De)), De;
}
var ke = {}, Nt;
function Nr() {
  return Nt || (Nt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "addPathSuffix", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const a = Et();
    function c(r, s) {
      if (!r.startsWith("/") || !s)
        return r;
      const { pathname: u, query: n, hash: e } = (0, a.parsePath)(r);
      return `${u}${s}${n}${e}`;
    }
  })(ke)), ke;
}
var je = {}, Le = {}, It;
function bt() {
  return It || (It = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "pathHasPrefix", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const a = Et();
    function c(r, s) {
      if (typeof r != "string")
        return !1;
      const { pathname: u } = (0, a.parsePath)(r);
      return u === s || u.startsWith(s + "/");
    }
  })(Le)), Le;
}
var xt;
function Ir() {
  return xt || (xt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "addLocale", {
      enumerable: !0,
      get: function() {
        return r;
      }
    });
    const a = Rr(), c = bt();
    function r(s, u, n, e) {
      if (!u || u === n) return s;
      const f = s.toLowerCase();
      return !e && ((0, c.pathHasPrefix)(f, "/api") || (0, c.pathHasPrefix)(f, `/${u.toLowerCase()}`)) ? s : (0, a.addPathPrefix)(s, `/${u}`);
    }
  })(je)), je;
}
var Dt;
function xr() {
  return Dt || (Dt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "formatNextPathnameInfo", {
      enumerable: !0,
      get: function() {
        return u;
      }
    });
    const a = Or(), c = Rr(), r = Nr(), s = Ir();
    function u(n) {
      let e = (0, s.addLocale)(n.pathname, n.locale, n.buildId ? void 0 : n.defaultLocale, n.ignorePrefix);
      return (n.buildId || !n.trailingSlash) && (e = (0, a.removeTrailingSlash)(e)), n.buildId && (e = (0, r.addPathSuffix)((0, c.addPathPrefix)(e, `/_next/data/${n.buildId}`), n.pathname === "/" ? "index.json" : ".json")), e = (0, c.addPathPrefix)(e, n.basePath), !n.buildId && n.trailingSlash ? e.endsWith("/") ? e : (0, r.addPathSuffix)(e, "/") : (0, a.removeTrailingSlash)(e);
    }
  })(Ie)), Ie;
}
var qe = {}, Ct;
function Dr() {
  return Ct || (Ct = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "getHostname", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    function a(c, r) {
      let s;
      if (r?.host && !Array.isArray(r.host))
        s = r.host.toString().split(":", 1)[0];
      else if (c.hostname)
        s = c.hostname;
      else return;
      return s.toLowerCase();
    }
  })(qe)), qe;
}
var Me = {}, He = {}, kt;
function Cr() {
  return kt || (kt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "normalizeLocalePath", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const a = /* @__PURE__ */ new WeakMap();
    function c(r, s) {
      if (!s) return {
        pathname: r
      };
      let u = a.get(s);
      u || (u = s.map((t) => t.toLowerCase()), a.set(s, u));
      let n;
      const e = r.split("/", 2);
      if (!e[1]) return {
        pathname: r
      };
      const f = e[1].toLowerCase(), h = u.indexOf(f);
      return h < 0 ? {
        pathname: r
      } : (n = s[h], r = r.slice(n.length + 1) || "/", {
        pathname: r,
        detectedLocale: n
      });
    }
  })(He)), He;
}
var Ue = {}, jt;
function kr() {
  return jt || (jt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "removePathPrefix", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const a = bt();
    function c(r, s) {
      if (!(0, a.pathHasPrefix)(r, s))
        return r;
      const u = r.slice(s.length);
      return u.startsWith("/") ? u : `/${u}`;
    }
  })(Ue)), Ue;
}
var Lt;
function jr() {
  return Lt || (Lt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "getNextPathnameInfo", {
      enumerable: !0,
      get: function() {
        return s;
      }
    });
    const a = Cr(), c = kr(), r = bt();
    function s(u, n) {
      const { basePath: e, i18n: f, trailingSlash: h } = n.nextConfig ?? {}, t = {
        pathname: u,
        trailingSlash: u !== "/" ? u.endsWith("/") : h
      };
      e && (0, r.pathHasPrefix)(t.pathname, e) && (t.pathname = (0, c.removePathPrefix)(t.pathname, e), t.basePath = e);
      let m = t.pathname;
      if (t.pathname.startsWith("/_next/data/") && t.pathname.endsWith(".json")) {
        const g = t.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/"), S = g[0];
        t.buildId = S, m = g[1] !== "index" ? `/${g.slice(1).join("/")}` : "/", n.parseData === !0 && (t.pathname = m);
      }
      if (f) {
        let g = n.i18nProvider ? n.i18nProvider.analyze(t.pathname) : (0, a.normalizeLocalePath)(t.pathname, f.locales);
        t.locale = g.detectedLocale, t.pathname = g.pathname ?? t.pathname, !g.detectedLocale && t.buildId && (g = n.i18nProvider ? n.i18nProvider.analyze(m) : (0, a.normalizeLocalePath)(m, f.locales), g.detectedLocale && (t.locale = g.detectedLocale));
      }
      return t;
    }
  })(Me)), Me;
}
var qt;
function yr() {
  return qt || (qt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "NextURL", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const a = Tr(), c = xr(), r = Dr(), s = jr(), u = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
    function n(h, t) {
      return new URL(String(h).replace(u, "localhost"), t && String(t).replace(u, "localhost"));
    }
    const e = /* @__PURE__ */ Symbol("NextURLInternal");
    class f {
      constructor(t, m, g) {
        let S, D;
        typeof m == "object" && "pathname" in m || typeof m == "string" ? (S = m, D = g || {}) : D = g || m || {}, this[e] = {
          url: n(t, S ?? D.base),
          options: D,
          basePath: ""
        }, this.analyze();
      }
      analyze() {
        var t, m, g, S, D;
        const A = (0, s.getNextPathnameInfo)(this[e].url.pathname, {
          nextConfig: this[e].options.nextConfig,
          parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
          i18nProvider: this[e].options.i18nProvider
        }), l = (0, r.getHostname)(this[e].url, this[e].options.headers);
        this[e].domainLocale = this[e].options.i18nProvider ? this[e].options.i18nProvider.detectDomainLocale(l) : (0, a.detectDomainLocale)((m = this[e].options.nextConfig) == null || (t = m.i18n) == null ? void 0 : t.domains, l);
        const b = ((g = this[e].domainLocale) == null ? void 0 : g.defaultLocale) || ((D = this[e].options.nextConfig) == null || (S = D.i18n) == null ? void 0 : S.defaultLocale);
        this[e].url.pathname = A.pathname, this[e].defaultLocale = b, this[e].basePath = A.basePath ?? "", this[e].buildId = A.buildId, this[e].locale = A.locale ?? b, this[e].trailingSlash = A.trailingSlash;
      }
      formatPathname() {
        return (0, c.formatNextPathnameInfo)({
          basePath: this[e].basePath,
          buildId: this[e].buildId,
          defaultLocale: this[e].options.forceLocale ? void 0 : this[e].defaultLocale,
          locale: this[e].locale,
          pathname: this[e].url.pathname,
          trailingSlash: this[e].trailingSlash
        });
      }
      formatSearch() {
        return this[e].url.search;
      }
      get buildId() {
        return this[e].buildId;
      }
      set buildId(t) {
        this[e].buildId = t;
      }
      get locale() {
        return this[e].locale ?? "";
      }
      set locale(t) {
        var m, g;
        if (!this[e].locale || !(!((g = this[e].options.nextConfig) == null || (m = g.i18n) == null) && m.locales.includes(t)))
          throw Object.defineProperty(new TypeError(`The NextURL configuration includes no locale "${t}"`), "__NEXT_ERROR_CODE", {
            value: "E597",
            enumerable: !1,
            configurable: !0
          });
        this[e].locale = t;
      }
      get defaultLocale() {
        return this[e].defaultLocale;
      }
      get domainLocale() {
        return this[e].domainLocale;
      }
      get searchParams() {
        return this[e].url.searchParams;
      }
      get host() {
        return this[e].url.host;
      }
      set host(t) {
        this[e].url.host = t;
      }
      get hostname() {
        return this[e].url.hostname;
      }
      set hostname(t) {
        this[e].url.hostname = t;
      }
      get port() {
        return this[e].url.port;
      }
      set port(t) {
        this[e].url.port = t;
      }
      get protocol() {
        return this[e].url.protocol;
      }
      set protocol(t) {
        this[e].url.protocol = t;
      }
      get href() {
        const t = this.formatPathname(), m = this.formatSearch();
        return `${this.protocol}//${this.host}${t}${m}${this.hash}`;
      }
      set href(t) {
        this[e].url = n(t), this.analyze();
      }
      get origin() {
        return this[e].url.origin;
      }
      get pathname() {
        return this[e].url.pathname;
      }
      set pathname(t) {
        this[e].url.pathname = t;
      }
      get hash() {
        return this[e].url.hash;
      }
      set hash(t) {
        this[e].url.hash = t;
      }
      get search() {
        return this[e].url.search;
      }
      set search(t) {
        this[e].url.search = t;
      }
      get password() {
        return this[e].url.password;
      }
      set password(t) {
        this[e].url.password = t;
      }
      get username() {
        return this[e].url.username;
      }
      set username(t) {
        this[e].url.username = t;
      }
      get basePath() {
        return this[e].basePath;
      }
      set basePath(t) {
        this[e].basePath = t.startsWith("/") ? t : `/${t}`;
      }
      toString() {
        return this.href;
      }
      toJSON() {
        return this.href;
      }
      [/* @__PURE__ */ Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          href: this.href,
          origin: this.origin,
          protocol: this.protocol,
          username: this.username,
          password: this.password,
          host: this.host,
          hostname: this.hostname,
          port: this.port,
          pathname: this.pathname,
          search: this.search,
          searchParams: this.searchParams,
          hash: this.hash
        };
      }
      clone() {
        return new f(String(this), this[e].options);
      }
    }
  })(Oe)), Oe;
}
var Xe = {}, Fe = {}, Mt;
function Lr() {
  return Mt || (Mt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(G, Q) {
      for (var de in Q) Object.defineProperty(G, de, {
        enumerable: !0,
        get: Q[de]
      });
    }
    a(i, {
      ACTION_SUFFIX: function() {
        return D;
      },
      APP_DIR_ALIAS: function() {
        return $;
      },
      CACHE_ONE_YEAR: function() {
        return k;
      },
      DOT_NEXT_ALIAS: function() {
        return Y;
      },
      ESLINT_DEFAULT_DIRS: function() {
        return P;
      },
      GSP_NO_RETURNED_VALUE: function() {
        return ge;
      },
      GSSP_COMPONENT_MEMBER_ERROR: function() {
        return Ee;
      },
      GSSP_NO_RETURNED_VALUE: function() {
        return le;
      },
      HTML_CONTENT_TYPE_HEADER: function() {
        return r;
      },
      INFINITE_CACHE: function() {
        return X;
      },
      INSTRUMENTATION_HOOK_FILENAME: function() {
        return J;
      },
      JSON_CONTENT_TYPE_HEADER: function() {
        return s;
      },
      MATCHED_PATH_HEADER: function() {
        return e;
      },
      MIDDLEWARE_FILENAME: function() {
        return M;
      },
      MIDDLEWARE_LOCATION_REGEXP: function() {
        return B;
      },
      NEXT_BODY_SUFFIX: function() {
        return b;
      },
      NEXT_CACHE_IMPLICIT_TAG_ID: function() {
        return T;
      },
      NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
        return E;
      },
      NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
        return y;
      },
      NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
        return R;
      },
      NEXT_CACHE_TAGS_HEADER: function() {
        return p;
      },
      NEXT_CACHE_TAG_MAX_ITEMS: function() {
        return w;
      },
      NEXT_CACHE_TAG_MAX_LENGTH: function() {
        return _;
      },
      NEXT_DATA_SUFFIX: function() {
        return A;
      },
      NEXT_INTERCEPTION_MARKER_PREFIX: function() {
        return n;
      },
      NEXT_META_SUFFIX: function() {
        return l;
      },
      NEXT_QUERY_PARAM_PREFIX: function() {
        return u;
      },
      NEXT_RESUME_HEADER: function() {
        return o;
      },
      NON_STANDARD_NODE_ENV: function() {
        return d;
      },
      PAGES_DIR_ALIAS: function() {
        return W;
      },
      PRERENDER_REVALIDATE_HEADER: function() {
        return f;
      },
      PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
        return h;
      },
      PROXY_FILENAME: function() {
        return U;
      },
      PROXY_LOCATION_REGEXP: function() {
        return K;
      },
      PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
        return pe;
      },
      ROOT_DIR_ALIAS: function() {
        return oe;
      },
      RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
        return se;
      },
      RSC_ACTION_ENCRYPTION_ALIAS: function() {
        return ee;
      },
      RSC_ACTION_PROXY_ALIAS: function() {
        return ie;
      },
      RSC_ACTION_VALIDATE_ALIAS: function() {
        return fe;
      },
      RSC_CACHE_WRAPPER_ALIAS: function() {
        return ae;
      },
      RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS: function() {
        return he;
      },
      RSC_MOD_REF_PROXY_ALIAS: function() {
        return Z;
      },
      RSC_PREFETCH_SUFFIX: function() {
        return t;
      },
      RSC_SEGMENTS_DIR_SUFFIX: function() {
        return m;
      },
      RSC_SEGMENT_SUFFIX: function() {
        return g;
      },
      RSC_SUFFIX: function() {
        return S;
      },
      SERVER_PROPS_EXPORT_ERROR: function() {
        return me;
      },
      SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
        return ce;
      },
      SERVER_PROPS_SSG_CONFLICT: function() {
        return ue;
      },
      SERVER_RUNTIME: function() {
        return N;
      },
      SSG_FALLBACK_EXPORT_ERROR: function() {
        return v;
      },
      SSG_GET_INITIAL_PROPS_CONFLICT: function() {
        return te;
      },
      STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
        return _e;
      },
      TEXT_PLAIN_CONTENT_TYPE_HEADER: function() {
        return c;
      },
      UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
        return re;
      },
      WEBPACK_LAYERS: function() {
        return Re;
      },
      WEBPACK_RESOURCE_QUERIES: function() {
        return ye;
      },
      WEB_SOCKET_MAX_RECONNECTIONS: function() {
        return H;
      }
    });
    const c = "text/plain", r = "text/html; charset=utf-8", s = "application/json; charset=utf-8", u = "nxtP", n = "nxtI", e = "x-matched-path", f = "x-prerender-revalidate", h = "x-prerender-revalidate-if-generated", t = ".prefetch.rsc", m = ".segments", g = ".segment.rsc", S = ".rsc", D = ".action", A = ".json", l = ".meta", b = ".body", p = "x-next-cache-tags", E = "x-next-revalidated-tags", y = "x-next-revalidate-tag-token", o = "next-resume", w = 128, _ = 256, R = 1024, T = "_N_T_", k = 31536e3, X = 4294967294, M = "middleware", B = `(?:src/)?${M}`, U = "proxy", K = `(?:src/)?${U}`, J = "instrumentation", W = "private-next-pages", Y = "private-dot-next", oe = "private-next-root-dir", $ = "private-next-app-dir", Z = "private-next-rsc-mod-ref-proxy", fe = "private-next-rsc-action-validate", ie = "private-next-rsc-server-reference", ae = "private-next-rsc-cache-wrapper", he = "private-next-rsc-track-dynamic-import", ee = "private-next-rsc-action-encryption", se = "private-next-rsc-action-client-wrapper", pe = "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict", te = "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps", ce = "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.", ue = "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps", _e = "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props", me = "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export", ge = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?", le = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?", re = "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.", Ee = "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member", d = 'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env', v = "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export", P = [
      "app",
      "pages",
      "components",
      "lib",
      "src"
    ], N = {
      edge: "edge",
      experimentalEdge: "experimental-edge",
      nodejs: "nodejs"
    }, H = 12, x = {
      /**
      * The layer for the shared code between the client and server bundles.
      */
      shared: "shared",
      /**
      * The layer for server-only runtime and picking up `react-server` export conditions.
      * Including app router RSC pages and app router custom routes and metadata routes.
      */
      reactServerComponents: "rsc",
      /**
      * Server Side Rendering layer for app (ssr).
      */
      serverSideRendering: "ssr",
      /**
      * The browser client bundle layer for actions.
      */
      actionBrowser: "action-browser",
      /**
      * The Node.js bundle layer for the API routes.
      */
      apiNode: "api-node",
      /**
      * The Edge Lite bundle layer for the API routes.
      */
      apiEdge: "api-edge",
      /**
      * The layer for the middleware code.
      */
      middleware: "middleware",
      /**
      * The layer for the instrumentation hooks.
      */
      instrument: "instrument",
      /**
      * The layer for assets on the edge.
      */
      edgeAsset: "edge-asset",
      /**
      * The browser client bundle layer for App directory.
      */
      appPagesBrowser: "app-pages-browser",
      /**
      * The browser client bundle layer for Pages directory.
      */
      pagesDirBrowser: "pages-dir-browser",
      /**
      * The Edge Lite bundle layer for Pages directory.
      */
      pagesDirEdge: "pages-dir-edge",
      /**
      * The Node.js bundle layer for Pages directory.
      */
      pagesDirNode: "pages-dir-node"
    }, Re = {
      ...x,
      GROUP: {
        builtinReact: [
          x.reactServerComponents,
          x.actionBrowser
        ],
        serverOnly: [
          x.reactServerComponents,
          x.actionBrowser,
          x.instrument,
          x.middleware
        ],
        neutralTarget: [
          // pages api
          x.apiNode,
          x.apiEdge
        ],
        clientOnly: [
          x.serverSideRendering,
          x.appPagesBrowser
        ],
        bundled: [
          x.reactServerComponents,
          x.actionBrowser,
          x.serverSideRendering,
          x.appPagesBrowser,
          x.shared,
          x.instrument,
          x.middleware
        ],
        appPages: [
          // app router pages and layouts
          x.reactServerComponents,
          x.serverSideRendering,
          x.appPagesBrowser,
          x.actionBrowser
        ]
      }
    }, ye = {
      edgeSSREntry: "__next_edge_ssr_entry__",
      metadata: "__next_metadata__",
      metadataRoute: "__next_metadata_route__",
      metadataImageMeta: "__next_metadata_image_meta__"
    };
  })(Fe)), Fe;
}
var Ht;
function vr() {
  return Ht || (Ht = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(f, h) {
      for (var t in h) Object.defineProperty(f, t, {
        enumerable: !0,
        get: h[t]
      });
    }
    a(i, {
      fromNodeOutgoingHttpHeaders: function() {
        return r;
      },
      normalizeNextQueryParam: function() {
        return e;
      },
      splitCookiesString: function() {
        return s;
      },
      toNodeOutgoingHttpHeaders: function() {
        return u;
      },
      validateURL: function() {
        return n;
      }
    });
    const c = Lr();
    function r(f) {
      const h = new Headers();
      for (let [t, m] of Object.entries(f)) {
        const g = Array.isArray(m) ? m : [
          m
        ];
        for (let S of g)
          typeof S > "u" || (typeof S == "number" && (S = S.toString()), h.append(t, S));
      }
      return h;
    }
    function s(f) {
      var h = [], t = 0, m, g, S, D, A;
      function l() {
        for (; t < f.length && /\s/.test(f.charAt(t)); )
          t += 1;
        return t < f.length;
      }
      function b() {
        return g = f.charAt(t), g !== "=" && g !== ";" && g !== ",";
      }
      for (; t < f.length; ) {
        for (m = t, A = !1; l(); )
          if (g = f.charAt(t), g === ",") {
            for (S = t, t += 1, l(), D = t; t < f.length && b(); )
              t += 1;
            t < f.length && f.charAt(t) === "=" ? (A = !0, t = D, h.push(f.substring(m, S)), m = t) : t = S + 1;
          } else
            t += 1;
        (!A || t >= f.length) && h.push(f.substring(m, f.length));
      }
      return h;
    }
    function u(f) {
      const h = {}, t = [];
      if (f)
        for (const [m, g] of f.entries())
          m.toLowerCase() === "set-cookie" ? (t.push(...s(g)), h[m] = t.length === 1 ? t[0] : t) : h[m] = g;
      return h;
    }
    function n(f) {
      try {
        return String(new URL(String(f)));
      } catch (h) {
        throw Object.defineProperty(new Error(`URL is malformed "${String(f)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
          cause: h
        }), "__NEXT_ERROR_CODE", {
          value: "E61",
          enumerable: !1,
          configurable: !0
        });
      }
    }
    function e(f) {
      const h = [
        c.NEXT_QUERY_PARAM_PREFIX,
        c.NEXT_INTERCEPTION_MARKER_PREFIX
      ];
      for (const t of h)
        if (f !== t && f.startsWith(t))
          return f.substring(t.length);
      return null;
    }
  })(Xe)), Xe;
}
var Be = {}, Ut;
function qr() {
  return Ut || (Ut = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(u, n) {
      for (var e in n) Object.defineProperty(u, e, {
        enumerable: !0,
        get: n[e]
      });
    }
    a(i, {
      PageSignatureError: function() {
        return c;
      },
      RemovedPageError: function() {
        return r;
      },
      RemovedUAError: function() {
        return s;
      }
    });
    class c extends Error {
      constructor({ page: n }) {
        super(`The middleware "${n}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
      }
    }
    class r extends Error {
      constructor() {
        super("The request.page has been deprecated in favour of `URLPattern`.\n  Read more: https://nextjs.org/docs/messages/middleware-request-page\n  ");
      }
    }
    class s extends Error {
      constructor() {
        super("The request.ua has been removed in favour of `userAgent` function.\n  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent\n  ");
      }
    }
  })(Be)), Be;
}
var Ge = {}, We, Xt;
function Mr() {
  if (Xt) return We;
  Xt = 1;
  var i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, c = Object.getOwnPropertyNames, r = Object.prototype.hasOwnProperty, s = (o, w) => {
    for (var _ in w)
      i(o, _, { get: w[_], enumerable: !0 });
  }, u = (o, w, _, R) => {
    if (w && typeof w == "object" || typeof w == "function")
      for (let T of c(w))
        !r.call(o, T) && T !== _ && i(o, T, { get: () => w[T], enumerable: !(R = a(w, T)) || R.enumerable });
    return o;
  }, n = (o) => u(i({}, "__esModule", { value: !0 }), o), e = {};
  s(e, {
    RequestCookies: () => b,
    ResponseCookies: () => p,
    parseCookie: () => h,
    parseSetCookie: () => t,
    stringifyCookie: () => f
  }), We = n(e);
  function f(o) {
    var w;
    const _ = [
      "path" in o && o.path && `Path=${o.path}`,
      "expires" in o && (o.expires || o.expires === 0) && `Expires=${(typeof o.expires == "number" ? new Date(o.expires) : o.expires).toUTCString()}`,
      "maxAge" in o && typeof o.maxAge == "number" && `Max-Age=${o.maxAge}`,
      "domain" in o && o.domain && `Domain=${o.domain}`,
      "secure" in o && o.secure && "Secure",
      "httpOnly" in o && o.httpOnly && "HttpOnly",
      "sameSite" in o && o.sameSite && `SameSite=${o.sameSite}`,
      "partitioned" in o && o.partitioned && "Partitioned",
      "priority" in o && o.priority && `Priority=${o.priority}`
    ].filter(Boolean), R = `${o.name}=${encodeURIComponent((w = o.value) != null ? w : "")}`;
    return _.length === 0 ? R : `${R}; ${_.join("; ")}`;
  }
  function h(o) {
    const w = /* @__PURE__ */ new Map();
    for (const _ of o.split(/; */)) {
      if (!_)
        continue;
      const R = _.indexOf("=");
      if (R === -1) {
        w.set(_, "true");
        continue;
      }
      const [T, k] = [_.slice(0, R), _.slice(R + 1)];
      try {
        w.set(T, decodeURIComponent(k ?? "true"));
      } catch {
      }
    }
    return w;
  }
  function t(o) {
    if (!o)
      return;
    const [[w, _], ...R] = h(o), {
      domain: T,
      expires: k,
      httponly: X,
      maxage: M,
      path: B,
      samesite: U,
      secure: K,
      partitioned: J,
      priority: W
    } = Object.fromEntries(
      R.map(([oe, $]) => [
        oe.toLowerCase().replace(/-/g, ""),
        $
      ])
    ), Y = {
      name: w,
      value: decodeURIComponent(_),
      domain: T,
      ...k && { expires: new Date(k) },
      ...X && { httpOnly: !0 },
      ...typeof M == "string" && { maxAge: Number(M) },
      path: B,
      ...U && { sameSite: S(U) },
      ...K && { secure: !0 },
      ...W && { priority: A(W) },
      ...J && { partitioned: !0 }
    };
    return m(Y);
  }
  function m(o) {
    const w = {};
    for (const _ in o)
      o[_] && (w[_] = o[_]);
    return w;
  }
  var g = ["strict", "lax", "none"];
  function S(o) {
    return o = o.toLowerCase(), g.includes(o) ? o : void 0;
  }
  var D = ["low", "medium", "high"];
  function A(o) {
    return o = o.toLowerCase(), D.includes(o) ? o : void 0;
  }
  function l(o) {
    if (!o)
      return [];
    var w = [], _ = 0, R, T, k, X, M;
    function B() {
      for (; _ < o.length && /\s/.test(o.charAt(_)); )
        _ += 1;
      return _ < o.length;
    }
    function U() {
      return T = o.charAt(_), T !== "=" && T !== ";" && T !== ",";
    }
    for (; _ < o.length; ) {
      for (R = _, M = !1; B(); )
        if (T = o.charAt(_), T === ",") {
          for (k = _, _ += 1, B(), X = _; _ < o.length && U(); )
            _ += 1;
          _ < o.length && o.charAt(_) === "=" ? (M = !0, _ = X, w.push(o.substring(R, k)), R = _) : _ = k + 1;
        } else
          _ += 1;
      (!M || _ >= o.length) && w.push(o.substring(R, o.length));
    }
    return w;
  }
  var b = class {
    constructor(o) {
      this._parsed = /* @__PURE__ */ new Map(), this._headers = o;
      const w = o.get("cookie");
      if (w) {
        const _ = h(w);
        for (const [R, T] of _)
          this._parsed.set(R, { name: R, value: T });
      }
    }
    [Symbol.iterator]() {
      return this._parsed[Symbol.iterator]();
    }
    /**
     * The amount of cookies received from the client
     */
    get size() {
      return this._parsed.size;
    }
    get(...o) {
      const w = typeof o[0] == "string" ? o[0] : o[0].name;
      return this._parsed.get(w);
    }
    getAll(...o) {
      var w;
      const _ = Array.from(this._parsed);
      if (!o.length)
        return _.map(([T, k]) => k);
      const R = typeof o[0] == "string" ? o[0] : (w = o[0]) == null ? void 0 : w.name;
      return _.filter(([T]) => T === R).map(([T, k]) => k);
    }
    has(o) {
      return this._parsed.has(o);
    }
    set(...o) {
      const [w, _] = o.length === 1 ? [o[0].name, o[0].value] : o, R = this._parsed;
      return R.set(w, { name: w, value: _ }), this._headers.set(
        "cookie",
        Array.from(R).map(([T, k]) => f(k)).join("; ")
      ), this;
    }
    /**
     * Delete the cookies matching the passed name or names in the request.
     */
    delete(o) {
      const w = this._parsed, _ = Array.isArray(o) ? o.map((R) => w.delete(R)) : w.delete(o);
      return this._headers.set(
        "cookie",
        Array.from(w).map(([R, T]) => f(T)).join("; ")
      ), _;
    }
    /**
     * Delete all the cookies in the cookies in the request.
     */
    clear() {
      return this.delete(Array.from(this._parsed.keys())), this;
    }
    /**
     * Format the cookies in the request as a string for logging
     */
    [/* @__PURE__ */ Symbol.for("edge-runtime.inspect.custom")]() {
      return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
      return [...this._parsed.values()].map((o) => `${o.name}=${encodeURIComponent(o.value)}`).join("; ");
    }
  }, p = class {
    constructor(o) {
      this._parsed = /* @__PURE__ */ new Map();
      var w, _, R;
      this._headers = o;
      const T = (R = (_ = (w = o.getSetCookie) == null ? void 0 : w.call(o)) != null ? _ : o.get("set-cookie")) != null ? R : [], k = Array.isArray(T) ? T : l(T);
      for (const X of k) {
        const M = t(X);
        M && this._parsed.set(M.name, M);
      }
    }
    /**
     * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
     */
    get(...o) {
      const w = typeof o[0] == "string" ? o[0] : o[0].name;
      return this._parsed.get(w);
    }
    /**
     * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
     */
    getAll(...o) {
      var w;
      const _ = Array.from(this._parsed.values());
      if (!o.length)
        return _;
      const R = typeof o[0] == "string" ? o[0] : (w = o[0]) == null ? void 0 : w.name;
      return _.filter((T) => T.name === R);
    }
    has(o) {
      return this._parsed.has(o);
    }
    /**
     * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
     */
    set(...o) {
      const [w, _, R] = o.length === 1 ? [o[0].name, o[0].value, o[0]] : o, T = this._parsed;
      return T.set(w, y({ name: w, value: _, ...R })), E(T, this._headers), this;
    }
    /**
     * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
     */
    delete(...o) {
      const [w, _] = typeof o[0] == "string" ? [o[0]] : [o[0].name, o[0]];
      return this.set({ ..._, name: w, value: "", expires: /* @__PURE__ */ new Date(0) });
    }
    [/* @__PURE__ */ Symbol.for("edge-runtime.inspect.custom")]() {
      return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
      return [...this._parsed.values()].map(f).join("; ");
    }
  };
  function E(o, w) {
    w.delete("set-cookie");
    for (const [, _] of o) {
      const R = f(_);
      w.append("set-cookie", R);
    }
  }
  function y(o = { name: "", value: "" }) {
    return typeof o.expires == "number" && (o.expires = new Date(o.expires)), o.maxAge && (o.expires = new Date(Date.now() + o.maxAge * 1e3)), (o.path === null || o.path === void 0) && (o.path = "/"), o;
  }
  return We;
}
var Ft;
function gt() {
  return Ft || (Ft = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(r, s) {
      for (var u in s) Object.defineProperty(r, u, {
        enumerable: !0,
        get: s[u]
      });
    }
    a(i, {
      RequestCookies: function() {
        return c.RequestCookies;
      },
      ResponseCookies: function() {
        return c.ResponseCookies;
      },
      stringifyCookie: function() {
        return c.stringifyCookie;
      }
    });
    const c = Mr();
  })(Ge)), Ge;
}
var Bt;
function Hr() {
  return Bt || (Bt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(f, h) {
      for (var t in h) Object.defineProperty(f, t, {
        enumerable: !0,
        get: h[t]
      });
    }
    a(i, {
      INTERNALS: function() {
        return n;
      },
      NextRequest: function() {
        return e;
      }
    });
    const c = yr(), r = vr(), s = qr(), u = gt(), n = /* @__PURE__ */ Symbol("internal request");
    class e extends Request {
      constructor(h, t = {}) {
        const m = typeof h != "string" && "url" in h ? h.url : String(h);
        (0, r.validateURL)(m), process.env.NEXT_RUNTIME !== "edge" && t.body && t.duplex !== "half" && (t.duplex = "half"), h instanceof Request ? super(h, t) : super(m, t);
        const g = new c.NextURL(m, {
          headers: (0, r.toNodeOutgoingHttpHeaders)(this.headers),
          nextConfig: t.nextConfig
        });
        this[n] = {
          cookies: new u.RequestCookies(this.headers),
          nextUrl: g,
          url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? m : g.toString()
        };
      }
      [/* @__PURE__ */ Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          cookies: this.cookies,
          nextUrl: this.nextUrl,
          url: this.url,
          // rest of props come from Request
          bodyUsed: this.bodyUsed,
          cache: this.cache,
          credentials: this.credentials,
          destination: this.destination,
          headers: Object.fromEntries(this.headers),
          integrity: this.integrity,
          keepalive: this.keepalive,
          method: this.method,
          mode: this.mode,
          redirect: this.redirect,
          referrer: this.referrer,
          referrerPolicy: this.referrerPolicy,
          signal: this.signal
        };
      }
      get cookies() {
        return this[n].cookies;
      }
      get nextUrl() {
        return this[n].nextUrl;
      }
      /**
      * @deprecated
      * `page` has been deprecated in favour of `URLPattern`.
      * Read more: https://nextjs.org/docs/messages/middleware-request-page
      */
      get page() {
        throw new s.RemovedPageError();
      }
      /**
      * @deprecated
      * `ua` has been removed in favour of \`userAgent\` function.
      * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
      */
      get ua() {
        throw new s.RemovedUAError();
      }
      get url() {
        return this[n].url;
      }
    }
  })(Te)), Te;
}
var Ye = {}, $e = {}, Gt;
function Ur() {
  return Gt || (Gt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "ReflectAdapter", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    class a {
      static get(r, s, u) {
        const n = Reflect.get(r, s, u);
        return typeof n == "function" ? n.bind(r) : n;
      }
      static set(r, s, u, n) {
        return Reflect.set(r, s, u, n);
      }
      static has(r, s) {
        return Reflect.has(r, s);
      }
      static deleteProperty(r, s) {
        return Reflect.deleteProperty(r, s);
      }
    }
  })($e)), $e;
}
var Wt;
function Xr() {
  return Wt || (Wt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "NextResponse", {
      enumerable: !0,
      get: function() {
        return h;
      }
    });
    const a = gt(), c = yr(), r = vr(), s = Ur(), u = gt(), n = /* @__PURE__ */ Symbol("internal response"), e = /* @__PURE__ */ new Set([
      301,
      302,
      303,
      307,
      308
    ]);
    function f(t, m) {
      var g;
      if (!(t == null || (g = t.request) == null) && g.headers) {
        if (!(t.request.headers instanceof Headers))
          throw Object.defineProperty(new Error("request.headers must be an instance of Headers"), "__NEXT_ERROR_CODE", {
            value: "E119",
            enumerable: !1,
            configurable: !0
          });
        const S = [];
        for (const [D, A] of t.request.headers)
          m.set("x-middleware-request-" + D, A), S.push(D);
        m.set("x-middleware-override-headers", S.join(","));
      }
    }
    class h extends Response {
      constructor(m, g = {}) {
        super(m, g);
        const S = this.headers, D = new u.ResponseCookies(S), A = new Proxy(D, {
          get(l, b, p) {
            switch (b) {
              case "delete":
              case "set":
                return (...E) => {
                  const y = Reflect.apply(l[b], l, E), o = new Headers(S);
                  return y instanceof u.ResponseCookies && S.set("x-middleware-set-cookie", y.getAll().map((w) => (0, a.stringifyCookie)(w)).join(",")), f(g, o), y;
                };
              default:
                return s.ReflectAdapter.get(l, b, p);
            }
          }
        });
        this[n] = {
          cookies: A,
          url: g.url ? new c.NextURL(g.url, {
            headers: (0, r.toNodeOutgoingHttpHeaders)(S),
            nextConfig: g.nextConfig
          }) : void 0
        };
      }
      [/* @__PURE__ */ Symbol.for("edge-runtime.inspect.custom")]() {
        return {
          cookies: this.cookies,
          url: this.url,
          // rest of props come from Response
          body: this.body,
          bodyUsed: this.bodyUsed,
          headers: Object.fromEntries(this.headers),
          ok: this.ok,
          redirected: this.redirected,
          status: this.status,
          statusText: this.statusText,
          type: this.type
        };
      }
      get cookies() {
        return this[n].cookies;
      }
      static json(m, g) {
        const S = Response.json(m, g);
        return new h(S.body, S);
      }
      static redirect(m, g) {
        const S = typeof g == "number" ? g : g?.status ?? 307;
        if (!e.has(S))
          throw Object.defineProperty(new RangeError('Failed to execute "redirect" on "response": Invalid status code'), "__NEXT_ERROR_CODE", {
            value: "E529",
            enumerable: !1,
            configurable: !0
          });
        const D = typeof g == "object" ? g : {}, A = new Headers(D?.headers);
        return A.set("Location", (0, r.validateURL)(m)), new h(null, {
          ...D,
          headers: A,
          status: S
        });
      }
      static rewrite(m, g) {
        const S = new Headers(g?.headers);
        return S.set("x-middleware-rewrite", (0, r.validateURL)(m)), f(g, S), new h(null, {
          ...g,
          headers: S
        });
      }
      static next(m) {
        const g = new Headers(m?.headers);
        return g.set("x-middleware-next", "1"), f(m, g), new h(null, {
          ...m,
          headers: g
        });
      }
    }
  })(Ye)), Ye;
}
var ze = {}, Yt;
function Fr() {
  return Yt || (Yt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "ImageResponse", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    function a() {
      throw Object.defineProperty(new Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead'), "__NEXT_ERROR_CODE", {
        value: "E183",
        enumerable: !1,
        configurable: !0
      });
    }
  })(ze)), ze;
}
var Ve = {}, Ke = { exports: {} }, $t;
function Br() {
  return $t || ($t = 1, (() => {
    var i = { 226: function(s, u) {
      (function(n, e) {
        var f = "1.0.35", h = "", t = "?", m = "function", g = "undefined", S = "object", D = "string", A = "major", l = "model", b = "name", p = "type", E = "vendor", y = "version", o = "architecture", w = "console", _ = "mobile", R = "tablet", T = "smarttv", k = "wearable", X = "embedded", M = 350, B = "Amazon", U = "Apple", K = "ASUS", J = "BlackBerry", W = "Browser", Y = "Chrome", oe = "Edge", $ = "Firefox", Z = "Google", fe = "Huawei", ie = "LG", ae = "Microsoft", he = "Motorola", ee = "Opera", se = "Samsung", pe = "Sharp", te = "Sony", ce = "Xiaomi", ue = "Zebra", _e = "Facebook", me = "Chromium OS", ge = "Mac OS", le = function(C, L) {
          var I = {};
          for (var q in C)
            L[q] && L[q].length % 2 === 0 ? I[q] = L[q].concat(C[q]) : I[q] = C[q];
          return I;
        }, re = function(C) {
          for (var L = {}, I = 0; I < C.length; I++)
            L[C[I].toUpperCase()] = C[I];
          return L;
        }, Ee = function(C, L) {
          return typeof C === D ? d(L).indexOf(d(C)) !== -1 : !1;
        }, d = function(C) {
          return C.toLowerCase();
        }, v = function(C) {
          return typeof C === D ? C.replace(/[^\d\.]/g, h).split(".")[0] : e;
        }, P = function(C, L) {
          if (typeof C === D)
            return C = C.replace(/^\s\s*/, h), typeof L === g ? C : C.substring(0, M);
        }, N = function(C, L) {
          for (var I = 0, q, ne, z, j, O, V; I < L.length && !O; ) {
            var Se = L[I], Pt = L[I + 1];
            for (q = ne = 0; q < Se.length && !O && Se[q]; )
              if (O = Se[q++].exec(C), O)
                for (z = 0; z < Pt.length; z++)
                  V = O[++ne], j = Pt[z], typeof j === S && j.length > 0 ? j.length === 2 ? typeof j[1] == m ? this[j[0]] = j[1].call(this, V) : this[j[0]] = j[1] : j.length === 3 ? typeof j[1] === m && !(j[1].exec && j[1].test) ? this[j[0]] = V ? j[1].call(this, V, j[2]) : e : this[j[0]] = V ? V.replace(j[1], j[2]) : e : j.length === 4 && (this[j[0]] = V ? j[3].call(this, V.replace(j[1], j[2])) : e) : this[j] = V || e;
            I += 2;
          }
        }, H = function(C, L) {
          for (var I in L)
            if (typeof L[I] === S && L[I].length > 0) {
              for (var q = 0; q < L[I].length; q++)
                if (Ee(L[I][q], C))
                  return I === t ? e : I;
            } else if (Ee(L[I], C))
              return I === t ? e : I;
          return C;
        }, x = { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, Re = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, ye = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [y, [b, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [y, [b, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [b, y], [/opios[\/ ]+([\w\.]+)/i], [y, [b, ee + " Mini"]], [/\bopr\/([\w\.]+)/i], [y, [b, ee]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i], [b, y], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [y, [b, "UC" + W]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [y, [b, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [y, [b, "WeChat"]], [/konqueror\/([\w\.]+)/i], [y, [b, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [y, [b, "IE"]], [/ya(?:search)?browser\/([\w\.]+)/i], [y, [b, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[b, /(.+)/, "$1 Secure " + W], y], [/\bfocus\/([\w\.]+)/i], [y, [b, $ + " Focus"]], [/\bopt\/([\w\.]+)/i], [y, [b, ee + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [y, [b, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [y, [b, "Dolphin"]], [/coast\/([\w\.]+)/i], [y, [b, ee + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [y, [b, "MIUI " + W]], [/fxios\/([-\w\.]+)/i], [y, [b, $]], [/\bqihu|(qi?ho?o?|360)browser/i], [[b, "360 " + W]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[b, /(.+)/, "$1 " + W], y], [/(comodo_dragon)\/([\w\.]+)/i], [[b, /_/g, " "], y], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [b, y], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [b], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[b, _e], y], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [b, y], [/\bgsa\/([\w\.]+) .*safari\//i], [y, [b, "GSA"]], [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], [y, [b, "TikTok"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [y, [b, Y + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[b, Y + " WebView"], y], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [y, [b, "Android " + W]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [b, y], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [y, [b, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [y, b], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [b, [y, H, x]], [/(webkit|khtml)\/([\w\.]+)/i], [b, y], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[b, "Netscape"], y], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [y, [b, $ + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [b, y], [/(cobalt)\/([\w\.]+)/i], [b, [y, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[o, "amd64"]], [/(ia32(?=;))/i], [[o, d]], [/((?:i[346]|x)86)[;\)]/i], [[o, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[o, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[o, "armhf"]], [/windows (ce|mobile); ppc;/i], [[o, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[o, /ower/, h, d]], [/(sun4\w)[;\)]/i], [[o, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[o, d]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [l, [E, se], [p, R]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [l, [E, se], [p, _]], [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], [l, [E, U], [p, _]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [l, [E, U], [p, R]], [/(macintosh);/i], [l, [E, U]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [l, [E, pe], [p, _]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [l, [E, fe], [p, R]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [l, [E, fe], [p, _]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[l, /_/g, " "], [E, ce], [p, _]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[l, /_/g, " "], [E, ce], [p, R]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [l, [E, "OPPO"], [p, _]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [l, [E, "Vivo"], [p, _]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [l, [E, "Realme"], [p, _]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [l, [E, he], [p, _]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [l, [E, he], [p, R]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [l, [E, ie], [p, R]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [l, [E, ie], [p, _]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [l, [E, "Lenovo"], [p, R]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[l, /_/g, " "], [E, "Nokia"], [p, _]], [/(pixel c)\b/i], [l, [E, Z], [p, R]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [l, [E, Z], [p, _]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [l, [E, te], [p, _]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[l, "Xperia Tablet"], [E, te], [p, R]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [l, [E, "OnePlus"], [p, _]], [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [l, [E, B], [p, R]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[l, /(.+)/g, "Fire Phone $1"], [E, B], [p, _]], [/(playbook);[-\w\),; ]+(rim)/i], [l, E, [p, R]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [l, [E, J], [p, _]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [l, [E, K], [p, R]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [l, [E, K], [p, _]], [/(nexus 9)/i], [l, [E, "HTC"], [p, R]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [E, [l, /_/g, " "], [p, _]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [l, [E, "Acer"], [p, R]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [l, [E, "Meizu"], [p, _]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [E, l, [p, _]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [E, l, [p, R]], [/(surface duo)/i], [l, [E, ae], [p, R]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [l, [E, "Fairphone"], [p, _]], [/(u304aa)/i], [l, [E, "AT&T"], [p, _]], [/\bsie-(\w*)/i], [l, [E, "Siemens"], [p, _]], [/\b(rct\w+) b/i], [l, [E, "RCA"], [p, R]], [/\b(venue[\d ]{2,7}) b/i], [l, [E, "Dell"], [p, R]], [/\b(q(?:mv|ta)\w+) b/i], [l, [E, "Verizon"], [p, R]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [l, [E, "Barnes & Noble"], [p, R]], [/\b(tm\d{3}\w+) b/i], [l, [E, "NuVision"], [p, R]], [/\b(k88) b/i], [l, [E, "ZTE"], [p, R]], [/\b(nx\d{3}j) b/i], [l, [E, "ZTE"], [p, _]], [/\b(gen\d{3}) b.+49h/i], [l, [E, "Swiss"], [p, _]], [/\b(zur\d{3}) b/i], [l, [E, "Swiss"], [p, R]], [/\b((zeki)?tb.*\b) b/i], [l, [E, "Zeki"], [p, R]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[E, "Dragon Touch"], l, [p, R]], [/\b(ns-?\w{0,9}) b/i], [l, [E, "Insignia"], [p, R]], [/\b((nxa|next)-?\w{0,9}) b/i], [l, [E, "NextBook"], [p, R]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[E, "Voice"], l, [p, _]], [/\b(lvtel\-)?(v1[12]) b/i], [[E, "LvTel"], l, [p, _]], [/\b(ph-1) /i], [l, [E, "Essential"], [p, _]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [l, [E, "Envizen"], [p, R]], [/\b(trio[-\w\. ]+) b/i], [l, [E, "MachSpeed"], [p, R]], [/\btu_(1491) b/i], [l, [E, "Rotor"], [p, R]], [/(shield[\w ]+) b/i], [l, [E, "Nvidia"], [p, R]], [/(sprint) (\w+)/i], [E, l, [p, _]], [/(kin\.[onetw]{3})/i], [[l, /\./g, " "], [E, ae], [p, _]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [l, [E, ue], [p, R]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [l, [E, ue], [p, _]], [/smart-tv.+(samsung)/i], [E, [p, T]], [/hbbtv.+maple;(\d+)/i], [[l, /^/, "SmartTV"], [E, se], [p, T]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[E, ie], [p, T]], [/(apple) ?tv/i], [E, [l, U + " TV"], [p, T]], [/crkey/i], [[l, Y + "cast"], [E, Z], [p, T]], [/droid.+aft(\w)( bui|\))/i], [l, [E, B], [p, T]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [l, [E, pe], [p, T]], [/(bravia[\w ]+)( bui|\))/i], [l, [E, te], [p, T]], [/(mitv-\w{5}) bui/i], [l, [E, ce], [p, T]], [/Hbbtv.*(technisat) (.*);/i], [E, l, [p, T]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[E, P], [l, P], [p, T]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[p, T]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [E, l, [p, w]], [/droid.+; (shield) bui/i], [l, [E, "Nvidia"], [p, w]], [/(playstation [345portablevi]+)/i], [l, [E, te], [p, w]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [l, [E, ae], [p, w]], [/((pebble))app/i], [E, l, [p, k]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [l, [E, U], [p, k]], [/droid.+; (glass) \d/i], [l, [E, Z], [p, k]], [/droid.+; (wt63?0{2,3})\)/i], [l, [E, ue], [p, k]], [/(quest( 2| pro)?)/i], [l, [E, _e], [p, k]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [E, [p, X]], [/(aeobc)\b/i], [l, [E, B], [p, X]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [l, [p, _]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [l, [p, R]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[p, R]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[p, _]], [/(android[-\w\. ]{0,9});.+buil/i], [l, [E, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [y, [b, oe + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [y, [b, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i], [b, y], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [y, b]], os: [[/microsoft (windows) (vista|xp)/i], [b, y], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [b, [y, H, Re]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[b, "Windows"], [y, H, Re]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i], [[y, /_/g, "."], [b, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[b, ge], [y, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [y, b], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [b, y], [/\(bb(10);/i], [y, [b, J]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [y, [b, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [y, [b, $ + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [y, [b, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [y, [b, "watchOS"]], [/crkey\/([\d\.]+)/i], [y, [b, Y + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[b, me], y], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [b, y], [/(sunos) ?([\w\.\d]*)/i], [[b, "Solaris"], y], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i], [b, y]] }, G = function(C, L) {
          if (typeof C === S && (L = C, C = e), !(this instanceof G))
            return new G(C, L).getResult();
          var I = typeof n !== g && n.navigator ? n.navigator : e, q = C || (I && I.userAgent ? I.userAgent : h), ne = I && I.userAgentData ? I.userAgentData : e, z = L ? le(ye, L) : ye, j = I && I.userAgent == q;
          return this.getBrowser = function() {
            var O = {};
            return O[b] = e, O[y] = e, N.call(O, q, z.browser), O[A] = v(O[y]), j && I && I.brave && typeof I.brave.isBrave == m && (O[b] = "Brave"), O;
          }, this.getCPU = function() {
            var O = {};
            return O[o] = e, N.call(O, q, z.cpu), O;
          }, this.getDevice = function() {
            var O = {};
            return O[E] = e, O[l] = e, O[p] = e, N.call(O, q, z.device), j && !O[p] && ne && ne.mobile && (O[p] = _), j && O[l] == "Macintosh" && I && typeof I.standalone !== g && I.maxTouchPoints && I.maxTouchPoints > 2 && (O[l] = "iPad", O[p] = R), O;
          }, this.getEngine = function() {
            var O = {};
            return O[b] = e, O[y] = e, N.call(O, q, z.engine), O;
          }, this.getOS = function() {
            var O = {};
            return O[b] = e, O[y] = e, N.call(O, q, z.os), j && !O[b] && ne && ne.platform != "Unknown" && (O[b] = ne.platform.replace(/chrome os/i, me).replace(/macos/i, ge)), O;
          }, this.getResult = function() {
            return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
          }, this.getUA = function() {
            return q;
          }, this.setUA = function(O) {
            return q = typeof O === D && O.length > M ? P(O, M) : O, this;
          }, this.setUA(q), this;
        };
        G.VERSION = f, G.BROWSER = re([b, y, A]), G.CPU = re([o]), G.DEVICE = re([l, E, p, w, _, T, R, k, X]), G.ENGINE = G.OS = re([b, y]), typeof u !== g ? (s.exports && (u = s.exports = G), u.UAParser = G) : typeof n !== g && (n.UAParser = G);
        var Q = typeof n !== g && (n.jQuery || n.Zepto);
        if (Q && !Q.ua) {
          var de = new G();
          Q.ua = de.getResult(), Q.ua.get = function() {
            return de.getUA();
          }, Q.ua.set = function(C) {
            de.setUA(C);
            var L = de.getResult();
            for (var I in L)
              Q.ua[I] = L[I];
          };
        }
      })(typeof window == "object" ? window : this);
    } }, a = {};
    function c(s) {
      var u = a[s];
      if (u !== void 0)
        return u.exports;
      var n = a[s] = { exports: {} }, e = !0;
      try {
        i[s].call(n.exports, n, n.exports, c), e = !1;
      } finally {
        e && delete a[s];
      }
      return n.exports;
    }
    typeof c < "u" && (c.ab = __dirname + "/");
    var r = c(226);
    Ke.exports = r;
  })()), Ke.exports;
}
var zt;
function Vt() {
  return zt || (zt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(e, f) {
      for (var h in f) Object.defineProperty(e, h, {
        enumerable: !0,
        get: f[h]
      });
    }
    a(i, {
      isBot: function() {
        return s;
      },
      userAgent: function() {
        return n;
      },
      userAgentFromString: function() {
        return u;
      }
    });
    const c = /* @__PURE__ */ r(Br());
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function s(e) {
      return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e);
    }
    function u(e) {
      return {
        ...(0, c.default)(e),
        isBot: e === void 0 ? !1 : s(e)
      };
    }
    function n({ headers: e }) {
      return u(e.get("user-agent") || void 0);
    }
  })(Ve)), Ve;
}
var Qe = {}, Kt;
function Gr() {
  return Kt || (Kt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "URLPattern", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    const a = (
      // @ts-expect-error: URLPattern is not available in Node.js
      typeof URLPattern > "u" ? void 0 : URLPattern
    );
  })(Qe)), Qe;
}
var Je = {}, Ze = {}, et = {}, tt = {}, rt = {}, Qt;
function Rt() {
  return Qt || (Qt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(f, h) {
      for (var t in h) Object.defineProperty(f, t, {
        enumerable: !0,
        get: h[t]
      });
    }
    a(i, {
      bindSnapshot: function() {
        return n;
      },
      createAsyncLocalStorage: function() {
        return u;
      },
      createSnapshot: function() {
        return e;
      }
    });
    const c = Object.defineProperty(new Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
      value: "E504",
      enumerable: !1,
      configurable: !0
    });
    class r {
      disable() {
        throw c;
      }
      getStore() {
      }
      run() {
        throw c;
      }
      exit() {
        throw c;
      }
      enterWith() {
        throw c;
      }
      static bind(h) {
        return h;
      }
    }
    const s = typeof globalThis < "u" && globalThis.AsyncLocalStorage;
    function u() {
      return s ? new s() : new r();
    }
    function n(f) {
      return s ? s.bind(f) : r.bind(f);
    }
    function e() {
      return s ? s.snapshot() : function(f, ...h) {
        return f(...h);
      };
    }
  })(rt)), rt;
}
var Jt;
function Wr() {
  return Jt || (Jt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "workAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const c = (0, Rt().createAsyncLocalStorage)();
  })(tt)), tt;
}
var Zt;
function yt() {
  return Zt || (Zt = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "workAsyncStorage", {
      enumerable: !0,
      get: function() {
        return a.workAsyncStorageInstance;
      }
    });
    const a = Wr();
  })(et)), et;
}
var er;
function Yr() {
  return er || (er = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "after", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const a = yt();
    function c(r) {
      const s = a.workAsyncStorage.getStore();
      if (!s)
        throw Object.defineProperty(new Error("`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"), "__NEXT_ERROR_CODE", {
          value: "E468",
          enumerable: !1,
          configurable: !0
        });
      const { afterContext: u } = s;
      return u.after(r);
    }
  })(Ze)), Ze;
}
var tr;
function $r() {
  return tr || (tr = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), a(Yr(), i);
    function a(c, r) {
      return Object.keys(c).forEach(function(s) {
        s !== "default" && !Object.prototype.hasOwnProperty.call(r, s) && Object.defineProperty(r, s, {
          enumerable: !0,
          get: function() {
            return c[s];
          }
        });
      }), c;
    }
  })(Je)), Je;
}
var nt = {}, ot = {}, it = {}, rr;
function zr() {
  return rr || (rr = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "workUnitAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const c = (0, Rt().createAsyncLocalStorage)();
  })(it)), it;
}
var we = { exports: {} }, nr;
function Vr() {
  return nr || (nr = 1, (function(i, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function c(w, _) {
      for (var R in _) Object.defineProperty(w, R, {
        enumerable: !0,
        get: _[R]
      });
    }
    c(a, {
      ACTION_HEADER: function() {
        return s;
      },
      FLIGHT_HEADERS: function() {
        return g;
      },
      NEXT_ACTION_NOT_FOUND_HEADER: function() {
        return E;
      },
      NEXT_DID_POSTPONE_HEADER: function() {
        return A;
      },
      NEXT_HMR_REFRESH_HASH_COOKIE: function() {
        return h;
      },
      NEXT_HMR_REFRESH_HEADER: function() {
        return f;
      },
      NEXT_HTML_REQUEST_ID_HEADER: function() {
        return o;
      },
      NEXT_IS_PRERENDER_HEADER: function() {
        return p;
      },
      NEXT_REQUEST_ID_HEADER: function() {
        return y;
      },
      NEXT_REWRITTEN_PATH_HEADER: function() {
        return l;
      },
      NEXT_REWRITTEN_QUERY_HEADER: function() {
        return b;
      },
      NEXT_ROUTER_PREFETCH_HEADER: function() {
        return n;
      },
      NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return e;
      },
      NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return D;
      },
      NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return u;
      },
      NEXT_RSC_UNION_QUERY: function() {
        return S;
      },
      NEXT_URL: function() {
        return t;
      },
      RSC_CONTENT_TYPE_HEADER: function() {
        return m;
      },
      RSC_HEADER: function() {
        return r;
      }
    });
    const r = "rsc", s = "next-action", u = "next-router-state-tree", n = "next-router-prefetch", e = "next-router-segment-prefetch", f = "next-hmr-refresh", h = "__next_hmr_refresh_hash__", t = "next-url", m = "text/x-component", g = [
      r,
      u,
      n,
      f,
      e
    ], S = "_rsc", D = "x-nextjs-stale-time", A = "x-nextjs-postponed", l = "x-nextjs-rewritten-path", b = "x-nextjs-rewritten-query", p = "x-nextjs-prerender", E = "x-nextjs-action-not-found", y = "x-nextjs-request-id", o = "x-nextjs-html-request-id";
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), i.exports = a.default);
  })(we, we.exports)), we.exports;
}
var at = {}, or;
function vt() {
  return or || (or = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "InvariantError", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    class a extends Error {
      constructor(r, s) {
        super(`Invariant: ${r.endsWith(".") ? r : r + "."} This is a bug in Next.js.`, s), this.name = "InvariantError";
      }
    }
  })(at)), at;
}
var ir;
function wr() {
  return ir || (ir = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(A, l) {
      for (var b in l) Object.defineProperty(A, b, {
        enumerable: !0,
        get: l[b]
      });
    }
    a(i, {
      getCacheSignal: function() {
        return S;
      },
      getDraftModeProviderForCacheScope: function() {
        return g;
      },
      getHmrRefreshHash: function() {
        return h;
      },
      getPrerenderResumeDataCache: function() {
        return e;
      },
      getRenderResumeDataCache: function() {
        return f;
      },
      getRuntimeStagePromise: function() {
        return D;
      },
      getServerComponentsHmrCache: function() {
        return m;
      },
      isHmrRefresh: function() {
        return t;
      },
      throwForMissingRequestStore: function() {
        return u;
      },
      throwInvariantForMissingStore: function() {
        return n;
      },
      workUnitAsyncStorage: function() {
        return c.workUnitAsyncStorageInstance;
      }
    });
    const c = zr(), r = Vr(), s = vt();
    function u(A) {
      throw Object.defineProperty(new Error(`\`${A}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
        value: "E251",
        enumerable: !1,
        configurable: !0
      });
    }
    function n() {
      throw Object.defineProperty(new s.InvariantError("Expected workUnitAsyncStorage to have a store."), "__NEXT_ERROR_CODE", {
        value: "E696",
        enumerable: !1,
        configurable: !0
      });
    }
    function e(A) {
      switch (A.type) {
        case "prerender":
        case "prerender-runtime":
        case "prerender-ppr":
          return A.prerenderResumeDataCache;
        case "prerender-client":
          return A.prerenderResumeDataCache;
        case "request":
          if (A.prerenderResumeDataCache)
            return A.prerenderResumeDataCache;
        case "prerender-legacy":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return null;
        default:
          return A;
      }
    }
    function f(A) {
      switch (A.type) {
        case "request":
        case "prerender":
        case "prerender-runtime":
        case "prerender-client":
          if (A.renderResumeDataCache)
            return A.renderResumeDataCache;
        // fallthrough
        case "prerender-ppr":
          return A.prerenderResumeDataCache ?? null;
        case "cache":
        case "private-cache":
        case "unstable-cache":
        case "prerender-legacy":
          return null;
        default:
          return A;
      }
    }
    function h(A, l) {
      if (A.dev)
        switch (l.type) {
          case "cache":
          case "private-cache":
          case "prerender":
          case "prerender-runtime":
            return l.hmrRefreshHash;
          case "request":
            var b;
            return (b = l.cookies.get(r.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : b.value;
        }
    }
    function t(A, l) {
      if (A.dev)
        switch (l.type) {
          case "cache":
          case "private-cache":
          case "request":
            return l.isHmrRefresh ?? !1;
        }
      return !1;
    }
    function m(A, l) {
      if (A.dev)
        switch (l.type) {
          case "cache":
          case "private-cache":
          case "request":
            return l.serverComponentsHmrCache;
        }
    }
    function g(A, l) {
      if (A.isDraftMode)
        switch (l.type) {
          case "cache":
          case "private-cache":
          case "unstable-cache":
          case "prerender-runtime":
          case "request":
            return l.draftMode;
        }
    }
    function S(A) {
      switch (A.type) {
        case "prerender":
        case "prerender-client":
        case "prerender-runtime":
          return A.cacheSignal;
        case "request":
          if (A.cacheSignal)
            return A.cacheSignal;
        case "prerender-ppr":
        case "prerender-legacy":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return null;
        default:
          return A;
      }
    }
    function D(A) {
      switch (A.type) {
        case "prerender-runtime":
        case "private-cache":
          return A.runtimeStagePromise;
        case "prerender":
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "unstable-cache":
          return null;
        default:
          return A;
      }
    }
  })(ot)), ot;
}
var st = {}, Pe = { exports: {} }, ar;
function Kr() {
  return ar || (ar = 1, (function(i, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function c(n, e) {
      for (var f in e) Object.defineProperty(n, f, {
        enumerable: !0,
        get: e[f]
      });
    }
    c(a, {
      DynamicServerError: function() {
        return s;
      },
      isDynamicServerError: function() {
        return u;
      }
    });
    const r = "DYNAMIC_SERVER_USAGE";
    class s extends Error {
      constructor(e) {
        super(`Dynamic server usage: ${e}`), this.description = e, this.digest = r;
      }
    }
    function u(n) {
      return typeof n != "object" || n === null || !("digest" in n) || typeof n.digest != "string" ? !1 : n.digest === r;
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), i.exports = a.default);
  })(Pe, Pe.exports)), Pe.exports;
}
var Ae = { exports: {} }, sr;
function wt() {
  return sr || (sr = 1, (function(i, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    function c(n, e) {
      for (var f in e) Object.defineProperty(n, f, {
        enumerable: !0,
        get: e[f]
      });
    }
    c(a, {
      StaticGenBailoutError: function() {
        return s;
      },
      isStaticGenBailoutError: function() {
        return u;
      }
    });
    const r = "NEXT_STATIC_GEN_BAILOUT";
    class s extends Error {
      constructor(...e) {
        super(...e), this.code = r;
      }
    }
    function u(n) {
      return typeof n != "object" || n === null || !("code" in n) ? !1 : n.code === r;
    }
    (typeof a.default == "function" || typeof a.default == "object" && a.default !== null) && typeof a.default.__esModule > "u" && (Object.defineProperty(a.default, "__esModule", { value: !0 }), Object.assign(a.default, a), i.exports = a.default);
  })(Ae, Ae.exports)), Ae.exports;
}
var ct = {}, cr;
function Pr() {
  return cr || (cr = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(h, t) {
      for (var m in t) Object.defineProperty(h, m, {
        enumerable: !0,
        get: t[m]
      });
    }
    a(i, {
      isHangingPromiseRejectionError: function() {
        return c;
      },
      makeDevtoolsIOAwarePromise: function() {
        return f;
      },
      makeHangingPromise: function() {
        return n;
      }
    });
    function c(h) {
      return typeof h != "object" || h === null || !("digest" in h) ? !1 : h.digest === r;
    }
    const r = "HANGING_PROMISE_REJECTION";
    class s extends Error {
      constructor(t, m) {
        super(`During prerendering, ${m} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${m} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${t}".`), this.route = t, this.expression = m, this.digest = r;
      }
    }
    const u = /* @__PURE__ */ new WeakMap();
    function n(h, t, m) {
      if (h.aborted)
        return Promise.reject(new s(t, m));
      {
        const g = new Promise((S, D) => {
          const A = D.bind(null, new s(t, m));
          let l = u.get(h);
          if (l)
            l.push(A);
          else {
            const b = [
              A
            ];
            u.set(h, b), h.addEventListener("abort", () => {
              for (let p = 0; p < b.length; p++)
                b[p]();
            }, {
              once: !0
            });
          }
        });
        return g.catch(e), g;
      }
    }
    function e() {
    }
    function f(h, t, m) {
      return t.stagedRendering ? t.stagedRendering.delayUntilStage(m, void 0, h) : new Promise((g) => {
        setTimeout(() => {
          g(h);
        }, 0);
      });
    }
  })(ct)), ct;
}
var ut = {}, ur;
function Qr() {
  return ur || (ur = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(n, e) {
      for (var f in e) Object.defineProperty(n, f, {
        enumerable: !0,
        get: e[f]
      });
    }
    a(i, {
      METADATA_BOUNDARY_NAME: function() {
        return c;
      },
      OUTLET_BOUNDARY_NAME: function() {
        return s;
      },
      ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return u;
      },
      VIEWPORT_BOUNDARY_NAME: function() {
        return r;
      }
    });
    const c = "__next_metadata_boundary__", r = "__next_viewport_boundary__", s = "__next_outlet_boundary__", u = "__next_root_layout_boundary__";
  })(ut)), ut;
}
var lt = {}, lr;
function Jr() {
  return lr || (lr = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(n, e) {
      for (var f in e) Object.defineProperty(n, f, {
        enumerable: !0,
        get: e[f]
      });
    }
    a(i, {
      atLeastOneTask: function() {
        return s;
      },
      scheduleImmediate: function() {
        return r;
      },
      scheduleOnNextTick: function() {
        return c;
      },
      waitAtLeastOneReactRenderTask: function() {
        return u;
      }
    });
    const c = (n) => {
      Promise.resolve().then(() => {
        process.env.NEXT_RUNTIME === "edge" ? setTimeout(n, 0) : process.nextTick(n);
      });
    }, r = (n) => {
      process.env.NEXT_RUNTIME === "edge" ? setTimeout(n, 0) : setImmediate(n);
    };
    function s() {
      return new Promise((n) => r(n));
    }
    function u() {
      return process.env.NEXT_RUNTIME === "edge" ? new Promise((n) => setTimeout(n, 0)) : new Promise((n) => setImmediate(n));
    }
  })(lt)), lt;
}
var dt = {}, dr;
function Zr() {
  return dr || (dr = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(u, n) {
      for (var e in n) Object.defineProperty(u, e, {
        enumerable: !0,
        get: n[e]
      });
    }
    a(i, {
      BailoutToCSRError: function() {
        return r;
      },
      isBailoutToCSRError: function() {
        return s;
      }
    });
    const c = "BAILOUT_TO_CLIENT_SIDE_RENDERING";
    class r extends Error {
      constructor(n) {
        super(`Bail out to client-side rendering: ${n}`), this.reason = n, this.digest = c;
      }
    }
    function s(u) {
      return typeof u != "object" || u === null || !("digest" in u) ? !1 : u.digest === c;
    }
  })(dt)), dt;
}
var ft = {}, ht = {}, fr;
function en() {
  return fr || (fr = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "createPromiseWithResolvers", {
      enumerable: !0,
      get: function() {
        return a;
      }
    });
    function a() {
      let c, r;
      const s = new Promise((u, n) => {
        c = u, r = n;
      });
      return {
        resolve: c,
        reject: r,
        promise: s
      };
    }
  })(ht)), ht;
}
var hr;
function Ar() {
  return hr || (hr = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(f, h) {
      for (var t in h) Object.defineProperty(f, t, {
        enumerable: !0,
        get: h[t]
      });
    }
    a(i, {
      RenderStage: function() {
        return s;
      },
      StagedRenderingController: function() {
        return u;
      }
    });
    const c = vt(), r = en();
    var s = /* @__PURE__ */ (function(f) {
      return f[f.Static = 1] = "Static", f[f.Runtime = 2] = "Runtime", f[f.Dynamic = 3] = "Dynamic", f;
    })({});
    class u {
      constructor(h = null) {
        this.abortSignal = h, this.currentStage = 1, this.runtimeStagePromise = (0, r.createPromiseWithResolvers)(), this.dynamicStagePromise = (0, r.createPromiseWithResolvers)(), h && h.addEventListener("abort", () => {
          const { reason: t } = h;
          this.currentStage < 2 && (this.runtimeStagePromise.promise.catch(n), this.runtimeStagePromise.reject(t)), this.currentStage < 3 && (this.dynamicStagePromise.promise.catch(n), this.dynamicStagePromise.reject(t));
        }, {
          once: !0
        });
      }
      advanceStage(h) {
        this.currentStage >= h || (this.currentStage = h, h >= 2 && this.runtimeStagePromise.resolve(), h >= 3 && this.dynamicStagePromise.resolve());
      }
      getStagePromise(h) {
        switch (h) {
          case 2:
            return this.runtimeStagePromise.promise;
          case 3:
            return this.dynamicStagePromise.promise;
          default:
            throw Object.defineProperty(new c.InvariantError(`Invalid render stage: ${h}`), "__NEXT_ERROR_CODE", {
              value: "E881",
              enumerable: !1,
              configurable: !0
            });
        }
      }
      waitForStage(h) {
        return this.getStagePromise(h);
      }
      delayUntilStage(h, t, m) {
        const g = this.getStagePromise(h), S = e(g, t, m);
        return this.abortSignal && S.catch(n), S;
      }
    }
    function n() {
    }
    function e(f, h, t) {
      const m = new Promise((g, S) => {
        f.then(g.bind(null, t), S);
      });
      return h !== void 0 && (m.displayName = h), m;
    }
  })(ft)), ft;
}
var pr;
function tn() {
  return pr || (pr = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(d, v) {
      for (var P in v) Object.defineProperty(d, P, {
        enumerable: !0,
        get: v[P]
      });
    }
    a(i, {
      Postpone: function() {
        return T;
      },
      PreludeState: function() {
        return ge;
      },
      abortAndThrowOnSynchronousRequestDataAccess: function() {
        return R;
      },
      abortOnSynchronousPlatformIOAccess: function() {
        return w;
      },
      accessedDynamicData: function() {
        return W;
      },
      annotateDynamicAccess: function() {
        return ie;
      },
      consumeDynamicAccess: function() {
        return Y;
      },
      createDynamicTrackingState: function() {
        return A;
      },
      createDynamicValidationState: function() {
        return l;
      },
      createHangingInputAbortSignal: function() {
        return fe;
      },
      createRenderInBrowserAbortSignal: function() {
        return Z;
      },
      delayUntilRuntimeStage: function() {
        return Ee;
      },
      formatDynamicAPIAccesses: function() {
        return oe;
      },
      getFirstDynamicReason: function() {
        return b;
      },
      isDynamicPostpone: function() {
        return M;
      },
      isPrerenderInterruptedError: function() {
        return J;
      },
      logDisallowedDynamicError: function() {
        return le;
      },
      markCurrentScopeAsDynamic: function() {
        return p;
      },
      postponeWithTracking: function() {
        return k;
      },
      throwIfDisallowedDynamic: function() {
        return re;
      },
      throwToInterruptStaticGeneration: function() {
        return E;
      },
      trackAllowedDynamicAccess: function() {
        return _e;
      },
      trackDynamicDataInDynamicRender: function() {
        return y;
      },
      trackSynchronousPlatformIOAccessInDev: function() {
        return _;
      },
      useDynamicRouteParams: function() {
        return ae;
      },
      useDynamicSearchParams: function() {
        return he;
      }
    });
    const c = /* @__PURE__ */ S(Sr), r = Kr(), s = wt(), u = wr(), n = yt(), e = Pr(), f = Qr(), h = Jr(), t = Zr(), m = vt(), g = Ar();
    function S(d) {
      return d && d.__esModule ? d : {
        default: d
      };
    }
    const D = typeof c.default.unstable_postpone == "function";
    function A(d) {
      return {
        isDebugDynamicAccesses: d,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
      };
    }
    function l() {
      return {
        hasSuspenseAboveBody: !1,
        hasDynamicMetadata: !1,
        hasDynamicViewport: !1,
        hasAllowedDynamic: !1,
        dynamicErrors: []
      };
    }
    function b(d) {
      var v;
      return (v = d.dynamicAccesses[0]) == null ? void 0 : v.expression;
    }
    function p(d, v, P) {
      if (v)
        switch (v.type) {
          case "cache":
          case "unstable-cache":
            return;
          case "private-cache":
            return;
        }
      if (!(d.forceDynamic || d.forceStatic)) {
        if (d.dynamicShouldError)
          throw Object.defineProperty(new s.StaticGenBailoutError(`Route ${d.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${P}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: !1,
            configurable: !0
          });
        if (v)
          switch (v.type) {
            case "prerender-ppr":
              return k(d.route, P, v.dynamicTracking);
            case "prerender-legacy":
              v.revalidate = 0;
              const N = Object.defineProperty(new r.DynamicServerError(`Route ${d.route} couldn't be rendered statically because it used ${P}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                value: "E550",
                enumerable: !1,
                configurable: !0
              });
              throw d.dynamicUsageDescription = P, d.dynamicUsageStack = N.stack, N;
            case "request":
              process.env.NODE_ENV !== "production" && (v.usedDynamic = !0);
              break;
          }
      }
    }
    function E(d, v, P) {
      const N = Object.defineProperty(new r.DynamicServerError(`Route ${v.route} couldn't be rendered statically because it used \`${d}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: !1,
        configurable: !0
      });
      throw P.revalidate = 0, v.dynamicUsageDescription = d, v.dynamicUsageStack = N.stack, N;
    }
    function y(d) {
      switch (d.type) {
        case "cache":
        case "unstable-cache":
          return;
        case "private-cache":
          return;
        case "prerender":
        case "prerender-runtime":
        case "prerender-legacy":
        case "prerender-ppr":
        case "prerender-client":
          break;
        case "request":
          process.env.NODE_ENV !== "production" && (d.usedDynamic = !0);
          break;
      }
    }
    function o(d, v, P) {
      const N = `Route ${d} needs to bail out of prerendering at this point because it used ${v}.`, H = K(N);
      P.controller.abort(H);
      const x = P.dynamicTracking;
      x && x.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: x.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: v
      });
    }
    function w(d, v, P, N) {
      const H = N.dynamicTracking;
      o(d, v, N), H && H.syncDynamicErrorWithStack === null && (H.syncDynamicErrorWithStack = P);
    }
    function _(d) {
      d.stagedRendering && d.stagedRendering.advanceStage(g.RenderStage.Dynamic);
    }
    function R(d, v, P, N) {
      if (N.controller.signal.aborted === !1) {
        o(d, v, N);
        const x = N.dynamicTracking;
        x && x.syncDynamicErrorWithStack === null && (x.syncDynamicErrorWithStack = P);
      }
      throw K(`Route ${d} needs to bail out of prerendering at this point because it used ${v}.`);
    }
    function T({ reason: d, route: v }) {
      const P = u.workUnitAsyncStorage.getStore(), N = P && P.type === "prerender-ppr" ? P.dynamicTracking : null;
      k(v, d, N);
    }
    function k(d, v, P) {
      $(), P && P.dynamicAccesses.push({
        // When we aren't debugging, we don't need to create another error for the
        // stack trace.
        stack: P.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: v
      }), c.default.unstable_postpone(X(d, v));
    }
    function X(d, v) {
      return `Route ${d} needs to bail out of prerendering at this point because it used ${v}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
    }
    function M(d) {
      return typeof d == "object" && d !== null && typeof d.message == "string" ? B(d.message) : !1;
    }
    function B(d) {
      return d.includes("needs to bail out of prerendering at this point because it used") && d.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
    }
    if (B(X("%%%", "^^^")) === !1)
      throw Object.defineProperty(new Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: !1,
        configurable: !0
      });
    const U = "NEXT_PRERENDER_INTERRUPTED";
    function K(d) {
      const v = Object.defineProperty(new Error(d), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      return v.digest = U, v;
    }
    function J(d) {
      return typeof d == "object" && d !== null && d.digest === U && "name" in d && "message" in d && d instanceof Error;
    }
    function W(d) {
      return d.length > 0;
    }
    function Y(d, v) {
      return d.dynamicAccesses.push(...v.dynamicAccesses), d.dynamicAccesses;
    }
    function oe(d) {
      return d.filter((v) => typeof v.stack == "string" && v.stack.length > 0).map(({ expression: v, stack: P }) => (P = P.split(`
`).slice(4).filter((N) => !(N.includes("node_modules/next/") || N.includes(" (<anonymous>)") || N.includes(" (node:"))).join(`
`), `Dynamic API Usage Debug - ${v}:
${P}`));
    }
    function $() {
      if (!D)
        throw Object.defineProperty(new Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"), "__NEXT_ERROR_CODE", {
          value: "E224",
          enumerable: !1,
          configurable: !0
        });
    }
    function Z() {
      const d = new AbortController();
      return d.abort(Object.defineProperty(new t.BailoutToCSRError("Render in Browser"), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: !1,
        configurable: !0
      })), d.signal;
    }
    function fe(d) {
      switch (d.type) {
        case "prerender":
        case "prerender-runtime":
          const v = new AbortController();
          if (d.cacheSignal)
            d.cacheSignal.inputReady().then(() => {
              v.abort();
            });
          else {
            const P = (0, u.getRuntimeStagePromise)(d);
            P ? P.then(() => (0, h.scheduleOnNextTick)(() => v.abort())) : (0, h.scheduleOnNextTick)(() => v.abort());
          }
          return v.signal;
        case "prerender-client":
        case "prerender-ppr":
        case "prerender-legacy":
        case "request":
        case "cache":
        case "private-cache":
        case "unstable-cache":
          return;
      }
    }
    function ie(d, v) {
      const P = v.dynamicTracking;
      P && P.dynamicAccesses.push({
        stack: P.isDebugDynamicAccesses ? new Error().stack : void 0,
        expression: d
      });
    }
    function ae(d) {
      const v = n.workAsyncStorage.getStore(), P = u.workUnitAsyncStorage.getStore();
      if (v && P)
        switch (P.type) {
          case "prerender-client":
          case "prerender": {
            const N = P.fallbackRouteParams;
            N && N.size > 0 && c.default.use((0, e.makeHangingPromise)(P.renderSignal, v.route, d));
            break;
          }
          case "prerender-ppr": {
            const N = P.fallbackRouteParams;
            if (N && N.size > 0)
              return k(v.route, d, P.dynamicTracking);
            break;
          }
          case "prerender-runtime":
            throw Object.defineProperty(new m.InvariantError(`\`${d}\` was called during a runtime prerender. Next.js should be preventing ${d} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E771",
              enumerable: !1,
              configurable: !0
            });
          case "cache":
          case "private-cache":
            throw Object.defineProperty(new m.InvariantError(`\`${d}\` was called inside a cache scope. Next.js should be preventing ${d} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E745",
              enumerable: !1,
              configurable: !0
            });
        }
    }
    function he(d) {
      const v = n.workAsyncStorage.getStore(), P = u.workUnitAsyncStorage.getStore();
      if (v)
        switch (P || (0, u.throwForMissingRequestStore)(d), P.type) {
          case "prerender-client": {
            c.default.use((0, e.makeHangingPromise)(P.renderSignal, v.route, d));
            break;
          }
          case "prerender-legacy":
          case "prerender-ppr": {
            if (v.forceStatic)
              return;
            throw Object.defineProperty(new t.BailoutToCSRError(d), "__NEXT_ERROR_CODE", {
              value: "E394",
              enumerable: !1,
              configurable: !0
            });
          }
          case "prerender":
          case "prerender-runtime":
            throw Object.defineProperty(new m.InvariantError(`\`${d}\` was called from a Server Component. Next.js should be preventing ${d} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E795",
              enumerable: !1,
              configurable: !0
            });
          case "cache":
          case "unstable-cache":
          case "private-cache":
            throw Object.defineProperty(new m.InvariantError(`\`${d}\` was called inside a cache scope. Next.js should be preventing ${d} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
              value: "E745",
              enumerable: !1,
              configurable: !0
            });
          case "request":
            return;
        }
    }
    const ee = /\n\s+at Suspense \(<anonymous>\)/, se = "body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6", pe = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${se}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${f.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`), te = new RegExp(`\\n\\s+at ${f.METADATA_BOUNDARY_NAME}[\\n\\s]`), ce = new RegExp(`\\n\\s+at ${f.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`), ue = new RegExp(`\\n\\s+at ${f.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
    function _e(d, v, P, N) {
      if (!ue.test(v))
        if (te.test(v)) {
          P.hasDynamicMetadata = !0;
          return;
        } else if (ce.test(v)) {
          P.hasDynamicViewport = !0;
          return;
        } else if (pe.test(v)) {
          P.hasAllowedDynamic = !0, P.hasSuspenseAboveBody = !0;
          return;
        } else if (ee.test(v)) {
          P.hasAllowedDynamic = !0;
          return;
        } else if (N.syncDynamicErrorWithStack) {
          P.dynamicErrors.push(N.syncDynamicErrorWithStack);
          return;
        } else {
          const H = `Route "${d.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`, x = me(H, v);
          P.dynamicErrors.push(x);
          return;
        }
    }
    function me(d, v) {
      const P = process.env.NODE_ENV !== "production" && c.default.captureOwnerStack ? c.default.captureOwnerStack() : null, N = Object.defineProperty(new Error(d), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: !1,
        configurable: !0
      });
      return N.stack = N.name + ": " + d + (P ?? v), N;
    }
    var ge = /* @__PURE__ */ (function(d) {
      return d[d.Full = 0] = "Full", d[d.Empty = 1] = "Empty", d[d.Errored = 2] = "Errored", d;
    })({});
    function le(d, v) {
      console.error(v), d.dev || (d.hasReadableErrorStacks ? console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${d.route}" in your browser to investigate the error.`) : console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${d.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`));
    }
    function re(d, v, P, N) {
      if (N.syncDynamicErrorWithStack)
        throw le(d, N.syncDynamicErrorWithStack), new s.StaticGenBailoutError();
      if (v !== 0) {
        if (P.hasSuspenseAboveBody)
          return;
        const H = P.dynamicErrors;
        if (H.length > 0) {
          for (let x = 0; x < H.length; x++)
            le(d, H[x]);
          throw new s.StaticGenBailoutError();
        }
        if (P.hasDynamicViewport)
          throw console.error(`Route "${d.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`), new s.StaticGenBailoutError();
        if (v === 1)
          throw console.error(`Route "${d.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`), new s.StaticGenBailoutError();
      } else if (P.hasAllowedDynamic === !1 && P.hasDynamicMetadata)
        throw console.error(`Route "${d.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`), new s.StaticGenBailoutError();
    }
    function Ee(d, v) {
      return d.runtimeStagePromise ? d.runtimeStagePromise.then(() => v) : v;
    }
  })(st)), st;
}
var pt = {}, _t = {}, mt = {}, _r;
function rn() {
  return _r || (_r = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "afterTaskAsyncStorageInstance", {
      enumerable: !0,
      get: function() {
        return c;
      }
    });
    const c = (0, Rt().createAsyncLocalStorage)();
  })(mt)), mt;
}
var mr;
function nn() {
  return mr || (mr = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "afterTaskAsyncStorage", {
      enumerable: !0,
      get: function() {
        return a.afterTaskAsyncStorageInstance;
      }
    });
    const a = rn();
  })(_t)), _t;
}
var gr;
function on() {
  return gr || (gr = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    });
    function a(e, f) {
      for (var h in f) Object.defineProperty(e, h, {
        enumerable: !0,
        get: f[h]
      });
    }
    a(i, {
      isRequestAPICallableInsideAfter: function() {
        return n;
      },
      throwForSearchParamsAccessInUseCache: function() {
        return u;
      },
      throwWithStaticGenerationBailoutErrorWithDynamicError: function() {
        return s;
      }
    });
    const c = wt(), r = nn();
    function s(e, f) {
      throw Object.defineProperty(new c.StaticGenBailoutError(`Route ${e} with \`dynamic = "error"\` couldn't be rendered statically because it used ${f}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
        value: "E543",
        enumerable: !1,
        configurable: !0
      });
    }
    function u(e, f) {
      const h = Object.defineProperty(new Error(`Route ${e.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
        value: "E842",
        enumerable: !1,
        configurable: !0
      });
      throw Error.captureStackTrace(h, f), e.invalidDynamicUsageError ??= h, h;
    }
    function n() {
      const e = r.afterTaskAsyncStorage.getStore();
      return e?.rootTaskSpawnPhase === "action";
    }
  })(pt)), pt;
}
var Er;
function an() {
  return Er || (Er = 1, (function(i) {
    Object.defineProperty(i, "__esModule", {
      value: !0
    }), Object.defineProperty(i, "connection", {
      enumerable: !0,
      get: function() {
        return f;
      }
    });
    const a = yt(), c = wr(), r = tn(), s = wt(), u = Pr(), n = on(), e = Ar();
    function f() {
      const h = "connection", t = a.workAsyncStorage.getStore(), m = c.workUnitAsyncStorage.getStore();
      if (t) {
        if (m && m.phase === "after" && !(0, n.isRequestAPICallableInsideAfter)())
          throw Object.defineProperty(new Error(`Route ${t.route} used \`connection()\` inside \`after()\`. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but \`after()\` executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`), "__NEXT_ERROR_CODE", {
            value: "E827",
            enumerable: !1,
            configurable: !0
          });
        if (t.forceStatic)
          return Promise.resolve(void 0);
        if (t.dynamicShouldError)
          throw Object.defineProperty(new s.StaticGenBailoutError(`Route ${t.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E847",
            enumerable: !1,
            configurable: !0
          });
        if (m)
          switch (m.type) {
            case "cache": {
              const g = Object.defineProperty(new Error(`Route ${t.route} used \`connection()\` inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual request, but caches must be able to be produced before a request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E841",
                enumerable: !1,
                configurable: !0
              });
              throw Error.captureStackTrace(g, f), t.invalidDynamicUsageError ??= g, g;
            }
            case "private-cache": {
              const g = Object.defineProperty(new Error(`Route ${t.route} used \`connection()\` inside "use cache: private". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual navigation request, but caches must be able to be produced before a navigation request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
                value: "E837",
                enumerable: !1,
                configurable: !0
              });
              throw Error.captureStackTrace(g, f), t.invalidDynamicUsageError ??= g, g;
            }
            case "unstable-cache":
              throw Object.defineProperty(new Error(`Route ${t.route} used \`connection()\` inside a function cached with \`unstable_cache()\`. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
                value: "E840",
                enumerable: !1,
                configurable: !0
              });
            case "prerender":
            case "prerender-client":
            case "prerender-runtime":
              return (0, u.makeHangingPromise)(m.renderSignal, t.route, "`connection()`");
            case "prerender-ppr":
              return (0, r.postponeWithTracking)(t.route, "connection", m.dynamicTracking);
            case "prerender-legacy":
              return (0, r.throwToInterruptStaticGeneration)("connection", t, m);
            case "request":
              return (0, r.trackDynamicDataInDynamicRender)(m), process.env.NODE_ENV === "development" ? m.asyncApiPromises ? m.asyncApiPromises.connection : (0, u.makeDevtoolsIOAwarePromise)(void 0, m, e.RenderStage.Dynamic) : Promise.resolve(void 0);
          }
      }
      (0, c.throwForMissingRequestStore)(h);
    }
  })(nt)), nt;
}
var br;
function sn() {
  return br || (br = 1, (function(i, a) {
    const c = {
      NextRequest: Hr().NextRequest,
      NextResponse: Xr().NextResponse,
      ImageResponse: Fr().ImageResponse,
      userAgentFromString: Vt().userAgentFromString,
      userAgent: Vt().userAgent,
      URLPattern: Gr().URLPattern,
      after: $r().after,
      connection: an().connection
    };
    i.exports = c, a.NextRequest = c.NextRequest, a.NextResponse = c.NextResponse, a.ImageResponse = c.ImageResponse, a.userAgentFromString = c.userAgentFromString, a.userAgent = c.userAgent, a.URLPattern = c.URLPattern, a.after = c.after, a.connection = c.connection;
  })(ve, ve.exports)), ve.exports;
}
var F = sn();
function cn() {
  const i = process.env.PI_API_URL_BASE || "https://api.minepi.com", a = process.env.PI_API_VERSION || "v2", c = process.env.PI_API_CONTROLLER || "payments", r = process.env.PI_API_KEY;
  if (!r)
    throw new Error("Missing PiServer configuration (API URL, version, controller, or key)");
  return { apiUrlBase: i, apiVersion: a, apiController: c, apiKey: r };
}
async function be(i, a, c = {}, r = {}) {
  const { apiUrlBase: s, apiVersion: u, apiController: n, apiKey: e } = cn(), f = `${s.replace(/\/$/, "")}/${u}/${n}/${a}/${i}`, h = {
    "Content-Type": "application/json",
    Authorization: `Key ${e}`,
    ...r.header || {}
  };
  let t;
  try {
    t = await fetch(f, {
      method: "POST",
      body: JSON.stringify(c),
      headers: h
    });
  } catch (S) {
    throw r.logFail?.(`Pi server POST ${i} failed: Network error`, S), new Error(`Network error for PiServer: ${S}`);
  }
  let m;
  const g = await t.text();
  try {
    m = JSON.parse(g);
  } catch {
    throw r.logFail?.(`Pi server POST ${i} failed: Invalid JSON (${t.status})`, g, t.status), new Error(`Invalid JSON from PiServer: ${g}`);
  }
  if (t.ok)
    return r.logOk?.(`Pi server POST ${i} succeeded (${t.status})`, m), m;
  throw r.logFail?.(`Pi server POST ${i} failed with status ${t.status}`, m, t.status), new Error(`PiServer call failed: HTTP ${t.status}: ${g}`);
}
async function ln(i) {
  try {
    const a = await i.json(), { accessToken: c, paymentId: r } = a;
    if (console.log("[PiSDK][approve] Incoming request payload:", a), !c || !r)
      return console.warn("[PiSDK][approve] Missing params: accessToken or paymentId. Payload was:", a), F.NextResponse.json(
        { error: "Missing required params: accessToken, paymentId" },
        { status: 400 }
      );
    const s = await be(
      "approve",
      r,
      { paymentId: r, accessToken: c },
      {
        logOk: (u, n) => console.log(`Pi payment approved for paymentId=${r}`, u, n),
        logFail: (u, n) => console.error(`Pi approve error for paymentId=${r}`, u, n)
      }
    );
    return console.log("[PiSDK][approve] Sent to Pi server. Received:", s), F.NextResponse.json({
      result: "approved",
      paymentId: r,
      piServer: s.response
    });
  } catch (a) {
    return console.error("[PiSDK][approve] Error in handler:", a), F.NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
async function dn(i) {
  try {
    const a = await i.json(), { accessToken: c, paymentId: r } = a;
    if (!c || !r)
      return F.NextResponse.json(
        { error: "Missing required params: accessToken, paymentId" },
        { status: 400 }
      );
    const s = await be(
      "cancel",
      r,
      { paymentId: r, accessToken: c },
      {
        logOk: (u, n) => console.log(`Pi payment cancelled for paymentId=${r}`, u, n),
        logFail: (u, n) => console.error(`Pi cancel error for paymentId=${r}`, u, n)
      }
    );
    return F.NextResponse.json({
      result: "cancelled",
      paymentId: r,
      piServer: s.response
    });
  } catch {
    return F.NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
async function fn(i) {
  try {
    const a = await i.json(), { accessToken: c, paymentId: r, transactionId: s } = a;
    if (!c || !r || !s)
      return F.NextResponse.json(
        { error: "Missing required params: accessToken, paymentId, transactionId" },
        { status: 400 }
      );
    const u = await be(
      "complete",
      r,
      { paymentId: r, accessToken: c, transactionId: s },
      {
        logOk: (n, e) => console.log(`Pi payment completed for paymentId=${r}`, n, e),
        logFail: (n, e) => console.error(`Pi complete error for paymentId=${r}`, n, e)
      }
    );
    return F.NextResponse.json({
      result: "completed",
      paymentId: r,
      piServer: u.response
    });
  } catch {
    return F.NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
async function hn(i) {
  try {
    const a = await i.json(), { accessToken: c, paymentId: r, errorMessage: s } = a;
    if (!c || !r)
      return F.NextResponse.json(
        { error: "Missing required params: accessToken, paymentId" },
        { status: 400 }
      );
    const u = await be(
      "error",
      r,
      { paymentId: r, accessToken: c, errorMessage: s },
      {
        logOk: (n, e) => console.log(`Pi payment error logged for paymentId=${r}`, n, e),
        logFail: (n, e) => console.error(`Pi error log failed for paymentId=${r}`, n, e)
      }
    );
    return F.NextResponse.json({
      result: "error-logged",
      paymentId: r,
      piServer: u.response
    });
  } catch {
    return F.NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
async function pn(i) {
  try {
    const a = await i.json(), { accessToken: c, paymentId: r, transactionId: s } = a;
    if (!c || !r || !s)
      return F.NextResponse.json(
        { error: "Missing required params: accessToken, paymentId, transactionId" },
        { status: 400 }
      );
    console.log("INCOMPLETE");
    const u = "complete";
    let n;
    return u === "complete" && (n = await be(
      "complete",
      r,
      { paymentId: r, accessToken: c, transactionId: s },
      {
        logOk: (e, f) => console.log(`Pi payment completed for incomplete paymentId=${r}`, e, f),
        logFail: (e, f) => console.error(`Pi completion from incomplete failed for paymentId=${r}`, e, f)
      }
    )), F.NextResponse.json({
      result: u,
      paymentId: r,
      piServer: n.response
    });
  } catch {
    return F.NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
export {
  ln as approvePOST,
  dn as cancelPOST,
  fn as completePOST,
  hn as errorPOST,
  pn as incompletePOST
};
//# sourceMappingURL=index.js.map
