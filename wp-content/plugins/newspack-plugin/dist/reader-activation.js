(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{authenticateOTP:()=>R,default:()=>x,dispatchActivity:()=>y,getActivities:()=>g,getAuthStrategy:()=>T,getOTPHash:()=>P,getReader:()=>E,getUniqueActivitiesBy:()=>v,hasAuthLink:()=>b,refreshAuthentication:()=>S,setAuthStrategy:()=>I,setAuthenticated:()=>A,setReaderEmail:()=>k,store:()=>m});const n={reader:"reader",data:"data",activity:"activity",overlay:"overlay"},r=Object.values(n);function a(e){return r.includes(e)?`newspack-ras-${e}`:""}function o(e,t){if(!(e=a(e)))throw new Error("Invalid event");window.dispatchEvent(new CustomEvent(e,{detail:t}))}window.newspack_reader_data=window.newspack_reader_data||{};const i={storePrefix:newspack_reader_data?.store_prefix||"np_reader_",storage:newspack_reader_data?.is_temporary?window.sessionStorage:window.localStorage,collections:{maxItems:1e3,maxAge:2592e6}},s=[];function c(e,t=!1){if(!e)throw new Error("Key is required.");const n=[i.storePrefix];return t&&n.push("_"),n.push(e),n.join("")}function d(e){const t=u("unsynced",!0)||[];t.includes(e)||(t.push(e),w("unsynced",t,!0))}function u(e,t=!1){if(!e)throw new Error("Key is required.");return(n=i.storage.getItem(c(e,t)))&&"string"==typeof n?JSON.parse(n):n;var n}function w(e,t,r=!1){if(!e)throw new Error("Key is required.");if(null==t)throw new Error("Value cannot be undefined or null.");if("_"===e[0])throw new Error("Key cannot start with an underscore.");var a;i.storage.setItem(c(e,r),(a=t,JSON.stringify(a))),r||o(n.data,{key:e,value:t})}function l(e){if(!e)return"";const t=`; ${document.cookie}`.split(`; ${e}=`);return 2===t.length?decodeURIComponent(t.pop().split(";").shift()):void 0}function p(e,t,n=365){const r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3),document.cookie=`${e}=${t}; expires=${r.toUTCString()}; path=/`}function f(e=9){let t="";const n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";for(let r=0;r<e;r++){const e=Math.floor(Math.random()*n.length);t+=n.charAt(e)}return t}setInterval((()=>{if(!s.length||newspack_reader_data?.is_temporary)return;const e=s.shift();(function(e){if(!e)return Promise.reject("Key is required.");if(!newspack_reader_data.api_url||!newspack_reader_data.nonce)return Promise.reject("API not available.");const t=u(e),n={key:e};t&&(n.value=JSON.stringify(t));const r=new XMLHttpRequest;return r.open(n.value?"POST":"DELETE",newspack_reader_data.api_url,!0),r.setRequestHeader("Content-Type","application/json"),r.setRequestHeader("X-WP-Nonce",newspack_reader_data.nonce),r.send(JSON.stringify(n)),new Promise(((e,t)=>{r.onreadystatechange=()=>{if(4===r.readyState)return 200!==r.status?t(r):e(r)}}))})(e).then((()=>function(e){const t=u("unsynced",!0)||[];t.includes(e)&&(t.splice(t.indexOf(e),1),w("unsynced",t,!0))}(e))).catch((()=>d(e)))}),1e3);const h=[],_={get:function(){return h||[]},add:function(e=""){return e||(e=f()),h.push(e),o(n.overlay,{overlays:h}),e},remove:function(e){if(!e)return h;const t=h.indexOf(e);return t>-1&&h.splice(t,1),o(n.overlay,{overlays:h}),h}};window.newspack_ras_config=window.newspack_ras_config||{};const m=function(){const e=u("unsynced",!0)||[];for(const t of e)s.push(t);if(newspack_reader_data?.items&&!newspack_reader_data?.is_temporary){const t=Object.keys(newspack_reader_data.items);for(const n of t)e.includes(n)||w(n,JSON.parse(newspack_reader_data.items[n]))}return{get:e=>{if(!e)throw new Error("Key is required.");return u(e)},set:(e,t,n=!0)=>{w(e,t,!1),n&&(d(e),s.push(e))},delete:e=>{if(!e)throw new Error("Key is required.");i.storage.removeItem(c(e)),o(n.data,{key:e,value:void 0}),d(e),s.push(e)},add:(e,t)=>{if(!e)throw new Error("Key cannot be empty.");if(!t)throw new Error("Value cannot be empty.");let n=u(e)||[];if(!Array.isArray(n))throw new Error(`Store key '${e}' is not an array.`);if(i.collections.maxAge){const e=Date.now();n=n.filter((t=>!t.timestamp||e-t.timestamp<i.collections.maxAge))}n.push(t),n=n.slice(-i.collections.maxItems),w(e,n)}}}();function y(e,t,r=0){const a={action:e,data:t,timestamp:r||Date.now()};return m.add("activity",a),o(n.activity,a),a}function g(e){const t=m.get("activity")||[];return e?t.filter((t=>t.action===e)):t}function v(e,t){const n=g(e),r=[],a={};for(const e of n){const n="function"==typeof t?t(e):e.data[t];a[n]||(r.push(e),a[n]=!0)}return r}function k(e){if(!e)return;const t=E();t.email=e,m.set("reader",t,!1),o(n.reader,t)}function A(e=!0){const t=m.get("reader")||{};if(!t.email)throw new Error("Reader email not set");t.authenticated=Boolean(e),m.set("reader",t,!1),o(n.reader,t)}function S(){const e=l("np_auth_reader");e?(k(e),A(!0)):k(l("np_auth_intention"))}function E(){return m.get("reader")||{}}function b(){const e=E(),t=l("np_auth_link");return!(!e?.email||!t)}const O=["pwd","link"];function P(){return l("np_otp_hash")}function R(e){return new Promise(((t,n)=>{const r=P(),a=E()?.email;return r?a?e?void fetch("",{method:"POST",headers:{Accept:"application/json"},body:new URLSearchParams({action:newspack_ras_config.otp_auth_action,email:a,hash:r,code:e})}).then((e=>e.json())).then((({success:e,message:r,data:o})=>{const i={...o,email:a,authenticated:!!e,message:r};A(!!e),e?t(i):n(i)})):n({message:"Invalid code"}):n({message:"You must provide an email"}):n({message:"Code has expired",expired:!0})}))}function I(e){if(!O.includes(e))throw new Error("Invalid authentication strategy");return p("np_auth_strategy",e),e}function T(){return P()?"otp":l("np_auth_strategy")}const j={store:m,overlays:_,on:function(e,t){if(!(e=a(e)))throw new Error("Invalid event");window.addEventListener(e,t)},off:function(e,t){if(!(e=a(e)))throw new Error("Invalid event");window.removeEventListener(e,t)},dispatchActivity:y,getActivities:g,getUniqueActivitiesBy:v,setReaderEmail:k,setAuthenticated:A,refreshAuthentication:S,getReader:E,hasAuthLink:b,getOTPHash:P,authenticateOTP:R,setAuthStrategy:I,getAuthStrategy:T,getCaptchaV3Token:window.newspack_grecaptcha?window.newspack_grecaptcha?.getCaptchaV3Token:()=>new Promise((e=>e("")))};function q(...e){e.forEach((e=>{Array.isArray(e)&&"string"==typeof e[0]?y(...e):"function"==typeof e?e(j):console.warn("Invalid newspackRAS.push argument",e)}))}window.newspackRASInitialized||function(){const e=newspack_ras_config,t=e?.authenticated_email||l("np_auth_intention"),r=!!e?.authenticated_email,a=E(),i={email:t||a?.email,authenticated:r};var s;a?.email===i?.email&&a?.authenticated===i?.authenticated||m.set("reader",i,!1),o(n.reader,i),function(){const e=newspack_ras_config.cid_cookie;l(e)||p(e,f(12))}(),(s=j).on("activity",(({detail:{action:e,data:t,timestamp:n}})=>{if("article_view"!==e)return;const r=new Date(n);r.setHours(0),r.setMinutes(0),r.setSeconds(0),r.setMilliseconds(0);const a=6-r.getDay();r.setDate(r.getDate()+a);const o=r.getTime(),i=s.store.get("article_view_per_week")||{};i[o]||(i[o]={}),i[o][t.post_id]=!0,s.store.set("article_view_per_week",i),r.setMonth(r.getMonth()+1),r.setDate(1);const c=r.getTime(),d=s.store.get("article_view_per_month")||{};d[c]||(d[c]={}),d[c][t.post_id]=!0,s.store.set("article_view_per_month",d)})),function(){if(l("np_auth_reader"))return;const e=setInterval((()=>{const t=E(),n=l("np_auth_intention");if(n&&t.email!==n)k(n);else{const t=l("np_auth_reader");t&&(k(t),A(!0),clearInterval(e))}}),1e3)}(),function(){const e=document.querySelectorAll(".newspack-newsletters-subscribe,.newspack-subscribe-form,.mc4wp-form");e.length&&e.forEach((e=>{"FORM"!==e.tagName&&(e=e.querySelector("form")),e&&e.addEventListener("submit",(()=>{m.set("is_newsletter_subscriber",!0)}))}))}(),(newspack_reader_data?.reader_activity||[]).forEach((({action:e,data:t})=>y(e,t))),function(){const e=document.referrer?new URL(document.referrer).hostname:"";e&&e!==window.location.hostname&&m.set("referrer",e.replace("www.","").trim().toLowerCase())}(),window.newspackReaderActivation=j,window.newspackRAS=window.newspackRAS||[],window.newspackRAS.forEach((e=>q(e))),window.newspackRAS.push=q,window.newspackRASInitialized=!0}();const x=j;var M=window;for(var L in t)M[L]=t[L];t.__esModule&&Object.defineProperty(M,"__esModule",{value:!0})})();