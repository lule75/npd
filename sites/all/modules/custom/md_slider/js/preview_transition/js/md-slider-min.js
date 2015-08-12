window.Modernizr=function(t,e,i){function n(t){w.cssText=t}function r(t,e){return typeof t===e}function s(t,e){return!!~(""+t).indexOf(e)}function o(t,e){for(var n in t){var r=t[n];if(!s(r,"-")&&w[r]!==i)return"pfx"==e?r:!0}return!1}function a(t,e,n){for(var s in t){var o=e[t[s]];if(o!==i)return n===!1?t[s]:r(o,"function")?o.bind(n||e):o}return!1}function c(t,e,i){var n=t.charAt(0).toUpperCase()+t.slice(1),s=(t+" "+x.join(n+" ")+n).split(" ");return r(e,"string")||r(e,"undefined")?o(s,e):(s=(t+" "+S.join(n+" ")+n).split(" "),a(s,e,i))}var u,l,d,p="2.6.2",f={},h=!0,m=e.documentElement,v="modernizr",g=e.createElement(v),w=g.style,y=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),b="Webkit Moz O ms",x=b.split(" "),S=b.toLowerCase().split(" "),C={},M=[],I=M.slice,E=function(t,i,n,r){var s,o,a,c,u=e.createElement("div"),l=e.body,d=l||e.createElement("body");if(parseInt(n,10))for(;n--;)a=e.createElement("div"),a.id=r?r[n]:v+(n+1),u.appendChild(a);return s=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),u.id=v,(l?u:d).innerHTML+=s,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",c=m.style.overflow,m.style.overflow="hidden",m.appendChild(d)),o=i(u,t),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),m.style.overflow=c),!!o},T={}.hasOwnProperty;d=r(T,"undefined")||r(T.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return T.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var i=I.call(arguments,1),n=function(){if(this instanceof n){var r=function(){};r.prototype=e.prototype;var s=new r,o=e.apply(s,i.concat(I.call(arguments)));return Object(o)===o?o:s}return e.apply(t,i.concat(I.call(arguments)))};return n}),C.touch=function(){var i;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?i=!0:E(["@media (",y.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){i=9===t.offsetTop}),i},C.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in m.style&&E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},C.csstransitions=function(){return c("transition")};for(var O in C)d(C,O)&&(l=O.toLowerCase(),f[l]=C[O](),M.push((f[l]?"":"no-")+l));return f.addTest=function(t,e){if("object"==typeof t)for(var n in t)d(t,n)&&f.addTest(n,t[n]);else{if(t=t.toLowerCase(),f[t]!==i)return f;e="function"==typeof e?e():e,"undefined"!=typeof h&&h&&(m.className+=" "+(e?"":"no-")+t),f[t]=e}return f},n(""),g=u=null,function(t,e){function i(t,e){var i=t.createElement("p"),n=t.getElementsByTagName("head")[0]||t.documentElement;return i.innerHTML="x<style>"+e+"</style>",n.insertBefore(i.lastChild,n.firstChild)}function n(){var t=g.elements;return"string"==typeof t?t.split(" "):t}function r(t){var e=v[t[h]];return e||(e={},m++,t[h]=m,v[m]=e),e}function s(t,i,n){if(i||(i=e),l)return i.createElement(t);n||(n=r(i));var s;return s=n.cache[t]?n.cache[t].cloneNode():f.test(t)?(n.cache[t]=n.createElem(t)).cloneNode():n.createElem(t),s.canHaveChildren&&!p.test(t)?n.frag.appendChild(s):s}function o(t,i){if(t||(t=e),l)return t.createDocumentFragment();i=i||r(t);for(var s=i.frag.cloneNode(),o=0,a=n(),c=a.length;c>o;o++)s.createElement(a[o]);return s}function a(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(i){return g.shivMethods?s(i,t,e):e.createElem(i)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(g,e.frag)}function c(t){t||(t=e);var n=r(t);return g.shivCSS&&!u&&!n.hasCSS&&(n.hasCSS=!!i(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),l||a(t,n),t}var u,l,d=t.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,v={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",u="hidden"in t,l=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(i){u=!0,l=!0}}();var g={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:d.shivCSS!==!1,supportsUnknownElements:l,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:c,createElement:s,createDocumentFragment:o};t.html5=g,c(e)}(this,e),f._version=p,f._prefixes=y,f._domPrefixes=S,f._cssomPrefixes=x,f.testProp=function(t){return o([t])},f.testAllProps=c,f.testStyles=E,f.prefixed=function(t,e,i){return e?c(t,e,i):c(t,"pfx")},m.className=m.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+M.join(" "):""),f}(this,this.document),function(t,e,i){function n(t){return"[object Function]"==v.call(t)}function r(t){return"string"==typeof t}function s(){}function o(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function a(){var t=g.shift();w=1,t?t.t?h(function(){("c"==t.t?p.injectCss:p.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),a()):w=0}function c(t,i,n,r,s,c,u){function l(e){if(!f&&o(d.readyState)&&(y.r=f=1,!w&&a(),d.onload=d.onreadystatechange=null,e)){"img"!=t&&h(function(){x.removeChild(d)},50);for(var n in E[i])E[i].hasOwnProperty(n)&&E[i][n].onload()}}var u=u||p.errorTimeout,d=e.createElement(t),f=0,v=0,y={t:n,s:i,e:s,a:c,x:u};1===E[i]&&(v=1,E[i]=[]),"object"==t?d.data=i:(d.src=i,d.type=t),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){l.call(this,v)},g.splice(r,0,y),"img"!=t&&(v||2===E[i]?(x.insertBefore(d,b?null:m),h(l,u)):E[i].push(d))}function u(t,e,i,n,s){return w=0,e=e||"j",r(t)?c("c"==e?C:S,t,e,this.i++,i,n,s):(g.splice(this.i++,0,t),1==g.length&&a()),this}function l(){var t=p;return t.loader={load:u,i:0},t}var d,p,f=e.documentElement,h=t.setTimeout,m=e.getElementsByTagName("script")[0],v={}.toString,g=[],w=0,y="MozAppearance"in f.style,b=y&&!!e.createRange().compareNode,x=b?f:m.parentNode,f=t.opera&&"[object Opera]"==v.call(t.opera),f=!!e.attachEvent&&!f,S=y?"object":f?"script":"img",C=f?"script":S,M=Array.isArray||function(t){return"[object Array]"==v.call(t)},I=[],E={},T={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};p=function(t){function e(t){var e,i,n,t=t.split("!"),r=I.length,s=t.pop(),o=t.length,s={url:s,origUrl:s,prefixes:t};for(i=0;o>i;i++)n=t[i].split("="),(e=T[n.shift()])&&(s=e(s,n));for(i=0;r>i;i++)s=I[i](s);return s}function o(t,r,s,o,a){var c=e(t),u=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(r&&(r=n(r)?r:r[t]||r[o]||r[t.split("/").pop().split("?")[0]]),c.instead?c.instead(t,r,s,o,a):(E[c.url]?c.noexec=!0:E[c.url]=1,s.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":i,c.noexec,c.attrs,c.timeout),(n(r)||n(u))&&s.load(function(){l(),r&&r(c.origUrl,a,o),u&&u(c.origUrl,a,o),E[c.url]=2})))}function a(t,e){function i(t,i){if(t){if(r(t))i||(d=function(){var t=[].slice.call(arguments);p.apply(this,t),f()}),o(t,d,e,0,u);else if(Object(t)===t)for(c in a=function(){var e,i=0;for(e in t)t.hasOwnProperty(e)&&i++;return i}(),t)t.hasOwnProperty(c)&&(!i&&!--a&&(n(d)?d=function(){var t=[].slice.call(arguments);p.apply(this,t),f()}:d[c]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),f()}}(p[c])),o(t[c],d,e,c,u))}else!i&&f()}var a,c,u=!!t.test,l=t.load||t.both,d=t.callback||s,p=d,f=t.complete||s;i(u?t.yep:t.nope,!!l),l&&i(l)}var c,u,d=this.yepnope.loader;if(r(t))o(t,0,d,0);else if(M(t))for(c=0;c<t.length;c++)u=t[c],r(u)?o(u,0,d,0):M(u)?p(u):Object(u)===u&&a(u,d);else Object(t)===t&&a(t,d)},p.addPrefix=function(t,e){T[t]=e},p.addFilter=function(t){I.push(t)},p.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",d=function(){e.removeEventListener("DOMContentLoaded",d,0),e.readyState="complete"},0)),t.yepnope=l(),t.yepnope.executeStack=a,t.yepnope.injectJs=function(t,i,n,r,c,u){var l,d,f=e.createElement("script"),r=r||p.errorTimeout;f.src=t;for(d in n)f.setAttribute(d,n[d]);i=u?a:i||s,f.onreadystatechange=f.onload=function(){!l&&o(f.readyState)&&(l=1,i(),f.onload=f.onreadystatechange=null)},h(function(){l||(l=1,i(1))},r),c?f.onload():m.parentNode.insertBefore(f,m)},t.yepnope.injectCss=function(t,i,n,r,o,c){var u,r=e.createElement("link"),i=c?a:i||s;r.href=t,r.rel="stylesheet",r.type="text/css";for(u in n)r.setAttribute(u,n[u]);o||(m.parentNode.insertBefore(r,m),h(i,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,i,n,r){return jQuery.easing[jQuery.easing.def](t,e,i,n,r)},easeInQuad:function(t,e,i,n,r){return n*(e/=r)*e+i},easeOutQuad:function(t,e,i,n,r){return-n*(e/=r)*(e-2)+i},easeInOutQuad:function(t,e,i,n,r){return(e/=r/2)<1?n/2*e*e+i:-n/2*(--e*(e-2)-1)+i},easeInCubic:function(t,e,i,n,r){return n*(e/=r)*e*e+i},easeOutCubic:function(t,e,i,n,r){return n*((e=e/r-1)*e*e+1)+i},easeInOutCubic:function(t,e,i,n,r){return(e/=r/2)<1?n/2*e*e*e+i:n/2*((e-=2)*e*e+2)+i},easeInQuart:function(t,e,i,n,r){return n*(e/=r)*e*e*e+i},easeOutQuart:function(t,e,i,n,r){return-n*((e=e/r-1)*e*e*e-1)+i},easeInOutQuart:function(t,e,i,n,r){return(e/=r/2)<1?n/2*e*e*e*e+i:-n/2*((e-=2)*e*e*e-2)+i},easeInQuint:function(t,e,i,n,r){return n*(e/=r)*e*e*e*e+i},easeOutQuint:function(t,e,i,n,r){return n*((e=e/r-1)*e*e*e*e+1)+i},easeInOutQuint:function(t,e,i,n,r){return(e/=r/2)<1?n/2*e*e*e*e*e+i:n/2*((e-=2)*e*e*e*e+2)+i},easeInSine:function(t,e,i,n,r){return-n*Math.cos(e/r*(Math.PI/2))+n+i},easeOutSine:function(t,e,i,n,r){return n*Math.sin(e/r*(Math.PI/2))+i},easeInOutSine:function(t,e,i,n,r){return-n/2*(Math.cos(Math.PI*e/r)-1)+i},easeInExpo:function(t,e,i,n,r){return 0==e?i:n*Math.pow(2,10*(e/r-1))+i},easeOutExpo:function(t,e,i,n,r){return e==r?i+n:n*(-Math.pow(2,-10*e/r)+1)+i},easeInOutExpo:function(t,e,i,n,r){return 0==e?i:e==r?i+n:(e/=r/2)<1?n/2*Math.pow(2,10*(e-1))+i:n/2*(-Math.pow(2,-10*--e)+2)+i},easeInCirc:function(t,e,i,n,r){return-n*(Math.sqrt(1-(e/=r)*e)-1)+i},easeOutCirc:function(t,e,i,n,r){return n*Math.sqrt(1-(e=e/r-1)*e)+i},easeInOutCirc:function(t,e,i,n,r){return(e/=r/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+i:n/2*(Math.sqrt(1-(e-=2)*e)+1)+i},easeInElastic:function(t,e,i,n,r){var s=1.70158,o=0,a=n;if(0==e)return i;if(1==(e/=r))return i+n;if(o||(o=.3*r),a<Math.abs(n)){a=n;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(n/a);return-(a*Math.pow(2,10*(e-=1))*Math.sin(2*(e*r-s)*Math.PI/o))+i},easeOutElastic:function(t,e,i,n,r){var s=1.70158,o=0,a=n;if(0==e)return i;if(1==(e/=r))return i+n;if(o||(o=.3*r),a<Math.abs(n)){a=n;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(n/a);return a*Math.pow(2,-10*e)*Math.sin(2*(e*r-s)*Math.PI/o)+n+i},easeInOutElastic:function(t,e,i,n,r){var s=1.70158,o=0,a=n;if(0==e)return i;if(2==(e/=r/2))return i+n;if(o||(o=.3*r*1.5),a<Math.abs(n)){a=n;var s=o/4}else var s=o/(2*Math.PI)*Math.asin(n/a);return 1>e?-.5*a*Math.pow(2,10*(e-=1))*Math.sin(2*(e*r-s)*Math.PI/o)+i:a*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*r-s)*Math.PI/o)*.5+n+i},easeInBack:function(t,e,i,n,r,s){return void 0==s&&(s=1.70158),n*(e/=r)*e*((s+1)*e-s)+i},easeOutBack:function(t,e,i,n,r,s){return void 0==s&&(s=1.70158),n*((e=e/r-1)*e*((s+1)*e+s)+1)+i},easeInOutBack:function(t,e,i,n,r,s){return void 0==s&&(s=1.70158),(e/=r/2)<1?n/2*e*e*(((s*=1.525)+1)*e-s)+i:n/2*((e-=2)*e*(((s*=1.525)+1)*e+s)+2)+i},easeInBounce:function(t,e,i,n,r){return n-jQuery.easing.easeOutBounce(t,r-e,0,n,r)+i},easeOutBounce:function(t,e,i,n,r){return(e/=r)<1/2.75?7.5625*n*e*e+i:2/2.75>e?n*(7.5625*(e-=1.5/2.75)*e+.75)+i:2.5/2.75>e?n*(7.5625*(e-=2.25/2.75)*e+.9375)+i:n*(7.5625*(e-=2.625/2.75)*e+.984375)+i},easeInOutBounce:function(t,e,i,n,r){return r/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,n,r)+i:.5*jQuery.easing.easeOutBounce(t,2*e-r,0,n,r)+.5*n+i}}),function(t){t.fn.hoverIntent=function(e,i){var n={sensitivity:7,interval:100,timeout:0};n=t.extend(n,i?{over:e,out:i}:e);var r,s,o,a,c=function(t){r=t.pageX,s=t.pageY},u=function(e,i){return i.hoverIntent_t=clearTimeout(i.hoverIntent_t),Math.abs(o-r)+Math.abs(a-s)<n.sensitivity?(t(i).unbind("mousemove",c),i.hoverIntent_s=1,n.over.apply(i,[e])):(o=r,a=s,i.hoverIntent_t=setTimeout(function(){u(e,i)},n.interval),void 0)},l=function(t,e){return e.hoverIntent_t=clearTimeout(e.hoverIntent_t),e.hoverIntent_s=0,n.out.apply(e,[t])},d=function(e){var i=jQuery.extend({},e),r=this;r.hoverIntent_t&&(r.hoverIntent_t=clearTimeout(r.hoverIntent_t)),"mouseenter"==e.type?(o=i.pageX,a=i.pageY,t(r).bind("mousemove",c),1!=r.hoverIntent_s&&(r.hoverIntent_t=setTimeout(function(){u(i,r)},n.interval))):(t(r).unbind("mousemove",c),1==r.hoverIntent_s&&(r.hoverIntent_t=setTimeout(function(){l(i,r)},n.timeout)))};return this.bind("mouseenter",d).bind("mouseleave",d)}}(jQuery),function(t){t.fn.mdSlider=function(e){function i(){M.addClass("loading-image"),M.wrap('<div class="md-slide-fullwidth"><div class="md-item-wrap"></div></div>'),S=M.parent(),x=S.parent(),y=e.width,b=e.height,M.css({width:y,height:b}),I=[],M.find("."+e.itemClassName).each(function(e){T++,I[e]=t(this),e>0&&t(this).hide()})}function n(i){if(k=0,j=I[i].data("timeout")?I[i].data("timeout"):e.slideShowDelay,i!=E)if(w=E,E=i,I[w]){var n=M.data("transitions")||"";if("random"==n.toLowerCase()){var r=new Array("slit-horizontal-left-top","slit-horizontal-top-right","slit-horizontal-bottom-up","slit-vertical-down","slit-vertical-up","strip-up-right","strip-up-left","strip-down-right","strip-down-left","strip-left-up","strip-left-down","strip-right-up","strip-right-down","strip-right-left-up","strip-right-left-down","strip-up-down-right","strip-up-down-left","left-curtain","right-curtain","top-curtain","bottom-curtain","slide-in-right","slide-in-left","slide-in-up","slide-in-down");n=r[Math.floor(Math.random()*(r.length+1))],void 0==n&&(n="fade"),n=t.trim(n.toLowerCase())}if(I[E].data("transition")){var r=I[E].data("transition").split(",");n=r[Math.floor(Math.random()*r.length)],n=t.trim(n.toLowerCase())}(this.support=Modernizr.csstransitions&&Modernizr.csstransforms3d)||"slit-horizontal-left-top"!=n&&"slit-horizontal-top-right"!=n&&"slit-horizontal-bottom-up"!=n&&"slit-vertical-down"!=n&&"slit-vertical-up"!=n||(n="fade"),O=!0,p(n)}else I[E].css({top:0,left:0}).show(),O=!1}function r(){n(0),C=setInterval(s,40)}function s(){return O?!1:(k+=40,void(k>j&&o()))}function o(){if(O)return!1;var t=E;t++,t>=T&&e.loop?(t=0,n(t)):T>t&&n(t)}function a(){e.onEndTransition.call(M),t(".md-strips-container",M).remove(),I[w].hide(),I[E].show(),O=!1}function c(i,n){for(var r,n=n?n:e,s=t('<div class="md-strips-container"></div>'),o=Math.round(y/n.strips),a=Math.round(b/n.strips),c=t(".md-mainimg img",I[E]),u=0;u<n.strips;u++){var l,d,p=i?a*u+"px":"0px",f=i?"0px":o*u+"px";u==n.strips-1?(l=i?"0px":y-o*u+"px",d=i?b-a*u+"px":"0px"):(l=i?"0px":o+"px",d=i?a+"px":"0px"),r=t('<div class="mdslider-strip"></div>').css({width:l,height:d,top:p,left:f,opacity:0}).append(c.clone().css({marginLeft:i?0:-(u*o)+"px",marginTop:i?-(u*a)+"px":0})),s.append(r)}M.append(s)}function u(e,i,n){for(var r,s=t('<div class="md-strips-container"></div>'),o=y/e,a=b/i,c=t(".md-mainimg img",I[n]),u=0;i>u;u++)for(var l=0;e>l;l++){var d=a*u+"px",p=o*l+"px";r=t('<div class="mdslider-tile"/>').css({width:o,height:a,top:d,left:p}).append(c.clone().css({marginLeft:"-"+p,marginTop:"-"+d})),s.append(r)}M.append(s)}function l(){for(var e,i=[t(".md-mainimg img",I[w]),t(".md-mainimg img",I[E])],n=t('<div class="md-strips-container"></div>'),r=0;2>r;r++)e=t('<div class="mdslider-strip"></div>').css({width:y,height:b}).append(i[r].clone()),n.append(e);M.append(n)}function d(e){var i=t('<div class="md-strips-container '+e+'"></div>'),n=t(".md-mainimg img",I[w]),r=t('<div class="mdslider-slit"/>').append(n.clone()),s=t('<div class="mdslider-slit"/>').append(n.clone().css("top","-75px"));("slit-vertical-down"==e||"slit-vertical-up"==e)&&(s=t('<div class="mdslider-slit"/>').append(n.clone().css("left","-145px"))),i.append(r).append(s),M.append(i)}function p(i){switch(i){case"slit-horizontal-left-top":case"slit-horizontal-top-right":case"slit-horizontal-bottom-up":case"slit-vertical-down":case"slit-vertical-up":d(i),t(".md-object",I[E]).hide(),I[w].hide(),I[E].show();var n=t(".mdslider-slit",M).first(),r=t(".mdslider-slit",M).last(),s={transition:"all "+e.transitionsSpeed+"ms ease-in-out","-webkit-transition":"all "+e.transitionsSpeed+"ms ease-in-out","-moz-transition":"all "+e.transitionsSpeed+"ms ease-in-out","-ms-transition":"all "+e.transitionsSpeed+"ms ease-in-out"};t(".mdslider-slit",M).css(s),setTimeout(function(){n.addClass("md-trans-elems-1"),r.addClass("md-trans-elems-2")},50),setTimeout(function(){e.onEndTransition.call(M),t(".md-strips-container",M).remove(),O=!1},e.transitionsSpeed);break;case"strip-up-right":case"strip-up-left":u(e.stripCols,1,E);var o=t(".mdslider-tile",M),p=e.transitionsSpeed/e.stripCols/2,f=e.transitionsSpeed/2;"strip-up-right"==i&&(o=t(".mdslider-tile",M).reverse()),o.css({height:"1px",bottom:"0px",top:"auto"}),o.each(function(i){var n=t(this);setTimeout(function(){n.animate({height:"100%",opacity:"1.0"},f,"easeInOutQuart",function(){i==e.stripCols-1&&a()})},i*p)});break;case"strip-down-right":case"strip-down-left":u(e.stripCols,1,E);var o=t(".mdslider-tile",M),p=e.transitionsSpeed/e.stripCols/2,f=e.transitionsSpeed/2;"strip-down-right"==i&&(o=t(".mdslider-tile",M).reverse()),o.css({height:"1px",top:"0px",bottom:"auto"}),o.each(function(i){var n=t(this);setTimeout(function(){n.animate({height:"100%",opacity:"1.0"},f,"easeInOutQuart",function(){i==e.stripCols-1&&a()})},i*p)});break;case"strip-left-up":case"strip-left-down":u(1,e.stripRows,E);var o=t(".mdslider-tile",M),p=e.transitionsSpeed/e.stripRows/2,f=e.transitionsSpeed/2;"strip-left-up"==i&&(o=t(".mdslider-tile",M).reverse()),o.css({width:"1px",left:"0px",right:"auto"}),o.each(function(i){var n=t(this);setTimeout(function(){n.animate({width:"100%",opacity:"1.0"},f,"easeInOutQuart",function(){i==e.stripRows-1&&a()})},i*p)});break;case"strip-right-up":case"strip-right-down":u(1,e.stripRows,E);var o=t(".mdslider-tile",M),p=e.transitionsSpeed/e.stripRows/2,f=e.transitionsSpeed/2;"strip-left-right-up"==i&&(o=t(".mdslider-tile",M).reverse()),o.css({width:"1px",left:"auto",right:"1px"}),o.each(function(i){var n=t(this);setTimeout(function(){n.animate({width:"100%",opacity:"1.0"},f,"easeInOutQuart",function(){i==e.stripRows-1&&a()})},i*p)});break;case"strip-right-left-up":case"strip-right-left-down":u(1,e.stripRows,w),I[w].hide(),I[E].show();var o=t(".mdslider-tile",M),p=e.transitionsSpeed/e.stripRows,f=e.transitionsSpeed/2;"strip-right-left-up"==i&&(o=t(".mdslider-tile",M).reverse()),o.filter(":odd").css({width:"100%",right:"0px",left:"auto",opacity:1}).end().filter(":even").css({width:"100%",right:"auto",left:"0px",opacity:1}),o.each(function(i){var n=t(this),r=i%2==0?{left:"-50%",opacity:"0"}:{right:"-50%",opacity:"0"};setTimeout(function(){n.animate(r,f,"easeOutQuint",function(){i==e.stripRows-1&&(e.onEndTransition.call(M),t(".md-strips-container",M).remove(),O=!1)})},i*p)});break;case"strip-up-down-right":case"strip-up-down-left":u(e.stripCols,1,w),I[w].hide(),I[E].show();var o=t(".mdslider-tile",M),p=e.transitionsSpeed/e.stripCols/2,f=e.transitionsSpeed/2;"strip-up-down-right"==i&&(o=t(".mdslider-tile",M).reverse()),o.filter(":odd").css({height:"100%",bottom:"0px",top:"auto",opacity:1}).end().filter(":even").css({height:"100%",bottom:"auto",top:"0px",opacity:1}),o.each(function(i){var n=t(this),r=i%2==0?{top:"-50%",opacity:0}:{bottom:"-50%",opacity:0};setTimeout(function(){n.animate(r,f,"easeOutQuint",function(){i==e.stripCols-1&&(e.onEndTransition.call(M),t(".md-strips-container",M).remove(),O=!1)})},i*p)});break;case"left-curtain":u(e.stripCols,1,E);var o=t(".mdslider-tile",M),h=y/e.stripCols,p=e.transitionsSpeed/e.stripCols/2;o.each(function(i){var n=t(this);n.css({left:h*i,width:0,opacity:0}),setTimeout(function(){n.animate({width:h,opacity:"1.0"},e.transitionsSpeed/2,function(){i==e.stripCols-1&&a()})},p*i)});break;case"right-curtain":u(e.stripCols,1,E);var o=t(".mdslider-tile",M).reverse(),h=y/e.stripCols,p=e.transitionsSpeed/e.stripCols/2;o.each(function(i){var n=t(this);n.css({right:h*i,left:"auto",width:0,opacity:0}),setTimeout(function(){n.animate({width:h,opacity:"1.0"},e.transitionsSpeed/2,function(){i==e.stripCols-1&&a()})},p*i)});break;case"top-curtain":u(1,e.stripRows,E);var o=t(".mdslider-tile",M),m=b/e.stripRows,p=e.transitionsSpeed/e.stripRows/2;o.each(function(i){var n=t(this);n.css({top:m*i,height:0,opacity:0}),setTimeout(function(){n.animate({height:m,opacity:"1.0"},e.transitionsSpeed/2,function(){i==e.stripRows-1&&a()})},p*i)});break;case"bottom-curtain":u(1,e.stripRows,E);var o=t(".mdslider-tile",M).reverse(),m=b/e.stripRows,p=e.transitionsSpeed/e.stripRows/2;o.each(function(i){var n=t(this);n.css({bottom:m*i,height:0,opacity:0}),setTimeout(function(){n.animate({height:m,opacity:"1.0"},e.transitionsSpeed/2,function(){i==e.stripRows-1&&a()})},p*i)});break;case"slide-in-right":var v=0;l();var o=t(".mdslider-strip",M);o.each(function(){x=t(this);var i=v*y;x.css({left:i}),x.animate({left:i-y},e.transitionsSpeed,function(){a()}),v++});break;case"slide-in-left":var v=0;l();var o=t(".mdslider-strip",M);o.each(function(){x=t(this);var i=-v*y;x.css({left:i}),x.animate({left:y+i},2*e.transitionsSpeed,function(){a()}),v++});break;case"slide-in-up":var v=0;l();var o=t(".mdslider-strip",M);o.each(function(){x=t(this);var i=v*b;x.css({top:i}),x.animate({top:i-b},e.transitionsSpeed,function(){a()}),v++});break;case"slide-in-down":var v=0;l();var o=t(".mdslider-strip",M);o.each(function(){x=t(this);var i=-v*b;x.css({top:i}),x.animate({top:b+i},e.transitionsSpeed,function(){a()}),v++});break;case"fade":default:var g={strips:1};c(!1,g);var x=t(".mdslider-strip:first",M);x.css({height:"100%",width:y}),"slide-in-right"==i?x.css({height:"100%",width:y,left:y+"px",right:""}):"slide-in-left"==i&&x.css({left:"-"+y+"px"}),x.animate({left:"0px",opacity:1},e.transitionsSpeed,function(){a()})}}function f(){var e=t(".md-slide-item .md-mainimg img",M).length;M.data("count",e),0==M.data("count")&&h(),t(".md-slide-item .md-mainimg img",M).each(function(){t(this).load(function(){var e=t(this);if(!e.data("defW")){var i=v(e.attr("src"));m(e,i.width,i.height),e.data({defW:i.width,defH:i.height})}M.data("count",M.data("count")-1),0==M.data("count")&&h()}),this.complete&&t(this).load()})}function h(){M.removeClass("loading-image"),r()}function m(e,i,n){var r=t(".md-slide-item:visible",M).width(),s=t(".md-slide-item:visible",M).height();if(n>0&&s>0)if(i/n>r/s){var o=r-s/n*i;e.css({width:"auto",height:s+"px"}),e.css(0>o?{left:o/2+"px",top:0}:{left:0,top:0})}else{var a=s-r/i*n;e.css({width:r+"px",height:"auto"}),e.css(0>a?{top:a/2+"px",left:0}:{left:0,top:0})}}function v(t){var e=new Image;e.src=t;var i={height:e.height,width:e.width};return i}function h(){M.removeClass("loading-image"),r()}var g={className:"md-slide-wrap",itemClassName:"md-slide-item",transitions:"strip-down-left",transitionsSpeed:800,width:990,height:420,responsive:!0,fullwidth:!0,styleBorder:0,styleShadow:0,posBullet:2,posThumb:1,stripCols:20,stripRows:10,slideShowDelay:6e3,slideShow:!0,loop:!1,pauseOnHover:!1,showLoading:!0,loadingPosition:"bottom",showArrow:!0,showBullet:!0,showThumb:!0,enableDrag:!0,touchSensitive:50,onEndTransition:function(){},onStartTransition:function(){}};e=t.extend({},g,e);var w,y,b,x,S,C,M=t(this),I=[],E=-1,T=0,O=!0,j=0,k=0,O=!1;return i(),f(),M},t.fn.reverse=[].reverse}(jQuery);
