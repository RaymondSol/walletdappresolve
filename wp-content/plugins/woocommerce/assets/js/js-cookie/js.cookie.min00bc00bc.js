/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function(e) {
    var n, o, t = !1;
    "function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), t || (n = window.Cookies, (o = window.Cookies = e()).noConflict = function() {
        return window.Cookies = n, o
    })
}(function() {
    function m() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var o, t = arguments[e];
            for (o in t) n[o] = t[o]
        }
        return n
    }
    return function e(C) {
        function g(e, n, o) {
            var t, r;
            if ("undefined" != typeof document) {
                if (1 < arguments.length) {
                    "number" == typeof(o = m({
                        path: "/"
                    }, g.defaults, o)).expires && ((r = new Date).setMilliseconds(r.getMilliseconds() + 864e5 * o.expires), o.expires = r), o.expires = o.expires ? o.expires.toUTCString() : "";
                    try {
                        t = JSON.stringify(n), /^[\{\[]/.test(t) && (n = t)
                    } catch (l) {}
                    n = C.write ? C.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = (e = (e = encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                    var i, c = "";
                    for (i in o) o[i] && (c += "; " + i, !0 !== o[i] && (c += "=" + o[i]));
                    return document.cookie = e + "=" + n + c
                }
                e || (t = {});
                for (var s = document.cookie ? document.cookie.split("; ") : [], f = /(%[0-9A-Z]{2})+/g, p = 0; p < s.length; p++) {
                    var a = s[p].split("=");
                    '"' === (u = a.slice(1).join("=")).charAt(0) && (u = u.slice(1, -1));
                    try {
                        var d = a[0].replace(f, decodeURIComponent),
                            u = C.read ? C.read(u, d) : C(u, d) || u.replace(f, decodeURIComponent);
                        if (this.json) try {
                            u = JSON.parse(u)
                        } catch (l) {}
                        if (e === d) {
                            t = u;
                            break
                        }
                        e || (t[d] = u)
                    } catch (l) {}
                }
                return t
            }
        }
        return (g.set = g).get = function(e) {
            return g.call(g, e)
        }, g.getJSON = function() {
            return g.apply({
                json: !0
            }, [].slice.call(arguments))
        }, g.defaults = {}, g.remove = function(e, n) {
            g(e, "", m(n, {
                expires: -1
            }))
        }, g.withConverter = e, g
    }(function() {})
});