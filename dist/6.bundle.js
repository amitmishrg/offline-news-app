(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{66:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),i=t(26);t(67);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,n){return!n||"object"!==a(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f,s,b,m=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,u(n).apply(this,arguments))}var t,o,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,r.a.PureComponent),t=n,(o=[{key:"render",value:function(){var e=this.context,n={backgroundImage:"url(".concat(e.urlToImage,")")};return r.a.createElement("div",{className:"article"},r.a.createElement("div",{className:"thumbnail",style:n}),r.a.createElement("div",{className:"info"},r.a.createElement("h2",null,r.a.createElement("a",{href:e.url},e.title)),r.a.createElement("p",null,e.description)))}}])&&c(t.prototype,o),i&&c(t,i),n}();f=m,s="contextType",b=i.a,s in f?Object.defineProperty(f,s,{value:b,enumerable:!0,configurable:!0,writable:!0}):f[s]=b,n.default=r.a.memo(m)},67:function(e,n,t){var o=t(68);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(10)(o,r);o.locals&&(e.exports=o.locals)},68:function(e,n,t){(e.exports=t(9)(!1)).push([e.i,".article {\n  background: #fff;\n  width: calc(33% - 50px);\n  box-shadow: 1px 6px 10px rgba(164, 164, 164, 0.3);\n  margin: 15px; }\n  @media only screen and (max-width: 600px) {\n    .article {\n      width: calc(100%); } }\n  .article .thumbnail {\n    background-size: cover;\n    height: 180px;\n    background-position: 100%; }\n  .article .info {\n    margin-top: 20px;\n    padding: 0 10px; }\n    .article .info h2 {\n      font-size: 18px;\n      line-height: 24px; }\n      .article .info h2 a {\n        color: #03A9F4;\n        text-decoration: none; }\n    .article .info p {\n      padding-bottom: 0;\n      color: #808080;\n      line-height: 24px; }\n",""])}}]);
//# sourceMappingURL=6.bundle.js.map