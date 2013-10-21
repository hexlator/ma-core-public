//>>built
define("dojox/app/main","require dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/_base/config dojo/_base/window dojo/Evented dojo/Deferred dojo/when dojo/has dojo/on dojo/ready dojo/dom-construct dojo/dom-attr ./utils/model ./utils/nls ./module/lifecycle ./utils/hash ./utils/constraints ./utils/config".split(" "),function(f,t,e,n,u,v,w,m,k,p,x,y,z,q,A,B,E,r,g,C){function s(a,d){var c;a=C.configProcessHas(a);a.loaderConfig||(a.loaderConfig={});a.loaderConfig.paths||(a.loaderConfig.paths=
{});a.loaderConfig.paths.app||(c=window.location.pathname,"/"!=c.charAt(c.length)&&(c=c.split("/"),c.pop(),c=c.join("/")),a.loaderConfig.paths.app=c);f(a.loaderConfig);a.modules||(a.modules=[]);a.modules.push("./module/lifecycle");var b=a.modules.concat(a.dependencies?a.dependencies:[]);a.template&&(c=a.template,0==c.indexOf("./")&&(c="app/"+c),b.push("dojo/text!"+c));f(b,function(){for(var b=[D],c=0;c<a.modules.length;c++)b.push(arguments[c]);if(a.template)var f={templateString:arguments[arguments.length-
1]};App=n(b,f);y(function(){var b=new App(a,d||v.body());p("app-log-api")?b.log=function(){try{for(var a=0;a<arguments.length-1;a++);}catch(b){}}:b.log=function(){};b.transitionToView=function(a,b,c){x.emit(a,"startTransition",{bubbles:!0,cancelable:!0,detail:b,triggerEvent:c||null})};b.setStatus(b.lifecycle.STARTING);var c=b.id;window[c]&&e.mixin(b,window[c]);window[c]=b;b.start()})})}p.add("app-log-api",(u.app||{}).debugApp);var D=n(w,{constructor:function(a,d){e.mixin(this,a);this.params=a;this.id=
a.id;this.defaultView=a.defaultView;this.controllers=[];this.children={};this.loadedModels={};this.loadedStores={};this.setDomNode(z.create("div",{id:this.id+"_Root",style:"width:100%; height:100%; overflow-y:hidden; overflow-x:hidden;"}));d.appendChild(this.domNode)},createDataStore:function(a){if(a.stores)for(var d in a.stores)if("_"!==d.charAt(0)){var c=a.stores[d].type?a.stores[d].type:"dojo/store/Memory",b={};a.stores[d].params&&e.mixin(b,a.stores[d].params);try{var h=f(c)}catch(g){throw Error(c+
" must be listed in the dependencies");}b.data&&e.isString(b.data)&&(b.data=e.getObject(b.data));if(a.stores[d].observable){try{var l=f("dojo/store/Observable")}catch(k){throw Error("dojo/store/Observable must be listed in the dependencies");}a.stores[d].store=l(new h(b))}else a.stores[d].store=new h(b);this.loadedStores[d]=a.stores[d].store}},createControllers:function(a){if(a){for(var d=[],c=0;c<a.length;c++)d.push(a[c]);var b=new m,h;try{h=f.on("error",function(a){!b.isResolved()&&!b.isRejected()&&
(b.reject("load controllers error."),h.remove())}),f(d,function(){b.resolve.call(b,arguments);h.remove()})}catch(g){b.reject(g),h&&h.remove()}var l=new m;k(b,e.hitch(this,function(a){for(var b=0;b<a.length;b++)this.controllers.push((new a[b](this)).bind());l.resolve(this)}),function(){l.reject("load controllers error.")});return l}},trigger:function(a,d){t.deprecated("dojox.app.Application.trigger","Use dojox.app.Application.emit instead","2.0");this.emit(a,d)},start:function(){this.createDataStore(this.params);
var a=new m,d;try{d=A(this.params.models,this,this)}catch(c){return a.reject(c),a.promise}k(d,e.hitch(this,function(a){this.loadedModels=e.isArray(a)?a[0]:a;this.setupControllers();k(B(this.params),e.hitch(this,function(a){a&&e.mixin(this.nls={},a);this.startup()}))}),function(){a.reject("load model error.")})},setDomNode:function(a){var d=this.domNode;this.domNode=a;this.emit("app-domNode",{oldNode:d,newNode:a})},setupControllers:function(){var a=window.location.hash;this._startView=r.getTarget(a,
this.defaultView);this._startParams=r.getParams(a)},startup:function(){this.selectedChildren={};var a=this.createControllers(this.params.controllers);this.hasOwnProperty("constraint")?g.register(this.params.constraints):this.constraint="center";var d=function(){this.emit("app-load",{viewId:this.defaultView,params:this._startParams,callback:e.hitch(this,function(){var a=this.defaultView.split("+"),b,d;if(0<a.length)for(;0<a.length;)b=a.shift().split(",").shift(),this.children[this.id+"_"+b].hasOwnProperty("constraint")||
(this.children[this.id+"_"+b].constraint=q.get(this.children[this.id+"_"+b].domNode,"data-app-constraint")||"center"),g.register(d=this.children[this.id+"_"+b].constraint),g.setSelectedChild(this,d,this.children[this.id+"_"+b]);else b=this.defaultView.split(",").shift(),this.children[this.id+"_"+b].hasOwnProperty("constraint")||(this.children[this.id+"_"+b].constraint=q.get(this.children[this.id+"_"+b].domNode,"data-app-constraint")||"center"),g.register(d=this.children[this.id+"_"+b].constraint),
g.setSelectedChild(this,d,this.children[this.id+"_"+b]);this.emit("app-transition",{viewId:this._startView,opts:{params:this._startParams}});this.setStatus(this.lifecycle.STARTED)})})};k(a,e.hitch(this,function(){this.template?this.emit("app-init",{app:this,name:this.name,type:this.type,parent:this,templateString:this.templateString,controller:this.controller,callback:e.hitch(this,function(a){this.setDomNode(a.domNode);d.call(this)})}):d.call(this)}))}});return function(a,d){if(!a)throw Error("App Config Missing");
a.validate?f(["dojox/json/schema","dojox/json/ref","dojo/text!dojox/application/schema/application.json"],function(c,b){c=dojox.json.ref.resolveJson(c);c.validate(a,b)&&s(a,d)}):s(a,d)}});
//@ sourceMappingURL=main.js.map