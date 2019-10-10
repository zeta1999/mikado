/**!
 * Mikado.js v0.6.21 (ES5)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';var l;Object.assign||(Object.assign=function(){var a=arguments,b=a.length,c=a[0];if(1<b)for(var d=1,f,e,g;d<b;d++){f=a[d];e=Object.keys(f);g=e.length;for(var h=0,k;h<g;h++)k=e[h],c[k]=f[k]}return c});Object.values||(Object.values=function(a){for(var b=Object.keys(a),c=b.length,d=Array(c),f=0;f<c;f++)d[f]=a[b[f]];return d});window.requestAnimationFrame||(window.requestAnimationFrame=window.setTimeout);window.cancelAnimationFrame||(window.cancelAnimationFrame=window.clearTimeout);
window.Promise||(window.Promise=function(){function a(b){this.g=null;var c=this;b(function(d){c.g&&(c.g(d),c.g=null)})}a.prototype.then=function(b){this.g=b};return a}());function n(a,b,c,d){window[(a?"add":"remove")+"EventListener"](b,c,d||{passive:!0,capture:!0})}
function w(a,b){b||(b=a.type);var c=a.target,d=c,f=c["_e_"+b];if(f)d=c["_r_"+b];else{for(;d;){if(d===z)return;if(f=d.getAttribute(b)){var e=f.indexOf(":");if(-1!==e){var g=f.substring(0,e);e=f.substring(e+1);f=0;for(d=d.parentElement;d!==z;){if(d.hasAttribute(e)){f=g;break}d=d.parentElement}}break}d=d.parentElement}if(!f)return;c["_e_"+b]=f;c["_r_"+b]=d}if(b=A[f])a.preventDefault(),b(d,a,c);a.stopPropagation()}var D={},A={},z=document.body;E.route=E.prototype.route=function(a,b){A[a]=b;return this};
var F="ontouchstart"in window||navigator.msMaxTouchPoints,G,H,I;if(F){var J=function(a,b){b&&(b=b[0]);G=b?b.clientX:a.pageX;H=b?b.clientY:a.pageY},aa=function(a){var b=G,c=H;J(a,a.changedTouches);50>Math.abs(G-b)&&50>Math.abs(H-c)&&w.call(this,a,"click")},ba=function(a){J(a,a.touches)};I=function(a){n(a,"touchstart",ba,!1);n(a,"touchend",aa,!1)}}E.listen=E.prototype.listen=function(a,b){D[a]||(F&&"click"===a?I(1):n(1,a,w,b||!0),D[a]=1);return this};
E.unlisten=E.prototype.unlisten=function(a,b){D[a]&&(F&&"click"===a?I(0):n(0,a,w,b||!0),D[a]=0);return this};l=E.prototype;l.move=function(a,b){if("number"===typeof a){var c=a;a=this.b[a]}else c=a._i;0>b&&(b=this.length+b-1);c!==b&&this.shift(a,b-c);return this};
l.shift=function(a,b,c){if(!b)return this;if("number"===typeof a){var d=a;a=this.b[a]}else d=a._i;var f=0>b;if(f&&d||!f&&d<this.length-1){b=f?Math.max(d+b,0):Math.min(d+b,this.length-1);var e=this.b[b],g=f&&1<d-b||!f&&1<b-d;if(!g&&this.G&&(this.store||this.A)){var h=this.store?this.store[d]:a._m;this.update(a,this.store?this.store[b]:e._m,c,b);this.update(e,h,c,d)}else this.root.insertBefore(a,f?e:this.b[b+1]||null);if(g){e=this.b[d];a=this.store&&this.store[d];if(f)for(f=d;f>b;f--)d=this.b[f]=this.b[f-
1],d._i=f,this.store&&(this.store[f]=this.store[f-1]);else for(f=d;f<b;f++)d=this.b[f]=this.b[f+1],d._i=f,this.store&&(this.store[f]=this.store[f+1]);d=this.b[b]=e;d._i=b;this.store&&(this.store[b]=a)}else c=this.b,f=this.store,a._i=b,e._i=d,c[d]=e,c[b]=a,f&&(e=f[b],f[b]=f[d],f[d]=e)}return this};l.up=function(a,b){(!b||0<b)&&this.shift(a,-(b||1));return this};l.down=function(a,b){(!b||0<b)&&this.shift(a,b||1);return this};l.first=function(a){return this.shift(a,-this.length)};
l.last=function(a){return this.shift(a,this.length)};l.before=function(a,b){"number"!==typeof a&&(a=a._i);"number"!==typeof b&&(b=b._i);b!==a+1&&(0>b&&(b=this.length+b,0>a&&b--),0>a&&(a=this.length+a-1),this.shift(a,b-a-1));return this};l.after=function(a,b){"number"!==typeof a&&(a=a._i);"number"!==typeof b&&(b=b._i);b!==a-1&&(0>b&&(b=this.length+b-2,0>a&&b++),0>a&&(a=this.length+a-1),this.shift(a,b-a+1));return this};
l.swap=function(a,b,c){if(a!==b){if("number"===typeof a){var d=a;a=this.b[a]}else d=a._i;if("number"===typeof b){var f=b;b=this.b[b]}else f=b._i;if(d!==f)if(this.G&&(this.store||this.A)){var e=this.store?this.store[d]:a._m;this.update(a,this.store?this.store[f]:b._m,c,f);this.update(b,e,c,d)}else this.root.insertBefore(a,b),this.root.insertBefore(b,d+1===f?a:this.b[d+1]),a._i=f,b._i=d,this.b[d]=b,this.b[f]=a,this.store&&(a=this.store[f],this.store[f]=this.store[d],this.store[d]=a)}return this};var K={};function L(a){return K[a]=new RegExp("(?:^|\\s)"+a+"(?!\\S)","g")}function M(a,b){N(a,b)||(a.className+=" "+b,a._c+=" "+b);return this}function O(a,b){b=(a._c||(a._c=a.className)).replace(K[b]||L(b),"");a._c!==b&&(a.className=b,a._c=b);return this}function N(a,b){return!!(a._c||(a._c=a.className)).match(K[b]||L(b))}function P(a,b){var c="_a_"+b,d=a[c];return d||""===d?d:a[c]=a.getAttribute(b)};var ca=window.localStorage;E.prototype.export=function(){if(this.store)var a=this.store;else if(this.A){a=Array(this.length);for(var b=0;b<this.length;b++)a[b]=this.b[b]._m}a&&ca.setItem(this.v,JSON.stringify(a));return this};E.prototype.import=function(){var a=ca.getItem(this.v);a&&(this.store=a=JSON.parse(a));return this};var da={_x:function(a,b){a.nodeValue=b},_h:function(a,b){a.innerHTML=b},_c:function(a,b){a.className=b},_cs:function(a,b){(a._s||(a._s=a.style)).cssText=b},_a:function(a,b,c){a.setAttribute(c,b)}};function ea(a,b,c){if(a[b]!==c){var d=this.D["data."+b];if(d)for(var f=0,e=d.length,g;f<e;f++)g=d[f],da[g[0]](this.path[g[1]],c,g[2]||b);a[b]=c}return!0}
if(!window.Proxy){var fa=function(a,b){this.path=b.path;this.D=b.D;b=Object.keys(a);for(var c=0,d=b.length;c<d;c++){var f=b[c];this.g(a,f,a[f])}return a};fa.prototype.g=function(a,b,c){var d=this,f=c;Object.defineProperty(a,b,{get:function(){return f},set:function(e){if(f!==e){var g=d.D["data."+b];if(g)for(var h=0,k=g.length,m;h<k;h++)m=g[h],da[m[0]](d.path[m[1]],e,m[2]||b);f=e}}})};window.Proxy=fa};var ha=window,ia=ha.requestAnimationFrame,ja=ha.cancelAnimationFrame,ka={reuse:!0,prefetch:!0,store:!0,loose:!0,pool:!0,cache:!0},la={},Q={},S={},T={},U={};function E(a,b,c){a.nodeType||(c=b,b=a,a=null);b||(c=a);a?this.mount(a):(this.root=this.b=null,this.length=0);this.init(b,c)}var ma=E.register=function(a,b){b||(b=a,a=b.n);Q[a]=b;return E},na=E.new=function(a,b,c){return new E(a,b,c)};l=E.prototype;
l.mount=function(a){this.root!==a&&(this.key&&this.root&&(this.root._o=this.g,this.g=a._o||{}),this.root=a,oa(this),this.b=a._d||(a._d=pa(a.children)),this.length=this.b.length);return this};l.sync=function(a){this.root._d=this.b=pa(this.root.children);this.length=this.b.length;if(a&&this.cache)for(a=0;a<this.length;a++)for(var b=this.b[a]._p,c=0,d;c<b.length;c++)d=b[c],d._c=d._h=d._x=d._cs=null;return this};l.index=function(a){return a._i};l.node=function(a){return this.b[a]};
l.data=function(a){var b="object"===typeof a;return this.A?(b?a:this.b[a])._m:this.store[b?a._i:a]};l.find=function(a){if(this.key)return this.g["object"!==typeof a?a:a[this.key]];for(var b=0;b<this.length;b++)if(this.data(b)===a)return this.b[b]};l.search=function(a){a=Object.values(a).join("^");for(var b=0;b<this.length;b++)if(Object.values(this.data(b)).join("^")===a)return this.b[b]};
l.where=function(a){for(var b=Object.keys(a),c=b.length,d=[],f=0,e,g;f<this.length;f++){e=this.data(f);g=!0;for(var h=0,k;h<c;h++)if(k=b[h],e[k]!==a[k]){g=!1;break}g&&(d[d.length]=this.b[f])}return d};
l.init=function(a,b){"string"===typeof a?a=Q[a]:(b||!a||a.n||(b=a,a=null),a?ma(a):a=Q[this.v]);this.J=b=b?Object.assign({},this.J||ka,b):ka;this.G=b.reuse;this.state=b.state||la;this.cache=b.cache;this.async=b.async;this.B=0;var c=b.store;this.A="object"!==typeof c&&b.loose;!c||this.A?this.store=this.F=!1:this.store=(this.F="object"===typeof c)?c:[];this.proxy=!1;c=a.n;this.v!==c&&(this.v=c,this.u=a.d,this.w=this.C=this.l=null,this.I=b.prefetch&&V(this,a),oa(this),this.g=(this.key=a.k)&&{},this.o=
this.G&&b.pool&&(T[c]||(T[c]=[])),this.H=this.key&&(b.keep||this.o)&&(U[c]||(U[c]={})),this.size=this.o&&b.size);return this};E.once=function(a,b,c,d,f){var e=na(a,b);if(f){var g=f;f=function(){e.destroy(!0);g()}}e.render(c,d,f);f||e.destroy(!0);return E};function oa(a){if(a.root){var b=a.root._t;b!==a.v&&(a.root._t=a.v,b&&(a.key&&(a.g={}),a.length=0,a.remove(0,a.length)))}}function pa(a){for(var b=a.length,c=Array(b),d=0,f;d<b;d++)f=a[d],f._i=d,c[d]=f;return c}l=E.prototype;
l.create=function(a,b,c){var d=this.key,f=d&&a[d],e,g;if(d&&((g=this.H)&&(e=g[f])||(e=this.g[f])))if(g){if(g[f]=null,g=this.o){var h=e._n;e._n=null;var k=g.pop();k!==e&&(k._n=h,g[h]=k)}}else d=!1;else if((e=this.o)&&e.length)e=e.pop(),g&&(e._n=null,g[e._k]=null);else var m=e=this.I||(this.I=V(this,Q[this.v]));this.apply(e,a,b,c);m&&(e=m.cloneNode(!0));d&&(e._k=f,this.g[f]=e);return e};
l.apply=function(a,b,c,d){if(!this.u)return d||0===d||(d=a._i),b||(b=this.store?this.store[d]:a._m),this.C(a._p||qa(this,a),!1,b,d,c)};l.refresh=function(a,b){var c;if("number"===typeof a)var d=this.b[a];else a&&"number"===typeof(c=a._i)&&(d=a,a=c);if(d)return this.apply(d,null,b,a);a=this.length;d=(c=this.store)?c.length:a;var f=a<d?a:d,e=0;if(e<f)for(;e<f;e++)this.apply(this.b[e],null,b,e);if(e<d)for(;e<d;e++)this.add(c[e],b);else e<a&&this.remove(d,a-d);c&&this.A&&(this.store=null);return this};
l.render=function(a,b,c,d){if(!d){!b||"function"!==typeof b&&"boolean"!==typeof b||(c=b,b=null);this.B&&this.cancel();if(c){var f=this;this.B=ia(function(){f.B=0;f.render(a,b,null,!0);"function"===typeof c&&c()});return this}if(this.async){var e=this;return new Promise(function(p){e.B=ia(function(){e.B=0;e.render(a,b,null,!0);p()})})}}if(this.u)this.b[0]||this.add();else{if(!a)return this.refresh();d=this.length;var g=a.length;"undefined"===typeof g&&(a=[a],g=1);if(!g)return this.remove(0,d);var h=
this.key;h||this.G||(this.remove(0,d,g),d=0);var k=d<g?d:g,m=0;if(m<k)for(;m<k;m++){var t=this.b[m],u=a[m],q=void 0,r=void 0;h&&t._k!==(q=u[h])?(r=this.g[q])?ra(this,t,r,u,b,m):this.replace(t,u,b,m):this.update(t,u,b,m)}if(m<g)for(;m<g;m++)this.add(a[m],b);else g<d&&this.remove(g,d-g)}return this};function ra(a,b,c,d,f,e){var g=c._i;c._i=e;b._i=g;a.b[e]=c;a.b[g]=b;a.store?(a.store[g]=a.store[e],a.store[e]=d):a.A&&(c._m=b._m,b._m=d);a.root.insertBefore(c,b);a.apply(c,d,f,e)}
l.add=function(a,b,c,d){if(!d)if("number"===typeof b){c=b;b=null;var f=!0}else if(c||0===c)f=!0;c=d||f?c:this.length;b=this.create(a,b,c);if(this.proxy){var e=b._p||qa(this,b);a=new Proxy(a,{path:e,D:this.proxy,set:ea})}this.store?f?this.store.splice(c,0,a):this.store[c]=a:this.A&&(b._m=a);b._i=c;if(f)for(this.root.insertBefore(b,this.b[c]||null),this.b.splice(c,0,b),this.length++;++c<this.length;)this.b[c]._i=c;else d?this.root.replaceChild(b,d):(this.root.appendChild(b),this.length++),this.b[c]=
b;return this};l.clear=function(){return this.remove(0,this.length)};l.destroy=function(a){a&&this.unload();this.I=this.C=this.l=this.v=this.root=this.b=null;this.length=0;this.g={};this.store=this.w=null};l.cancel=function(){this.B&&(ja(this.B),this.B=null)};l.append=function(a,b,c){if("number"===typeof b){c=b;b=null;var d=!0}else d=c||0===c;for(var f=a.length,e=0;e<f;e++)this.add(a[e],b,d?c++:null);return this};
l.remove=function(a,b,c){var d=this.length;"object"===typeof a?a=a._i:0>a&&(a=d+a-1);if(!d||a>=d)return this;0>b?(1>b&&(a-=b+1,0>a&&(a=0)),b*=-1):b||(b=1);if(b>=d){this.store&&!this.F&&(this.store=c?Array(c):[]);var f=this.b;b=f.length;this.root.textContent="";this.root._d=this.b=c?Array(c):[];d=0}else this.store&&!this.F&&this.store.splice(a,b),f=this.b.splice(a,b),d-=b;this.length=d;if(a<d)for(;a<d;a++)this.b[a]._i=a;var e;if(this.o){a=this.o.length;if(e=this.size){if(a>=e)return this;a+b>e&&(f.splice(e-
a),b=f.length)}if(this.cache&&1<b&&!this.key){e=f;c=e.length;for(var g=c/2|0,h=0,k;h<g;h++)k=e[h],e[h]=e[c-h-1],e[c-h-1]=k}e=a+1;T[this.v]=this.o=a?this.o.concat(f):f}a=this.key;c=this.H;for(g=0;g<b;g++)h=f[g],d&&this.root.removeChild(h),a&&(k=h._k,this.g[k]=null,c&&(c[k]=h,e&&(h._n=e+g-1)));return this};l.replace=function(a,b,c,d){"undefined"===typeof d&&(d=a._i);this.add(b,c,d,a);this.key&&(b=a._k,this.g[b]=null,this.H&&(this.H[b]=a));this.o&&(b=this.o,this.key&&(a._n=b.length),b[b.length]=a);return this};
l.update=function(a,b,c,d){"undefined"===typeof d&&("number"===typeof a?(d=a,a=this.b[a]):d=a._i);if(this.key){var f=a._k,e=b[this.key];f!==e&&(this.g[f]=null,this.g[e]=a,a._k=e)}this.store?this.store[d]=b:this.A&&(a._m=b);return this.apply(a,b,c,d)};
function qa(a,b){for(var c=a.l.length,d={},f=Array(c),e=0;e<c;e++){var g=a.l[e],h=e,k;if(!(k=d[g])){k=b;for(var m="",t=0;t<g.length;t++){var u=g[t];m+=u;d[m]?k=d[m]:(">"===u?k=k.firstElementChild:"+"===u?k=k.nextElementSibling:"|"===u&&(k=k.firstChild),d[m]=k)}}f[h]=k}b._p=f;b.$={};return f}var W;
function V(a,b,c,d,f){var e=S[b.n+(a.cache?"$":"")];if(e)return a.C=e.C,a.u=e.u,a.w=e.w,a.proxy=e.proxy,a.l=e.l,e.node;e=document.createElement(b.t||"div");c||(c=0,d="&",W="",a.l=[],e._p=f=[],e.$={});var g=b.s,h=b.i,k=b.x,m=b.h,t=b.a,u=b.e,q=b.c,r=b.j,p=a.l.length,x=0,v="";r&&(v+=";"+r,-1<v.indexOf("self")&&(a.l[p]=d,f[p]=e,x=2));q&&("object"===typeof q?(r=q[1],q=q[0],v+=a.cache?";v="+q+";if(self._c!==v){self._c=v;self.className=v}":";self.className="+q,r&&(a.proxy||(a.proxy={}),a.proxy[q]||(a.proxy[q]=
[]),a.proxy[q].push(["_c",p])),a.l[p]=d,f[p]=e,x++):e.className=q);if(t||u){var B;t&&(B=Object.keys(t));u&&(q=Object.keys(u),B=B?B.concat(q):q);for(q=0;q<B.length;q++){r=B[q];var y=void 0;t&&"undefined"!==typeof(y=t[r])||(y=u[r],a.listen(r));if("object"===typeof y){var R=y[1];y=y[0];v+=a.cache?";v="+y+";if(self['_a_"+r+"']!==v){self['_a_"+r+"']=v;self.setAttribute('"+r+"',v)}":";self.setAttribute('"+r+"',"+y+")";R&&(a.proxy||(a.proxy={}),a.proxy[y]||(a.proxy[y]=[]),a.proxy[y].push(["_a",p,r]));R=
!0;x++}else e.setAttribute(r,y)}R&&(a.l[p]=d,f[p]=e)}g&&("string"===typeof g?e.style.cssText=g:g.length&&(B=g[1],g=g[0],v+=a.cache?";v="+g+";if(self._cs!==v){self._cs=v;(self._s||(self._s=self.style)).cssText=v}":";self.style.cssText="+g,B&&(a.proxy||(a.proxy={}),a.proxy[g]||(a.proxy[g]=[]),a.proxy[g].push(["_cs",p])),a.l[p]=d,f[p]=e,x++));if(!h)if(b["@"]){a.w||(a.w=[]);var C=W+=";this.include["+a.w.length+"].mount(p["+p+"]).render("+b.r+(b.m?".slice("+(0<b.m?"0,":"")+b.m+")":"")+",view)";W="";a.w.push(new E(e,
"string"===typeof b["@"]?Q[b["@"]]:b["@"],Object.assign(a.J,{store:!1,async:!1})));W=C;a.l[p]=d;f[p]=e;a.u=!1}else if(b["+"])h=Q[b["+"]];else if(k){d+="|";if(m="object"===typeof k)C=k[1],k=k[0];g=document.createTextNode(k);m&&(x&&(sa(x,v,p,a.cache),v="",p++),v+=a.cache?";v="+k+";if(self._x!==v){self._x=v;self.nodeValue=v}":";self.nodeValue="+k,C&&(a.proxy||(a.proxy={}),a.proxy[k]||(a.proxy[k]=[]),a.proxy[k].push(["_x",p])),a.l[p]=d,f[p]=g,x++);e.appendChild(g)}else m&&("object"===typeof m?(C=m[1],
m=m[0],v+=a.cache?";v="+m+";if(self._h!==v){self._h=v;self.innerHTML=v}":";self.innerHTML="+m,C&&(a.proxy||(a.proxy={}),a.proxy[m]||(a.proxy[m]=[]),a.proxy[m].push(["_h",p])),a.l[p]=d,f[p]=e,x++):e.innerHTML=m);b.f&&(W+=";if("+b.f+"){"+(1<x?"self":"p["+p+"]")+".hidden=false",x||(a.l[p]=d,f[p]=e,a.u=!1));x&&(a.u=!1,sa(x,v,p,a.cache));if(h)if(h.length)for(C=">",k=0;k<h.length;k++){k&&(C+="+");m=h[k];if(v=m["+"])m=Q[v];e.appendChild(V(a,m,c+k+1,d+C,f))}else{if(v=h["+"])h=Q[v];e.appendChild(V(a,h,c+1,
d+">",f))}b.f&&(W+="}else "+(1<x?"self":"p["+p+"]")+".hidden=true");c||(!a.u&&W&&(a.C=Function("p","s","data","index","view",'"use strict";var self,v'+W)),c={C:a.C,u:a.u,l:a.l,node:e},c.w=a.w,c.proxy=a.proxy,S[b.n+(a.cache?"$":"")]=c);return e}function sa(a,b,c,d){W=d||1<a?W+(";self=p["+c+"]"+b):W+b.replace(/self/g,"p["+c+"]")}
E.prototype.load=function(a,b){if(Q[a])this instanceof E&&this.init(Q[a]),b&&b();else{var c=this,d=new XMLHttpRequest;d.overrideMimeType("application/json");d.open("GET",a,!1!==b);d.onload=function(){var f=this.responseText;if(f){try{var e=JSON.parse(f);ma(e);c instanceof E&&c.init(e)}catch(h){var g=h}"function"===typeof b&&b(g)}};d.send()}};E.load=E.prototype.load;E.prototype.unload=function(a){a?"object"===typeof a&&(a=a.n):a=this.v;a&&(Q[a]=S[a]=null,T[a]=[],U[a]={},S[a+"$"]=null)};
E.unregister=E.unload=E.prototype.unload;var ta={tap:1,change:1,click:1,dblclick:1,input:1,keydown:1,keypress:1,keyup:1,mousedown:1,mouseenter:1,mouseleave:1,mousemove:1,mouseout:1,mouseover:1,mouseup:1,mousewheel:1,touchstart:1,touchmove:1,touchend:1,reset:1,select:1,submit:1,toggle:1,blur:1,error:1,focus:1,load:1,resize:1,scroll:1},X,ua=0;
function Y(a,b){var c={};if(!b){X=!0;if("string"===typeof a)if(-1!==a.indexOf("<")){var d=document.createElement("div");d.innerHTML=a;a=d.firstElementChild;c.n=a.id||"tpl_"+ua++}else c.n=a,a=document.getElementById(a);else c.n=a.id||"tpl_"+ua++;a.content?a=a.content.firstElementChild:"TEMPLATE"===a.tagName&&(a=a.firstElementChild)}d=a.tagName;var f=a.attributes;if("include"===d){if(a.firstChild){c["+"]=a.firstChild.nodeValue;return}var e=a.getAttribute("from");if(e)c["+"]=e;else return}"DIV"!==d&&
(c.t=d.toLowerCase());if(3!==a.nodeType&&(e=a.firstChild)&&(e=e.nodeValue)&&e.trim()){var g=e.indexOf("{{@");if(-1!==g){var h=e.indexOf("}}",g);c.j=e.substring(g+3,h);e=e.substring(0,g)+e.substring(h+2)}-1!==e.indexOf("{{#")?Z(c,"h",e.replace(/{{#/g,"{{")):Z(c,"x",e)}if(f.length)for(e=0;e<f.length;e++)g=f[e].nodeName,"class"===g?Z(c,"c",a.className):(h=a.getAttribute(g),"style"===g?Z(c,"s",h):"if"===g?Z(c,"f",h):"include"===g?a.hasAttribute("for")?Z(c,"@",h):Z(c,"+",h):"for"===g&&"label"!==d?(a.hasAttribute("include")||
Z(c,"@",Y(a.children[0],1)),Z(c,"r",h)):"max"===g?Z(c,"m",h):"js"===g?Z(c,"j",h):"key"===g?Z(c,"k",h.replace("data.","")):("bind"===g&&(h=h.split(":"),2>h.length&&h.unshift("value"),g=h[0],h="{{=="+h[1]+"}}"),ta[g.substring(2)]&&-1!==h.indexOf("{{")&&(g=g.substring(2)),ta[g]?Z(c.e||(c.e={}),g,h):Z(c.a||(c.a={}),g,h)));a=a.children;if(a.length)if(1<a.length)for(c.i=Array(a.length),d=0;d<a.length;d++)c.i[d]=Y(a[d],1);else c.i=Y(a[0],1);b||(c.d=X);return c}
function Z(a,b,c){var d=-1!==c.indexOf("{{=="),f=d||-1!==c.indexOf("{{=");-1!==c.indexOf("{{")&&-1!==c.indexOf("}}")?(X=!1,c=c.replace(/{{==/g,"{{").replace(/{{=/g,"{{").replace(/"{{/g,"").replace(/}}"/g,"").replace(/{{/g,"' + ").replace(/}}/g," + '"),a[b]=[("'"+c+"'").replace(/'' \+ /g,"").replace(/ \+ ''/g,"")],d?a[b].push(2):f&&a[b].push(1)):a[b]=c};E.compile=Y;E.setText=function(a,b){3!==a.nodeType&&(a._h=null,a=a.firstChild||a.appendChild(document.createTextNode(a._x=b)));a._x!==b&&(a.nodeValue=b,a._x=b);return this};E.getText=function(a){if(3!==a.nodeType&&!(a=a.firstChild))return"";var b=a._x;return b||""===b?b:a._x=a.nodeValue};E.setHTML=function(a,b){a._h!==b&&(a.innerHTML=b,a._h=b);return this};E.getHTML=function(a){var b=a._h;return b||""===b?b:a._h=a.innerHTML};E.setClass=function(a,b){a._c!==b&&(a.className=b,a._c=b);return this};
E.getClass=function(a){var b=a._c;return b||""===b?b:a._c=a.className};E.hasClass=N;E.toggleClass=function(a,b){N(a,b)?O(a,b):M(a,b);return this};E.removeClass=O;E.addClass=M;E.setCSS=function(a,b){a._cs!==b&&((a._s||(a._s=a.style)).cssText=b,a._cs=b);return this};E.getCSS=function(a){var b=a._cs;return b||""===b?b:a._cs=(a._s||(a._s=a.style)).getAttribute("style")};E.setAttribute=function(a,b,c){var d="_a_"+b;a[d]!==c&&(a.setAttribute(b,c),a[d]=c);return this};E.getAttribute=P;
E.hasAttribute=function(a,b){return(a=P(a,b))||""===a};E.removeAttribute=function(a,b){var c="_a_"+b;null!==a[c]&&(a[c]=null,a.removeAttribute(b));return this};(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return E}):(b=a.modules)?b.mikado=E:"object"===typeof a.exports?a.module.exports=E:a.Mikado=E})();}).call(this);
