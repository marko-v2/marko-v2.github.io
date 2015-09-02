$rmod.main("/marko@2.7.20","runtime/marko-runtime");
$rmod.dep("","marko","2.7.20");
$rmod.main("/marko@2.7.20/runtime","marko-runtime");
$rmod.def("/marko@2.7.20/runtime/helpers",function(e,t,n,r,i){"use strict";function y(e){return e==null?!1:Array.isArray(e)?!!e.length:e===""?!1:!0}function b(e){function t(e,n){t.renderer(e,n)}return t.renderer=function(n,r){var i=e.renderer||e.render;if(typeof renderFunc!="function")throw new Error("Invalid tag handler: "+e);t.renderer=i,i(n,r)},t}var s=e("/$/marko/$/raptor-util/escapeXml"),o=s.attr,u=e("./"),a=e("/$/marko/$/raptor-util/extend"),f=e("/$/marko/$/raptor-util/attr"),l=e("/$/marko/$/raptor-util/attrs"),c=e("/$/marko/$/raptor-util/forEach"),h=/.html|\.marko(.xml|.html)?$/,p=e("/$/marko/$/raptor-util/arrayFromArguments"),d=e("/$/marko/$/raptor-logging").logger(n),v,m=e;try{v=m("view-engine")}catch(g){}var w=0;n.exports={s:function(e){return e==null?"":e},fv:function(e,t){if(!e)return;e.forEach||(e=[e]);var n=0,r=e.length,i={getLength:function(){return r},isLast:function(){return n===r-1},isFirst:function(){return n===0},getIndex:function(){return n}};for(;n<r;n++){var s=e[n];t(s||"",i)}},f:c,fl:function(e,t){e!=null&&(Array.isArray(e)||(e=[e]),t(e,0,e.length))},fp:function(e,t){if(!e)return;for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])},e:function(e){return!y(e)},ne:y,x:s,xa:o,nx:function(e){return{toString:function(){return e}}},a:f,as:l,l:function(e,t){return typeof e=="string"?(e.charAt(0)==="."&&t.resolve&&(e=t.resolve(e)),!v||h.test(e)?u.load(e):v.load(e)):e.render?e:u.load(e)},r:function(e){var t=e.renderer;return t?t:typeof e=="function"?e:typeof (t=e.render)=="function"?t:b(e)},t:function(e,t,n,r,i){n||(n={});var s,o,u,a,f;i&&(s=i.hasOutParam,u=i.parent,o=i.targetProperty,a=i.hasNestedTags,f=i.isRepeated),r&&(a?r(e,n):(n.renderBody=r,n.invokeBody=function(){w||(w=1,d.warn("invokeBody(...) deprecated. Use renderBody(out) instead.",(new Error).stack));if(!s){var t=p(arguments);t.unshift(e),r.apply(this,t)}else r.apply(this,arguments)}));if(t)t(n,e);else if(o)if(f){var l=u[o];l?l.push(n):u[o]=[n]}else u[o]=n},c:function(e,t){var n=e.captureString(t);return{toString:function(){return n}}},i:function(e,t,n){if(!t)return;n.body&&(n.invokeBody=function(){return w||(w=1,d.warn("data.invokeBody() deprecated. Use data.body instead.",(new Error).stack)),n.body});if(typeof t=="string")u.render(t,n,e);else{if(typeof t.render!="function")throw new Error("Invalid template");t.render(n,e)}return this},xt:a}});
$rmod.remap("/marko@2.7.20/runtime/loader","loader_browser");
$rmod.def("/marko@2.7.20/runtime/loader_browser",function(e,t,n,r,i){n.exports=function(n){return e(n)}});
$rmod.def("/marko@2.7.20/runtime/marko-runtime",function(e,t,n,r,i){"use strict";function m(e,t,n,r){var i=new l;return n&&c(i.global,n),e(t,i),i.end().on("finish",function(){r(null,i.getOutput(),i)}).once("error",r)}function g(e,t,n){this.path=e,this._=t,this._options=!n||n.buffer!==!1?s:null}function y(e){return function(t,n){e._(t,n)}}function b(e,t){if(e.render)return e;var n=e.create||e,r=n.loaded;return r||(r=n.loaded=new g(t),r.c(n)),r}function w(e,t){if(!e)throw new Error('"templatePath" is required');var n;return typeof e=="string"?n=b(a(e),e):e.render?n=e:n=b(e),t&&(n=new g(n.path,y(n),t)),n}t.c=function(t){return new g(t)};var s={buffer:!0},o=e("/$/marko/$/async-writer"),u=e("./helpers"),a,f,l=o.AsyncWriter,c=e("/$/marko/$/raptor-util/extend");t.AsyncWriter=l;var h,p="stream",d;try{d=e.resolve(p)}catch(v){}d&&(h=e(d)),g.prototype={c:function(e){this._=e(u)},renderSync:function(e){var t=new l;return t.sync(),e.$global&&(t.global=c(t.global,e.$global),delete e.$global),this._(e,t),t.getOutput()},render:function(e,t,n){var r=this._,i,s;e?(i=e,(s=e.$global)&&delete e.$global):i={};if(typeof t=="function")return m(r,i,s,t);var u=t,a=!1;if(arguments.length===3){if(!u||!u.isAsyncWriter)u=new l(u),a=!0;u.on("finish",function(){n(null,u.getOutput(),u)}).once("error",n)}else if(!u||!u.isAsyncWriter)u=o.create(u,this._options),a=!0;return s&&c(u.global,s),r(i,u),a?u.end():u},stream:function(e){if(!h)throw new Error("Module not found: stream");return new f(this,e,this._options)}},h&&(f=function(e,t,n){f.$super.call(this),this._t=e,this._d=t,this._options=n,this._rendered=!1},f.prototype={write:function(e){e!=null&&this.push(e)},end:function(){this.push(null)},_read:function(){if(this._rendered)return;this._rendered=!0;var e=this._t,t=this._d,n=o.create(this,this._options);e.render(t,n),n.end()}},e("/$/marko/$/raptor-util/inherit")(f,h.Readable)),t.load=w,t.render=function(e,t,n){return w(e).render(t,n)},t.stream=function(e,t){return w(e).stream(t)},t.createWriter=function(e){return new l(e)},t.helpers=u,t.Template=g,a=e("./loader")});