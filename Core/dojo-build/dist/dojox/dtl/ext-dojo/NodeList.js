//>>built
define("dojox/dtl/ext-dojo/NodeList",["dojo/_base/lang","dojo/query","../_base"],function(b,a,c){b.getObject("dojox.dtl.ext-dojo.NodeList",!0);a=a.NodeList;b.extend(a,{dtl:function(a,b){var d=this,e=function(a,b){var e=a.render(new c._Context(b));d.forEach(function(a){a.innerHTML=e})};c.text._resolveTemplateArg(a).addCallback(function(d){a=new c.Template(d);c.text._resolveContextArg(b).addCallback(function(b){e(a,b)})});return this}});return a});
//@ sourceMappingURL=NodeList.js.map