$rmod.main("/src/components/app-header","index");
$rmod.remap("/marko-widgets@5.0.0-beta.9/taglib/helpers/getDynamicClientWidgetPath","getDynamicClientWidgetPath-browser");
$rmod.def("/marko-widgets@5.0.0-beta.9/taglib/helpers/getDynamicClientWidgetPath-browser",function(e,t,n,r,i){n.exports=function(t){return t}});
$rmod.run("marko-widgets/lib/client-init");
$rmod.dep("","raptor-pubsub","1.0.5");
$rmod.dep("","raptor-dom","1.1.0");
$rmod.dep("","try-require","1.2.1");
$rmod.dep("","raptor-util","1.0.10");
$rmod.dep("","listener-tracker","1.0.3");
$rmod.dep("","morphdom","1.0.1");
$rmod.dep("","raptor-polyfill","1.0.2");
$rmod.dep("","raptor-logging","1.0.6");
$rmod.dep("","raptor-renderer","1.4.3");
$rmod.dep("","async-writer","1.4.0");
$rmod.dep("","raptor-async","1.1.2");
$rmod.def("/marko-widgets@5.0.0-beta.9/lib/widget-args-id",function(e,t,n,r,i){var s=e("marko-widgets/lib/repeated-id");n.exports=function(t,n){var r=t.id;if(r){var i=t.out,o=t.scope;if(r.charAt(0)==="!")return r.substring(1);var u;return r.endsWith("[]")?u=s.nextId(i,o,r):u=o+"-"+r,n&&(t.id="!"+u),u}}});
$rmod.def("/marko-widgets@5.0.0-beta.9/taglib/helpers/widgetBody",function(e,t,n,r,i){var s=e("marko-widgets"),o=e("raptor-util/escapeXml"),u=typeof window!="undefined";n.exports=function(t,n,r,i){if(n!=null&&r==null){if(u){var a=document.getElementById(n);if(a){var f=s.getWidgetsContext(t);f.addPreservedDOMNode(a,!0)}}}else typeof r=="function"?r(t,i):(typeof r=="string"&&(r=o(r)),t.write(r))}});
$rmod.def("/marko-widgets@5.0.0-beta.9/taglib/widget-tag",function(e,t,n,r,i){"use strict";function l(e,t){var n=document.getElementById(e),r;return n&&(r=n.__widget)&&r.__type===t?r:null}function c(e,t,n,r){var i=e.el.tagName;t.write("<"+i+' id="'+e.id+'">');var s=!1;r&&e.bodyEl&&(s=!0,a(t,e.bodyEl.id,r,e)),t.write("</"+i+">"),e._reset(),n.addPreservedDOMNode(e.el,null,s)}var s=e("marko-widgets"),o=e("raptor-util/extend"),u=e("marko-widgets/lib/widget-args-id"),a=e("./helpers/widgetBody"),f={elId:function(){}};n.exports=function(t,n){var r=n.global;r.__widgetsBeginAsyncAdded||(r.__widgetsBeginAsyncAdded=!0,n.on("beginAsync",function(e){var t=e.parentWriter,i=e.writer,o=r.widgets,u;if(o&&(u=o.widgetStack).length){var a=new s.WidgetsContext(n);a.widgetStack=[u[0]],i.data.widgets=a}i.data.widgetArgs=t.data.widgetArgs}));var i=t.module,a=t.config||t._cfg,h=t.state||t._state,p=t.props||t._props,d=n.data.widgetArgs,v=t.body,m=t._body,g=t.id,y,b=t.hasDomEvents,w,E,S,x;if(d){delete n.data.widgetArgs,E=d.scope,g=g||u(d),y=d.extend,w=d.customEvents;if(S=d.extendState)h?o(h,S):h=S;if(x=d.extendConfig)a?o(a,x):a=x}var T=r.__rerenderWidget,N=r.__rerender===!0,C=s.getWidgetsContext(n);if(!g){var k=C.getCurrentWidget();k&&(g=k.nextId())}var L;T?(L=T,g=T.id,delete r.__rerenderWidget):N&&(L=l(g,i));if(!g&&t.hasOwnProperty("id"))throw new Error('Invalid widget ID for "'+i+'"');if(i){var A=!0;if(L&&!T){if(h){L._replaceState(h);if(L._processUpdateHandlers()===!0){A=!1,c(L,n,C,m);return}}if(!L.isDirty()&&!L.shouldUpdate(p,h)){A=!1,c(L,n,C,m);return}}L&&L._emitLifecycleEvent("beforeUpdate");var O=C.beginWidget({type:i,id:g,config:a,state:h,hasDomEvents:b,customEvents:w,scope:E,createWidget:t.createWidget,extend:y,existingWidget:L,bodyElId:v});A&&(t.renderBody(n,O),s.writeDomEventsEl(O,n)),O.end()}else t.renderBody(n,f)}});
$rmod.def("/src/components/app-header/template.marko",function(e,t,n,r,i){function s(t){function m(){typeof window!="undefined"&&s.registerWidget(a,e("./index"))}var n=t.s,r=t.e,i=t.ne,s=e("/$/marko-widgets"),o=s.attrs,u=e("/$/marko-widgets/taglib/helpers/getDynamicClientWidgetPath-browser"),a="/src/components/app-header/index",f=t.r,l=f(e("marko-widgets/taglib/widget-tag")),c=t.t,h=t.a,p=t.as,d=t.f,v=t.x;return function(t,n){m&&(m(),m=null),c(n,l,{id:"header",module:a,_cfg:t.widgetConfig,_state:t.widgetState,_props:t.widgetProps,_body:t.widgetBody},function(e,n){e.w("<header"+h("id",n.elId())+p(o(n))+'><div class="container"><div id="logo">'),t.site.logo&&e.w('<a href="/"><img src="/images/logo-header.png"'+h("alt",t.site.title)+"></a>"),e.w('</div><nav role="navigation" id="nav" class="mobile-hidden"><ul class="main-navigation">'),d(t.site.navLinks,function(n){e.w("<li><a"+h("href",n.url)+h("class",n.name===t.activeSection?"active":"")+">"+v(n.title)+"</a></li>")}),e.w('</ul></nav><div style="clear: both"></div></div></header>')})}}(n.exports=e("/$/marko").c(r)).c(s)});
$rmod.def("/src/components/app-header/index",function(e,t,n,r,i){n.exports=e("/$/marko-widgets").defineComponent({template:e("./template.marko"),init:function(){this.mobileMenuHidden=!0},handleToggleMenuClick:function(){var e=document.getElementById("nav");this.mobileMenuHidden=!this.mobileMenuHidden,e.className=this.mobileMenuHidden?"mobile-hidden":""}})});