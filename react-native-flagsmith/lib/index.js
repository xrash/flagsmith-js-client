!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.flagsmith=e():t.flagsmith=e()}(global,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i=n(1);e.default=i({})},function(t,e,n){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e,n=1;n<arguments.length;n++)e=null==arguments[n]?{}:arguments[n],n%2?r(e,!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(e).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}));return t}function o(t,e){for(var n,i=0;i<e.length;i++)(n=e[i]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l,u,f="https://api.bullet-train.io/api/v1/",c=n(2),g=function(t){return"Attempted to "+t+" a user before calling flagsmith.init. Call flagsmith.init first, if you wish to prevent it sending a request for flags, call init with preventFetch:true."},v=function(){function t(e){var n=this;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),s(this,"getJSON",(function(t,e,i){var r={method:e||"GET",body:i,headers:{"x-environment-key":n.environmentID}};return"GET"!==e&&(r.headers["Content-Type"]="application/json; charset=utf-8"),l(t,r).then((function(t){return t.text().then((function(e){var n=e;try{n=JSON.parse(e)}catch(t){}return t.ok?n:Promise.reject(n)}))}))})),s(this,"getFlags",(function(t,e){var i=n.onChange,r=n.onError,o=n.identity,s=n.api,l=(n.disableCache,!1),u=function(t,e){var r=t.flags,o=t.traits,s={},l={};if(o=o||[],(r=r||[]).forEach((function(t){s[t.feature.name.toLowerCase().replace(/ /g,"_")]={id:t.feature.id,enabled:t.enabled,value:t.feature_state_value}})),o.forEach((function(t){l[t.trait_key.toLowerCase().replace(/ /g,"_")]=t.trait_value})),n.oldFlags=a({},n.flags),e){var u={};e.map((function(t){u[t.name]=t})),n.segments=u}var f=c(n.flags,s),g=c(n.traits,l);n.flags=s,n.traits=l,n.updateStorage(),i&&i(n.oldFlags,{isFromServer:!0,flagsChanged:!f,traitsChanged:!g})};return o?Promise.all([n.getJSON(s+"identities/?identifier="+encodeURIComponent(o))]).then((function(t){u(t[0],t[1])})).catch((function(t){var e=t.message;r&&r({message:e})})):Promise.all([n.getJSON(s+"flags/")]).then((function(e){u({flags:e[0]},null),t&&!l&&(l=!0,t())})).catch((function(t){e&&!l&&(l=!0,e(t)),r&&r(t)}))})),s(this,"analyticsFlags",(function(){var t=n.api;if(0!==Object.getOwnPropertyNames(n.evaluationEvent).length)return n.getJSON(t+"analytics/flags/","POST",JSON.stringify(n.evaluationEvent)).then((function(){state=n.getState(),n.setState(a({},state,{evaluationEvent:{}})),n.updateEventStorage()})).catch((function(t){n.log("Exception fetching evaluationEvent",t)}))})),s(this,"evaluateFlag",(function(t){n.sendFlagEvaluationEvents&&t&&(void 0===n.evaluationEvent[t.id]&&(n.evaluationEvent[t.id]=0),n.evaluationEvent[t.id]+=1),n.updateEventStorage()})),s(this,"getValue",(function(t){var e=n.flags&&n.flags[t],i=null;return e&&(i=e.value),n.evaluateFlag(n.flags[t]),i})),s(this,"getTrait",(function(t){return n.traits&&n.traits[t]})),s(this,"setTrait",(function(t,e){var i=n.getJSON,r=n.identity,a=n.api;if(a)return i("".concat(a,"traits/"),"POST",JSON.stringify({identity:{identifier:r},trait_key:t,trait_value:e})).then((function(){n.initialised&&n.getFlags()}));console.error(g("setTrait"))})),s(this,"setTraits",(function(t){var e=n.getJSON,r=n.identity,a=n.api;if(a){t&&"object"===i(t)||console.error("Expected object for flagsmith.setTraits");var o=Object.keys(t).map((function(e){return{identity:{identifier:r},trait_key:e,trait_value:t[e]}}));return e("".concat(a,"traits/bulk/"),"PUT",JSON.stringify(o)).then((function(){n.initialised&&n.getFlags()}))}console.error(g("setTraits"))})),s(this,"incrementTrait",(function(t,e){var i=n.getJSON,r=n.identity,a=n.api;return i("".concat(a,"traits/increment-value/"),"POST",JSON.stringify({trait_key:t,increment_by:e,identifier:r})).then(n.getFlags)})),s(this,"hasFeature",(function(t){var e=n.flags&&n.flags[t],i=!1;return e&&e.enabled&&(i=!0),n.evaluateFlag(n.flags[t]),i})),l=e.fetch?e.fetch:global.fetch,u=e.AsyncStorage}return function(t,e,n){e&&o(t.prototype,e),n&&o(t,n)}(t,[{key:"init",value:function(t){var e=this,n=t.environmentID,i=t.api,r=void 0===i?f:i,o=t.onChange,s=t.cacheFlags,l=t.onError,c=t.defaultFlags,g=t.preventFetch,v=t.enableLogs,h=t.sendFlagEvaluationEvents,p=t.AsyncStorage,y=t.state;return new Promise((function(t,i){if(e.environmentID=n,e.api=r,e.interval=[],e.onChange=o,e.onError=l,e.enableLogs=v,e.sendFlagEvaluationEvents=!!h&&h,e.flags=Object.assign({},c)||{},e.initialised=!0,e.ticks=1e4,e.evaluationEvent={},e.timer=e.enableLogs?(new Date).valueOf():null,p&&(u=p),e.cacheFlags=void 0!==u&&s,e.setState(y),!n)throw i("Please specify a environment id"),"Please specify a environment id";e.sendFlagEvaluationEvents&&(e.interval.push(setInterval(e.analyticsFlags,e.ticks)),u.getItem("BULLET_TRAIN_EVENT",(function(t,n){if(n){var i=JSON.parse(n);i&&(y=e.getState(),e.log("Retrieved events from cache",n),e.setState(a({},y,{evaluationEvent:i})))}}))),s?u.getItem("BULLET_TRAIN_DB",(function(n,r){if(r)try{var a=JSON.parse(r);a&&a.api===e.api&&a.environmentID===e.environmentID&&(e.setState(a),e.log("Retrieved flags from cache",a)),e.flags?(e.onChange&&e.onChange(null,{isFromServer:!1}),e.oldFlags=e.flags,t(),!g&&e.getFlags(Promise.resolve,Promise.reject)):!g&&e.getFlags(t,i)}catch(t){e.log("Exception fetching cached logs",t)}else g||e.getFlags(t,i)})):!g&&e.getFlags(t,i)}))}},{key:"getAllFlags",value:function(){return this.flags}},{key:"identify",value:function(t){return this.identity=t,this.initialised&&!this.interval.length?this.getFlags():Promise.resolve()}},{key:"getState",value:function(){return{api:this.api,environmentID:this.environmentID,flags:this.flags,identity:this.identity,segments:this.segments,traits:this.traits,evaluationEvent:this.evaluationEvent}}},{key:"setState",value:function(t){t&&(this.initialised=!0,this.api=t.api||this.api||f,this.environmentID=t.environmentID||this.environmentID,this.flags=t.flags||this.flags,this.identity=t.identity||this.identity,this.segments=t.segments||this.segments,this.traits=t.traits||this.traits,this.evaluationEvent=t.evaluationEvent||this.evaluationEvent)}},{key:"log",value:function(){if(this.enableLogs){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];console.log.apply(this,["FLAGSMITH:",(new Date).valueOf()-this.timer,"ms"].concat(e))}}},{key:"updateStorage",value:function(){if(this.cacheFlags){var t=JSON.stringify(this.getState());this.log("Setting storage",t),u.setItem("BULLET_TRAIN_DB",t)}}},{key:"updateEventStorage",value:function(){if(this.sendFlagEvaluationEvents){var t=JSON.stringify(this.getState().evaluationEvent);this.log("Setting event storage",t),u.setItem("BULLET_TRAIN_EVENT",t)}}},{key:"logout",value:function(){this.identity=null,this.segments=null,this.traits=null,this.initialised&&!this.interval.length&&this.getFlags()}},{key:"startListening",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1e3;this.interval.length||this.interval.push(setInterval(this.getFlags,t))}},{key:"getSegments",value:function(){}},{key:"stopListening",value:function(){this.interval.forEach((function(t){clearInterval(t)}))}}]),t}();t.exports=function(t){var e=t.fetch,n=t.AsyncStorage;return new v({fetch:e,AsyncStorage:n})}},function(t,e,n){"use strict";t.exports=function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var i,r,a;if(Array.isArray(e)){if((i=e.length)!=n.length)return!1;for(r=i;0!=r--;)if(!t(e[r],n[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((i=(a=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(r=i;0!=r--;)if(!Object.prototype.hasOwnProperty.call(n,a[r]))return!1;for(r=i;0!=r--;){var o=a[r];if(!t(e[o],n[o]))return!1}return!0}return e!=e&&n!=n}}])}));