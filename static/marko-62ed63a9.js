$rmod.main("/marko@2.7.29","runtime/marko-runtime");
$rmod.dep("","marko","2.7.29");
$rmod.main("/marko@2.7.29/runtime","marko-runtime");
$rmod.def("/marko@2.7.29/runtime/helpers",function(r,t,n,e,o){"use strict";function a(r){return null==r?!1:Array.isArray(r)?!!r.length:""===r?!1:!0}function i(r){function t(r,n){t.renderer(r,n)}return t.renderer=function(n,e){var o=r.renderer||r.render;if("function"!=typeof o)throw new Error("Invalid tag handler: "+r);t.renderer=o,o(n,e)},t}var u,f=r("/$/marko/$/raptor-util/escapeXml"),s=f.attr,d=r("./"),c=r("/$/marko/$/raptor-util/extend"),l=r("/$/marko/$/raptor-util/attr"),p=r("/$/marko/$/raptor-util/attrs"),y=r("/$/marko/$/raptor-util/forEach"),g=/.html|\.marko(.xml|.html)?$/,h=r("/$/marko/$/raptor-util/arrayFromArguments"),m=r("/$/marko/$/raptor-logging").logger(n),v=r;try{u=v("view-engine")}catch($){}var k=0;n.exports={s:function(r){return null==r?"":r},fv:function(r,t){if(r){r.forEach||(r=[r]);for(var n=0,e=r.length,o={getLength:function(){return e},isLast:function(){return n===e-1},isFirst:function(){return 0===n},getIndex:function(){return n}};e>n;n++){var a=r[n];t(a||"",o)}}},f:y,fl:function(r,t){null!=r&&(Array.isArray(r)||(r=[r]),t(r,0,r.length))},fp:function(r,t){if(r)for(var n in r)r.hasOwnProperty(n)&&t(n,r[n])},e:function(r){return!a(r)},ne:a,x:f,xa:s,nx:function(r){return{toString:function(){return r}}},a:l,as:p,l:function(r,t){return"string"==typeof r?("."===r.charAt(0)&&t.resolve&&(r=t.resolve(r)),!u||g.test(r)?d.load(r):u.load(r)):r.render?r:d.load(r)},r:function(r){var t=r.renderer;return t?t:"function"==typeof r?r:"function"==typeof(t=r.render)?t:i(r)},t:function(r,t,n,e,o){n||(n={});var a,i,u,f,s;if(o&&(a=o.hasOutParam,u=o.parent,i=o.targetProperty,f=o.hasNestedTags,s=o.isRepeated),e&&(f?e(r,n):(n.renderBody=e,n.invokeBody=function(){if(k||(k=1,m.warn("invokeBody(...) deprecated. Use renderBody(out) instead.",(new Error).stack)),a)e.apply(this,arguments);else{var t=h(arguments);t.unshift(r),e.apply(this,t)}})),t)t(n,r);else if(i)if(s){var d=u[i];d?d.push(n):u[i]=[n]}else u[i]=n},c:function(r,t){var n=r.captureString(t);return{toString:function(){return n}}},i:function(r,t,n){if(t){if(n.body&&(n.invokeBody=function(){return k||(k=1,m.warn("data.invokeBody() deprecated. Use data.body instead.",(new Error).stack)),n.body}),"string"==typeof t)d.render(t,n,r);else{if("function"!=typeof t.render)throw new Error("Invalid template");t.render(n,r)}return this}},xt:c}});
$rmod.remap("/marko@2.7.29/runtime/loader","loader_browser");
$rmod.def("/marko@2.7.29/runtime/loader_browser",function(r,o,e,n,t){e.exports=function(o){return r(o)}});
$rmod.def("/marko@2.7.29/runtime/marko-runtime",function(e,t,r,n,i){"use strict";function o(e,t,r,n){var i=new p;return r&&m(i.global,r),e(t,i),i.end().on("finish",function(){n(null,i.getOutput(),i)}).once("error",n)}function u(e,t,r){this.path=e,this._=t,this._options=r&&r.buffer===!1?null:h}function s(e){return function(t,r){e._(t,r)}}function a(e,t){if(e.render)return e;var r=e.create||e,n=r.loaded;return n||(n=r.loaded=new u(t),n.c(r)),n}function l(e,t,r){if(!e)throw new Error('"templatePath" is required');if(1===arguments.length);else if(2===arguments.length){var n=arguments[arguments.length-1];"string"!=typeof n&&(r=arguments[1],t=void 0)}else if(3!==arguments.length)throw new Error("Illegal arguments");var i;return i="string"==typeof e?a(f(e,t,r),e):e.render?e:a(e),r&&null!=r.buffer&&(i=new u(i.path,s(i),r)),i}t.c=function(e){return new u(e)};var f,c,h={buffer:!0},d=e("/$/marko/$/async-writer"),g=e("./helpers"),p=d.AsyncWriter,m=e("/$/marko/$/raptor-util/extend");t.AsyncWriter=p;var _,w,b="stream";try{w=e.resolve(b)}catch(y){}w&&(_=e(w)),u.prototype={c:function(e){this._=e(g)},renderSync:function(e){var t=new p;return t.sync(),e.$global&&(t.global=m(t.global,e.$global),delete e.$global),this._(e,t),t.getOutput()},render:function(e,t,r){var n,i,u=this._;if(e?(n=e,(i=e.$global)&&delete e.$global):n={},"function"==typeof t)return o(u,n,i,t);var s=t,a=!1;return 3===arguments.length?(s&&s.isAsyncWriter||(s=new p(s),a=!0),s.on("finish",function(){r(null,s.getOutput(),s)}).once("error",r)):s&&s.isAsyncWriter||(s=d.create(s,this._options),a=!0),i&&m(s.global,i),u(n,s),a?s.end():s},stream:function(e){if(!_)throw new Error("Module not found: stream");return new c(this,e,this._options)}},_&&(c=function(e,t,r){c.$super.call(this),this._t=e,this._d=t,this._options=r,this._rendered=!1},c.prototype={write:function(e){null!=e&&this.push(e)},end:function(){this.push(null)},_read:function(){if(!this._rendered){this._rendered=!0;var e=this._t,t=this._d,r=d.create(this,this._options);e.render(t,r),r.end()}}},e("/$/marko/$/raptor-util/inherit")(c,_.Readable)),t.load=l,t.render=function(e,t,r){return l(e).render(t,r)},t.stream=function(e,t){return l(e).stream(t)},t.createWriter=function(e){return new p(e)},t.helpers=g,t.Template=u,f=e("./loader")});