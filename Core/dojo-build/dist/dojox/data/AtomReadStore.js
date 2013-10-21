//>>built
define("dojox/data/AtomReadStore",["dojo","dojox","dojo/data/util/filter","dojo/data/util/simpleFetch","dojo/date/stamp"],function(f,l){f.experimental("dojox.data.AtomReadStore");var k=f.declare("dojox.data.AtomReadStore",null,{constructor:function(a){a&&(this.url=a.url,this.rewriteUrl=a.rewriteUrl,this.label=a.label||this.label,this.sendQuery=a.sendQuery||a.sendquery||this.sendQuery,this.unescapeHTML=a.unescapeHTML,"urlPreventCache"in a&&(this.urlPreventCache=a.urlPreventCache?!0:!1));if(!this.url)throw Error("AtomReadStore: a URL must be specified when creating the data store");
},url:"",label:"title",sendQuery:!1,unescapeHTML:!1,urlPreventCache:!1,getValue:function(a,b,c){this._assertIsItem(a);this._assertIsAttribute(b);this._initItem(a);b=b.toLowerCase();!a._attribs[b]&&!a._parsed&&(this._parseItem(a),a._parsed=!0);var d=a._attribs[b];!d&&"summary"==b&&(d=this.getValue(a,"content").text.replace(/\/(<([^>]+)>)\/g/i,""),d={text:d.substring(0,Math.min(400,d.length)),type:"text"},a._attribs[b]=d);if(d&&this.unescapeHTML&&("content"==b||"summary"==b||"subtitle"==b)&&!a["_"+
b+"Escaped"])d.text=this._unescapeHTML(d.text),a["_"+b+"Escaped"]=!0;return d?f.isArray(d)?d[0]:d:c},getValues:function(a,b){this._assertIsItem(a);this._assertIsAttribute(b);this._initItem(a);b=b.toLowerCase();a._attribs[b]||this._parseItem(a);var c=a._attribs[b];return c?void 0!==c.length&&"string"!==typeof c?c:[c]:void 0},getAttributes:function(a){this._assertIsItem(a);a._attribs||(this._initItem(a),this._parseItem(a));var b=[],c;for(c in a._attribs)b.push(c);return b},hasAttribute:function(a,b){return void 0!==
this.getValue(a,b)},containsValue:function(a,b,c){a=this.getValues(a,b);for(b=0;b<a.length;b++)if("string"===typeof c){if(a[b].toString&&a[b].toString()===c)return!0}else if(a[b]===c)return!0;return!1},isItem:function(a){return a&&a.element&&a.store&&a.store===this?!0:!1},isItemLoaded:function(a){return this.isItem(a)},loadItem:function(a){},getFeatures:function(){return{"dojo.data.api.Read":!0}},getLabel:function(a){if(""!==this.label&&this.isItem(a)){if((a=this.getValue(a,this.label))&&a.text)return a.text;
if(a)return a.toString()}},getLabelAttributes:function(a){return""!==this.label?[this.label]:null},getFeedValue:function(a,b){var c=this.getFeedValues(a,b);return f.isArray(c)?c[0]:c},getFeedValues:function(a,b){if(!this.doc)return b;this._feedMetaData||(this._feedMetaData={element:this.doc.getElementsByTagName("feed")[0],store:this,_attribs:{}},this._parseItem(this._feedMetaData));return this._feedMetaData._attribs[a]||b},_initItem:function(a){a._attribs||(a._attribs={})},_fetchItems:function(a,
b,c){var d=this._getFetchUrl(a);if(d){var e=!this.sendQuery?a:null,g=this,h=function(d){g.doc=d;d=g._getItems(d,e);var c=a.query;c&&(c.id?d=f.filter(d,function(a){return g.getValue(a,"id")==c.id}):c.category&&(d=f.filter(d,function(a){a=g.getValues(a,"category");return!a?!1:f.some(a,"return item.term\x3d\x3d'"+c.category+"'")})));d&&0<d.length?b(d,a):b([],a)};this.doc?h(this.doc):(d=f.xhrGet({url:d,handleAs:"xml",preventCache:this.urlPreventCache}),d.addCallback(h),d.addErrback(function(d){c(d,a)}))}else c(Error("No URL specified."))},
_getFetchUrl:function(a){if(!this.sendQuery)return this.url;var b=a.query;if(!b)return this.url;if(f.isString(b))return this.url+b;a="";for(var c in b){var d=b[c];d&&(a&&(a+="\x26"),a+=c+"\x3d"+d)}if(!a)return this.url;c=this.url;c=0>c.indexOf("?")?c+"?":c+"\x26";return c+a},_getItems:function(a,b){if(this._items)return this._items;var c=[],d=[];if(1>a.childNodes.length)return this._items=c;d=f.filter(a.childNodes,"return item.tagName \x26\x26 item.tagName.toLowerCase() \x3d\x3d 'feed'");if(!d||1!=
d.length)return c;d=f.filter(d[0].childNodes,"return item.tagName \x26\x26 item.tagName.toLowerCase() \x3d\x3d 'entry'");if(b.onBegin)b.onBegin(d.length,this.sendQuery?b:{});for(var e=0;e<d.length;e++){var g=d[e];1==g.nodeType&&c.push(this._getItem(g))}return this._items=c},close:function(a){},_getItem:function(a){return{element:a,store:this}},_parseItem:function(a){function b(a){var b=a.textContent||a.innerHTML||a.innerXML;if(!b&&a.childNodes[0]){var c=a.childNodes[0];if(c&&(3==c.nodeType||4==c.nodeType))b=
a.childNodes[0].nodeValue}return b}var c=a._attribs;f.forEach(a.element.childNodes,function(a){var e=a.tagName?a.tagName.toLowerCase():"";switch(e){case "title":c[e]={text:b(a),type:a.getAttribute("type")};break;case "subtitle":case "summary":case "content":c[e]={text:b(a),type:a.getAttribute("type")};break;case "author":var g,h;f.forEach(a.childNodes,function(a){if(a.tagName)switch(a.tagName.toLowerCase()){case "name":g=a;break;case "uri":h=a}});a={};g&&1==g.length&&(a.name=b(g[0]));h&&1==h.length&&
(a.uri=b(h[0]));c[e]=a;break;case "id":c[e]=b(a);break;case "updated":c[e]=f.date.stamp.fromISOString(b(a));break;case "published":c[e]=f.date.stamp.fromISOString(b(a));break;case "category":c[e]||(c[e]=[]);c[e].push({scheme:a.getAttribute("scheme"),term:a.getAttribute("term")});break;case "link":c[e]||(c[e]=[]),a={rel:a.getAttribute("rel"),href:a.getAttribute("href"),type:a.getAttribute("type")},c[e].push(a),"alternate"==a.rel&&(c.alternate=a)}})},_unescapeHTML:function(a){return a=a.replace(/&#8217;/m,
"'").replace(/&#8243;/m,'"').replace(/&#60;/m,"\x3e").replace(/&#62;/m,"\x3c").replace(/&#38;/m,"\x26")},_assertIsItem:function(a){if(!this.isItem(a))throw Error("dojox.data.AtomReadStore: Invalid item argument.");},_assertIsAttribute:function(a){if("string"!==typeof a)throw Error("dojox.data.AtomReadStore: Invalid attribute argument.");}});f.extend(k,f.data.util.simpleFetch);return k});
//@ sourceMappingURL=AtomReadStore.js.map