//>>built
define("dojox/app/utils/nls",["require","dojo/Deferred"],function(e,g){return function(h,l){var a=h.nls;if(a){var b=new g,c;try{var d=a,f=d.indexOf("./");0<=f&&(d=a.substring(f+2));c=e.on("error",function(a){!b.isResolved()&&!b.isRejected()&&(a.info[0]&&0<=a.info[0].indexOf(d))&&(b.resolve(!1),c.remove())});0==a.indexOf("./")&&(a="app/"+a);e(["dojo/i18n!"+a],function(a){b.resolve(a);c.remove()})}catch(k){b.reject(k),c&&c.remove()}return b}return!1}});
//@ sourceMappingURL=nls.js.map