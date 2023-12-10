(()=>{"use strict";var e={r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}e.r(t);const a={default:function(e,t){return e.value===t.value},list__in:function(e,t){var r=t.value;return"string"==typeof r&&(r=t.value.split(",").map((function(e){return e.trim()}))),!!Array.isArray(r)&&(Array.isArray(e.value)?e.value.some((function(e){return r.includes(e)})):!(!e.value||!r.includes(e.value)))},list__not_in:function(e,t){var r=t.value;return"string"==typeof r&&(r=t.value.split(",").map((function(e){return e.trim()}))),!Array.isArray(r)||(Array.isArray(e.value)?!e.value.some((function(e){return r.includes(e)})):!e.value||!r.includes(e.value))},range:function(e,t){var r=t.value,n=r.min,i=r.max;return!(!e.value||n&&e.value<n||i&&e.value>i)}};window.newspackPopupsCriteria=window.newspackPopupsCriteria||{criteria:{}},window.newspackPopupsCriteria.criteria=window.newspackPopupsCriteria.criteria||{};var o,u={};function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)throw new Error("Criteria must have an ID.");var r=i(i({id:e,matchingFunction:"default"},t),u[e]),n=function(e){if(!r._configured)if(r._configured=!0,r.matchingAttribute||(r.matchingAttribute=r.id),"string"==typeof r.matchingFunction&&a[r.matchingFunction]&&(r.matchingFunction=a[r.matchingFunction].bind(null,r)),"function"==typeof r.matchingFunction){if("function"==typeof(null==e?void 0:e.on)&&e.on("data",(function(){r._matched={}})),"function"==typeof r.matchingAttribute)r.value=r.matchingAttribute(e);else if("string"==typeof r.matchingAttribute){var t;"function"==typeof(null==e||null===(t=e.store)||void 0===t?void 0:t.get)?r.value=e.store.get(r.matchingAttribute):console.warn("Reader data library not loaded. Unable to fetch value for '".concat(r.id,"'"))}}else console.warn("Unable to configure matching function for criteria ".concat(r.id,"."))};return r._matched={},r.matches=function(e){var t=JSON.stringify(e);if(void 0!==r._matched[t])return r._matched[t];var i=window.newspackReaderActivation;return i||console.warn("Reader activation script not loaded."),n(i),r._matched[t]=r.matchingFunction(e,i),r._matched[t]},window.newspackPopupsCriteria.criteria||(window.newspackPopupsCriteria.criteria={}),window.newspackPopupsCriteria.criteria[e]=r,r}function s(e){return e?window.newspackPopupsCriteria.criteria[e]:window.newspackPopupsCriteria.criteria}function l(e,t){var r=s(e);r||(u[e]=u[e]||{},r=u[e]),r._matched={},r.matchingAttribute=t}function f(e,t){var r=s(e);r||(u[e]=u[e]||{},r=u[e]),r._matched={},r.matchingFunction=t}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}if(l("articles_read",(function(e){return e.getUniqueActivitiesBy("article_view","post_id").filter((function(e){return e.timestamp>Date.now()-2592e6})).length})),l("articles_read_in_session",(function(e){var t=e.getUniqueActivitiesBy("article_view","post_id");if(!t.length)return 0;if(t.sort((function(e,t){return t.timestamp-e.timestamp})),t[0].timestamp<Date.now()-18e5)return 0;for(var r=0;r<t.length&&t[r+1]&&t[r].timestamp-t[r+1].timestamp<18e5;)r++;return 1+r})),f("favorite_categories",(function(e,t){var r=!1,n=t.getUniqueActivitiesBy("article_view","post_id");if(1>=n.length)return r;var i=n.reduce((function(e,t){var r,n;return null!==(r=t.data)&&void 0!==r&&null!==(n=r.categories)&&void 0!==n&&n.length&&e.push.apply(e,d(t.data.categories)),e}),[]).reduce((function(e,t){return e[t]=(e[t]||0)+1,e}),{}),a=Object.entries(i);return a.sort((function(e,t){return t[1]-e[1]})),a&&a.length?((!a[1]||a[0][1]>a[1][1])&&-1<e.value.indexOf(parseInt(a[0][0]))&&(r=!0),r):r})),f("donation",(function(e,t){var r=t.store;switch(e.value){case"donors":return r.get("is_donor");case"non-donors":return!r.get("is_donor");case"formers-donors":return r.get("is_former_donor")}})),f("newsletter",(function(e,t){var r=t.store;switch(e.value){case"subscribers":return r.get("is_newsletter_subscriber");case"non-subscribers":return!r.get("is_newsletter_subscriber")}})),f("user_account",(function(e,t){var r,n,i=t.store;switch(e.value){case"with-account":return null===(r=i.get("reader"))||void 0===r?void 0:r.email;case"without-account":return!(null!==(n=i.get("reader"))&&void 0!==n&&n.email)}})),newspackPopupsCriteria.criteria={},null!==(o=newspackPopupsCriteria)&&void 0!==o&&o.config)for(var v in newspackPopupsCriteria.config)c(v,newspackPopupsCriteria.config[v]);var m=window;for(var g in t)m[g]=t[g];t.__esModule&&Object.defineProperty(m,"__esModule",{value:!0})})();