/*
 * hxc3.IndicatorFormula
 * @version: 1.0.5
 * last modified: 2019-2-15 10:30:13
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.hxc3={})}(this,function(t){"use strict";function n(t,n){if(t){if(e=t,"[object String]"===m.call(e))t=parseFloat(t);else if(isNaN(parseFloat(t))){return(0).toFixed(n)}}else t=0;var e;return t.toFixed(n)}var e=function(t){return t.a},r=function(t){return t.i},o=function(t){return t.c},i=function(t){return t.o},u=function(t){return t.n};var a={maxMinDataInRound:function(t,n,o,i){for(var u={},a=0;a<n.length;a++){var c,f,s,l,p=n[a],h="maxR"+p,y="minR"+p,d=0,g=1e6;if(o+1<p)break;if(null!==i[h]&&i[h])if(c=e(t[o]),f=r(t[o]),s=e(t[o-p]),l=r(t[o-p]),s==i[h]||i[y]==l)for(var v=0;v<p;v++)c=e(t[o-v]),f=r(t[o-v]),d=c>d?c:d,g=f<g?f:g;else d=c>i[h]?c:i[h],g=f<i[y]?f:i[y];else for(v=0;v<p;v++)c=e(t[o-v]),f=r(t[o-v]),d=c>d?c:d,g=f<g?f:g;u[h]=d,u[y]=g}return u},averageDataInRound:function(t,e,r,i){for(var u,a,c,f,s={},l=0;l<e.length&&(a="ma"+(c=e[l]),u=0,!(r+1<c));l++){if(null!==i[a]&&i[a])u=i[a]*c-o(t[r-c])+o(t[r]);else for(f=0;f<c;f++)u+=o(t[r-f]);s[a]=n(u/c,4)}return s},volStatusInRound:function(t,n,e,r){for(var i,a,c,f,s,l,p,h,y,d,g,v,b={},m=0;m<n.length&&(s=n[m],c="upVol"+n[m],f="downVol"+n[m],i=0,a=0,!(e<s));m++){if(null!==r[c]&&r[c])h=o(t[e])>o(t[e-1])||!1,p=o(t[e-s])>o(t[e-s-1])||!1,g=r[c],v=r[f],y=u(t[e]),d=u(t[e-s]),p&&h?(i=y+g-d,a=v):!p&&h?(i=y+g,a=v-d):p&&!h?(i=g-d,a=y+v):p||h||(i=g,a=y+v-d);else for(l=0;l<s;l++)o(t[e-l])>o(t[e-l-1])?i+=u(t[e-l]):a+=u(t[e-l]);b[c]=i,b[f]=a}return b}},c=function(t,n,e,r){for(var o=function(t,n){var e={},r=0,o=0;for(r=0;r<t.length;r++)for(o=0;o<n.length;o++)e[n[o]+t[r]]=NaN;return e}(n,r),i=[],u={},c=0;c<t.length;c++)u=a[e](t,n,c,i[c-1]),i[c]=N(u,o);return i},f=function(t,n,e){return t?n:e},s=function(t,n){return+t>+n?+t:+n},l=function(t){return Math.abs(+t)},p=function(t,n,e,r){return(e*t+(n-e)*r)/n},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},d=function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)},g=function(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n},v={"[object Function]":1,"[object RegExp]":1,"[object Date]":1,"[object Error]":1,"[object CanvasGradient]":1,"[object CanvasPattern]":1,"[object Image]":1,"[object Canvas]":1},b={"[object Int8Array]":1,"[object Uint8Array]":1,"[object Uint8ClampedArray]":1,"[object Int16Array]":1,"[object Uint16Array]":1,"[object Int32Array]":1,"[object Uint32Array]":1,"[object Float32Array]":1,"[object Float64Array]":1},m=Object.prototype.toString;function I(t){return"object"===(void 0===t?"undefined":h(t))&&"number"==typeof t.nodeType&&"object"===h(t.ownerDocument)}function j(t){return!!v[m.call(t)]}function x(t){return"[object Array]"===m.call(t)}function O(t){var n=void 0===t?"undefined":h(t);return"function"===n||!!t&&"object"===n}function R(t){if(null==t||"object"!==(void 0===t?"undefined":h(t)))return t;var n=t,e=m.call(t);if("[object Array]"===e){n=[];for(var r=0,o=t.length;r<o;r++)n[r]=R(t[r])}else if(b[e]){var i=t.constructor;if(t.constructor.from)n=i.from(t);else{n=new i(t.length);for(var u=0,a=t.length;u<a;u++)n[u]=R(t[u])}}else if(!v[e]&&!I(t))for(var c in n={},t)t.hasOwnProperty(c)&&(n[c]=R(t[c]));return n}function N(t,n,e){if(!O(n)||!O(t))return e?R(n):t;for(var r in n)if(n.hasOwnProperty(r)){var o=t[r],i=n[r];!O(i)||!O(o)||x(i)||x(o)||I(i)||I(o)||j(i)||j(o)?!e&&r in t||(t[r]=R(n[r])):N(o,i,e)}return t}var A,S,M=function(){function t(n){y(this,t);var e=n?R(n):{};this._option=N(e,this.constructor.defaultOption,!1)}return t.prototype.get=function(t){return t?this._option[t]:this._option},t}();function L(t){M.registerClass(t,t.type)}M.type="indicatorFormula",S={},(A=M).registerClass=function(t,n){return S[n]=t,t},A.getClass=function(t){return S[t]},A.hasClass=function(t){return!!S[t]},A.getAllClass=function(){return S};var w=function(t){function u(){return y(this,u),g(this,t.apply(this,arguments))}return d(u,t),u.prototype.calculate=function(t){for(var u,a,c,p,h,y,d,g,v,b,m,I,j,x,O,R,N,A=this.get("M1"),S=this.get("M2"),M=[],L=[],w=0,_=0,F=0,C=[],D=0,P=0;P<t.length;P++)if(c=t[P-1],y=t[P],w=0,_=0,D=0,c&&(p=o(c),j=i(c),I=r(c),v=e(y),b=r(y),d=o(y),g=i(y),h=l(v-p),m=l(b-p),x=l(v-I),O=l(p-j),N=f(m>x&&m>h,m+h/2+O/4,x+O/4),R=f(h>m&&h>x,h+m/2+O/4,N),D=16*(d-p+(d-g)/2+p-j)/R*s(h,m)),M.push(D),P<A)C.push({ASI:0,ASIT:0});else{for(u=0;u<A;u++)w+=M[P-u];if(L.push(w),P<A+S)C.push({ASI:w,ASIT:0});else{for(a=0;a<S;a++)_+=L[P-A-a];F=_/S,C.push({xIndex:t[P].t,ASI:+n(w,2),ASIT:+n(F,2)})}}return C},u}(M);w.type="asi",w.defaultOption={M1:26,M2:10},L(w,w.type);var _=function(t){function n(){return y(this,n),g(this,t.apply(this,arguments))}return d(n,t),n.prototype.calculate=function(t){for(var n=0,e=0,r=0,i={},u=[],a=[this.get("L1"),this.get("L4"),this.get("L5")],f="ma"+a[0],s="ma"+a[1],l="ma"+a[2],p=c(t,a,"averageDataInRound",["ma"]),h=0;h<p.length;h++)(i=p[h])[f]&&(n=(o(t[h])-i[f])/i[f]*100,i[s]&&(e=(o(t[h])-i[s])/i[s]*100,i[l]&&(r=(o(t[h])-i[l])/i[l]*100))),u.push({xIndex:t[h].t,BIAS:n,BIAS2:e,BIAS3:r});return u},n}(M);_.type="bias",_.defaultOption={L1:6,L4:12,L5:24},L(_,_.type);var F=function(t){function n(){return y(this,n),g(this,t.apply(this,arguments))}return d(n,t),n.prototype.calculate=function(t){var n,e,r,o,i,u,a,c=this.get("BOLL_N"),f=this.get("BOLL_P"),s=[],l=0;for(o=0;o<t.length;o++){if(l+=t[o].c,o>=c-1){for(n=l/c,a=0,i=o-(c-1);i<=o;i++)a+=(u=t[i].c-n)*u;e=n+f*(a=Math.sqrt(a/c)),r=n-f*a,l-=t[o-(c-1)].c}else n=e=r=0;s.push({xIndex:t[o].t,MID:n,UPPER:e,LOWER:r})}return s},n}(M);F.type="boll",F.defaultOption={BOLL_N:20,BOLL_P:2},L(F,F.type);var C=function(t){function n(){return y(this,n),g(this,t.apply(this,arguments))}return d(n,t),n.prototype.calculate=function(t){var n,e,r,o,i,u=this.get("N"),a=this.get("M1"),c=this.get("M2"),f=1/0,s=-1/0,l=0,p=0,h=[];for(o=0;o<t.length;o++){for(n=t[o].c,f=1/0,s=-1/0,i=o<u?0:o-u+1;i<=o;i++)f>t[i].i&&(f=t[i].i),s<t[i].a&&(s=t[i].a);e=(n-f)/(s-f)*100,(isNaN(e)||e===-1/0||e===1/0)&&(e=0),p=o<u?((l=(e+l*o)/(o+1))+p*o)/(o+1):((l=(e+(a-1)*l)/a)+(c-1)*p)/c,r=3*l-2*p,h.push({xIndex:t[o].t,K:l,D:p,J:r})}return h},n}(M);C.type="kdj",C.defaultOption={N:9,M1:3,M2:3},L(C,C.type);var D=function(t){function n(){return y(this,n),g(this,t.apply(this,arguments))}return d(n,t),n.prototype.calculate=function(t){var n,e,r,o,i,u,a=this.get("SHORT"),c=this.get("LONG"),f=this.get("M"),s=a-1,l=a+1,p=c-1,h=c+1,y=f-1,d=f+1,g=0,v=[];for(g=0;g<t.length;g++)n=t[g].c,0!=g&&n?o=2*((e=(i=(2*n+s*i)/l)-(u=(2*n+p*u)/h))-(r=(2*e+y*r)/d)):(r=e=(i=u=n||0)-u,o=0),v.push({xIndex:t[g].t,MACD:o,DIFF:e,DEA:r});return v},n}(M);D.type="macd",D.defaultOption={SHORT:12,LONG:26,M:9},L(D,D.type);var P=function(t){function n(){return y(this,n),g(this,t.apply(this,arguments))}return d(n,t),n.prototype.calculate=function(t){var n,e,r,o,i,u,a,c,f,h,y,d,g=this.get("N1"),v=this.get("N2"),b=this.get("N3"),m=[];for(d=0;d<t.length;d++){var I;n=t[d].c,0==d?(e=n,o=a=h=0,i=c=y=0):(e=t[d-1].c,o=p(s(n-e,0),g,1,o),i=p(l(n-e),g,1,i),a=p(s(n-e,0),v,1,a),c=p(l(n-e),v,1,c),h=p(s(n-e,0),b,1,h),y=p(l(n-e),b,1,y)),r=o/i*100||0,u=a/c*100||0,f=h/y*100||0,m.push(((I={xIndex:t[d].t})["RSI"+g]=r,I["RSI"+v]=u,I["RSI"+b]=f,I))}return m},n}(M);P.type="rsi",P.defaultOption={N1:6,N2:12,N3:24},L(P,P.type);var B=function(t){function n(){return y(this,n),g(this,t.apply(this,arguments))}return d(n,t),n.prototype.calculate=function(t){for(var n=this.get("M1"),e=this.get("M2"),r=this.get("M3"),o=[n],i="upVol"+o[0],u="downVol"+o[0],a=[],f=NaN,s=c(t,o,"volStatusInRound",["upVol","downVol"]),l=0;l<t.length;l++)s[l][i]&&(f=s[l][i]/s[l][u]*100),a.push({xIndex:t[l].t,VR:f||0,A:e,B:r});return a},n}(M);B.type="vr",B.defaultOption={M1:26,M2:100,M3:200},L(B,B.type);var E=function(t){function n(){return y(this,n),g(this,t.apply(this,arguments))}return d(n,t),n.prototype.calculate=function(t){for(var n=[6,this.get("N1")],e="maxR"+n[0],r="minR"+n[0],i="maxR"+n[1],u="minR"+n[1],a=c(t,n,"maxMinDataInRound",["maxR","minR"]),f=[],s={},l=0,p=0,h=0;h<a.length;h++)(s=a[h])[e]&&(l=100*(s[e]-o(t[h]))/(s[e]-s[r])),s[i]&&(p=100*(s[i]-o(t[h]))/(s[i]-s[u])),f.push({xIndex:t[h].t,WR1:p,WR2:l});return f},n}(M);E.type="wr",E.defaultOption={N:10,N1:6,N2:20,N3:80},L(E,E.type),t.registerIndicatorFormula=L,t.IndicatorFormula=M,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=indicatorFormula.js.map
