(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[3012,7936,8294,7246],{7340:(e,t,n)=>{!function(e){"use strict";e.multiplexingMode=function(t){var n=Array.prototype.slice.call(arguments,1);function r(e,t,n,r){if("string"==typeof t){var o=e.indexOf(t,n);return r&&o>-1?o+t.length:o}var a=t.exec(n?e.slice(n):e);return a?a.index+n+(r?a[0].length:0):-1}return{startState:function(){return{outer:e.startState(t),innerActive:null,inner:null,startingInner:!1}},copyState:function(n){return{outer:e.copyState(t,n.outer),innerActive:n.innerActive,inner:n.innerActive&&e.copyState(n.innerActive.mode,n.inner),startingInner:n.startingInner}},token:function(o,a){if(a.innerActive){var i=a.innerActive;if(l=o.string,!i.close&&o.sol())return a.innerActive=a.inner=null,this.token(o,a);if((f=i.close&&!a.startingInner?r(l,i.close,o.pos,i.parseDelimiters):-1)==o.pos&&!i.parseDelimiters)return o.match(i.close),a.innerActive=a.inner=null,i.delimStyle&&i.delimStyle+" "+i.delimStyle+"-close";f>-1&&(o.string=l.slice(0,f));var s=i.mode.token(o,a.inner);return f>-1?o.string=l:o.pos>o.start&&(a.startingInner=!1),f==o.pos&&i.parseDelimiters&&(a.innerActive=a.inner=null),i.innerStyle&&(s=s?s+" "+i.innerStyle:i.innerStyle),s}for(var c=1/0,l=o.string,u=0;u<n.length;++u){var f,p=n[u];if((f=r(l,p.open,o.pos))==o.pos){p.parseDelimiters||o.match(p.open),a.startingInner=!!p.parseDelimiters,a.innerActive=p;var d=0;if(t.indent){var m=t.indent(a.outer,"","");m!==e.Pass&&(d=m)}return a.inner=e.startState(p.mode,d),p.delimStyle&&p.delimStyle+" "+p.delimStyle+"-open"}-1!=f&&f<c&&(c=f)}c!=1/0&&(o.string=l.slice(0,c));var h=t.token(o,a.outer);return c!=1/0&&(o.string=l),h},indent:function(n,r,o){var a=n.innerActive?n.innerActive.mode:t;return a.indent?a.indent(n.innerActive?n.inner:n.outer,r,o):e.Pass},blankLine:function(r){var o=r.innerActive?r.innerActive.mode:t;if(o.blankLine&&o.blankLine(r.innerActive?r.inner:r.outer),r.innerActive)"\n"===r.innerActive.close&&(r.innerActive=r.inner=null);else for(var a=0;a<n.length;++a){var i=n[a];"\n"===i.open&&(r.innerActive=i,r.inner=e.startState(i.mode,o.indent?o.indent(r.outer,"",""):0))}},electricChars:t.electricChars,innerMode:function(e){return e.inner?{state:e.inner,mode:e.innerActive.mode}:{state:e.outer,mode:t}}}}}(n(5237))},2580:(e,t,n)=>{!function(e){"use strict";e.overlayMode=function(t,n,r){return{startState:function(){return{base:e.startState(t),overlay:e.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(r){return{base:e.copyState(t,r.base),overlay:e.copyState(n,r.overlay),basePos:r.basePos,baseCur:null,overlayPos:r.overlayPos,overlayCur:null}},token:function(e,o){return(e!=o.streamSeen||Math.min(o.basePos,o.overlayPos)<e.start)&&(o.streamSeen=e,o.basePos=o.overlayPos=e.start),e.start==o.basePos&&(o.baseCur=t.token(e,o.base),o.basePos=e.pos),e.start==o.overlayPos&&(e.pos=e.start,o.overlayCur=n.token(e,o.overlay),o.overlayPos=e.pos),e.pos=Math.min(o.basePos,o.overlayPos),null==o.overlayCur?o.baseCur:null!=o.baseCur&&o.overlay.combineTokens||r&&null==o.overlay.combineTokens?o.baseCur+" "+o.overlayCur:o.overlayCur},indent:t.indent&&function(e,n,r){return t.indent(e.base,n,r)},electricChars:t.electricChars,innerMode:function(e){return{state:e.base,mode:t}},blankLine:function(e){var o,a;return t.blankLine&&(o=t.blankLine(e.base)),n.blankLine&&(a=n.blankLine(e.overlay)),null==a?o:r&&null!=o?o+" "+a:a}}}}(n(5237))},4856:(e,t,n)=>{!function(e){"use strict";function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e.unicode&&(n+="u"),e=e.source):e=String(e),new RegExp((!1===t?"":"^")+"(?:"+e+")",n)}function r(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "));return t}function o(e,o){(e.next||e.push)&&t(o,e.next||e.push),this.regex=n(e.regex),this.token=r(e.token),this.data=e}function a(e,t){return function(n,r){if(r.pending){var o=r.pending.shift();return 0==r.pending.length&&(r.pending=null),n.pos+=o.text.length,o.token}if(r.local){if(r.local.end&&n.match(r.local.end)){var a=r.local.endToken||null;return r.local=r.localState=null,a}var i;return a=r.local.mode.token(n,r.localState),r.local.endScan&&(i=r.local.endScan.exec(n.current()))&&(n.pos=n.start+i.index),a}for(var c=e[r.state],l=0;l<c.length;l++){var u=c[l],f=(!u.data.sol||n.sol())&&n.match(u.regex);if(f){u.data.next?r.state=u.data.next:u.data.push?((r.stack||(r.stack=[])).push(r.state),r.state=u.data.push):u.data.pop&&r.stack&&r.stack.length&&(r.state=r.stack.pop()),u.data.mode&&s(t,r,u.data.mode,u.token),u.data.indent&&r.indent.push(n.indentation()+t.indentUnit),u.data.dedent&&r.indent.pop();var p=u.token;if(p&&p.apply&&(p=p(f)),f.length>2&&u.token&&"string"!=typeof u.token){for(var d=2;d<f.length;d++)f[d]&&(r.pending||(r.pending=[])).push({text:f[d],token:u.token[d-1]});return n.backUp(f[0].length-(f[1]?f[1].length:0)),p[0]}return p&&p.join?p[0]:p}}return n.next(),null}}function i(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var n=0;for(var r in e)if(e.hasOwnProperty(r)){if(!t.hasOwnProperty(r)||!i(e[r],t[r]))return!1;n++}for(var r in t)t.hasOwnProperty(r)&&n--;return 0==n}function s(t,r,o,a){var s;if(o.persistent)for(var c=r.persistentStates;c&&!s;c=c.next)(o.spec?i(o.spec,c.spec):o.mode==c.mode)&&(s=c);var l=s?s.mode:o.mode||e.getMode(t,o.spec),u=s?s.state:e.startState(l);o.persistent&&!s&&(r.persistentStates={mode:l,spec:o.spec,state:u,next:r.persistentStates}),r.localState=u,r.local={mode:l,end:o.end&&n(o.end),endScan:o.end&&!1!==o.forceEnd&&n(o.end,!1),endToken:a&&a.join?a[a.length-1]:a}}function c(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}function l(t,n){return function(r,o,a){if(r.local&&r.local.mode.indent)return r.local.mode.indent(r.localState,o,a);if(null==r.indent||r.local||n.dontIndentStates&&c(r.state,n.dontIndentStates)>-1)return e.Pass;var i=r.indent.length-1,s=t[r.state];e:for(;;){for(var l=0;l<s.length;l++){var u=s[l];if(u.data.dedent&&!1!==u.data.dedentIfLineStart){var f=u.regex.exec(o);if(f&&f[0]){i--,(u.next||u.push)&&(s=t[u.next||u.push]),o=o.slice(f[0].length);continue e}}}break}return i<0?0:r.indent[i]}}e.defineSimpleMode=function(t,n){e.defineMode(t,(function(t){return e.simpleMode(t,n)}))},e.simpleMode=function(n,r){t(r,"start");var i={},s=r.meta||{},c=!1;for(var u in r)if(u!=s&&r.hasOwnProperty(u))for(var f=i[u]=[],p=r[u],d=0;d<p.length;d++){var m=p[d];f.push(new o(m,r)),(m.indent||m.dedent)&&(c=!0)}var h={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:c?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0));for(var r=t.persistentStates;r;r=r.next)n.persistentStates={mode:r.mode,spec:r.spec,state:r.state==t.localState?n.localState:e.copyState(r.mode,r.state),next:n.persistentStates};return n},token:a(i,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:l(i,s)};if(s)for(var v in s)s.hasOwnProperty(v)&&(h[v]=s[v]);return h}}(n(5237))},7936:(e,t,n)=>{!function(e){"use strict";e.defineMode("coffeescript",(function(e,t){var n="error";function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var o=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,a=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,i=/^[_A-Za-z$][_A-Za-z$0-9]*/,s=/^@[_A-Za-z$][_A-Za-z$0-9]*/,c=r(["and","or","not","is","isnt","in","instanceof","typeof"]),l=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],u=["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"],f=r(l.concat(u));l=r(l);var p=/^('{3}|\"{3}|['\"])/,d=/^(\/{3}|\/)/,m=r(["Infinity","NaN","undefined","null","true","false","on","off","yes","no"]);function h(e,t){if(e.sol()){null===t.scope.align&&(t.scope.align=!1);var r=t.scope.offset;if(e.eatSpace()){var l=e.indentation();return l>r&&"coffee"==t.scope.type?"indent":l<r?"dedent":null}r>0&&x(e,t)}if(e.eatSpace())return null;var u=e.peek();if(e.match("####"))return e.skipToEnd(),"comment";if(e.match("###"))return t.tokenize=g,t.tokenize(e,t);if("#"===u)return e.skipToEnd(),"comment";if(e.match(/^-?[0-9\.]/,!1)){var h=!1;if(e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(h=!0),e.match(/^-?\d+\.\d*/)&&(h=!0),e.match(/^-?\.\d+/)&&(h=!0),h)return"."==e.peek()&&e.backUp(1),"number";var k=!1;if(e.match(/^-?0x[0-9a-f]+/i)&&(k=!0),e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(k=!0),e.match(/^-?0(?![\dx])/i)&&(k=!0),k)return"number"}if(e.match(p))return t.tokenize=v(e.current(),!1,"string"),t.tokenize(e,t);if(e.match(d)){if("/"!=e.current()||e.match(/^.*\//,!1))return t.tokenize=v(e.current(),!0,"string-2"),t.tokenize(e,t);e.backUp(1)}return e.match(o)||e.match(c)?"operator":e.match(a)?"punctuation":e.match(m)?"atom":e.match(s)||t.prop&&e.match(i)?"property":e.match(f)?"keyword":e.match(i)?"variable":(e.next(),n)}function v(e,r,o){return function(a,i){for(;!a.eol();)if(a.eatWhile(/[^'"\/\\]/),a.eat("\\")){if(a.next(),r&&a.eol())return o}else{if(a.match(e))return i.tokenize=h,o;a.eat(/['"\/]/)}return r&&(t.singleLineStringErrors?o=n:i.tokenize=h),o}}function g(e,t){for(;!e.eol();){if(e.eatWhile(/[^#]/),e.match("###")){t.tokenize=h;break}e.eatWhile("#")}return"comment"}function k(t,n,r){r=r||"coffee";for(var o=0,a=!1,i=null,s=n.scope;s;s=s.prev)if("coffee"===s.type||"}"==s.type){o=s.offset+e.indentUnit;break}"coffee"!==r?(a=null,i=t.column()+t.current().length):n.scope.align&&(n.scope.align=!1),n.scope={offset:o,type:r,prev:n.scope,align:a,alignOffset:i}}function x(e,t){if(t.scope.prev){if("coffee"===t.scope.type){for(var n=e.indentation(),r=!1,o=t.scope;o;o=o.prev)if(n===o.offset){r=!0;break}if(!r)return!0;for(;t.scope.prev&&t.scope.offset!==n;)t.scope=t.scope.prev;return!1}return t.scope=t.scope.prev,!1}}function y(e,t){var r=t.tokenize(e,t),o=e.current();"return"===o&&(t.dedent=!0),(("->"===o||"=>"===o)&&e.eol()||"indent"===r)&&k(e,t);var a="[({".indexOf(o);if(-1!==a&&k(e,t,"])}".slice(a,a+1)),l.exec(o)&&k(e,t),"then"==o&&x(e,t),"dedent"===r&&x(e,t))return n;if(-1!==(a="])}".indexOf(o))){for(;"coffee"==t.scope.type&&t.scope.prev;)t.scope=t.scope.prev;t.scope.type==o&&(t.scope=t.scope.prev)}return t.dedent&&e.eol()&&("coffee"==t.scope.type&&t.scope.prev&&(t.scope=t.scope.prev),t.dedent=!1),r}return{startState:function(e){return{tokenize:h,scope:{offset:e||0,type:"coffee",prev:null,align:!1},prop:!1,dedent:0}},token:function(e,t){var n=null===t.scope.align&&t.scope;n&&e.sol()&&(n.align=!1);var r=y(e,t);return r&&"comment"!=r&&(n&&(n.align=!0),t.prop="punctuation"==r&&"."==e.current()),r},indent:function(e,t){if(e.tokenize!=h)return 0;var n=e.scope,r=t&&"])}".indexOf(t.charAt(0))>-1;if(r)for(;"coffee"==n.type&&n.prev;)n=n.prev;var o=r&&n.type===t.charAt(0);return n.align?n.alignOffset-(o?1:0):(o?n.prev:n).offset},lineComment:"#",fold:"indent"}})),e.defineMIME("application/vnd.coffeescript","coffeescript"),e.defineMIME("text/x-coffeescript","coffeescript"),e.defineMIME("text/coffeescript","coffeescript")}(n(5237))},8294:(e,t,n)=>{!function(e){"use strict";e.defineSimpleMode("handlebars-tags",{start:[{regex:/\{\{\{/,push:"handlebars_raw",token:"tag"},{regex:/\{\{!--/,push:"dash_comment",token:"comment"},{regex:/\{\{!/,push:"comment",token:"comment"},{regex:/\{\{/,push:"handlebars",token:"tag"}],handlebars_raw:[{regex:/\}\}\}/,pop:!0,token:"tag"}],handlebars:[{regex:/\}\}/,pop:!0,token:"tag"},{regex:/"(?:[^\\"]|\\.)*"?/,token:"string"},{regex:/'(?:[^\\']|\\.)*'?/,token:"string"},{regex:/>|[#\/]([A-Za-z_]\w*)/,token:"keyword"},{regex:/(?:else|this)\b/,token:"keyword"},{regex:/\d+/i,token:"number"},{regex:/=|~|@|true|false/,token:"atom"},{regex:/(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/,token:"variable-2"}],dash_comment:[{regex:/--\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],comment:[{regex:/\}\}/,pop:!0,token:"comment"},{regex:/./,token:"comment"}],meta:{blockCommentStart:"{{--",blockCommentEnd:"--}}"}}),e.defineMode("handlebars",(function(t,n){var r=e.getMode(t,"handlebars-tags");return n&&n.base?e.multiplexingMode(e.getMode(t,n.base),{open:"{{",close:/\}\}\}?/,mode:r,parseDelimiters:!0}):r})),e.defineMIME("text/x-handlebars-template","handlebars")}(n(5237),n(4856),n(7340))},7246:(e,t,n)=>{!function(e){"use strict";e.defineMode("sass",(function(t){var n=e.mimeModes["text/css"],r=n.propertyKeywords||{},o=n.colorKeywords||{},a=n.valueKeywords||{},i=n.fontProperties||{};function s(e){return new RegExp("^"+e.join("|"))}var c,l=new RegExp("^"+["true","false","null","auto"].join("|")),u=s(["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not",";","\\{","\\}",":"]),f=/^::?[a-zA-Z_][\w\-]*/;function p(e){return!e.peek()||e.match(/\s+$/,!1)}function d(e,t){var n=e.peek();return")"===n?(e.next(),t.tokenizer=x,"operator"):"("===n?(e.next(),e.eatSpace(),"operator"):"'"===n||'"'===n?(t.tokenizer=h(e.next()),"string"):(t.tokenizer=h(")",!1),"string")}function m(e,t){return function(n,r){return n.sol()&&n.indentation()<=e?(r.tokenizer=x,x(n,r)):(t&&n.skipTo("*/")?(n.next(),n.next(),r.tokenizer=x):n.skipToEnd(),"comment")}}function h(e,t){function n(r,o){var a=r.next(),i=r.peek(),s=r.string.charAt(r.pos-2);return"\\"!==a&&i===e||a===e&&"\\"!==s?(a!==e&&t&&r.next(),p(r)&&(o.cursorHalf=0),o.tokenizer=x,"string"):"#"===a&&"{"===i?(o.tokenizer=v(n),r.next(),"operator"):"string"}return null==t&&(t=!0),n}function v(e){return function(t,n){return"}"===t.peek()?(t.next(),n.tokenizer=e,"operator"):x(t,n)}}function g(e){if(0==e.indentCount){e.indentCount++;var n=e.scopes[0].offset+t.indentUnit;e.scopes.unshift({offset:n})}}function k(e){1!=e.scopes.length&&e.scopes.shift()}function x(e,t){var n=e.peek();if(e.match("/*"))return t.tokenizer=m(e.indentation(),!0),t.tokenizer(e,t);if(e.match("//"))return t.tokenizer=m(e.indentation(),!1),t.tokenizer(e,t);if(e.match("#{"))return t.tokenizer=v(x),"operator";if('"'===n||"'"===n)return e.next(),t.tokenizer=h(n),"string";if(t.cursorHalf){if("#"===n&&(e.next(),e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)))return p(e)&&(t.cursorHalf=0),"number";if(e.match(/^-?[0-9\.]+/))return p(e)&&(t.cursorHalf=0),"number";if(e.match(/^(px|em|in)\b/))return p(e)&&(t.cursorHalf=0),"unit";if(e.match(l))return p(e)&&(t.cursorHalf=0),"keyword";if(e.match(/^url/)&&"("===e.peek())return t.tokenizer=d,p(e)&&(t.cursorHalf=0),"atom";if("$"===n)return e.next(),e.eatWhile(/[\w-]/),p(e)&&(t.cursorHalf=0),"variable-2";if("!"===n)return e.next(),t.cursorHalf=0,e.match(/^[\w]+/)?"keyword":"operator";if(e.match(u))return p(e)&&(t.cursorHalf=0),"operator";if(e.eatWhile(/[\w-]/))return p(e)&&(t.cursorHalf=0),c=e.current().toLowerCase(),a.hasOwnProperty(c)?"atom":o.hasOwnProperty(c)?"keyword":r.hasOwnProperty(c)?(t.prevProp=e.current().toLowerCase(),"property"):"tag";if(p(e))return t.cursorHalf=0,null}else{if("-"===n&&e.match(/^-\w+-/))return"meta";if("."===n){if(e.next(),e.match(/^[\w-]+/))return g(t),"qualifier";if("#"===e.peek())return g(t),"tag"}if("#"===n){if(e.next(),e.match(/^[\w-]+/))return g(t),"builtin";if("#"===e.peek())return g(t),"tag"}if("$"===n)return e.next(),e.eatWhile(/[\w-]/),"variable-2";if(e.match(/^-?[0-9\.]+/))return"number";if(e.match(/^(px|em|in)\b/))return"unit";if(e.match(l))return"keyword";if(e.match(/^url/)&&"("===e.peek())return t.tokenizer=d,"atom";if("="===n&&e.match(/^=[\w-]+/))return g(t),"meta";if("+"===n&&e.match(/^\+[\w-]+/))return"variable-3";if("@"===n&&e.match("@extend")&&(e.match(/\s*[\w]/)||k(t)),e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/))return g(t),"def";if("@"===n)return e.next(),e.eatWhile(/[\w-]/),"def";if(e.eatWhile(/[\w-]/)){if(e.match(/ *: *[\w-\+\$#!\("']/,!1)){c=e.current().toLowerCase();var s=t.prevProp+"-"+c;return r.hasOwnProperty(s)?"property":r.hasOwnProperty(c)?(t.prevProp=c,"property"):i.hasOwnProperty(c)?"property":"tag"}return e.match(/ *:/,!1)?(g(t),t.cursorHalf=1,t.prevProp=e.current().toLowerCase(),"property"):(e.match(/ *,/,!1)||g(t),"tag")}if(":"===n)return e.match(f)?"variable-3":(e.next(),t.cursorHalf=1,"operator")}return e.match(u)?"operator":(e.next(),null)}function y(e,n){e.sol()&&(n.indentCount=0);var r=n.tokenizer(e,n),o=e.current();if("@return"!==o&&"}"!==o||k(n),null!==r){for(var a=e.pos-o.length+t.indentUnit*n.indentCount,i=[],s=0;s<n.scopes.length;s++){var c=n.scopes[s];c.offset<=a&&i.push(c)}n.scopes=i}return r}return{startState:function(){return{tokenizer:x,scopes:[{offset:0,type:"sass"}],indentCount:0,cursorHalf:0,definedVars:[],definedMixins:[]}},token:function(e,t){var n=y(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e){return e.scopes[0].offset},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"indent"}}),"css"),e.defineMIME("text/x-sass","sass")}(n(5237),n(8656))},3012:(e,t,n)=>{!function(){"use strict";var e,t;e=n(5237),n(2580),n(576),n(6792),n(7936),n(8656),n(7246),n(1070),n(3588),n(8294),t={script:[["lang",/coffee(script)?/,"coffeescript"],["type",/^(?:text|application)\/(?:x-)?coffee(?:script)?$/,"coffeescript"],["lang",/^babel$/,"javascript"],["type",/^text\/babel$/,"javascript"],["type",/^text\/ecmascript-\d+$/,"javascript"]],style:[["lang",/^stylus$/i,"stylus"],["lang",/^sass$/i,"sass"],["lang",/^less$/i,"text/x-less"],["lang",/^scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?styl(us)?$/i,"stylus"],["type",/^text\/sass/i,"sass"],["type",/^(text\/)?(x-)?scss$/i,"text/x-scss"],["type",/^(text\/)?(x-)?less$/i,"text/x-less"]],template:[["lang",/^vue-template$/i,"vue"],["lang",/^pug$/i,"pug"],["lang",/^handlebars$/i,"handlebars"],["type",/^(text\/)?(x-)?pug$/i,"pug"],["type",/^text\/x-handlebars-template$/i,"handlebars"],[null,null,"vue-template"]]},e.defineMode("vue-template",(function(t,n){var r={token:function(e){if(e.match(/^\{\{.*?\}\}/))return"meta mustache";for(;e.next()&&!e.match("{{",!1););return null}};return e.overlayMode(e.getMode(t,n.backdrop||"text/html"),r)})),e.defineMode("vue",(function(n){return e.getMode(n,{name:"htmlmixed",tags:t})}),"htmlmixed","xml","javascript","coffeescript","css","sass","stylus","pug","handlebars"),e.defineMIME("script/x-vue","vue"),e.defineMIME("text/x-vue","vue")}()}}]);