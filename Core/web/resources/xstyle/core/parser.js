//>>built
define("xstyle/core/parser",["xstyle/core/utils"],function(P){function J(){this.push.apply(this,arguments)}function K(f){this.value=f}function L(f,s,C){function D(t,q){function s(a){x=!1;var k=n.lastIndex;a.then(function(){x=!0;e&&(n.lastIndex=k,w())});var e=!0}function w(){function f(a){a&&("string"==typeof a&&w)&&(a=w+a);b?b.push?"string"==typeof b[b.length-1]&&"string"==typeof a?b[b.length-1]+=a:a&&b.push(a):"string"==typeof b&&"string"==typeof a?b+=a:b=new J(b,a):b=a}for(x=!0;x;){var r=n.exec(t),
e=r[5],w=r[1],c=r[2],l=r[3],g=r[4],h,m,b,E,g=g&&F(g),c=c&&F(c);u?(l?(m=c,h=l.charAt(0),E="?"==l.charAt(1),-1<l.indexOf("\n")&&(g=l.slice(1))):g=c,b=g,u=!1):(g=l?c+l:c,f(g));"{"!=e&&(k+=r[0]);switch(e){case "'":case '"':var y="'"==e?Q:R;y.lastIndex=n.lastIndex;e=y.exec(t);c=e[1];n.lastIndex=y.lastIndex;f(new K(c));k+=e[0];continue;case "\\":e=y.lastIndex++;f(t.charAt(e));continue;case "(":case "{":case "[":var d,M=!1;if("{"==e){u=!0;":"==h&&(c+=l);k=F((k+c).replace(/\s+/g," ").replace(/([\.#:])\S+|\w+/g,
function(a,b){return b?a:a.toLowerCase()}));f(d=a.newRule(k));"\x3d"==h&&(z=!1,b.creating=!0,g&&(M=!0));":"==h&&!a.root&&(b.creating=!0);var l=null,I=A;if(r[6]){var G=q.cssRules||q.rules;if(d.cssRule=l=G[r[6].slice(1)])k=l.selectorText}if(a.root&&z)for(G=q.cssRules||q.rules;l=G[A++];)if(l.selectorText==k){d.cssRule=l;break}l||(d.ruleIndex=A=I,d.styleSheet=q);b.creating?(d.selector="."+("\x3d"==h?c.match(/[\w-]*$/g,"")[0]:"")+"-x-"+S++,d.creating=!0):d.selector=a.root?k:a.selector+" "+k;k=""}else c=
g.match(/(.*?)([\w-]*)$/),f(d=a.newCall(c[2],b,a)),d.ref=a.getDefinition(c[2]),(b.calls||(b.calls=[])).push(d);d.parent=a;M&&g.replace(/\s*([\w-]+)\s*$/g,function(a,b){var c=P.extend(d,b,C);c&&c.then&&s(c)});a.currentName=m;a.currentSequence=b;a.assignmentOperator=h;var B;if("{"==e&&(B=d.selector.match(/[@:]\w+/)))B=B[0],(m=a.getDefinition(B))&&m.selector&&m.selector(d);p.push(a=d);a.operator=e;a.start=n.lastIndex;b=m=null;continue}if(b)if(c="string"==typeof b?b:b[0],c.charAt&&"@"==c.charAt(0))if(g=
c.match(/\w+/)[0],"import"==g)c=L.getStyleSheet((q.cssRules||q.imports)[A++],b,q),g=n.lastIndex,D(c.localSource,c),n.lastIndex=g;else{if("xstyle"==g){if("start"==c.slice(8,13))d=a?a.newRule(""):N,d.root=a.root,d.parent=a,p.push(a=d);else{var N=a||N;p.pop();a=p[p.length-1]}n=a?O:/(@[\w\s])/g}}else if(h)try{var v=a[":"==h?"setValue":"declareProperty"](m,b,E);v&&v.then&&s(v)}catch(T){}switch(e){case ":":"\x3d"==h?(u=!0,h=":"):f(":");break;case "}":case ")":case "]":m=null;m=t.slice(a.start,n.lastIndex-
1);a.cssText=a.cssText?a.cssText+";"+m:m;if("}"==e){"}"==H&&(H=a.parent.selector)&&H.charAt(0);if(!a.root){try{a.onRule(a.selector,a)}catch(U){}z=!0}k=""}")"==e&&!h&&(a.args=b.isSequence?b:[b],(v=p[p.length-2].onCall(a))&&v.then&&s(v));p.pop();a=p[p.length-1];b=a.currentSequence;m=a.currentName;h=a.assignmentOperator;if(a.root&&"}"==e){if(h)try{a[":"==h?"setValue":"declareProperty"](m,b[1]||b,E)}catch(V){}u=!0;h=!1}break;case "":case void 0:return;case ";":b=null,u=!0,h=z=!1,k=""}var H=e}}function C(a){}
t=t.replace(I,function(a){return a.replace(/[^\n]/g,"")});var a=f;n.lastIndex=0;var x,A=0,z=!0,k="",u=!0;w()}var O,n=O=/(\s*)((?:[^{\}\[\]\(\)\\'":=;]|\[(?:[^\]'"]|'(?:\\.|[^'])*'|"(?:\\.|[^"])*")\])*)([=:]\??\s*([^{\}\[\]\(\)\\'":;]*))?(?:([{\}\[\]\(\)\\'":;])(\/\d+)?|$)/g,p=[f];f.parse=D;D(s,C)}var Q=/((?:\\.|[^'])*)'/g,R=/((?:\\.|[^"])*)"/g,I=/\/\*[\w\W]*?\*\//g,S=0,F="".trim?function(f){return f.trim()}:function(f){return f.replace(/^\s+|\s+$/g,"")},s=J.prototype=[];s.toString=function(){return this.join("")};
s.isSequence=!0;K.prototype.toString=function(){return'"'+this.value.replace(/["\\\n\r]/g,"\\$\x26")+'"'};return L});
//@ sourceMappingURL=parser.js.map