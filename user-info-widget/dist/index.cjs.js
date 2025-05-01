'use strict';

var React = require('react');
var zustand = require('zustand');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var useStore = zustand.create(function (set) {
  return {
    user: {
      name: '',
      email: '',
      phone: ''
    },
    setUser: function (user) {
      return set({
        user: user
      });
    }
  };
});
var UserInfoWidget = function (_a) {
  var style = _a.style;
  var user = useStore(function (state) {
    return state.user;
  });
  var setUser = useStore(function (state) {
    return state.setUser;
  });
  var handleChange = function (e) {
    var _a;
    var _b = e.target,
      name = _b.name,
      value = _b.value;
    setUser(__assign(__assign({}, user), (_a = {}, _a[name] = value, _a)));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: __assign({
      border: '1px solid #ccc',
      padding: 12,
      borderRadius: 8
    }, style)
  }, /*#__PURE__*/React.createElement("h3", null, "User Info Widget"), ['name', 'email', 'phone'].map(function (field) {
    return /*#__PURE__*/React.createElement("p", {
      key: field
    }, /*#__PURE__*/React.createElement("label", null, field.charAt(0).toUpperCase() + field.slice(1), ":", ' ', /*#__PURE__*/React.createElement("input", {
      name: field,
      value: user[field],
      onChange: handleChange
    })));
  }));
};

module.exports = UserInfoWidget;
//# sourceMappingURL=index.cjs.js.map
