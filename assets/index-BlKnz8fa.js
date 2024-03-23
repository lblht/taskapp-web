(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ol(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const _e={},xr=[],wt=()=>{},Dy=()=>!1,Xo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vl=t=>t.startsWith("onUpdate:"),Ge=Object.assign,Nl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Oy=Object.prototype.hasOwnProperty,ie=(t,e)=>Oy.call(t,e),Q=Array.isArray,Mr=t=>Zo(t)==="[object Map]",zf=t=>Zo(t)==="[object Set]",Z=t=>typeof t=="function",Oe=t=>typeof t=="string",ls=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",Qf=t=>(Ie(t)||Z(t))&&Z(t.then)&&Z(t.catch),Yf=Object.prototype.toString,Zo=t=>Yf.call(t),Vy=t=>Zo(t).slice(8,-1),Jf=t=>Zo(t)==="[object Object]",xl=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ms=Ol(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ny=/-(\w)/g,Wt=ea(t=>t.replace(Ny,(e,n)=>n?n.toUpperCase():"")),xy=/\B([A-Z])/g,us=ea(t=>t.replace(xy,"-$1").toLowerCase()),ta=ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ya=ea(t=>t?`on${ta(t)}`:""),Dn=(t,e)=>!Object.is(t,e),co=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Ao=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Pc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let wh;const Xf=()=>wh||(wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gr(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Oe(r)?Uy(r):Gr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Oe(t)||Ie(t))return t}const My=/;(?![^(]*\))/g,Ly=/:([^]+)/,Fy=/\/\*[^]*?\*\//g;function Uy(t){const e={};return t.replace(Fy,"").split(My).forEach(n=>{if(n){const r=n.split(Ly);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tn(t){let e="";if(Oe(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=Tn(t[n]);r&&(e+=r+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const $y="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",By=Ol($y);function Zf(t){return!!t||t===""}const Kr=t=>Oe(t)?t:t==null?"":Q(t)||Ie(t)&&(t.toString===Yf||!Z(t.toString))?JSON.stringify(t,ep,2):String(t),ep=(t,e)=>e&&e.__v_isRef?ep(t,e.value):Mr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Ja(r,i)+" =>"]=s,n),{})}:zf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ja(n))}:ls(e)?Ja(e):Ie(e)&&!Q(e)&&!Jf(e)?String(e):e,Ja=(t,e="")=>{var n;return ls(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class tp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){Rt=this}off(){Rt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function jy(t){return new tp(t)}function qy(t,e=Rt){e&&e.active&&e.effects.push(t)}function Hy(){return Rt}let Zn;class Ml{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,qy(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,pr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Gy(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),gr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=An,n=Zn;try{return An=!0,Zn=this,this._runnings++,Ih(this),this.fn()}finally{Th(this),this._runnings--,Zn=n,An=e}}stop(){var e;this.active&&(Ih(this),Th(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Gy(t){return t.value}function Ih(t){t._trackId++,t._depsLength=0}function Th(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)np(t.deps[e],t);t.deps.length=t._depsLength}}function np(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let An=!0,Cc=0;const rp=[];function pr(){rp.push(An),An=!1}function gr(){const t=rp.pop();An=t===void 0?!0:t}function Ll(){Cc++}function Fl(){for(Cc--;!Cc&&kc.length;)kc.shift()()}function sp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&np(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const kc=[];function ip(t,e,n){Ll();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&kc.push(r.scheduler)))}Fl()}const op=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Dc=new WeakMap,er=Symbol(""),Oc=Symbol("");function dt(t,e,n){if(An&&Zn){let r=Dc.get(t);r||Dc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=op(()=>r.delete(n))),sp(Zn,s)}}function tn(t,e,n,r,s,i){const o=Dc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!ls(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?xl(n)&&a.push(o.get("length")):(a.push(o.get(er)),Mr(t)&&a.push(o.get(Oc)));break;case"delete":Q(t)||(a.push(o.get(er)),Mr(t)&&a.push(o.get(Oc)));break;case"set":Mr(t)&&a.push(o.get(er));break}Ll();for(const c of a)c&&ip(c,4);Fl()}const Ky=Ol("__proto__,__v_isRef,__isVue"),ap=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ls)),Ah=Wy();function Wy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ae(this);for(let i=0,o=this.length;i<o;i++)dt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ae)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){pr(),Ll();const r=ae(this)[e].apply(this,n);return Fl(),gr(),r}}),t}function zy(t){const e=ae(this);return dt(e,"has",t),e.hasOwnProperty(t)}class cp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?av:dp:i?hp:up).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Q(e);if(!s){if(o&&ie(Ah,n))return Reflect.get(Ah,n,r);if(n==="hasOwnProperty")return zy}const a=Reflect.get(e,n,r);return(ls(n)?ap.has(n):Ky(n))||(s||dt(e,"get",n),i)?a:ft(a)?o&&xl(n)?a:a.value:Ie(a)?s?pp(a):Ii(a):a}}class lp extends cp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Wr(i);if(!Ro(r)&&!Wr(r)&&(i=ae(i),r=ae(r)),!Q(e)&&ft(i)&&!ft(r))return c?!1:(i.value=r,!0)}const o=Q(e)&&xl(n)?Number(n)<e.length:ie(e,n),a=Reflect.set(e,n,r,s);return e===ae(s)&&(o?Dn(r,i)&&tn(e,"set",n,r):tn(e,"add",n,r)),a}deleteProperty(e,n){const r=ie(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ls(n)||!ap.has(n))&&dt(e,"has",n),r}ownKeys(e){return dt(e,"iterate",Q(e)?"length":er),Reflect.ownKeys(e)}}class Qy extends cp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Yy=new lp,Jy=new Qy,Xy=new lp(!0),Ul=t=>t,na=t=>Reflect.getPrototypeOf(t);function Wi(t,e,n=!1,r=!1){t=t.__v_raw;const s=ae(t),i=ae(e);n||(Dn(e,i)&&dt(s,"get",e),dt(s,"get",i));const{has:o}=na(s),a=r?Ul:n?jl:Ys;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function zi(t,e=!1){const n=this.__v_raw,r=ae(n),s=ae(t);return e||(Dn(t,s)&&dt(r,"has",t),dt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Qi(t,e=!1){return t=t.__v_raw,!e&&dt(ae(t),"iterate",er),Reflect.get(t,"size",t)}function Rh(t){t=ae(t);const e=ae(this);return na(e).has.call(e,t)||(e.add(t),tn(e,"add",t,t)),this}function bh(t,e){e=ae(e);const n=ae(this),{has:r,get:s}=na(n);let i=r.call(n,t);i||(t=ae(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Dn(e,o)&&tn(n,"set",t,e):tn(n,"add",t,e),this}function Sh(t){const e=ae(this),{has:n,get:r}=na(e);let s=n.call(e,t);s||(t=ae(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&tn(e,"delete",t,void 0),i}function Ph(){const t=ae(this),e=t.size!==0,n=t.clear();return e&&tn(t,"clear",void 0,void 0),n}function Yi(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ae(o),c=e?Ul:t?jl:Ys;return!t&&dt(a,"iterate",er),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function Ji(t,e,n){return function(...r){const s=this.__v_raw,i=ae(s),o=Mr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Ul:e?jl:Ys;return!e&&dt(i,"iterate",c?Oc:er),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function hn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Zy(){const t={get(i){return Wi(this,i)},get size(){return Qi(this)},has:zi,add:Rh,set:bh,delete:Sh,clear:Ph,forEach:Yi(!1,!1)},e={get(i){return Wi(this,i,!1,!0)},get size(){return Qi(this)},has:zi,add:Rh,set:bh,delete:Sh,clear:Ph,forEach:Yi(!1,!0)},n={get(i){return Wi(this,i,!0)},get size(){return Qi(this,!0)},has(i){return zi.call(this,i,!0)},add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear"),forEach:Yi(!0,!1)},r={get(i){return Wi(this,i,!0,!0)},get size(){return Qi(this,!0)},has(i){return zi.call(this,i,!0)},add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear"),forEach:Yi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Ji(i,!1,!1),n[i]=Ji(i,!0,!1),e[i]=Ji(i,!1,!0),r[i]=Ji(i,!0,!0)}),[t,n,e,r]}const[ev,tv,nv,rv]=Zy();function $l(t,e){const n=e?t?rv:nv:t?tv:ev;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const sv={get:$l(!1,!1)},iv={get:$l(!1,!0)},ov={get:$l(!0,!1)},up=new WeakMap,hp=new WeakMap,dp=new WeakMap,av=new WeakMap;function cv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lv(t){return t.__v_skip||!Object.isExtensible(t)?0:cv(Vy(t))}function Ii(t){return Wr(t)?t:Bl(t,!1,Yy,sv,up)}function fp(t){return Bl(t,!1,Xy,iv,hp)}function pp(t){return Bl(t,!0,Jy,ov,dp)}function Bl(t,e,n,r,s){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=lv(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Lr(t){return Wr(t)?Lr(t.__v_raw):!!(t&&t.__v_isReactive)}function Wr(t){return!!(t&&t.__v_isReadonly)}function Ro(t){return!!(t&&t.__v_isShallow)}function gp(t){return Lr(t)||Wr(t)}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function mp(t){return Object.isExtensible(t)&&Ao(t,"__v_skip",!0),t}const Ys=t=>Ie(t)?Ii(t):t,jl=t=>Ie(t)?pp(t):t;class _p{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ml(()=>e(this._value),()=>lo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ae(this);return(!e._cacheable||e.effect.dirty)&&Dn(e._value,e._value=e.effect.run())&&lo(e,4),yp(e),e.effect._dirtyLevel>=2&&lo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function uv(t,e,n=!1){let r,s;const i=Z(t);return i?(r=t,s=wt):(r=t.get,s=t.set),new _p(r,s,i||!s,n)}function yp(t){var e;An&&Zn&&(t=ae(t),sp(Zn,(e=t.dep)!=null?e:t.dep=op(()=>t.dep=void 0,t instanceof _p?t:void 0)))}function lo(t,e=4,n){t=ae(t);const r=t.dep;r&&ip(r,e)}function ft(t){return!!(t&&t.__v_isRef===!0)}function Le(t){return vp(t,!1)}function hv(t){return vp(t,!0)}function vp(t,e){return ft(t)?t:new dv(t,e)}class dv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ae(e),this._value=n?e:Ys(e)}get value(){return yp(this),this._value}set value(e){const n=this.__v_isShallow||Ro(e)||Wr(e);e=n?e:ae(e),Dn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ys(e),lo(this,4))}}function tr(t){return ft(t)?t.value:t}const fv={get:(t,e,n)=>tr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ft(s)&&!ft(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Ep(t){return Lr(t)?t:new Proxy(t,fv)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Rn(t,e,n,r){try{return r?t(...r):t()}catch(s){ra(s,e,n)}}function St(t,e,n,r){if(Z(t)){const i=Rn(t,e,n,r);return i&&Qf(i)&&i.catch(o=>{ra(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(St(t[i],e,n,r));return s}function ra(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Rn(c,null,10,[t,o,a]);return}}pv(t,n,s,r)}function pv(t,e,n,r=!0){console.error(t)}let Js=!1,Vc=!1;const Ye=[];let Ut=0;const Fr=[];let pn=null,Kn=0;const wp=Promise.resolve();let ql=null;function Ip(t){const e=ql||wp;return t?e.then(this?t.bind(this):t):e}function gv(t){let e=Ut+1,n=Ye.length;for(;e<n;){const r=e+n>>>1,s=Ye[r],i=Xs(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Hl(t){(!Ye.length||!Ye.includes(t,Js&&t.allowRecurse?Ut+1:Ut))&&(t.id==null?Ye.push(t):Ye.splice(gv(t.id),0,t),Tp())}function Tp(){!Js&&!Vc&&(Vc=!0,ql=wp.then(Rp))}function mv(t){const e=Ye.indexOf(t);e>Ut&&Ye.splice(e,1)}function _v(t){Q(t)?Fr.push(...t):(!pn||!pn.includes(t,t.allowRecurse?Kn+1:Kn))&&Fr.push(t),Tp()}function Ch(t,e,n=Js?Ut+1:0){for(;n<Ye.length;n++){const r=Ye[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ye.splice(n,1),n--,r()}}}function Ap(t){if(Fr.length){const e=[...new Set(Fr)].sort((n,r)=>Xs(n)-Xs(r));if(Fr.length=0,pn){pn.push(...e);return}for(pn=e,Kn=0;Kn<pn.length;Kn++)pn[Kn]();pn=null,Kn=0}}const Xs=t=>t.id==null?1/0:t.id,yv=(t,e)=>{const n=Xs(t)-Xs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Rp(t){Vc=!1,Js=!0,Ye.sort(yv);try{for(Ut=0;Ut<Ye.length;Ut++){const e=Ye[Ut];e&&e.active!==!1&&Rn(e,null,14)}}finally{Ut=0,Ye.length=0,Ap(),Js=!1,ql=null,(Ye.length||Fr.length)&&Rp()}}function vv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||_e;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||_e;d&&(s=n.map(g=>Oe(g)?g.trim():g)),h&&(s=n.map(Pc))}let a,c=r[a=Ya(e)]||r[a=Ya(Wt(e))];!c&&i&&(c=r[a=Ya(us(e))]),c&&St(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,St(l,t,6,s)}}function bp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!Z(t)){const c=l=>{const u=bp(l,e,!0);u&&(a=!0,Ge(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ie(t)&&r.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):Ge(o,i),Ie(t)&&r.set(t,o),o)}function sa(t,e){return!t||!Xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ie(t,e[0].toLowerCase()+e.slice(1))||ie(t,us(e))||ie(t,e))}let ht=null,Sp=null;function bo(t){const e=ht;return ht=t,Sp=t&&t.type.__scopeId||null,e}function zr(t,e=ht,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&$h(-1);const i=bo(e);let o;try{o=t(...s)}finally{bo(i),r._d&&$h(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Xa(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:g,ctx:_,inheritAttrs:v}=t;let y,E;const k=bo(t);try{if(n.shapeFlag&4){const H=s||r,se=H;y=Ft(u.call(se,H,h,i,g,d,_)),E=c}else{const H=e;y=Ft(H.length>1?H(i,{attrs:c,slots:a,emit:l}):H(i,null)),E=e.props?c:Ev(c)}}catch(H){$s.length=0,ra(H,t,1),y=Ae(ir)}let S=y;if(E&&v!==!1){const H=Object.keys(E),{shapeFlag:se}=S;H.length&&se&7&&(o&&H.some(Vl)&&(E=wv(E,o)),S=Qr(S,E))}return n.dirs&&(S=Qr(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),y=S,bo(k),y}const Ev=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xo(n))&&((e||(e={}))[n]=t[n]);return e},wv=(t,e)=>{const n={};for(const r in t)(!Vl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Iv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?kh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!sa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?kh(r,o,l):!0:!!o;return!1}function kh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!sa(n,i))return!0}return!1}function Tv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Pp="components";function Ti(t,e){return Rv(Pp,t,!0,e)||t}const Av=Symbol.for("v-ndc");function Rv(t,e,n=!0,r=!1){const s=ht||Je;if(s){const i=s.type;if(t===Pp){const a=yE(i,!1);if(a&&(a===e||a===Wt(e)||a===ta(Wt(e))))return i}const o=Dh(s[t]||i[t],e)||Dh(s.appContext[t],e);return!o&&r?i:o}}function Dh(t,e){return t&&(t[e]||t[Wt(e)]||t[ta(Wt(e))])}const bv=t=>t.__isSuspense;function Sv(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):_v(t)}const Pv=Symbol.for("v-scx"),Cv=()=>Pt(Pv);function kv(t,e){return Gl(t,null,e)}const Xi={};function Ur(t,e,n){return Gl(t,e,n)}function Gl(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=_e){if(e&&i){const B=e;e=(...Te)=>{B(...Te),se()}}const c=Je,l=B=>r===!0?B:zn(B,r===!1?1:void 0);let u,h=!1,d=!1;if(ft(t)?(u=()=>t.value,h=Ro(t)):Lr(t)?(u=()=>l(t),h=!0):Q(t)?(d=!0,h=t.some(B=>Lr(B)||Ro(B)),u=()=>t.map(B=>{if(ft(B))return B.value;if(Lr(B))return l(B);if(Z(B))return Rn(B,c,2)})):Z(t)?e?u=()=>Rn(t,c,2):u=()=>(g&&g(),St(t,c,3,[_])):u=wt,e&&r){const B=u;u=()=>zn(B())}let g,_=B=>{g=S.onStop=()=>{Rn(B,c,4),g=S.onStop=void 0}},v;if(ca)if(_=wt,e?n&&St(e,c,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const B=Cv();v=B.__watcherHandles||(B.__watcherHandles=[])}else return wt;let y=d?new Array(t.length).fill(Xi):Xi;const E=()=>{if(!(!S.active||!S.dirty))if(e){const B=S.run();(r||h||(d?B.some((Te,nt)=>Dn(Te,y[nt])):Dn(B,y)))&&(g&&g(),St(e,c,3,[B,y===Xi?void 0:d&&y[0]===Xi?[]:y,_]),y=B)}else S.run()};E.allowRecurse=!!e;let k;s==="sync"?k=E:s==="post"?k=()=>lt(E,c&&c.suspense):(E.pre=!0,c&&(E.id=c.uid),k=()=>Hl(E));const S=new Ml(u,wt,k),H=Hy(),se=()=>{S.stop(),H&&Nl(H.effects,S)};return e?n?E():y=S.run():s==="post"?lt(S.run.bind(S),c&&c.suspense):S.run(),v&&v.push(se),se}function Dv(t,e,n){const r=this.proxy,s=Oe(t)?t.includes(".")?Cp(r,t):()=>r[t]:t.bind(r,r);let i;Z(e)?i=e:(i=e.handler,n=e);const o=Ai(this),a=Gl(s,i.bind(r),n);return o(),a}function Cp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function zn(t,e,n=0,r){if(!Ie(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ft(t))zn(t.value,e,n,r);else if(Q(t))for(let s=0;s<t.length;s++)zn(t[s],e,n,r);else if(zf(t)||Mr(t))t.forEach(s=>{zn(s,e,n,r)});else if(Jf(t))for(const s in t)zn(t[s],e,n,r);return t}function sr(t,e){if(ht===null)return t;const n=la(ht)||ht.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=_e]=e[s];i&&(Z(i)&&(i={mounted:i,updated:i}),i.deep&&zn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function qn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(pr(),St(c,n,8,[t.el,a,t,e]),gr())}}/*! #__NO_SIDE_EFFECTS__ */function kp(t,e){return Z(t)?Ge({name:t.name},e,{setup:t}):t}const uo=t=>!!t.type.__asyncLoader,Dp=t=>t.type.__isKeepAlive;function Ov(t,e){Op(t,"a",e)}function Vv(t,e){Op(t,"da",e)}function Op(t,e,n=Je){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ia(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Dp(s.parent.vnode)&&Nv(r,e,n,s),s=s.parent}}function Nv(t,e,n,r){const s=ia(e,t,r,!0);Vp(()=>{Nl(r[e],s)},n)}function ia(t,e,n=Je,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;pr();const a=Ai(n),c=St(e,n,t,o);return a(),gr(),c});return r?s.unshift(i):s.push(i),i}}const an=t=>(e,n=Je)=>(!ca||t==="sp")&&ia(t,(...r)=>e(...r),n),xv=an("bm"),Kl=an("m"),Mv=an("bu"),Lv=an("u"),Fv=an("bum"),Vp=an("um"),Uv=an("sp"),$v=an("rtg"),Bv=an("rtc");function jv(t,e=Je){ia("ec",t,e)}function Ls(t,e,n,r){let s;const i=n&&n[r];if(Q(t)||Oe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ie(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Nc=t=>t?Kp(t)?la(t)||t.proxy:Nc(t.parent):null,Fs=Ge(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nc(t.parent),$root:t=>Nc(t.root),$emit:t=>t.emit,$options:t=>Wl(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Hl(t.update)}),$nextTick:t=>t.n||(t.n=Ip.bind(t.proxy)),$watch:t=>Dv.bind(t)}),Za=(t,e)=>t!==_e&&!t.__isScriptSetup&&ie(t,e),qv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Za(r,e))return o[e]=1,r[e];if(s!==_e&&ie(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ie(l,e))return o[e]=3,i[e];if(n!==_e&&ie(n,e))return o[e]=4,n[e];xc&&(o[e]=0)}}const u=Fs[e];let h,d;if(u)return e==="$attrs"&&dt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==_e&&ie(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ie(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Za(s,e)?(s[e]=n,!0):r!==_e&&ie(r,e)?(r[e]=n,!0):ie(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==_e&&ie(t,o)||Za(e,o)||(a=i[0])&&ie(a,o)||ie(r,o)||ie(Fs,o)||ie(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ie(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Oh(t){return Q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let xc=!0;function Hv(t){const e=Wl(t),n=t.proxy,r=t.ctx;xc=!1,e.beforeCreate&&Vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:g,updated:_,activated:v,deactivated:y,beforeDestroy:E,beforeUnmount:k,destroyed:S,unmounted:H,render:se,renderTracked:B,renderTriggered:Te,errorCaptured:nt,serverPrefetch:gt,expose:rt,inheritAttrs:ln,components:jn,directives:Nt,filters:ws}=e;if(l&&Gv(l,r,null),o)for(const fe in o){const ce=o[fe];Z(ce)&&(r[fe]=ce.bind(n))}if(s){const fe=s.call(n,n);Ie(fe)&&(t.data=Ii(fe))}if(xc=!0,i)for(const fe in i){const ce=i[fe],Yt=Z(ce)?ce.bind(n,n):Z(ce.get)?ce.get.bind(n,n):wt,un=!Z(ce)&&Z(ce.set)?ce.set.bind(n):wt,xt=Xe({get:Yt,set:un});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>xt.value,set:ct=>xt.value=ct})}if(a)for(const fe in a)Np(a[fe],r,n,fe);if(c){const fe=Z(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(ce=>{ho(ce,fe[ce])})}u&&Vh(u,t,"c");function Ne(fe,ce){Q(ce)?ce.forEach(Yt=>fe(Yt.bind(n))):ce&&fe(ce.bind(n))}if(Ne(xv,h),Ne(Kl,d),Ne(Mv,g),Ne(Lv,_),Ne(Ov,v),Ne(Vv,y),Ne(jv,nt),Ne(Bv,B),Ne($v,Te),Ne(Fv,k),Ne(Vp,H),Ne(Uv,gt),Q(rt))if(rt.length){const fe=t.exposed||(t.exposed={});rt.forEach(ce=>{Object.defineProperty(fe,ce,{get:()=>n[ce],set:Yt=>n[ce]=Yt})})}else t.exposed||(t.exposed={});se&&t.render===wt&&(t.render=se),ln!=null&&(t.inheritAttrs=ln),jn&&(t.components=jn),Nt&&(t.directives=Nt)}function Gv(t,e,n=wt){Q(t)&&(t=Mc(t));for(const r in t){const s=t[r];let i;Ie(s)?"default"in s?i=Pt(s.from||r,s.default,!0):i=Pt(s.from||r):i=Pt(s),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Vh(t,e,n){St(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Np(t,e,n,r){const s=r.includes(".")?Cp(n,r):()=>n[r];if(Oe(t)){const i=e[t];Z(i)&&Ur(s,i)}else if(Z(t))Ur(s,t.bind(n));else if(Ie(t))if(Q(t))t.forEach(i=>Np(i,e,n,r));else{const i=Z(t.handler)?t.handler.bind(n):e[t.handler];Z(i)&&Ur(s,i,t)}}function Wl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>So(c,l,o,!0)),So(c,e,o)),Ie(e)&&i.set(e,c),c}function So(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&So(t,i,n,!0),s&&s.forEach(o=>So(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Kv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Kv={data:Nh,props:xh,emits:xh,methods:Ps,computed:Ps,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:Ps,directives:Ps,watch:zv,provide:Nh,inject:Wv};function Nh(t,e){return e?t?function(){return Ge(Z(t)?t.call(this,this):t,Z(e)?e.call(this,this):e)}:e:t}function Wv(t,e){return Ps(Mc(t),Mc(e))}function Mc(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function st(t,e){return t?[...new Set([].concat(t,e))]:e}function Ps(t,e){return t?Ge(Object.create(null),t,e):e}function xh(t,e){return t?Q(t)&&Q(e)?[...new Set([...t,...e])]:Ge(Object.create(null),Oh(t),Oh(e??{})):e}function zv(t,e){if(!t)return e;if(!e)return t;const n=Ge(Object.create(null),t);for(const r in e)n[r]=st(t[r],e[r]);return n}function xp(){return{app:null,config:{isNativeTag:Dy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Qv=0;function Yv(t,e){return function(r,s=null){Z(r)||(r=Ge({},r)),s!=null&&!Ie(s)&&(s=null);const i=xp(),o=new WeakSet;let a=!1;const c=i.app={_uid:Qv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:EE,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&Z(l.install)?(o.add(l),l.install(c,...u)):Z(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Ae(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,la(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=Us;Us=c;try{return l()}finally{Us=u}}};return c}}let Us=null;function ho(t,e){if(Je){let n=Je.provides;const r=Je.parent&&Je.parent.provides;r===n&&(n=Je.provides=Object.create(r)),n[t]=e}}function Pt(t,e,n=!1){const r=Je||ht;if(r||Us){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Us._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Z(e)?e.call(r&&r.proxy):e}}function Jv(t,e,n,r=!1){const s={},i={};Ao(i,aa,1),t.propsDefaults=Object.create(null),Mp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:fp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Xv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ae(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(sa(t.emitsOptions,d))continue;const g=e[d];if(c)if(ie(i,d))g!==i[d]&&(i[d]=g,l=!0);else{const _=Wt(d);s[_]=Lc(c,a,_,g,t,!1)}else g!==i[d]&&(i[d]=g,l=!0)}}}else{Mp(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ie(e,h)&&((u=us(h))===h||!ie(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Lc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ie(e,h))&&(delete i[h],l=!0)}l&&tn(t,"set","$attrs")}function Mp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ms(c))continue;const l=e[c];let u;s&&ie(s,u=Wt(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:sa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ae(n),l=a||_e;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Lc(s,c,h,l[h],t,!ie(l,h))}}return o}function Lc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ie(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Ai(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===us(n))&&(r=!0))}return r}function Lp(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!Z(t)){const u=h=>{c=!0;const[d,g]=Lp(h,e,!0);Ge(o,d),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ie(t)&&r.set(t,xr),xr;if(Q(i))for(let u=0;u<i.length;u++){const h=Wt(i[u]);Mh(h)&&(o[h]=_e)}else if(i)for(const u in i){const h=Wt(u);if(Mh(h)){const d=i[u],g=o[h]=Q(d)||Z(d)?{type:d}:Ge({},d);if(g){const _=Uh(Boolean,g.type),v=Uh(String,g.type);g[0]=_>-1,g[1]=v<0||_<v,(_>-1||ie(g,"default"))&&a.push(h)}}}const l=[o,a];return Ie(t)&&r.set(t,l),l}function Mh(t){return t[0]!=="$"&&!Ms(t)}function Lh(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Fh(t,e){return Lh(t)===Lh(e)}function Uh(t,e){return Q(e)?e.findIndex(n=>Fh(n,t)):Z(e)&&Fh(e,t)?0:-1}const Fp=t=>t[0]==="_"||t==="$stable",zl=t=>Q(t)?t.map(Ft):[Ft(t)],Zv=(t,e,n)=>{if(e._n)return e;const r=zr((...s)=>zl(e(...s)),n);return r._c=!1,r},Up=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Fp(s))continue;const i=t[s];if(Z(i))e[s]=Zv(s,i,r);else if(i!=null){const o=zl(i);e[s]=()=>o}}},$p=(t,e)=>{const n=zl(e);t.slots.default=()=>n},eE=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ae(e),Ao(e,"_",n)):Up(e,t.slots={})}else t.slots={},e&&$p(t,e);Ao(t.slots,aa,1)},tE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=_e;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ge(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Up(e,s)),o=e}else e&&($p(t,e),o={default:1});if(i)for(const a in s)!Fp(a)&&o[a]==null&&delete s[a]};function Fc(t,e,n,r,s=!1){if(Q(t)){t.forEach((d,g)=>Fc(d,e&&(Q(e)?e[g]:e),n,r,s));return}if(uo(r)&&!s)return;const i=r.shapeFlag&4?la(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===_e?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Oe(l)?(u[l]=null,ie(h,l)&&(h[l]=null)):ft(l)&&(l.value=null)),Z(c))Rn(c,a,12,[o,u]);else{const d=Oe(c),g=ft(c);if(d||g){const _=()=>{if(t.f){const v=d?ie(h,c)?h[c]:u[c]:c.value;s?Q(v)&&Nl(v,i):Q(v)?v.includes(i)||v.push(i):d?(u[c]=[i],ie(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ie(h,c)&&(h[c]=o)):g&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,lt(_,n)):_()}}}const lt=Sv;function nE(t){return rE(t)}function rE(t,e){const n=Xf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:g=wt,insertStaticContent:_}=t,v=(f,p,m,A=null,w=null,C=null,x=void 0,P=null,D=!!p.dynamicChildren)=>{if(f===p)return;f&&!Ts(f,p)&&(A=I(f),ct(f,w,C,!0),f=null),p.patchFlag===-2&&(D=!1,p.dynamicChildren=null);const{type:b,ref:F,shapeFlag:G}=p;switch(b){case oa:y(f,p,m,A);break;case ir:E(f,p,m,A);break;case tc:f==null&&k(p,m,A,x);break;case it:jn(f,p,m,A,w,C,x,P,D);break;default:G&1?se(f,p,m,A,w,C,x,P,D):G&6?Nt(f,p,m,A,w,C,x,P,D):(G&64||G&128)&&b.process(f,p,m,A,w,C,x,P,D,$)}F!=null&&w&&Fc(F,f&&f.ref,C,p||f,!p)},y=(f,p,m,A)=>{if(f==null)r(p.el=a(p.children),m,A);else{const w=p.el=f.el;p.children!==f.children&&l(w,p.children)}},E=(f,p,m,A)=>{f==null?r(p.el=c(p.children||""),m,A):p.el=f.el},k=(f,p,m,A)=>{[f.el,f.anchor]=_(f.children,p,m,A,f.el,f.anchor)},S=({el:f,anchor:p},m,A)=>{let w;for(;f&&f!==p;)w=d(f),r(f,m,A),f=w;r(p,m,A)},H=({el:f,anchor:p})=>{let m;for(;f&&f!==p;)m=d(f),s(f),f=m;s(p)},se=(f,p,m,A,w,C,x,P,D)=>{p.type==="svg"?x="svg":p.type==="math"&&(x="mathml"),f==null?B(p,m,A,w,C,x,P,D):gt(f,p,w,C,x,P,D)},B=(f,p,m,A,w,C,x,P)=>{let D,b;const{props:F,shapeFlag:G,transition:j,dirs:Y}=f;if(D=f.el=o(f.type,C,F&&F.is,F),G&8?u(D,f.children):G&16&&nt(f.children,D,null,A,w,ec(f,C),x,P),Y&&qn(f,null,A,"created"),Te(D,f,f.scopeId,x,A),F){for(const pe in F)pe!=="value"&&!Ms(pe)&&i(D,pe,null,F[pe],C,f.children,A,w,Ke);"value"in F&&i(D,"value",null,F.value,C),(b=F.onVnodeBeforeMount)&&Lt(b,A,f)}Y&&qn(f,null,A,"beforeMount");const ee=sE(w,j);ee&&j.beforeEnter(D),r(D,p,m),((b=F&&F.onVnodeMounted)||ee||Y)&&lt(()=>{b&&Lt(b,A,f),ee&&j.enter(D),Y&&qn(f,null,A,"mounted")},w)},Te=(f,p,m,A,w)=>{if(m&&g(f,m),A)for(let C=0;C<A.length;C++)g(f,A[C]);if(w){let C=w.subTree;if(p===C){const x=w.vnode;Te(f,x,x.scopeId,x.slotScopeIds,w.parent)}}},nt=(f,p,m,A,w,C,x,P,D=0)=>{for(let b=D;b<f.length;b++){const F=f[b]=P?gn(f[b]):Ft(f[b]);v(null,F,p,m,A,w,C,x,P)}},gt=(f,p,m,A,w,C,x)=>{const P=p.el=f.el;let{patchFlag:D,dynamicChildren:b,dirs:F}=p;D|=f.patchFlag&16;const G=f.props||_e,j=p.props||_e;let Y;if(m&&Hn(m,!1),(Y=j.onVnodeBeforeUpdate)&&Lt(Y,m,p,f),F&&qn(p,f,m,"beforeUpdate"),m&&Hn(m,!0),b?rt(f.dynamicChildren,b,P,m,A,ec(p,w),C):x||ce(f,p,P,null,m,A,ec(p,w),C,!1),D>0){if(D&16)ln(P,p,G,j,m,A,w);else if(D&2&&G.class!==j.class&&i(P,"class",null,j.class,w),D&4&&i(P,"style",G.style,j.style,w),D&8){const ee=p.dynamicProps;for(let pe=0;pe<ee.length;pe++){const we=ee[pe],xe=G[we],At=j[we];(At!==xe||we==="value")&&i(P,we,xe,At,w,f.children,m,A,Ke)}}D&1&&f.children!==p.children&&u(P,p.children)}else!x&&b==null&&ln(P,p,G,j,m,A,w);((Y=j.onVnodeUpdated)||F)&&lt(()=>{Y&&Lt(Y,m,p,f),F&&qn(p,f,m,"updated")},A)},rt=(f,p,m,A,w,C,x)=>{for(let P=0;P<p.length;P++){const D=f[P],b=p[P],F=D.el&&(D.type===it||!Ts(D,b)||D.shapeFlag&70)?h(D.el):m;v(D,b,F,null,A,w,C,x,!0)}},ln=(f,p,m,A,w,C,x)=>{if(m!==A){if(m!==_e)for(const P in m)!Ms(P)&&!(P in A)&&i(f,P,m[P],null,x,p.children,w,C,Ke);for(const P in A){if(Ms(P))continue;const D=A[P],b=m[P];D!==b&&P!=="value"&&i(f,P,b,D,x,p.children,w,C,Ke)}"value"in A&&i(f,"value",m.value,A.value,x)}},jn=(f,p,m,A,w,C,x,P,D)=>{const b=p.el=f?f.el:a(""),F=p.anchor=f?f.anchor:a("");let{patchFlag:G,dynamicChildren:j,slotScopeIds:Y}=p;Y&&(P=P?P.concat(Y):Y),f==null?(r(b,m,A),r(F,m,A),nt(p.children||[],m,F,w,C,x,P,D)):G>0&&G&64&&j&&f.dynamicChildren?(rt(f.dynamicChildren,j,m,w,C,x,P),(p.key!=null||w&&p===w.subTree)&&Bp(f,p,!0)):ce(f,p,m,F,w,C,x,P,D)},Nt=(f,p,m,A,w,C,x,P,D)=>{p.slotScopeIds=P,f==null?p.shapeFlag&512?w.ctx.activate(p,m,A,x,D):ws(p,m,A,w,C,x,D):wr(f,p,D)},ws=(f,p,m,A,w,C,x)=>{const P=f.component=fE(f,A,w);if(Dp(f)&&(P.ctx.renderer=$),pE(P),P.asyncDep){if(w&&w.registerDep(P,Ne),!f.el){const D=P.subTree=Ae(ir);E(null,D,p,m)}}else Ne(P,f,p,m,w,C,x)},wr=(f,p,m)=>{const A=p.component=f.component;if(Iv(f,p,m))if(A.asyncDep&&!A.asyncResolved){fe(A,p,m);return}else A.next=p,mv(A.update),A.effect.dirty=!0,A.update();else p.el=f.el,A.vnode=p},Ne=(f,p,m,A,w,C,x)=>{const P=()=>{if(f.isMounted){let{next:F,bu:G,u:j,parent:Y,vnode:ee}=f;{const Ar=jp(f);if(Ar){F&&(F.el=ee.el,fe(f,F,x)),Ar.asyncDep.then(()=>{f.isUnmounted||P()});return}}let pe=F,we;Hn(f,!1),F?(F.el=ee.el,fe(f,F,x)):F=ee,G&&co(G),(we=F.props&&F.props.onVnodeBeforeUpdate)&&Lt(we,Y,F,ee),Hn(f,!0);const xe=Xa(f),At=f.subTree;f.subTree=xe,v(At,xe,h(At.el),I(At),f,w,C),F.el=xe.el,pe===null&&Tv(f,xe.el),j&&lt(j,w),(we=F.props&&F.props.onVnodeUpdated)&&lt(()=>Lt(we,Y,F,ee),w)}else{let F;const{el:G,props:j}=p,{bm:Y,m:ee,parent:pe}=f,we=uo(p);if(Hn(f,!1),Y&&co(Y),!we&&(F=j&&j.onVnodeBeforeMount)&&Lt(F,pe,p),Hn(f,!0),G&&Ee){const xe=()=>{f.subTree=Xa(f),Ee(G,f.subTree,f,w,null)};we?p.type.__asyncLoader().then(()=>!f.isUnmounted&&xe()):xe()}else{const xe=f.subTree=Xa(f);v(null,xe,m,A,f,w,C),p.el=xe.el}if(ee&&lt(ee,w),!we&&(F=j&&j.onVnodeMounted)){const xe=p;lt(()=>Lt(F,pe,xe),w)}(p.shapeFlag&256||pe&&uo(pe.vnode)&&pe.vnode.shapeFlag&256)&&f.a&&lt(f.a,w),f.isMounted=!0,p=m=A=null}},D=f.effect=new Ml(P,wt,()=>Hl(b),f.scope),b=f.update=()=>{D.dirty&&D.run()};b.id=f.uid,Hn(f,!0),b()},fe=(f,p,m)=>{p.component=f;const A=f.vnode.props;f.vnode=p,f.next=null,Xv(f,p.props,A,m),tE(f,p.children,m),pr(),Ch(f),gr()},ce=(f,p,m,A,w,C,x,P,D=!1)=>{const b=f&&f.children,F=f?f.shapeFlag:0,G=p.children,{patchFlag:j,shapeFlag:Y}=p;if(j>0){if(j&128){un(b,G,m,A,w,C,x,P,D);return}else if(j&256){Yt(b,G,m,A,w,C,x,P,D);return}}Y&8?(F&16&&Ke(b,w,C),G!==b&&u(m,G)):F&16?Y&16?un(b,G,m,A,w,C,x,P,D):Ke(b,w,C,!0):(F&8&&u(m,""),Y&16&&nt(G,m,A,w,C,x,P,D))},Yt=(f,p,m,A,w,C,x,P,D)=>{f=f||xr,p=p||xr;const b=f.length,F=p.length,G=Math.min(b,F);let j;for(j=0;j<G;j++){const Y=p[j]=D?gn(p[j]):Ft(p[j]);v(f[j],Y,m,null,w,C,x,P,D)}b>F?Ke(f,w,C,!0,!1,G):nt(p,m,A,w,C,x,P,D,G)},un=(f,p,m,A,w,C,x,P,D)=>{let b=0;const F=p.length;let G=f.length-1,j=F-1;for(;b<=G&&b<=j;){const Y=f[b],ee=p[b]=D?gn(p[b]):Ft(p[b]);if(Ts(Y,ee))v(Y,ee,m,null,w,C,x,P,D);else break;b++}for(;b<=G&&b<=j;){const Y=f[G],ee=p[j]=D?gn(p[j]):Ft(p[j]);if(Ts(Y,ee))v(Y,ee,m,null,w,C,x,P,D);else break;G--,j--}if(b>G){if(b<=j){const Y=j+1,ee=Y<F?p[Y].el:A;for(;b<=j;)v(null,p[b]=D?gn(p[b]):Ft(p[b]),m,ee,w,C,x,P,D),b++}}else if(b>j)for(;b<=G;)ct(f[b],w,C,!0),b++;else{const Y=b,ee=b,pe=new Map;for(b=ee;b<=j;b++){const mt=p[b]=D?gn(p[b]):Ft(p[b]);mt.key!=null&&pe.set(mt.key,b)}let we,xe=0;const At=j-ee+1;let Ar=!1,yh=0;const Is=new Array(At);for(b=0;b<At;b++)Is[b]=0;for(b=Y;b<=G;b++){const mt=f[b];if(xe>=At){ct(mt,w,C,!0);continue}let Mt;if(mt.key!=null)Mt=pe.get(mt.key);else for(we=ee;we<=j;we++)if(Is[we-ee]===0&&Ts(mt,p[we])){Mt=we;break}Mt===void 0?ct(mt,w,C,!0):(Is[Mt-ee]=b+1,Mt>=yh?yh=Mt:Ar=!0,v(mt,p[Mt],m,null,w,C,x,P,D),xe++)}const vh=Ar?iE(Is):xr;for(we=vh.length-1,b=At-1;b>=0;b--){const mt=ee+b,Mt=p[mt],Eh=mt+1<F?p[mt+1].el:A;Is[b]===0?v(null,Mt,m,Eh,w,C,x,P,D):Ar&&(we<0||b!==vh[we]?xt(Mt,m,Eh,2):we--)}}},xt=(f,p,m,A,w=null)=>{const{el:C,type:x,transition:P,children:D,shapeFlag:b}=f;if(b&6){xt(f.component.subTree,p,m,A);return}if(b&128){f.suspense.move(p,m,A);return}if(b&64){x.move(f,p,m,$);return}if(x===it){r(C,p,m);for(let G=0;G<D.length;G++)xt(D[G],p,m,A);r(f.anchor,p,m);return}if(x===tc){S(f,p,m);return}if(A!==2&&b&1&&P)if(A===0)P.beforeEnter(C),r(C,p,m),lt(()=>P.enter(C),w);else{const{leave:G,delayLeave:j,afterLeave:Y}=P,ee=()=>r(C,p,m),pe=()=>{G(C,()=>{ee(),Y&&Y()})};j?j(C,ee,pe):pe()}else r(C,p,m)},ct=(f,p,m,A=!1,w=!1)=>{const{type:C,props:x,ref:P,children:D,dynamicChildren:b,shapeFlag:F,patchFlag:G,dirs:j}=f;if(P!=null&&Fc(P,null,m,f,!0),F&256){p.ctx.deactivate(f);return}const Y=F&1&&j,ee=!uo(f);let pe;if(ee&&(pe=x&&x.onVnodeBeforeUnmount)&&Lt(pe,p,f),F&6)Ki(f.component,m,A);else{if(F&128){f.suspense.unmount(m,A);return}Y&&qn(f,null,p,"beforeUnmount"),F&64?f.type.remove(f,p,m,w,$,A):b&&(C!==it||G>0&&G&64)?Ke(b,p,m,!1,!0):(C===it&&G&384||!w&&F&16)&&Ke(D,p,m),A&&Ir(f)}(ee&&(pe=x&&x.onVnodeUnmounted)||Y)&&lt(()=>{pe&&Lt(pe,p,f),Y&&qn(f,null,p,"unmounted")},m)},Ir=f=>{const{type:p,el:m,anchor:A,transition:w}=f;if(p===it){Tr(m,A);return}if(p===tc){H(f);return}const C=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:x,delayLeave:P}=w,D=()=>x(m,C);P?P(f.el,C,D):D()}else C()},Tr=(f,p)=>{let m;for(;f!==p;)m=d(f),s(f),f=m;s(p)},Ki=(f,p,m)=>{const{bum:A,scope:w,update:C,subTree:x,um:P}=f;A&&co(A),w.stop(),C&&(C.active=!1,ct(x,f,p,m)),P&&lt(P,p),lt(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ke=(f,p,m,A=!1,w=!1,C=0)=>{for(let x=C;x<f.length;x++)ct(f[x],p,m,A,w)},I=f=>f.shapeFlag&6?I(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el);let L=!1;const N=(f,p,m)=>{f==null?p._vnode&&ct(p._vnode,null,null,!0):v(p._vnode||null,f,p,null,null,null,m),L||(L=!0,Ch(),Ap(),L=!1),p._vnode=f},$={p:v,um:ct,m:xt,r:Ir,mt:ws,mc:nt,pc:ce,pbc:rt,n:I,o:t};let le,Ee;return e&&([le,Ee]=e($)),{render:N,hydrate:le,createApp:Yv(N,le)}}function ec({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Hn({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bp(t,e,n=!1){const r=t.children,s=e.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=gn(s[i]),a.el=o.el),n||Bp(o,a)),a.type===oa&&(a.el=o.el)}}function iE(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function jp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jp(e)}const oE=t=>t.__isTeleport,it=Symbol.for("v-fgt"),oa=Symbol.for("v-txt"),ir=Symbol.for("v-cmt"),tc=Symbol.for("v-stc"),$s=[];let bt=null;function ue(t=!1){$s.push(bt=t?null:[])}function aE(){$s.pop(),bt=$s[$s.length-1]||null}let Zs=1;function $h(t){Zs+=t}function qp(t){return t.dynamicChildren=Zs>0?bt||xr:null,aE(),Zs>0&&bt&&bt.push(t),t}function ge(t,e,n,r,s,i){return qp(U(t,e,n,r,s,i,!0))}function Hp(t,e,n,r,s){return qp(Ae(t,e,n,r,s,!0))}function Uc(t){return t?t.__v_isVNode===!0:!1}function Ts(t,e){return t.type===e.type&&t.key===e.key}const aa="__vInternal",Gp=({key:t})=>t??null,fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||ft(t)||Z(t)?{i:ht,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,r=0,s=null,i=t===it?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Gp(e),ref:e&&fo(e),scopeId:Sp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ht};return a?(Ql(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Oe(n)?8:16),Zs>0&&!o&&bt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&bt.push(c),c}const Ae=cE;function cE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Av)&&(t=ir),Uc(t)){const a=Qr(t,e,!0);return n&&Ql(a,n),Zs>0&&!i&&bt&&(a.shapeFlag&6?bt[bt.indexOf(t)]=a:bt.push(a)),a.patchFlag|=-2,a}if(vE(t)&&(t=t.__vccOpts),e){e=lE(e);let{class:a,style:c}=e;a&&!Oe(a)&&(e.class=Tn(a)),Ie(c)&&(gp(c)&&!Q(c)&&(c=Ge({},c)),e.style=Gr(c))}const o=Oe(t)?1:bv(t)?128:oE(t)?64:Ie(t)?4:Z(t)?2:0;return U(t,e,n,r,s,o,i,!0)}function lE(t){return t?gp(t)||aa in t?Ge({},t):t:null}function Qr(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?uE(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Gp(a),ref:e&&e.ref?n&&s?Q(s)?s.concat(fo(e)):[s,fo(e)]:fo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==it?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qr(t.ssContent),ssFallback:t.ssFallback&&Qr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Yr(t=" ",e=0){return Ae(oa,null,t,e)}function ei(t="",e=!1){return e?(ue(),Hp(ir,null,t)):Ae(ir,null,t)}function Ft(t){return t==null||typeof t=="boolean"?Ae(ir):Q(t)?Ae(it,null,t.slice()):typeof t=="object"?gn(t):Ae(oa,null,String(t))}function gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qr(t)}function Ql(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ql(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(aa in e)?e._ctx=ht:s===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Z(e)?(e={default:e,_ctx:ht},n=32):(e=String(e),r&64?(n=16,e=[Yr(e)]):n=8);t.children=e,t.shapeFlag|=n}function uE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tn([e.class,r.class]));else if(s==="style")e.style=Gr([e.style,r.style]);else if(Xo(s)){const i=e[s],o=r[s];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Lt(t,e,n,r=null){St(t,e,7,[n,r])}const hE=xp();let dE=0;function fE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hE,i={uid:dE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new tp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Lp(r,s),emitsOptions:bp(r,s),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:r.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vv.bind(null,i),t.ce&&t.ce(i),i}let Je=null,Po,$c;{const t=Xf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Po=e("__VUE_INSTANCE_SETTERS__",n=>Je=n),$c=e("__VUE_SSR_SETTERS__",n=>ca=n)}const Ai=t=>{const e=Je;return Po(t),t.scope.on(),()=>{t.scope.off(),Po(e)}},Bh=()=>{Je&&Je.scope.off(),Po(null)};function Kp(t){return t.vnode.shapeFlag&4}let ca=!1;function pE(t,e=!1){e&&$c(e);const{props:n,children:r}=t.vnode,s=Kp(t);Jv(t,n,s,e),eE(t,r);const i=s?gE(t,e):void 0;return e&&$c(!1),i}function gE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mp(new Proxy(t.ctx,qv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?_E(t):null,i=Ai(t);pr();const o=Rn(r,t,0,[t.props,s]);if(gr(),i(),Qf(o)){if(o.then(Bh,Bh),e)return o.then(a=>{jh(t,a,e)}).catch(a=>{ra(a,t,0)});t.asyncDep=o}else jh(t,o,e)}else Wp(t,e)}function jh(t,e,n){Z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Ep(e)),Wp(t,n)}let qh;function Wp(t,e,n){const r=t.type;if(!t.render){if(!e&&qh&&!r.render){const s=r.template||Wl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Ge(Ge({isCustomElement:i,delimiters:a},o),c);r.render=qh(s,l)}}t.render=r.render||wt}{const s=Ai(t);pr();try{Hv(t)}finally{gr(),s()}}}function mE(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}}))}function _E(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return mE(t)},slots:t.slots,emit:t.emit,expose:e}}function la(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ep(mp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Fs)return Fs[n](t)},has(e,n){return n in e||n in Fs}}))}function yE(t,e=!0){return Z(t)?t.displayName||t.name:t.name||e&&t.__name}function vE(t){return Z(t)&&"__vccOpts"in t}const Xe=(t,e)=>uv(t,e,ca);function zp(t,e,n){const r=arguments.length;return r===2?Ie(e)&&!Q(e)?Uc(e)?Ae(t,null,[e]):Ae(t,e):Ae(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Uc(n)&&(n=[n]),Ae(t,e,n))}const EE="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const wE="http://www.w3.org/2000/svg",IE="http://www.w3.org/1998/Math/MathML",mn=typeof document<"u"?document:null,Hh=mn&&mn.createElement("template"),TE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?mn.createElementNS(wE,t):e==="mathml"?mn.createElementNS(IE,t):mn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mn.createTextNode(t),createComment:t=>mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Hh.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},AE=Symbol("_vtc");function RE(t,e,n){const r=t[AE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Gh=Symbol("_vod"),bE=Symbol("_vsh"),SE=Symbol(""),PE=/(^|;)\s*display\s*:/;function CE(t,e,n){const r=t.style,s=Oe(n);let i=!1;if(n&&!s){if(e)if(Oe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&po(r,a,"")}else for(const o in e)n[o]==null&&po(r,o,"");for(const o in n)o==="display"&&(i=!0),po(r,o,n[o])}else if(s){if(e!==n){const o=r[SE];o&&(n+=";"+o),r.cssText=n,i=PE.test(n)}}else e&&t.removeAttribute("style");Gh in t&&(t[Gh]=i?r.display:"",t[bE]&&(r.display="none"))}const Kh=/\s*!important$/;function po(t,e,n){if(Q(n))n.forEach(r=>po(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=kE(t,e);Kh.test(n)?t.setProperty(us(r),n.replace(Kh,""),"important"):t[r]=n}}const Wh=["Webkit","Moz","ms"],nc={};function kE(t,e){const n=nc[e];if(n)return n;let r=Wt(e);if(r!=="filter"&&r in t)return nc[e]=r;r=ta(r);for(let s=0;s<Wh.length;s++){const i=Wh[s]+r;if(i in t)return nc[e]=i}return e}const zh="http://www.w3.org/1999/xlink";function DE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(zh,e.slice(6,e.length)):t.setAttributeNS(zh,e,n);else{const i=By(e);n==null||i&&!Zf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function OE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Zf(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Pr(t,e,n,r){t.addEventListener(e,n,r)}function VE(t,e,n,r){t.removeEventListener(e,n,r)}const Qh=Symbol("_vei");function NE(t,e,n,r,s=null){const i=t[Qh]||(t[Qh]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=xE(e);if(r){const l=i[e]=FE(r,s);Pr(t,a,l,c)}else o&&(VE(t,a,o,c),i[e]=void 0)}}const Yh=/(?:Once|Passive|Capture)$/;function xE(t){let e;if(Yh.test(t)){e={};let r;for(;r=t.match(Yh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):us(t.slice(2)),e]}let rc=0;const ME=Promise.resolve(),LE=()=>rc||(ME.then(()=>rc=0),rc=Date.now());function FE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;St(UE(r,n.value),e,5,[r])};return n.value=t,n.attached=LE(),n}function UE(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Jh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,$E=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?RE(t,r,l):e==="style"?CE(t,n,r):Xo(e)?Vl(e)||NE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):BE(t,e,r,l))?OE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),DE(t,e,r,l))};function BE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Jh(e)&&Z(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Jh(e)&&Oe(n)?!1:e in t}const Xh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>co(e,n):e};function jE(t){t.target.composing=!0}function Zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sc=Symbol("_assign"),or={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[sc]=Xh(s);const i=r||s.props&&s.props.type==="number";Pr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Pc(a)),t[sc](a)}),n&&Pr(t,"change",()=>{t.value=t.value.trim()}),e||(Pr(t,"compositionstart",jE),Pr(t,"compositionend",Zh),Pr(t,"change",Zh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[sc]=Xh(i),t.composing)return;const o=s||t.type==="number"?Pc(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},qE=["ctrl","shift","alt","meta"],HE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>qE.some(n=>t[`${n}Key`]&&!e.includes(n))},ua=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=HE[e[o]];if(a&&a(s,e))return}return t(s,...i)})},GE=Ge({patchProp:$E},TE);let ed;function KE(){return ed||(ed=nE(GE))}const WE=(...t)=>{const e=KE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=QE(r);if(!s)return;const i=e._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,zE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function zE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function QE(t){return Oe(t)?document.querySelector(t):t}function YE(){return Qp().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Qp(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const JE=typeof Proxy=="function",XE="devtools-plugin:setup",ZE="plugin:settings:set";let Rr,Bc;function ew(){var t;return Rr!==void 0||(typeof window<"u"&&window.performance?(Rr=!0,Bc=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(Rr=!0,Bc=globalThis.perf_hooks.performance):Rr=!1),Rr}function tw(){return ew()?Bc.now():Date.now()}class nw{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const o in e.settings){const a=e.settings[o];r[o]=a.defaultValue}const s=`__vue-devtools-plugin-settings__${e.id}`;let i=Object.assign({},r);try{const o=localStorage.getItem(s),a=JSON.parse(o);Object.assign(i,a)}catch{}this.fallbacks={getSettings(){return i},setSettings(o){try{localStorage.setItem(s,JSON.stringify(o))}catch{}i=o},now(){return tw()}},n&&n.on(ZE,(o,a)=>{o===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(o,a)=>this.target?this.target.on[a]:(...c)=>{this.onQueue.push({method:a,args:c})}}),this.proxiedTarget=new Proxy({},{get:(o,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...c)=>(this.targetQueue.push({method:a,args:c,resolve:()=>{}}),this.fallbacks[a](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:a,args:c,resolve:l})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function rw(t,e){const n=t,r=Qp(),s=YE(),i=JE&&n.enableEarlyProxy;if(s&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!i))s.emit(XE,t,e);else{const o=i?new nw(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:o}),o&&e(o.proxiedTarget)}}/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */var Yp="store";function hs(t){return t===void 0&&(t=null),Pt(t!==null?t:Yp)}function ds(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function sw(t){return t!==null&&typeof t=="object"}function iw(t){return t&&typeof t.then=="function"}function ow(t,e){return function(){return t(e)}}function Jp(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Xp(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;ha(t,n,[],t._modules.root,!0),Yl(t,n,e)}function Yl(t,e,n){var r=t._state,s=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={},a={},c=jy(!0);c.run(function(){ds(i,function(l,u){o[u]=ow(l,t),a[u]=Xe(function(){return o[u]()}),Object.defineProperty(t.getters,u,{get:function(){return a[u].value},enumerable:!0})})}),t._state=Ii({data:e}),t._scope=c,t.strict&&hw(t),r&&n&&t._withCommit(function(){r.data=null}),s&&s.stop()}function ha(t,e,n,r,s){var i=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!i&&!s){var a=Jl(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){a[c]=r.state})}var l=r.context=aw(t,o,n);r.forEachMutation(function(u,h){var d=o+h;cw(t,d,u,l)}),r.forEachAction(function(u,h){var d=u.root?h:o+h,g=u.handler||u;lw(t,d,g,l)}),r.forEachGetter(function(u,h){var d=o+h;uw(t,d,u,l)}),r.forEachChild(function(u,h){ha(t,e,n.concat(h),u,s)})}function aw(t,e,n){var r=e==="",s={dispatch:r?t.dispatch:function(i,o,a){var c=Co(i,o,a),l=c.payload,u=c.options,h=c.type;return(!u||!u.root)&&(h=e+h),t.dispatch(h,l)},commit:r?t.commit:function(i,o,a){var c=Co(i,o,a),l=c.payload,u=c.options,h=c.type;(!u||!u.root)&&(h=e+h),t.commit(h,l,u)}};return Object.defineProperties(s,{getters:{get:r?function(){return t.getters}:function(){return Zp(t,e)}},state:{get:function(){return Jl(t.state,n)}}}),s}function Zp(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(s){if(s.slice(0,r)===e){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[s]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function cw(t,e,n,r){var s=t._mutations[e]||(t._mutations[e]=[]);s.push(function(o){n.call(t,r.state,o)})}function lw(t,e,n,r){var s=t._actions[e]||(t._actions[e]=[]);s.push(function(o){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},o);return iw(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(c){throw t._devtoolHook.emit("vuex:error",c),c}):a})}function uw(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(i){return n(r.state,r.getters,i.state,i.getters)})}function hw(t){Ur(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function Jl(t,e){return e.reduce(function(n,r){return n[r]},t)}function Co(t,e,n){return sw(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var dw="vuex bindings",td="vuex:mutations",ic="vuex:actions",br="vuex",fw=0;function pw(t,e){rw({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[dw]},function(n){n.addTimelineLayer({id:td,label:"Vuex Mutations",color:nd}),n.addTimelineLayer({id:ic,label:"Vuex Actions",color:nd}),n.addInspector({id:br,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===br)if(r.filter){var s=[];rg(s,e._modules.root,r.filter,""),r.rootNodes=s}else r.rootNodes=[ng(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===br){var s=r.nodeId;Zp(e,s),r.state=_w(vw(e._modules,s),s==="root"?e.getters:e._makeLocalGettersCache,s)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===br){var s=r.nodeId,i=r.path;s!=="root"&&(i=s.split("/").filter(Boolean).concat(i)),e._withCommit(function(){r.set(e._state.data,i,r.state.value)})}}),e.subscribe(function(r,s){var i={};r.payload&&(i.payload=r.payload),i.state=s,n.notifyComponentUpdate(),n.sendInspectorTree(br),n.sendInspectorState(br),n.addTimelineEvent({layerId:td,event:{time:Date.now(),title:r.type,data:i}})}),e.subscribeAction({before:function(r,s){var i={};r.payload&&(i.payload=r.payload),r._id=fw++,r._time=Date.now(),i.state=s,n.addTimelineEvent({layerId:ic,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:i}})},after:function(r,s){var i={},o=Date.now()-r._time;i.duration={_custom:{type:"duration",display:o+"ms",tooltip:"Action duration",value:o}},r.payload&&(i.payload=r.payload),i.state=s,n.addTimelineEvent({layerId:ic,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:i}})}})})}var nd=8702998,gw=6710886,mw=16777215,eg={label:"namespaced",textColor:mw,backgroundColor:gw};function tg(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function ng(t,e){return{id:e||"root",label:tg(e),tags:t.namespaced?[eg]:[],children:Object.keys(t._children).map(function(n){return ng(t._children[n],e+n+"/")})}}function rg(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[eg]:[]}),Object.keys(e._children).forEach(function(s){rg(t,e._children[s],n,r+s+"/")})}function _w(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),s={state:Object.keys(t.state).map(function(o){return{key:o,editable:!0,value:t.state[o]}})};if(r.length){var i=yw(e);s.getters=Object.keys(i).map(function(o){return{key:o.endsWith("/")?tg(o):o,editable:!1,value:jc(function(){return i[o]})}})}return s}function yw(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var s=e,i=r.pop();r.forEach(function(o){s[o]||(s[o]={_custom:{value:{},display:o,tooltip:"Module",abstract:!0}}),s=s[o]._custom.value}),s[i]=jc(function(){return t[n]})}else e[n]=jc(function(){return t[n]})}),e}function vw(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,s,i){var o=r[s];if(!o)throw new Error('Missing module "'+s+'" for path "'+e+'".');return i===n.length-1?o:o._children},e==="root"?t:t.root._children)}function jc(t){try{return t()}catch(e){return e}}var Vt=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},sg={namespaced:{configurable:!0}};sg.namespaced.get=function(){return!!this._rawModule.namespaced};Vt.prototype.addChild=function(e,n){this._children[e]=n};Vt.prototype.removeChild=function(e){delete this._children[e]};Vt.prototype.getChild=function(e){return this._children[e]};Vt.prototype.hasChild=function(e){return e in this._children};Vt.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};Vt.prototype.forEachChild=function(e){ds(this._children,e)};Vt.prototype.forEachGetter=function(e){this._rawModule.getters&&ds(this._rawModule.getters,e)};Vt.prototype.forEachAction=function(e){this._rawModule.actions&&ds(this._rawModule.actions,e)};Vt.prototype.forEachMutation=function(e){this._rawModule.mutations&&ds(this._rawModule.mutations,e)};Object.defineProperties(Vt.prototype,sg);var mr=function(e){this.register([],e,!1)};mr.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};mr.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,s){return n=n.getChild(s),r+(n.namespaced?s+"/":"")},"")};mr.prototype.update=function(e){ig([],this.root,e)};mr.prototype.register=function(e,n,r){var s=this;r===void 0&&(r=!0);var i=new Vt(n,r);if(e.length===0)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}n.modules&&ds(n.modules,function(a,c){s.register(e.concat(c),a,r)})};mr.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],s=n.getChild(r);s&&s.runtime&&n.removeChild(r)};mr.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function ig(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;ig(t.concat(r),e.getChild(r),n.modules[r])}}function Ew(t){return new pt(t)}var pt=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var s=e.strict;s===void 0&&(s=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new mr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var o=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(d,g){return c.call(o,d,g)},this.commit=function(d,g,_){return l.call(o,d,g,_)},this.strict=s;var u=this._modules.root.state;ha(this,u,[],this._modules.root),Yl(this,u),r.forEach(function(h){return h(n)})},Xl={state:{configurable:!0}};pt.prototype.install=function(e,n){e.provide(n||Yp,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&pw(e,this)};Xl.state.get=function(){return this._state.data};Xl.state.set=function(t){};pt.prototype.commit=function(e,n,r){var s=this,i=Co(e,n,r),o=i.type,a=i.payload,c={type:o,payload:a},l=this._mutations[o];l&&(this._withCommit(function(){l.forEach(function(h){h(a)})}),this._subscribers.slice().forEach(function(u){return u(c,s.state)}))};pt.prototype.dispatch=function(e,n){var r=this,s=Co(e,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._actions[i];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(o)})):c[0](o);return new Promise(function(u,h){l.then(function(d){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}u(d)},function(d){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,d)})}catch{}h(d)})})}};pt.prototype.subscribe=function(e,n){return Jp(e,this._subscribers,n)};pt.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Jp(r,this._actionSubscribers,n)};pt.prototype.watch=function(e,n,r){var s=this;return Ur(function(){return e(s.state,s.getters)},n,Object.assign({},r))};pt.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};pt.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),ha(this,this.state,e,this._modules.get(e),r.preserveState),Yl(this,this.state)};pt.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=Jl(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Xp(this)};pt.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};pt.prototype.hotUpdate=function(e){this._modules.update(e),Xp(this,!0)};pt.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(pt.prototype,Xl);const ww={class:"text-textcolor h-screen dark:text-textcolordark"},Iw={__name:"App",setup(t){const e=hs(),n=Xe(()=>e.state.darkmode);return Kl(()=>{localStorage.getItem("darkmode")=="true"&&e.dispatch("darkmode",!0)}),(r,s)=>{const i=Ti("router-view");return ue(),ge("div",{class:Tn({dark:n.value==!0})},[U("div",ww,[Ae(i)])],2)}}};/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Cr=typeof document<"u";function Tw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const he=Object.assign;function oc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ct(s)?s.map(t):t(s)}return n}const Bs=()=>{},Ct=Array.isArray,og=/#/g,Aw=/&/g,Rw=/\//g,bw=/=/g,Sw=/\?/g,ag=/\+/g,Pw=/%5B/g,Cw=/%5D/g,cg=/%5E/g,kw=/%60/g,lg=/%7B/g,Dw=/%7C/g,ug=/%7D/g,Ow=/%20/g;function Zl(t){return encodeURI(""+t).replace(Dw,"|").replace(Pw,"[").replace(Cw,"]")}function Vw(t){return Zl(t).replace(lg,"{").replace(ug,"}").replace(cg,"^")}function qc(t){return Zl(t).replace(ag,"%2B").replace(Ow,"+").replace(og,"%23").replace(Aw,"%26").replace(kw,"`").replace(lg,"{").replace(ug,"}").replace(cg,"^")}function Nw(t){return qc(t).replace(bw,"%3D")}function xw(t){return Zl(t).replace(og,"%23").replace(Sw,"%3F")}function Mw(t){return t==null?"":xw(t).replace(Rw,"%2F")}function ti(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Lw=/\/$/,Fw=t=>t.replace(Lw,"");function ac(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=jw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:ti(o)}}function Uw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $w(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Jr(e.matched[r],n.matched[s])&&hg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bw(t[n],e[n]))return!1;return!0}function Bw(t,e){return Ct(t)?sd(t,e):Ct(e)?sd(e,t):t===e}function sd(t,e){return Ct(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var ni;(function(t){t.pop="pop",t.push="push"})(ni||(ni={}));var js;(function(t){t.back="back",t.forward="forward",t.unknown=""})(js||(js={}));function qw(t){if(!t)if(Cr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fw(t)}const Hw=/^[^#]+#/;function Gw(t,e){return t.replace(Hw,"#")+e}function Kw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const da=()=>({left:window.scrollX,top:window.scrollY});function Ww(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Kw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function id(t,e){return(history.state?history.state.position-e:-1)+t}const Hc=new Map;function zw(t,e){Hc.set(t,e)}function Qw(t){const e=Hc.get(t);return Hc.delete(t),e}let Yw=()=>location.protocol+"//"+location.host;function dg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),rd(c,"")}return rd(n,t)+r+s}function Jw(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const g=dg(t,location),_=n.value,v=e.value;let y=0;if(d){if(n.value=g,e.value=d,o&&o===_){o=null;return}y=v?d.position-v.position:0}else r(g);s.forEach(E=>{E(n.value,_,{delta:y,type:ni.pop,direction:y?y>0?js.forward:js.back:js.unknown})})};function c(){o=n.value}function l(d){s.push(d);const g=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(g),g}function u(){const{history:d}=window;d.state&&d.replaceState(he({},d.state,{scroll:da()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function od(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?da():null}}function Xw(t){const{history:e,location:n}=window,r={value:dg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Yw()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(g){console.error(g),n[u?"replace":"assign"](d)}}function o(c,l){const u=he({},e.state,od(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=he({},s.value,e.state,{forward:c,scroll:da()});i(u.current,u,!0);const h=he({},od(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Zw(t){t=qw(t);const e=Xw(t),n=Jw(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=he({location:"",base:t,go:r,createHref:Gw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function eI(t){return typeof t=="string"||t&&typeof t=="object"}function fg(t){return typeof t=="string"||typeof t=="symbol"}const dn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pg=Symbol("");var ad;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ad||(ad={}));function Xr(t,e){return he(new Error,{type:t,[pg]:!0},e)}function Jt(t,e){return t instanceof Error&&pg in t&&(e==null||!!(t.type&e))}const cd="[^/]+?",tI={sensitive:!1,strict:!1,start:!0,end:!0},nI=/[.+*?^${}()[\]/\\]/g;function rI(t,e){const n=he({},tI,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let g=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(nI,"\\$&"),g+=40;else if(d.type===1){const{value:_,repeatable:v,optional:y,regexp:E}=d;i.push({name:_,repeatable:v,optional:y});const k=E||cd;if(k!==cd){g+=10;try{new RegExp(`(${k})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${_}" (${k}): `+H.message)}}let S=v?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(S=y&&l.length<2?`(?:/${S})`:"/"+S),y&&(S+="?"),s+=S,g+=20,y&&(g+=-8),v&&(g+=-20),k===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const g=u[d]||"",_=i[d-1];h[_.name]=g&&_.repeatable?g.split("/"):g}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const g of d)if(g.type===0)u+=g.value;else if(g.type===1){const{value:_,repeatable:v,optional:y}=g,E=_ in l?l[_]:"";if(Ct(E)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const k=Ct(E)?E.join("/"):E;if(!k)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function sI(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function iI(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=sI(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ld(r))return 1;if(ld(s))return-1}return s.length-r.length}function ld(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const oI={type:0,value:""},aI=/[a-zA-Z0-9_]/;function cI(t){if(!t)return[[]];if(t==="/")return[[oI]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:aI.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function lI(t,e,n){const r=rI(cI(t.path),n),s=he(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function uI(t,e){const n=[],r=new Map;e=dd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const g=!d,_=hI(u);_.aliasOf=d&&d.record;const v=dd(e,u),y=[_];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of S)y.push(he({},_,{components:d?d.record.components:_.components,path:H,aliasOf:d?d.record:_}))}let E,k;for(const S of y){const{path:H}=S;if(h&&H[0]!=="/"){const se=h.record.path,B=se[se.length-1]==="/"?"":"/";S.path=h.record.path+(H&&B+H)}if(E=lI(S,h,v),d?d.alias.push(E):(k=k||E,k!==E&&k.alias.push(E),g&&u.name&&!hd(E)&&o(u.name)),_.children){const se=_.children;for(let B=0;B<se.length;B++)i(se[B],E,d&&d.children[B])}d=d||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return k?()=>{o(k)}:Bs}function o(u){if(fg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&iI(u,n[h])>=0&&(u.record.path!==n[h].record.path||!gg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!hd(u)&&r.set(u.record.name,u)}function l(u,h){let d,g={},_,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Xr(1,{location:u});v=d.record.name,g=he(ud(h.params,d.keys.filter(k=>!k.optional).concat(d.parent?d.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),u.params&&ud(u.params,d.keys.map(k=>k.name))),_=d.stringify(g)}else if(u.path!=null)_=u.path,d=n.find(k=>k.re.test(_)),d&&(g=d.parse(_),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw Xr(1,{location:u,currentLocation:h});v=d.record.name,g=he({},h.params,u.params),_=d.stringify(g)}const y=[];let E=d;for(;E;)y.unshift(E.record),E=E.parent;return{name:v,path:_,params:g,matched:y,meta:fI(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ud(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function hI(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:dI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function dI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function hd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fI(t){return t.reduce((e,n)=>he(e,n.meta),{})}function dd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function gg(t,e){return e.children.some(n=>n===t||gg(t,n))}function pI(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ag," "),o=i.indexOf("="),a=ti(o<0?i:i.slice(0,o)),c=o<0?null:ti(i.slice(o+1));if(a in e){let l=e[a];Ct(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function fd(t){let e="";for(let n in t){const r=t[n];if(n=Nw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ct(r)?r.map(i=>i&&qc(i)):[r&&qc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function gI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ct(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const mI=Symbol(""),pd=Symbol(""),fa=Symbol(""),mg=Symbol(""),Gc=Symbol("");function As(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function _n(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(Xr(4,{from:n,to:e})):d instanceof Error?c(d):eI(d)?c(Xr(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(d=>c(d))})}function cc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(_I(c)){const u=(c.__vccOpts||c)[e];u&&i.push(_n(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=Tw(u)?u.default:u;o.components[a]=h;const g=(h.__vccOpts||h)[e];return g&&_n(g,n,r,o,a,s)()}))}}return i}function _I(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function gd(t){const e=Pt(fa),n=Pt(mg),r=Xe(()=>e.resolve(tr(t.to))),s=Xe(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Jr.bind(null,u));if(d>-1)return d;const g=md(c[l-2]);return l>1&&md(u)===g&&h[h.length-1].path!==g?h.findIndex(Jr.bind(null,c[l-2])):d}),i=Xe(()=>s.value>-1&&wI(n.params,r.value.params)),o=Xe(()=>s.value>-1&&s.value===n.matched.length-1&&hg(n.params,r.value.params));function a(c={}){return EI(c)?e[tr(t.replace)?"replace":"push"](tr(t.to)).catch(Bs):Promise.resolve()}return{route:r,href:Xe(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const yI=kp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gd,setup(t,{slots:e}){const n=Ii(gd(t)),{options:r}=Pt(fa),s=Xe(()=>({[_d(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_d(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:zp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),vI=yI;function EI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ct(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function md(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const _d=(t,e,n)=>t??e??n,II=kp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Pt(Gc),s=Xe(()=>t.route||r.value),i=Pt(pd,0),o=Xe(()=>{let l=tr(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=Xe(()=>s.value.matched[o.value]);ho(pd,Xe(()=>o.value+1)),ho(mI,a),ho(Gc,s);const c=Le();return Ur(()=>[c.value,a.value,t.name],([l,u,h],[d,g,_])=>{u&&(u.instances[h]=l,g&&g!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Jr(u,g)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return yd(n.default,{Component:d,route:l});const g=h.props[u],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,y=zp(d,he({},_,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return yd(n.default,{Component:y,route:l})||y}}});function yd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const TI=II;function AI(t){const e=uI(t.routes,t),n=t.parseQuery||pI,r=t.stringifyQuery||fd,s=t.history,i=As(),o=As(),a=As(),c=hv(dn);let l=dn;Cr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=oc.bind(null,I=>""+I),h=oc.bind(null,Mw),d=oc.bind(null,ti);function g(I,L){let N,$;return fg(I)?(N=e.getRecordMatcher(I),$=L):$=I,e.addRoute($,N)}function _(I){const L=e.getRecordMatcher(I);L&&e.removeRoute(L)}function v(){return e.getRoutes().map(I=>I.record)}function y(I){return!!e.getRecordMatcher(I)}function E(I,L){if(L=he({},L||c.value),typeof I=="string"){const p=ac(n,I,L.path),m=e.resolve({path:p.path},L),A=s.createHref(p.fullPath);return he(p,m,{params:d(m.params),hash:ti(p.hash),redirectedFrom:void 0,href:A})}let N;if(I.path!=null)N=he({},I,{path:ac(n,I.path,L.path).path});else{const p=he({},I.params);for(const m in p)p[m]==null&&delete p[m];N=he({},I,{params:h(p)}),L.params=h(L.params)}const $=e.resolve(N,L),le=I.hash||"";$.params=u(d($.params));const Ee=Uw(r,he({},I,{hash:Vw(le),path:$.path})),f=s.createHref(Ee);return he({fullPath:Ee,hash:le,query:r===fd?gI(I.query):I.query||{}},$,{redirectedFrom:void 0,href:f})}function k(I){return typeof I=="string"?ac(n,I,c.value.path):he({},I)}function S(I,L){if(l!==I)return Xr(8,{from:L,to:I})}function H(I){return Te(I)}function se(I){return H(he(k(I),{replace:!0}))}function B(I){const L=I.matched[I.matched.length-1];if(L&&L.redirect){const{redirect:N}=L;let $=typeof N=="function"?N(I):N;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=k($):{path:$},$.params={}),he({query:I.query,hash:I.hash,params:$.path!=null?{}:I.params},$)}}function Te(I,L){const N=l=E(I),$=c.value,le=I.state,Ee=I.force,f=I.replace===!0,p=B(N);if(p)return Te(he(k(p),{state:typeof p=="object"?he({},le,p.state):le,force:Ee,replace:f}),L||N);const m=N;m.redirectedFrom=L;let A;return!Ee&&$w(r,$,N)&&(A=Xr(16,{to:m,from:$}),xt($,$,!0,!1)),(A?Promise.resolve(A):rt(m,$)).catch(w=>Jt(w)?Jt(w,2)?w:un(w):ce(w,m,$)).then(w=>{if(w){if(Jt(w,2))return Te(he({replace:f},k(w.to),{state:typeof w.to=="object"?he({},le,w.to.state):le,force:Ee}),L||m)}else w=jn(m,$,!0,f,le);return ln(m,$,w),w})}function nt(I,L){const N=S(I,L);return N?Promise.reject(N):Promise.resolve()}function gt(I){const L=Tr.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(I):I()}function rt(I,L){let N;const[$,le,Ee]=RI(I,L);N=cc($.reverse(),"beforeRouteLeave",I,L);for(const p of $)p.leaveGuards.forEach(m=>{N.push(_n(m,I,L))});const f=nt.bind(null,I,L);return N.push(f),Ke(N).then(()=>{N=[];for(const p of i.list())N.push(_n(p,I,L));return N.push(f),Ke(N)}).then(()=>{N=cc(le,"beforeRouteUpdate",I,L);for(const p of le)p.updateGuards.forEach(m=>{N.push(_n(m,I,L))});return N.push(f),Ke(N)}).then(()=>{N=[];for(const p of Ee)if(p.beforeEnter)if(Ct(p.beforeEnter))for(const m of p.beforeEnter)N.push(_n(m,I,L));else N.push(_n(p.beforeEnter,I,L));return N.push(f),Ke(N)}).then(()=>(I.matched.forEach(p=>p.enterCallbacks={}),N=cc(Ee,"beforeRouteEnter",I,L,gt),N.push(f),Ke(N))).then(()=>{N=[];for(const p of o.list())N.push(_n(p,I,L));return N.push(f),Ke(N)}).catch(p=>Jt(p,8)?p:Promise.reject(p))}function ln(I,L,N){a.list().forEach($=>gt(()=>$(I,L,N)))}function jn(I,L,N,$,le){const Ee=S(I,L);if(Ee)return Ee;const f=L===dn,p=Cr?history.state:{};N&&($||f?s.replace(I.fullPath,he({scroll:f&&p&&p.scroll},le)):s.push(I.fullPath,le)),c.value=I,xt(I,L,N,f),un()}let Nt;function ws(){Nt||(Nt=s.listen((I,L,N)=>{if(!Ki.listening)return;const $=E(I),le=B($);if(le){Te(he(le,{replace:!0}),$).catch(Bs);return}l=$;const Ee=c.value;Cr&&zw(id(Ee.fullPath,N.delta),da()),rt($,Ee).catch(f=>Jt(f,12)?f:Jt(f,2)?(Te(f.to,$).then(p=>{Jt(p,20)&&!N.delta&&N.type===ni.pop&&s.go(-1,!1)}).catch(Bs),Promise.reject()):(N.delta&&s.go(-N.delta,!1),ce(f,$,Ee))).then(f=>{f=f||jn($,Ee,!1),f&&(N.delta&&!Jt(f,8)?s.go(-N.delta,!1):N.type===ni.pop&&Jt(f,20)&&s.go(-1,!1)),ln($,Ee,f)}).catch(Bs)}))}let wr=As(),Ne=As(),fe;function ce(I,L,N){un(I);const $=Ne.list();return $.length?$.forEach(le=>le(I,L,N)):console.error(I),Promise.reject(I)}function Yt(){return fe&&c.value!==dn?Promise.resolve():new Promise((I,L)=>{wr.add([I,L])})}function un(I){return fe||(fe=!I,ws(),wr.list().forEach(([L,N])=>I?N(I):L()),wr.reset()),I}function xt(I,L,N,$){const{scrollBehavior:le}=t;if(!Cr||!le)return Promise.resolve();const Ee=!N&&Qw(id(I.fullPath,0))||($||!N)&&history.state&&history.state.scroll||null;return Ip().then(()=>le(I,L,Ee)).then(f=>f&&Ww(f)).catch(f=>ce(f,I,L))}const ct=I=>s.go(I);let Ir;const Tr=new Set,Ki={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:y,getRoutes:v,resolve:E,options:t,push:H,replace:se,go:ct,back:()=>ct(-1),forward:()=>ct(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Ne.add,isReady:Yt,install(I){const L=this;I.component("RouterLink",vI),I.component("RouterView",TI),I.config.globalProperties.$router=L,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>tr(c)}),Cr&&!Ir&&c.value===dn&&(Ir=!0,H(s.location).catch(le=>{}));const N={};for(const le in dn)Object.defineProperty(N,le,{get:()=>c.value[le],enumerable:!0});I.provide(fa,L),I.provide(mg,fp(N)),I.provide(Gc,c);const $=I.unmount;Tr.add(I),I.unmount=function(){Tr.delete(I),Tr.size<1&&(l=dn,Nt&&Nt(),Nt=null,c.value=dn,Ir=!1,fe=!1),$()}}};function Ke(I){return I.reduce((L,N)=>L.then(()=>gt(N)),Promise.resolve())}return Ki}function RI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>Jr(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>Jr(l,c))||s.push(c))}return[n,r,s]}function eu(){return Pt(fa)}const bI={class:"w-full max-w-xs"},SI=U("h2",{class:"font-bold text-2xl"},"Login",-1),PI=U("hr",{class:"h-1 mt-1 mb-4 border-0 bg-accentcolor"},null,-1),CI={class:"mb-4"},kI=U("label",{class:"inpitlabel",for:"email"},"Email",-1),DI={class:"mb-4"},OI=U("label",{class:"inpitlabel",for:"password"},"Password",-1),VI={class:"flex items-center justify-between"},NI=U("button",{class:"button"},"Login",-1),xI={key:0,class:"text-warningcolor text-sm"},MI={__name:"LoginForm",setup(t){const e=Le(""),n=Le(""),r=Le(null),s=hs(),i=eu(),o=async()=>{try{await s.dispatch("login",{email:e.value,password:n.value}),i.push("/tasks")}catch(a){r.value=a.message}};return(a,c)=>{const l=Ti("router-link");return ue(),ge("div",bI,[U("form",{class:"px-8 pt-6 pb-8",onSubmit:ua(o,["prevent"])},[SI,PI,U("div",CI,[kI,sr(U("input",{class:"inputfield",type:"email",placeholder:"Email","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),required:""},null,512),[[or,e.value]])]),U("div",DI,[OI,sr(U("input",{class:"inputfield",type:"password",placeholder:"**********","onUpdate:modelValue":c[1]||(c[1]=u=>n.value=u),required:""},null,512),[[or,n.value]])]),U("div",VI,[NI,Ae(l,{to:{name:"Registration"},class:"linkbutton block"},{default:zr(()=>[Yr("Registration")]),_:1})]),r.value?(ue(),ge("div",xI,Kr(r.value),1)):ei("",!0)],32)])}}},LI={class:"min-h-screen flex flex-col items-center justify-center dark:bg-darkcolor"},FI={__name:"Login",setup(t){return(e,n)=>(ue(),ge("div",LI,[Ae(MI)]))}},UI={class:"w-full max-w-xs"},$I=U("h2",{class:"font-bold text-2xl"},"Registration",-1),BI=U("hr",{class:"h-1 mt-1 mb-4 border-0 bg-accentcolor"},null,-1),jI={class:"mb-4"},qI=U("label",{class:"inpitlabel",for:"email"},"Email",-1),HI={class:"mb-4"},GI=U("label",{class:"inpitlabel",for:"password"},"Password",-1),KI={class:"flex items-center justify-between"},WI=U("button",{class:"button"},"Register",-1),zI={key:0,class:"text-warningcolor"},QI={__name:"RegistrationForm",setup(t){const e=Le(""),n=Le(""),r=Le(null),s=hs(),i=eu(),o=async()=>{try{await s.dispatch("registration",{email:e.value,password:n.value}),i.push("/tasks")}catch(a){r.value=a.message}};return(a,c)=>{const l=Ti("router-link");return ue(),ge("div",UI,[U("form",{class:"px-8 pt-6 pb-8",onSubmit:ua(o,["prevent"])},[$I,BI,U("div",jI,[qI,sr(U("input",{class:"inputfield",type:"email",placeholder:"Email","onUpdate:modelValue":c[0]||(c[0]=u=>e.value=u),required:""},null,512),[[or,e.value]])]),U("div",HI,[GI,sr(U("input",{class:"inputfield",type:"password",placeholder:"**********","onUpdate:modelValue":c[1]||(c[1]=u=>n.value=u),required:""},null,512),[[or,n.value]])]),U("div",KI,[WI,Ae(l,{to:{name:"Login"},class:"linkbutton block"},{default:zr(()=>[Yr("Login")]),_:1})]),r.value?(ue(),ge("div",zI,Kr(r.value),1)):ei("",!0)],32)])}}},YI={class:"min-h-screen flex flex-col items-center justify-center dark:bg-darkcolor"},JI={__name:"Registration",setup(t){return(e,n)=>(ue(),ge("div",YI,[Ae(QI)]))}};var vd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},XI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(d=64)),r.push(n[u],n[h],n[d],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_g(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new ZI;const d=i<<2|a>>4;if(r.push(d),l!==64){const g=a<<4&240|l>>2;if(r.push(g),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ZI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const eT=function(t){const e=_g(t);return yg.encodeByteArray(e,!0)},ko=function(t){return eT(t).replace(/\./g,"")},vg=function(t){try{return yg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT=()=>tT().__FIREBASE_DEFAULTS__,rT=()=>{if(typeof process>"u"||typeof vd>"u")return;const t=vd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vg(t[1]);return e&&JSON.parse(e)},pa=()=>{try{return nT()||rT()||sT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Eg=t=>{var e,n;return(n=(e=pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},iT=t=>{const e=Eg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wg=()=>{var t;return(t=pa())===null||t===void 0?void 0:t.config},Ig=t=>{var e;return(e=pa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ko(JSON.stringify(n)),ko(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function lT(){var t;const e=(t=pa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dT(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fT(){return!lT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Tg(){try{return typeof indexedDB=="object"}catch{return!1}}function pT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=gT,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ri.prototype.create)}}class Ri{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?mT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new cn(s,a,r)}}function mT(t,e){return t.replace(_T,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _T=/\{\$([^}]+)}/g;function yT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Do(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ed(i)&&Ed(o)){if(!Do(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ed(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Cs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vT(t,e){const n=new ET(t,e);return n.subscribe.bind(n)}class ET{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=lc),s.error===void 0&&(s.error=lc),s.complete===void 0&&(s.complete=lc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new oT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AT(e))try{this.getOrInitializeService({instanceIdentifier:Gn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gn){return this.instances.has(e)}getOptions(e=Gn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gn){return this.component?this.component.multipleInstances?e:Gn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TT(t){return t===Gn?void 0:t}function AT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new IT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const bT={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},ST=ne.INFO,PT={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},CT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=PT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tu{constructor(e){this.name=e,this._logLevel=ST,this._logHandler=CT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const kT=(t,e)=>e.some(n=>t instanceof n);let wd,Id;function DT(){return wd||(wd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OT(){return Id||(Id=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ag=new WeakMap,Kc=new WeakMap,Rg=new WeakMap,uc=new WeakMap,nu=new WeakMap;function VT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ag.set(n,t)}).catch(()=>{}),nu.set(e,t),e}function NT(t){if(Kc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Kc.set(t,e)}let Wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xT(t){Wc=t(Wc)}function MT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(hc(this),e,...n);return Rg.set(r,e.sort?e.sort():[e]),bn(r)}:OT().includes(t)?function(...e){return t.apply(hc(this),e),bn(Ag.get(this))}:function(...e){return bn(t.apply(hc(this),e))}}function LT(t){return typeof t=="function"?MT(t):(t instanceof IDBTransaction&&NT(t),kT(t,DT())?new Proxy(t,Wc):t)}function bn(t){if(t instanceof IDBRequest)return VT(t);if(uc.has(t))return uc.get(t);const e=LT(t);return e!==t&&(uc.set(t,e),nu.set(e,t)),e}const hc=t=>nu.get(t);function FT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=bn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(bn(o.result),c.oldVersion,c.newVersion,bn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const UT=["get","getKey","getAll","getAllKeys","count"],$T=["put","add","delete","clear"],dc=new Map;function Td(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dc.get(e))return dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||UT.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return dc.set(e,i),i}xT(t=>({...t,get:(e,n,r)=>Td(e,n)||t.get(e,n,r),has:(e,n)=>!!Td(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zc="@firebase/app",Ad="0.9.29";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=new tu("@firebase/app"),qT="@firebase/app-compat",HT="@firebase/analytics-compat",GT="@firebase/analytics",KT="@firebase/app-check-compat",WT="@firebase/app-check",zT="@firebase/auth",QT="@firebase/auth-compat",YT="@firebase/database",JT="@firebase/database-compat",XT="@firebase/functions",ZT="@firebase/functions-compat",e0="@firebase/installations",t0="@firebase/installations-compat",n0="@firebase/messaging",r0="@firebase/messaging-compat",s0="@firebase/performance",i0="@firebase/performance-compat",o0="@firebase/remote-config",a0="@firebase/remote-config-compat",c0="@firebase/storage",l0="@firebase/storage-compat",u0="@firebase/firestore",h0="@firebase/firestore-compat",d0="firebase",f0="10.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="[DEFAULT]",p0={[zc]:"fire-core",[qT]:"fire-core-compat",[GT]:"fire-analytics",[HT]:"fire-analytics-compat",[WT]:"fire-app-check",[KT]:"fire-app-check-compat",[zT]:"fire-auth",[QT]:"fire-auth-compat",[YT]:"fire-rtdb",[JT]:"fire-rtdb-compat",[XT]:"fire-fn",[ZT]:"fire-fn-compat",[e0]:"fire-iid",[t0]:"fire-iid-compat",[n0]:"fire-fcm",[r0]:"fire-fcm-compat",[s0]:"fire-perf",[i0]:"fire-perf-compat",[o0]:"fire-rc",[a0]:"fire-rc-compat",[c0]:"fire-gcs",[l0]:"fire-gcs-compat",[u0]:"fire-fst",[h0]:"fire-fst-compat","fire-js":"fire-js",[d0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oo=new Map,Yc=new Map;function g0(t,e){try{t.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(Yc.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;Yc.set(e,t);for(const n of Oo.values())g0(n,t);return!0}function ru(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sn=new Ri("app","Firebase",m0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=f0;function bg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Sn.create("bad-app-name",{appName:String(s)});if(n||(n=wg()),!n)throw Sn.create("no-options");const i=Oo.get(s);if(i){if(Do(n,i.options)&&Do(r,i.config))return i;throw Sn.create("duplicate-app",{appName:s})}const o=new RT(s);for(const c of Yc.values())o.addComponent(c);const a=new _0(n,r,o);return Oo.set(s,a),a}function Sg(t=Qc){const e=Oo.get(t);if(!e&&t===Qc&&wg())return bg();if(!e)throw Sn.create("no-app",{appName:t});return e}function Pn(t,e,n){var r;let s=(r=p0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(a.join(" "));return}Zr(new ar(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="firebase-heartbeat-database",v0=1,ri="firebase-heartbeat-store";let fc=null;function Pg(){return fc||(fc=FT(y0,v0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ri)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),fc}async function E0(t){try{const n=(await Pg()).transaction(ri),r=await n.objectStore(ri).get(Cg(t));return await n.done,r}catch(e){if(e instanceof cn)cr.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function Rd(t,e){try{const r=(await Pg()).transaction(ri,"readwrite");await r.objectStore(ri).put(e,Cg(t)),await r.done}catch(n){if(n instanceof cn)cr.warn(n.message);else{const r=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(r.message)}}}function Cg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=1024,I0=30*24*60*60*1e3;class T0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new R0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=bd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=I0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=bd(),{heartbeatsToSend:r,unsentEntries:s}=A0(this._heartbeatsCache.heartbeats),i=ko(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function bd(){return new Date().toISOString().substring(0,10)}function A0(t,e=w0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class R0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tg()?pT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await E0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sd(t){return ko(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(t){Zr(new ar("platform-logger",e=>new BT(e),"PRIVATE")),Zr(new ar("heartbeat",e=>new T0(e),"PRIVATE")),Pn(zc,Ad,t),Pn(zc,Ad,"esm2017"),Pn("fire-js","")}b0("");var S0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},V,su=su||{},z=S0||self;function ga(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Si(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function P0(t){return Object.prototype.hasOwnProperty.call(t,pc)&&t[pc]||(t[pc]=++C0)}var pc="closure_uid_"+(1e9*Math.random()>>>0),C0=0;function k0(t,e,n){return t.call.apply(t.bind,arguments)}function D0(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ze=k0:Ze=D0,Ze.apply(null,arguments)}function Zi(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ue(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Mn(){this.s=this.s,this.o=this.o}var O0=0;Mn.prototype.s=!1;Mn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),O0!=0)&&P0(this)};Mn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kg=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function iu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Pd(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ga(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var V0=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};z.addEventListener("test",n,e),z.removeEventListener("test",n,e)}catch{}return t}();function si(t){return/^[\s\xa0]*$/.test(t)}function ma(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function $t(t){return ma().indexOf(t)!=-1}function ou(t){return ou[" "](t),t}ou[" "]=function(){};function N0(t,e){var n=bA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var x0=$t("Opera"),es=$t("Trident")||$t("MSIE"),Dg=$t("Edge"),Jc=Dg||es,Og=$t("Gecko")&&!(ma().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge"))&&!($t("Trident")||$t("MSIE"))&&!$t("Edge"),M0=ma().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge");function Vg(){var t=z.document;return t?t.documentMode:void 0}var Xc;e:{var gc="",mc=function(){var t=ma();if(Og)return/rv:([^\);]+)(\)|;)/.exec(t);if(Dg)return/Edge\/([\d\.]+)/.exec(t);if(es)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(M0)return/WebKit\/(\S+)/.exec(t);if(x0)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(mc&&(gc=mc?mc[1]:""),es){var _c=Vg();if(_c!=null&&_c>parseFloat(gc)){Xc=String(_c);break e}}Xc=gc}var Zc;if(z.document&&es){var Cd=Vg();Zc=Cd||parseInt(Xc,10)||void 0}else Zc=void 0;var L0=Zc;function ii(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Og){e:{try{ou(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:F0[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ii.$.h.call(this)}}Ue(ii,et);var F0={2:"touch",3:"pen",4:"mouse"};ii.prototype.h=function(){ii.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pi="closure_listenable_"+(1e6*Math.random()|0),U0=0;function $0(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++U0,this.fa=this.ia=!1}function _a(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function au(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function B0(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Ng(t){const e={};for(const n in t)e[n]=t[n];return e}const kd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xg(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<kd.length;i++)n=kd[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ya(t){this.src=t,this.g={},this.h=0}ya.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=tl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new $0(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function el(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=kg(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(_a(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function tl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var cu="closure_lm_"+(1e6*Math.random()|0),yc={};function Mg(t,e,n,r,s){if(r&&r.once)return Fg(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Mg(t,e[i],n,r,s);return null}return n=hu(n),t&&t[Pi]?t.O(e,n,Si(r)?!!r.capture:!!r,s):Lg(t,e,n,!1,r,s)}function Lg(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Si(s)?!!s.capture:!!s,a=uu(t);if(a||(t[cu]=a=new ya(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=j0(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)V0||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent($g(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function j0(){function t(n){return e.call(t.src,t.listener,n)}const e=q0;return t}function Fg(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Fg(t,e[i],n,r,s);return null}return n=hu(n),t&&t[Pi]?t.P(e,n,Si(r)?!!r.capture:!!r,s):Lg(t,e,n,!0,r,s)}function Ug(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ug(t,e[i],n,r,s);else r=Si(r)?!!r.capture:!!r,n=hu(n),t&&t[Pi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=tl(i,n,r,s),-1<n&&(_a(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=uu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=tl(e,n,r,s)),(n=-1<t?e[t]:null)&&lu(n))}function lu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Pi])el(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($g(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=uu(e))?(el(n,t),n.h==0&&(n.src=null,e[cu]=null)):_a(t)}}}function $g(t){return t in yc?yc[t]:yc[t]="on"+t}function q0(t,e){if(t.fa)t=!0;else{e=new ii(e,this);var n=t.listener,r=t.la||t.src;t.ia&&lu(t),t=n.call(r,e)}return t}function uu(t){return t=t[cu],t instanceof ya?t:null}var vc="__closure_events_fn_"+(1e9*Math.random()>>>0);function hu(t){return typeof t=="function"?t:(t[vc]||(t[vc]=function(e){return t.handleEvent(e)}),t[vc])}function Fe(){Mn.call(this),this.i=new ya(this),this.S=this,this.J=null}Ue(Fe,Mn);Fe.prototype[Pi]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){Ug(this,t,e,n,r)};function qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var s=e;e=new et(r,t),xg(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=eo(o,r,!0,e)&&s}if(o=e.g=t,s=eo(o,r,!0,e)&&s,s=eo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=eo(o,r,!1,e)&&s}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)_a(n[r]);delete t.g[e],t.h--}}this.J=null};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function eo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&el(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var du=z.JSON.stringify;class H0{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function G0(){var t=fu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class K0{constructor(){this.h=this.g=null}add(e,n){const r=Bg.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Bg=new H0(()=>new W0,t=>t.reset());class W0{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function z0(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Q0(t){z.setTimeout(()=>{throw t},0)}let oi,ai=!1,fu=new K0,jg=()=>{const t=z.Promise.resolve(void 0);oi=()=>{t.then(Y0)}};var Y0=()=>{for(var t;t=G0();){try{t.h.call(t.g)}catch(n){Q0(n)}var e=Bg;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ai=!1};function va(t,e){Fe.call(this),this.h=t||1,this.g=e||z,this.j=Ze(this.qb,this),this.l=Date.now()}Ue(va,Fe);V=va.prototype;V.ga=!1;V.T=null;V.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qe(this,"tick"),this.ga&&(pu(this),this.start()))}};V.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function pu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}V.N=function(){va.$.N.call(this),pu(this),delete this.g};function gu(t,e,n){if(typeof t=="function")n&&(t=Ze(t,n));else if(t&&typeof t.handleEvent=="function")t=Ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function qg(t){t.g=gu(()=>{t.g=null,t.i&&(t.i=!1,qg(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class J0 extends Mn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qg(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(t){Mn.call(this),this.h=t,this.g={}}Ue(ci,Mn);var Dd=[];function Hg(t,e,n,r){Array.isArray(n)||(n&&(Dd[0]=n.toString()),n=Dd);for(var s=0;s<n.length;s++){var i=Mg(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Gg(t){au(t.g,function(e,n){this.g.hasOwnProperty(n)&&lu(e)},t),t.g={}}ci.prototype.N=function(){ci.$.N.call(this),Gg(this)};ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ea(){this.g=!0}Ea.prototype.Ea=function(){this.g=!1};function X0(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function Z0(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Vr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+tA(t,n)+(r?" "+r:"")})}function eA(t,e){t.info(function(){return"TIMEOUT: "+e})}Ea.prototype.info=function(){};function tA(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return du(n)}catch{return e}}var _r={},Od=null;function wa(){return Od=Od||new Fe}_r.Ta="serverreachability";function Kg(t){et.call(this,_r.Ta,t)}Ue(Kg,et);function li(t){const e=wa();qe(e,new Kg(e))}_r.STAT_EVENT="statevent";function Wg(t,e){et.call(this,_r.STAT_EVENT,t),this.stat=e}Ue(Wg,et);function ot(t){const e=wa();qe(e,new Wg(e,t))}_r.Ua="timingevent";function zg(t,e){et.call(this,_r.Ua,t),this.size=e}Ue(zg,et);function Ci(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Ia={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Qg={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function mu(){}mu.prototype.h=null;function Vd(t){return t.h||(t.h=t.i())}function Yg(){}var ki={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _u(){et.call(this,"d")}Ue(_u,et);function yu(){et.call(this,"c")}Ue(yu,et);var nl;function Ta(){}Ue(Ta,mu);Ta.prototype.g=function(){return new XMLHttpRequest};Ta.prototype.i=function(){return{}};nl=new Ta;function Di(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ci(this),this.P=nA,t=Jc?125:void 0,this.V=new va(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Jg}function Jg(){this.i=null,this.g="",this.h=!1}var nA=45e3,Xg={},rl={};V=Di.prototype;V.setTimeout=function(t){this.P=t};function sl(t,e,n){t.L=1,t.A=Ra(rn(e)),t.u=n,t.S=!0,Zg(t,null)}function Zg(t,e){t.G=Date.now(),Oi(t),t.B=rn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),am(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Jg,t.g=Pm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new J0(Ze(t.Pa,t,t.g),t.O)),Hg(t.U,t.g,"readystatechange",t.nb),e=t.I?Ng(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),li(),X0(t.j,t.v,t.B,t.m,t.W,t.u)}V.nb=function(t){t=t.target;const e=this.M;e&&Bt(t)==3?e.l():this.Pa(t)};V.Pa=function(t){try{if(t==this.g)e:{const u=Bt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Jc||this.g&&(this.h.h||this.g.ja()||Ld(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?li(3):li(2)),Aa(this);var n=this.g.da();this.ca=n;t:if(em(this)){var r=Ld(this.g);t="";var s=r.length,i=Bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qn(this),qs(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Z0(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!si(a)){var l=a;break t}}l=null}if(n=l)Vr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,il(this,n);else{this.i=!1,this.s=3,ot(12),Qn(this),qs(this);break e}}this.S?(tm(this,u,o),Jc&&this.i&&u==3&&(Hg(this.U,this.V,"tick",this.mb),this.V.start())):(Vr(this.j,this.m,o,null),il(this,o)),u==4&&Qn(this),this.i&&!this.J&&(u==4?Am(this.l,this):(this.i=!1,Oi(this)))}else TA(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Qn(this),qs(this)}}}catch{}finally{}};function em(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function tm(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=rA(t,n),s==rl){e==4&&(t.s=4,ot(14),r=!1),Vr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Xg){t.s=4,ot(15),Vr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Vr(t.j,t.m,s,null),il(t,s);em(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Au(e),e.M=!0,ot(11))):(Vr(t.j,t.m,n,"[Invalid Chunked Response]"),Qn(t),qs(t))}V.mb=function(){if(this.g){var t=Bt(this.g),e=this.g.ja();this.o<e.length&&(Aa(this),tm(this,t,e),this.i&&t!=4&&Oi(this))}};function rA(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?rl:(n=Number(e.substring(n,r)),isNaN(n)?Xg:(r+=1,r+n>e.length?rl:(e=e.slice(r,r+n),t.o=r+n,e)))}V.cancel=function(){this.J=!0,Qn(this)};function Oi(t){t.Y=Date.now()+t.P,nm(t,t.P)}function nm(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ci(Ze(t.lb,t),e)}function Aa(t){t.C&&(z.clearTimeout(t.C),t.C=null)}V.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(eA(this.j,this.B),this.L!=2&&(li(),ot(17)),Qn(this),this.s=2,qs(this)):nm(this,this.Y-t)};function qs(t){t.l.H==0||t.J||Am(t.l,t)}function Qn(t){Aa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,pu(t.V),Gg(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function il(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ol(n.i,t))){if(!t.K&&ol(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)xo(n),Ca(n);else break e;Tu(n),ot(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ci(Ze(n.ib,n),6e3));if(1>=um(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Yn(n,11)}else if((t.K||n.g==t)&&xo(n),!si(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const _=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(vu(i,i.h),i.h=null))}if(r.F){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ye(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Sm(r,r.J?r.pa:null,r.Y),o.K){hm(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Aa(a),Oi(a)),r.g=o}else Im(r);0<n.j.length&&ka(n)}else l[0]!="stop"&&l[0]!="close"||Yn(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Yn(n,7):Iu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}li(4)}catch{}}function sA(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ga(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function iA(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ga(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function rm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ga(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=iA(t),r=sA(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var sm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function oA(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function nr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof nr){this.h=t.h,Vo(this,t.j),this.s=t.s,this.g=t.g,No(this,t.m),this.l=t.l;var e=t.i,n=new ui;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Nd(this,n),this.o=t.o}else t&&(e=String(t).match(sm))?(this.h=!1,Vo(this,e[1]||"",!0),this.s=Ds(e[2]||""),this.g=Ds(e[3]||"",!0),No(this,e[4]),this.l=Ds(e[5]||"",!0),Nd(this,e[6]||"",!0),this.o=Ds(e[7]||"")):(this.h=!1,this.i=new ui(null,this.h))}nr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Os(e,xd,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Os(e,xd,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Os(n,n.charAt(0)=="/"?lA:cA,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Os(n,hA)),t.join("")};function rn(t){return new nr(t)}function Vo(t,e,n){t.j=n?Ds(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function No(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Nd(t,e,n){e instanceof ui?(t.i=e,dA(t.i,t.h)):(n||(e=Os(e,uA)),t.i=new ui(e,t.h))}function ye(t,e,n){t.i.set(e,n)}function Ra(t){return ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ds(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Os(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,aA),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function aA(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var xd=/[#\/\?@]/g,cA=/[#\?:]/g,lA=/[#\?]/g,uA=/[#\?@]/g,hA=/#/g;function ui(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ln(t){t.g||(t.g=new Map,t.h=0,t.i&&oA(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}V=ui.prototype;V.add=function(t,e){Ln(this),this.i=null,t=ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function im(t,e){Ln(t),e=ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function om(t,e){return Ln(t),e=ps(t,e),t.g.has(e)}V.forEach=function(t,e){Ln(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};V.ta=function(){Ln(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};V.Z=function(t){Ln(this);let e=[];if(typeof t=="string")om(this,t)&&(e=e.concat(this.g.get(ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};V.set=function(t,e){return Ln(this),this.i=null,t=ps(this,t),om(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};V.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function am(t,e,n){im(t,e),0<n.length&&(t.i=null,t.g.set(ps(t,e),iu(n)),t.h+=n.length)}V.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function dA(t,e){e&&!t.j&&(Ln(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(im(this,r),am(this,s,n))},t)),t.j=e}var fA=class{constructor(t,e){this.g=t,this.map=e}};function cm(t){this.l=t||pA,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pA=10;function lm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function um(t){return t.h?1:t.g?t.g.size:0}function ol(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vu(t,e){t.g?t.g.add(e):t.h=e}function hm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cm.prototype.cancel=function(){if(this.i=dm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function dm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return iu(t.i)}var gA=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function mA(){this.g=new gA}function _A(t,e,n){const r=n||"";try{rm(t,function(s,i){let o=s;Si(s)&&(o=du(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function yA(t,e){const n=new Ea;if(z.Image){const r=new Image;r.onload=Zi(to,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Zi(to,n,r,"TestLoadImage: error",!1,e),r.onabort=Zi(to,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Zi(to,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function to(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ba(t){this.l=t.ec||null,this.j=t.ob||!1}Ue(ba,mu);ba.prototype.g=function(){return new Sa(this.l,this.j)};ba.prototype.i=function(t){return function(){return t}}({});function Sa(t,e){Fe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Eu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ue(Sa,Fe);var Eu=0;V=Sa.prototype;V.open=function(t,e){if(this.readyState!=Eu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,hi(this)};V.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};V.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=Eu};V.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,hi(this)),this.g&&(this.readyState=3,hi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function fm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}V.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vi(this):hi(this),this.readyState==3&&fm(this)}};V.Za=function(t){this.g&&(this.response=this.responseText=t,Vi(this))};V.Ya=function(t){this.g&&(this.response=t,Vi(this))};V.ka=function(){this.g&&Vi(this)};function Vi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,hi(t)}V.setRequestHeader=function(t,e){this.v.append(t,e)};V.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};V.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function hi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Sa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var vA=z.JSON.parse;function be(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=pm,this.L=this.M=!1}Ue(be,Fe);var pm="",EA=/^https?$/i,wA=["POST","PUT"];V=be.prototype;V.Oa=function(t){this.M=t};V.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():nl.g(),this.C=this.u?Vd(this.u):Vd(nl),this.g.onreadystatechange=Ze(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Md(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=z.FormData&&t instanceof z.FormData,!(0<=kg(wA,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_m(this),0<this.B&&((this.L=IA(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ze(this.ua,this)):this.A=gu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Md(this,i)}};function IA(t){return es&&typeof t.timeout=="number"&&t.ontimeout!==void 0}V.ua=function(){typeof su<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qe(this,"timeout"),this.abort(8))};function Md(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,gm(t),Pa(t)}function gm(t){t.F||(t.F=!0,qe(t,"complete"),qe(t,"error"))}V.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,qe(this,"complete"),qe(this,"abort"),Pa(this))};V.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Pa(this,!0)),be.$.N.call(this)};V.La=function(){this.s||(this.G||this.v||this.l?mm(this):this.kb())};V.kb=function(){mm(this)};function mm(t){if(t.h&&typeof su<"u"&&(!t.C[1]||Bt(t)!=4||t.da()!=2)){if(t.v&&Bt(t)==4)gu(t.La,0,t);else if(qe(t,"readystatechange"),Bt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(sm)[1]||null;!s&&z.self&&z.self.location&&(s=z.self.location.protocol.slice(0,-1)),r=!EA.test(s?s.toLowerCase():"")}n=r}if(n)qe(t,"complete"),qe(t,"success");else{t.m=6;try{var i=2<Bt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",gm(t)}}finally{Pa(t)}}}}function Pa(t,e){if(t.g){_m(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function _m(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}V.isActive=function(){return!!this.g};function Bt(t){return t.g?t.g.readyState:0}V.da=function(){try{return 2<Bt(this)?this.g.status:-1}catch{return-1}};V.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};V.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),vA(e)}};function Ld(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case pm:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function TA(t){const e={};t=(t.g&&2<=Bt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(si(t[r]))continue;var n=z0(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}B0(e,function(r){return r.join(", ")})}V.Ia=function(){return this.m};V.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ym(t){let e="";return au(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function wu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=ym(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ye(t,e,n))}function Rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function vm(t){this.Ga=0,this.j=[],this.l=new Ea,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Rs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Rs("baseRetryDelayMs",5e3,t),this.hb=Rs("retryDelaySeedMs",1e4,t),this.eb=Rs("forwardChannelMaxRetries",2,t),this.xa=Rs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cm(t&&t.concurrentRequestLimit),this.Ja=new mA,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}V=vm.prototype;V.ra=8;V.H=1;function Iu(t){if(Em(t),t.H==3){var e=t.W++,n=rn(t.I);if(ye(n,"SID",t.K),ye(n,"RID",e),ye(n,"TYPE","terminate"),Ni(t,n),e=new Di(t,t.l,e),e.L=2,e.A=Ra(rn(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.A,n=!0),n||(e.g=Pm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Oi(e)}bm(t)}function Ca(t){t.g&&(Au(t),t.g.cancel(),t.g=null)}function Em(t){Ca(t),t.u&&(z.clearTimeout(t.u),t.u=null),xo(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function ka(t){if(!lm(t.i)&&!t.m){t.m=!0;var e=t.Na;oi||jg(),ai||(oi(),ai=!0),fu.add(e,t),t.C=0}}function AA(t,e){return um(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ci(Ze(t.Na,t,e),Rm(t,t.C)),t.C++,!0)}V.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Di(this,this.l,t);let i=this.s;if(this.U&&(i?(i=Ng(i),xg(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=wm(this,s,e),n=rn(this.I),ye(n,"RID",t),ye(n,"CVER",22),this.F&&ye(n,"X-HTTP-Session-Id",this.F),Ni(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(ym(i)))+"&"+e:this.o&&wu(n,this.o,i)),vu(this.i,s),this.bb&&ye(n,"TYPE","init"),this.P?(ye(n,"$req",e),ye(n,"SID","null"),s.aa=!0,sl(s,n,null)):sl(s,n,e),this.H=2}}else this.H==3&&(t?Fd(this,t):this.j.length==0||lm(this.i)||Fd(this))};function Fd(t,e){var n;e?n=e.m:n=t.W++;const r=rn(t.I);ye(r,"SID",t.K),ye(r,"RID",n),ye(r,"AID",t.V),Ni(t,r),t.o&&t.s&&wu(r,t.o,t.s),n=new Di(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=wm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),vu(t.i,n),sl(n,r,e)}function Ni(t,e){t.na&&au(t.na,function(n,r){ye(e,r,n)}),t.h&&rm({},function(n,r){ye(e,r,n)})}function wm(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Ze(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{_A(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Im(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;oi||jg(),ai||(oi(),ai=!0),fu.add(e,t),t.A=0}}function Tu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ci(Ze(t.Ma,t),Rm(t,t.A)),t.A++,!0)}V.Ma=function(){if(this.u=null,Tm(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ci(Ze(this.jb,this),t)}};V.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ot(10),Ca(this),Tm(this))};function Au(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function Tm(t){t.g=new Di(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=rn(t.wa);ye(e,"RID","rpc"),ye(e,"SID",t.K),ye(e,"AID",t.V),ye(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ye(e,"TO",t.qa),ye(e,"TYPE","xmlhttp"),Ni(t,e),t.o&&t.s&&wu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ra(rn(e)),n.u=null,n.S=!0,Zg(n,t)}V.ib=function(){this.v!=null&&(this.v=null,Ca(this),Tu(this),ot(19))};function xo(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function Am(t,e){var n=null;if(t.g==e){xo(t),Au(t),t.g=null;var r=2}else if(ol(t.i,e))n=e.F,hm(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=wa(),qe(r,new zg(r,n)),ka(t)}else Im(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&AA(t,e)||r==2&&Tu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Yn(t,5);break;case 4:Yn(t,10);break;case 3:Yn(t,6);break;default:Yn(t,2)}}}function Rm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Yn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Ze(t.pb,t);n||(n=new nr("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||Vo(n,"https"),Ra(n)),yA(n.toString(),r)}else ot(2);t.H=0,t.h&&t.h.za(e),bm(t),Em(t)}V.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ot(2)):(this.l.info("Failed to ping google.com"),ot(1))};function bm(t){if(t.H=0,t.ma=[],t.h){const e=dm(t.i);(e.length!=0||t.j.length!=0)&&(Pd(t.ma,e),Pd(t.ma,t.j),t.i.i.length=0,iu(t.j),t.j.length=0),t.h.ya()}}function Sm(t,e,n){var r=n instanceof nr?rn(n):new nr(n);if(r.g!="")e&&(r.g=e+"."+r.g),No(r,r.m);else{var s=z.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new nr(null);r&&Vo(i,r),e&&(i.g=e),s&&No(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&ye(r,n,e),ye(r,"VER",t.ra),Ni(t,r),r}function Pm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new be(new ba({ob:n})):new be(t.va),e.Oa(t.J),e}V.isActive=function(){return!!this.h&&this.h.isActive(this)};function Cm(){}V=Cm.prototype;V.Ba=function(){};V.Aa=function(){};V.za=function(){};V.ya=function(){};V.isActive=function(){return!0};V.Va=function(){};function Mo(){if(es&&!(10<=Number(L0)))throw Error("Environmental error: no available transport.")}Mo.prototype.g=function(t,e){return new yt(t,e)};function yt(t,e){Fe.call(this),this.g=new vm(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!si(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!si(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gs(this)}Ue(yt,Fe);yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Sm(t,null,t.Y),ka(t)};yt.prototype.close=function(){Iu(this.g)};yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=du(t),t=n);e.j.push(new fA(e.fb++,t)),e.H==3&&ka(e)};yt.prototype.N=function(){this.g.h=null,delete this.j,Iu(this.g),delete this.g,yt.$.N.call(this)};function km(t){_u.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ue(km,_u);function Dm(){yu.call(this),this.status=1}Ue(Dm,yu);function gs(t){this.g=t}Ue(gs,Cm);gs.prototype.Ba=function(){qe(this.g,"a")};gs.prototype.Aa=function(t){qe(this.g,new km(t))};gs.prototype.za=function(t){qe(this.g,new Dm)};gs.prototype.ya=function(){qe(this.g,"b")};function RA(){this.blockSize=-1}function kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ue(kt,RA);kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ec(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}kt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Ec(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Ec(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Ec(this,r),s=0;break}}this.h=s,this.i+=e};kt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function de(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var bA={};function Ru(t){return-128<=t&&128>t?N0(t,function(e){return new de([e|0],0>e?-1:0)}):new de([t|0],0>t?-1:0)}function jt(t){if(isNaN(t)||!isFinite(t))return $r;if(0>t)return Be(jt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=al;return new de(e,0)}function Om(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Be(Om(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=jt(Math.pow(e,8)),r=$r,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=jt(Math.pow(e,i)),r=r.R(i).add(jt(o))):(r=r.R(n),r=r.add(jt(o)))}return r}var al=4294967296,$r=Ru(0),cl=Ru(1),Ud=Ru(16777216);V=de.prototype;V.ea=function(){if(vt(this))return-Be(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:al+r)*e,e*=al}return t};V.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Xt(this))return"0";if(vt(this))return"-"+Be(this).toString(t);for(var e=jt(Math.pow(t,6)),n=this,r="";;){var s=Fo(n,e).g;n=Lo(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Xt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};V.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Xt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function vt(t){return t.h==-1}V.X=function(t){return t=Lo(this,t),vt(t)?-1:Xt(t)?0:1};function Be(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new de(n,~t.h).add(cl)}V.abs=function(){return vt(this)?Be(this):this};V.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new de(n,n[n.length-1]&-2147483648?-1:0)};function Lo(t,e){return t.add(Be(e))}V.R=function(t){if(Xt(this)||Xt(t))return $r;if(vt(this))return vt(t)?Be(this).R(Be(t)):Be(Be(this).R(t));if(vt(t))return Be(this.R(Be(t)));if(0>this.X(Ud)&&0>t.X(Ud))return jt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,no(n,2*r+2*s),n[2*r+2*s+1]+=i*c,no(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,no(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,no(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new de(n,0)};function no(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function bs(t,e){this.g=t,this.h=e}function Fo(t,e){if(Xt(e))throw Error("division by zero");if(Xt(t))return new bs($r,$r);if(vt(t))return e=Fo(Be(t),e),new bs(Be(e.g),Be(e.h));if(vt(e))return e=Fo(t,Be(e)),new bs(Be(e.g),e.h);if(30<t.g.length){if(vt(t)||vt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=cl,r=e;0>=r.X(t);)n=$d(n),r=$d(r);var s=Sr(n,1),i=Sr(r,1);for(r=Sr(r,2),n=Sr(n,2);!Xt(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Sr(r,1),n=Sr(n,1)}return e=Lo(t,s.R(e)),new bs(s,e)}for(s=$r;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=jt(n),o=i.R(e);vt(o)||0<o.X(t);)n-=r,i=jt(n),o=i.R(e);Xt(i)&&(i=cl),s=s.add(i),t=Lo(t,o)}return new bs(s,t)}V.gb=function(t){return Fo(this,t).h};V.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new de(n,this.h&t.h)};V.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new de(n,this.h|t.h)};V.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new de(n,this.h^t.h)};function $d(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new de(n,t.h)}function Sr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new de(s,t.h)}Mo.prototype.createWebChannel=Mo.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;Ia.NO_ERROR=0;Ia.TIMEOUT=8;Ia.HTTP_ERROR=6;Qg.COMPLETE="complete";Yg.EventType=ki;ki.OPEN="a";ki.CLOSE="b";ki.ERROR="c";ki.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;be.prototype.listenOnce=be.prototype.P;be.prototype.getLastError=be.prototype.Sa;be.prototype.getLastErrorCode=be.prototype.Ia;be.prototype.getStatus=be.prototype.da;be.prototype.getResponseJson=be.prototype.Wa;be.prototype.getResponseText=be.prototype.ja;be.prototype.send=be.prototype.ha;be.prototype.setWithCredentials=be.prototype.Oa;kt.prototype.digest=kt.prototype.l;kt.prototype.reset=kt.prototype.reset;kt.prototype.update=kt.prototype.j;de.prototype.add=de.prototype.add;de.prototype.multiply=de.prototype.R;de.prototype.modulo=de.prototype.gb;de.prototype.compare=de.prototype.X;de.prototype.toNumber=de.prototype.ea;de.prototype.toString=de.prototype.toString;de.prototype.getBits=de.prototype.D;de.fromNumber=jt;de.fromString=Om;var SA=function(){return new Mo},PA=function(){return wa()},wc=Ia,CA=Qg,kA=_r,Bd={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ro=Yg,DA=be,OA=kt,Br=de;const jd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="10.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr=new tu("@firebase/firestore");function Ss(){return lr.logLevel}function O(t,...e){if(lr.logLevel<=ne.DEBUG){const n=e.map(bu);lr.debug(`Firestore (${ms}): ${t}`,...n)}}function zt(t,...e){if(lr.logLevel<=ne.ERROR){const n=e.map(bu);lr.error(`Firestore (${ms}): ${t}`,...n)}}function ts(t,...e){if(lr.logLevel<=ne.WARN){const n=e.map(bu);lr.warn(`Firestore (${ms}): ${t}`,...n)}}function bu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t="Unexpected state"){const e=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+t;throw zt(e),new Error(e)}function me(t,e){t||W()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class VA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class NA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class xA{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new Vm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new ze(e)}}class MA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class LA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new MA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class FA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new FA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=$A(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function oe(t,e){return t<e?-1:t>e?1:0}function ns(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new De(0,0))}static max(){return new J(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(),r===void 0?r=e.length-n:r>e.length-n&&W(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return di.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof di?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ve extends di{construct(e,n,r){return new ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ve(n)}static emptyPath(){return new ve([])}}const BA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends di{construct(e,n,r){return new je(e,n,r)}static isValidIdentifier(e){return BA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new M(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(n)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ve.fromString(e))}static fromName(e){return new q(ve.fromString(e).popFirst(5))}static empty(){return new q(ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ve(e.slice()))}}function jA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new On(s,q.empty(),e)}function qA(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new On(J.min(),q.empty(),-1)}static max(){return new On(J.max(),q.empty(),-1)}}function HA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xi(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==GA)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new nn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Hs(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Pu(r.target.error);this.V.reject(new Hs(e,s))}}static open(e,n,r,s){try{return new Su(n,e.transaction(s,r))}catch(i){throw new Hs(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(O("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new zA(n)}}class Jn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Jn.S(ke())===12.2&&zt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return O("SimpleDb","Removing database:",e),Wn(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Tg())return!1;if(Jn.C())return!0;const e=ke(),n=Jn.S(e),r=0<n&&n<10,s=Jn.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(O("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Hs(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new M(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new M(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Hs(e,o))},s.onupgradeneeded=i=>{O("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{O("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Su.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),R.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(O("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class WA{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Wn(this.k.delete())}}class Hs extends M{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Mi(t){return t.name==="IndexedDbTransactionError"}class zA{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(O("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(O("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Wn(r)}add(e){return O("SimpleDb","ADD",this.store.name,e,e),Wn(this.store.add(e))}get(e){return Wn(this.store.get(e)).next(n=>(n===void 0&&(n=null),O("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return O("SimpleDb","DELETE",this.store.name,e),Wn(this.store.delete(e))}count(){return O("SimpleDb","COUNT",this.store.name),Wn(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new R((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new R((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){O("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new R((r,s)=>{n.onerror=i=>{const o=Pu(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new R((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new WA(a),l=n(a.primaryKey,a.value,c);if(l instanceof R){const u=l.catch(h=>(c.done(),R.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>R.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Wn(t){return new R((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Pu(r.target.error);n(s)}})}let qd=!1;function Pu(t){const e=Jn.S(ke());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new M("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return qd||(qd=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Cu._e=-1;function Da(t){return t==null}function Uo(t){return t===0&&1/t==-1/0}function QA(t){return typeof t=="number"&&Number.isInteger(t)&&!Uo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new Re(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new Re(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new so(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new so(this.root,e,this.comparator,!1)}getReverseIterator(){return new so(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new so(this.root,e,this.comparator,!0)}}class so{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??$e.RED,this.left=s??$e.EMPTY,this.right=i??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new $e(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return $e.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,n,r,s,i){return this}insert(e,n,r){return new $e(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.comparator=e,this.data=new Re(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gd(this.data.getIterator())}getIteratorFrom(e){return new Gd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof He)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new He(this.comparator);return n.data=e,n}}class Gd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new _t([])}unionWith(e){let n=new He(je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new _t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ns(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Mm("Invalid base64 string: "+i):i}}(e);return new tt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new tt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const YA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vn(t){if(me(!!t),typeof t=="string"){let e=0;const n=YA.exec(t);if(me(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ur(t){return typeof t=="string"?tt.fromBase64String(t):tt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Du(t){const e=t.mapValue.fields.__previous_value__;return ku(e)?Du(e):e}function fi(t){const e=Vn(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class pi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ku(t)?4:XA(t)?9007199254740991:10:W()}function Qt(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fi(t).isEqual(fi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Vn(s.timestampValue),a=Vn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ur(s.bytesValue).isEqual(ur(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pe(s.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pe(s.integerValue)===Pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Pe(s.doubleValue),a=Pe(i.doubleValue);return o===a?Uo(o)===Uo(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ns(t.arrayValue.values||[],e.arrayValue.values||[],Qt);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Hd(o)!==Hd(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Qt(o[c],a[c])))return!1;return!0}(t,e);default:return W()}}function gi(t,e){return(t.values||[]).find(n=>Qt(n,e))!==void 0}function rs(t,e){if(t===e)return 0;const n=hr(t),r=hr(e);if(n!==r)return oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return oe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Pe(i.integerValue||i.doubleValue),c=Pe(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Kd(t.timestampValue,e.timestampValue);case 4:return Kd(fi(t),fi(e));case 5:return oe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ur(i),c=ur(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=oe(a[l],c[l]);if(u!==0)return u}return oe(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=oe(Pe(i.latitude),Pe(o.latitude));return a!==0?a:oe(Pe(i.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=rs(a[l],c[l]);if(u)return u}return oe(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===io.mapValue&&o===io.mapValue)return 0;if(i===io.mapValue)return 1;if(o===io.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=oe(c[h],u[h]);if(d!==0)return d;const g=rs(a[c[h]],l[u[h]]);if(g!==0)return g}return oe(c.length,u.length)}(t.mapValue,e.mapValue);default:throw W()}}function Kd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return oe(t,e);const n=Vn(t),r=Vn(e),s=oe(n.seconds,r.seconds);return s!==0?s:oe(n.nanos,r.nanos)}function ss(t){return ll(t)}function ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ll(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ll(n.fields[o])}`;return s+"}"}(t.mapValue):W()}function Wd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ul(t){return!!t&&"integerValue"in t}function Ou(t){return!!t&&"arrayValue"in t}function zd(t){return!!t&&"nullValue"in t}function Qd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function go(t){return!!t&&"mapValue"in t}function Gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function XA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!go(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gs(n)}setAll(e){let n=je.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Gs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());go(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];go(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){yr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ut(Gs(this.value))}}function Lm(t){const e=[];return yr(t.fields,(n,r)=>{const s=new je([n]);if(go(r)){const i=Lm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new _t(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Qe(e,0,J.min(),J.min(),J.min(),ut.empty(),0)}static newFoundDocument(e,n,r,s){return new Qe(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new Qe(e,2,n,J.min(),J.min(),ut.empty(),0)}static newUnknownDocument(e,n){return new Qe(e,3,n,J.min(),J.min(),ut.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n){this.position=e,this.inclusive=n}}function Yd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=rs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{}class Ce extends Fm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tR(e,n,r):n==="array-contains"?new sR(e,r):n==="in"?new iR(e,r):n==="not-in"?new oR(e,r):n==="array-contains-any"?new aR(e,r):new Ce(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nR(e,r):new rR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(rs(n,this.value)):n!==null&&hr(this.value)===hr(n)&&this.matchesComparison(rs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dt extends Fm{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Dt(e,n)}matches(e){return Um(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Um(t){return t.op==="and"}function $m(t){return eR(t)&&Um(t)}function eR(t){for(const e of t.filters)if(e instanceof Dt)return!1;return!0}function hl(t){if(t instanceof Ce)return t.field.canonicalString()+t.op.toString()+ss(t.value);if($m(t))return t.filters.map(e=>hl(e)).join(",");{const e=t.filters.map(n=>hl(n)).join(",");return`${t.op}(${e})`}}function Bm(t,e){return t instanceof Ce?function(r,s){return s instanceof Ce&&r.op===s.op&&r.field.isEqual(s.field)&&Qt(r.value,s.value)}(t,e):t instanceof Dt?function(r,s){return s instanceof Dt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Bm(o,s.filters[a]),!0):!1}(t,e):void W()}function jm(t){return t instanceof Ce?function(n){return`${n.field.canonicalString()} ${n.op} ${ss(n.value)}`}(t):t instanceof Dt?function(n){return n.op.toString()+" {"+n.getFilters().map(jm).join(" ,")+"}"}(t):"Filter"}class tR extends Ce{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class nR extends Ce{constructor(e,n){super(e,"in",n),this.keys=qm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rR extends Ce{constructor(e,n){super(e,"not-in",n),this.keys=qm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class sR extends Ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ou(n)&&gi(n.arrayValue,this.value)}}class iR extends Ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gi(this.value.arrayValue,n)}}class oR extends Ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gi(this.value.arrayValue,n)}}class aR extends Ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ou(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Xd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new cR(t,e,n,r,s,i,o)}function Vu(t){const e=X(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Da(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ss(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ss(r)).join(",")),e.ce=n}return e.ce}function Nu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jd(t.startAt,e.startAt)&&Jd(t.endAt,e.endAt)}function dl(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function lR(t,e,n,r,s,i,o,a){return new _s(t,e,n,r,s,i,o,a)}function xu(t){return new _s(t)}function Zd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Hm(t){return t.collectionGroup!==null}function Ks(t){const e=X(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new He(je.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new mi(i,r))}),n.has(je.keyField().canonicalString())||e.le.push(new mi(je.keyField(),r))}return e.le}function qt(t){const e=X(t);return e.he||(e.he=uR(e,Ks(t))),e.he}function uR(t,e){if(t.limitType==="F")return Xd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new mi(s.field,i)});const n=t.endAt?new $o(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $o(t.startAt.position,t.startAt.inclusive):null;return Xd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fl(t,e){const n=t.filters.concat([e]);return new _s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function pl(t,e,n){return new _s(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oa(t,e){return Nu(qt(t),qt(e))&&t.limitType===e.limitType}function Gm(t){return`${Vu(qt(t))}|lt:${t.limitType}`}function kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>jm(s)).join(", ")}]`),Da(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ss(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ss(s)).join(",")),`Target(${r})`}(qt(t))}; limitType=${t.limitType})`}function Va(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Ks(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Yd(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Ks(r),s)||r.endAt&&!function(o,a,c){const l=Yd(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Ks(r),s))}(t,e)}function hR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Km(t){return(e,n)=>{let r=!1;for(const s of Ks(t)){const i=dR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function dR(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?rs(c,l):W()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){yr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fR=new Re(q.comparator);function sn(){return fR}const Wm=new Re(q.comparator);function Vs(...t){let e=Wm;for(const n of t)e=e.insert(n.key,n);return e}function zm(t){let e=Wm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xn(){return Ws()}function Qm(){return Ws()}function Ws(){return new ys(t=>t.toString(),(t,e)=>t.isEqual(e))}const pR=new Re(q.comparator),gR=new He(q.comparator);function te(...t){let e=gR;for(const n of t)e=e.add(n);return e}const mR=new He(oe);function _R(){return mR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uo(e)?"-0":e}}function Jm(t){return{integerValue:""+t}}function yR(t,e){return QA(e)?Jm(e):Ym(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(){this._=void 0}}function vR(t,e,n){return t instanceof Bo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ku(i)&&(i=Du(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof _i?Zm(t,e):t instanceof yi?e_(t,e):function(s,i){const o=Xm(s,i),a=ef(o)+ef(s.Ie);return ul(o)&&ul(s.Ie)?Jm(a):Ym(s.serializer,a)}(t,e)}function ER(t,e,n){return t instanceof _i?Zm(t,e):t instanceof yi?e_(t,e):n}function Xm(t,e){return t instanceof jo?function(r){return ul(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Bo extends Na{}class _i extends Na{constructor(e){super(),this.elements=e}}function Zm(t,e){const n=t_(e);for(const r of t.elements)n.some(s=>Qt(s,r))||n.push(r);return{arrayValue:{values:n}}}class yi extends Na{constructor(e){super(),this.elements=e}}function e_(t,e){let n=t_(e);for(const r of t.elements)n=n.filter(s=>!Qt(s,r));return{arrayValue:{values:n}}}class jo extends Na{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function ef(t){return Pe(t.integerValue||t.doubleValue)}function t_(t){return Ou(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof _i&&s instanceof _i||r instanceof yi&&s instanceof yi?ns(r.elements,s.elements,Qt):r instanceof jo&&s instanceof jo?Qt(r.Ie,s.Ie):r instanceof Bo&&s instanceof Bo}(t.transform,e.transform)}class IR{constructor(e,n){this.version=e,this.transformResults=n}}class It{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new It}static exists(e){return new It(void 0,e)}static updateTime(e){return new It(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function mo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xa{}function n_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mu(t.key,It.none()):new Li(t.key,t.data,It.none());{const n=t.data,r=ut.empty();let s=new He(je.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fn(t.key,r,new _t(s.toArray()),It.none())}}function TR(t,e,n){t instanceof Li?function(s,i,o){const a=s.value.clone(),c=nf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fn?function(s,i,o){if(!mo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=nf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(r_(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zs(t,e,n,r){return t instanceof Li?function(i,o,a,c){if(!mo(i.precondition,o))return a;const l=i.value.clone(),u=rf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fn?function(i,o,a,c){if(!mo(i.precondition,o))return a;const l=rf(i.fieldTransforms,c,o),u=o.data;return u.setAll(r_(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return mo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function AR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Xm(r.transform,s||null);i!=null&&(n===null&&(n=ut.empty()),n.set(r.field,i))}return n||null}function tf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ns(r,s,(i,o)=>wR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Li extends xa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fn extends xa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function r_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function nf(t,e,n){const r=new Map;me(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,ER(o,a,n[s]))}return r}function rf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,vR(i,o,e))}return r}class Mu extends xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RR extends xa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&TR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Qm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=n_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&ns(this.mutations,e.mutations,(n,r)=>tf(n,r))&&ns(this.baseMutations,e.baseMutations,(n,r)=>tf(n,r))}}class Lu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){me(e.mutations.length===r.length);let s=function(){return pR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Lu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,re;function CR(t){switch(t){default:return W();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function s_(t){if(t===void 0)return zt("GRPC error has no .code"),T.UNKNOWN;switch(t){case Se.OK:return T.OK;case Se.CANCELLED:return T.CANCELLED;case Se.UNKNOWN:return T.UNKNOWN;case Se.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Se.INTERNAL:return T.INTERNAL;case Se.UNAVAILABLE:return T.UNAVAILABLE;case Se.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Se.NOT_FOUND:return T.NOT_FOUND;case Se.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Se.ABORTED:return T.ABORTED;case Se.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Se.DATA_LOSS:return T.DATA_LOSS;default:return W()}}(re=Se||(Se={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR=new Br([4294967295,4294967295],0);function sf(t){const e=kR().encode(t),n=new OA;return n.update(e),new Uint8Array(n.digest())}function of(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Br([n,r],0),new Br([s,i],0)]}class Fu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ns(`Invalid padding: ${n}`);if(r<0)throw new Ns(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ns(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ns(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Br.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Br.fromNumber(r)));return s.compare(DR)===1&&(s=new Br([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=sf(e),[r,s]=of(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Fu(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=sf(e),[r,s]=of(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ns extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Fi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ma(J.min(),s,new Re(oe),sn(),te())}}class Fi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Fi(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class i_{constructor(e,n){this.targetId=e,this.fe=n}}class o_{constructor(e,n,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class af{constructor(){this.ge=0,this.pe=lf(),this.ye=tt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=te(),n=te(),r=te();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:W()}}),new Fi(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=lf()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,me(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class OR{constructor(e){this.Be=e,this.ke=new Map,this.qe=sn(),this.Qe=cf(),this.Ke=new Re(oe)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:W()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(dl(i))if(r===0){const o=new q(i.path);this.We(n,o,Qe.newNoDocument(o,J.min()))}else me(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ur(r).toUint8Array()}catch(c){if(c instanceof Mm)return ts("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Fu(o,s,i)}catch(c){return ts(c instanceof Ns?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&dl(a.target)){const c=new q(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,Qe.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=te();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Ma(e,n,this.Ke,this.qe,r);return this.qe=sn(),this.Qe=cf(),this.Ke=new Re(oe),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new af,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new He(oe),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new af),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function cf(){return new Re(q.comparator)}function lf(){return new Re(q.comparator)}const VR={asc:"ASCENDING",desc:"DESCENDING"},NR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xR={and:"AND",or:"OR"};class MR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gl(t,e){return t.useProto3Json||Da(e)?e:{value:e}}function qo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function a_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LR(t,e){return qo(t,e.toTimestamp())}function Ht(t){return me(!!t),J.fromTimestamp(function(n){const r=Vn(n);return new De(r.seconds,r.nanos)}(t))}function Uu(t,e){return ml(t,e).canonicalString()}function ml(t,e){const n=function(s){return new ve(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function c_(t){const e=ve.fromString(t);return me(f_(e)),e}function _l(t,e){return Uu(t.databaseId,e.path)}function Ic(t,e){const n=c_(e);if(n.get(1)!==t.databaseId.projectId)throw new M(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(u_(n))}function l_(t,e){return Uu(t.databaseId,e)}function FR(t){const e=c_(t);return e.length===4?ve.emptyPath():u_(e)}function yl(t){return new ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function u_(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function uf(t,e,n){return{name:_l(t,e),fields:n.value.mapValue.fields}}function UR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(me(u===void 0||typeof u=="string"),tt.fromBase64String(u||"")):(me(u===void 0||u instanceof Uint8Array),tt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?T.UNKNOWN:s_(l.code);return new M(u,l.message||"")}(o);n=new o_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ic(t,r.document.name),i=Ht(r.document.updateTime),o=r.document.createTime?Ht(r.document.createTime):J.min(),a=new ut({mapValue:{fields:r.document.fields}}),c=Qe.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new _o(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ic(t,r.document),i=r.readTime?Ht(r.readTime):J.min(),o=Qe.newNoDocument(s,i),a=r.removedTargetIds||[];n=new _o([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ic(t,r.document),i=r.removedTargetIds||[];n=new _o([],i,s,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new PR(s,i),a=r.targetId;n=new i_(a,o)}}return n}function $R(t,e){let n;if(e instanceof Li)n={update:uf(t,e.key,e.value)};else if(e instanceof Mu)n={delete:_l(t,e.key)};else if(e instanceof Fn)n={update:uf(t,e.key,e.data),updateMask:QR(e.fieldMask)};else{if(!(e instanceof RR))return W();n={verify:_l(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Bo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof _i)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof yi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof jo)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw W()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:LR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:W()}(t,e.precondition)),n}function BR(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Ht(s.updateTime):Ht(i);return o.isEqual(J.min())&&(o=Ht(i)),new IR(o,s.transformResults||[])}(n,e))):[]}function jR(t,e){return{documents:[l_(t,e.path)]}}function qR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=l_(t,s);const i=function(l){if(l.length!==0)return d_(Dt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Dr(d.field),direction:KR(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=gl(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function HR(t){let e=FR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){me(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=h_(h);return d instanceof Dt&&$m(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new mi(Or(_.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Da(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,g=h.values||[];return new $o(g,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,g=h.values||[];return new $o(g,d)}(n.endAt)),lR(e,s,o,i,a,"F",c,l)}function GR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function h_(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Or(n.unaryFilter.field);return Ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Or(n.unaryFilter.field);return Ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Or(n.unaryFilter.field);return Ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Or(n.unaryFilter.field);return Ce.create(o,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(t):t.fieldFilter!==void 0?function(n){return Ce.create(Or(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dt.create(n.compositeFilter.filters.map(r=>h_(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return W()}}(n.compositeFilter.op))}(t):W()}function KR(t){return VR[t]}function WR(t){return NR[t]}function zR(t){return xR[t]}function Dr(t){return{fieldPath:t.canonicalString()}}function Or(t){return je.fromServerFormat(t.fieldPath)}function d_(t){return t instanceof Ce?function(n){if(n.op==="=="){if(Qd(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NAN"}};if(zd(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Qd(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NOT_NAN"}};if(zd(n.value))return{unaryFilter:{field:Dr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dr(n.field),op:WR(n.op),value:n.value}}}(t):t instanceof Dt?function(n){const r=n.getFilters().map(s=>d_(s));return r.length===1?r[0]:{compositeFilter:{op:zR(n.op),filters:r}}}(t):W()}function QR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function f_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,r,s,i=J.min(),o=J.min(),a=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new In(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.ct=e}}function JR(t){const e=HR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this._n=new ZR}addToCollectionParentIndex(e,n){return this._n.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(On.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class ZR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new He(ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new He(ve.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new is(0)}static Ln(){return new is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(){this.changes=new ys(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&zs(r.mutation,s,_t.empty(),De.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const s=Xn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Vs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=sn();const o=Ws(),a=function(){return Ws()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof Fn)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),zs(u.mutation,l,u.mutation.getFieldMask(),De.now())):o.set(l.key,_t.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new tb(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ws();let s=new Re((o,a)=>o-a),i=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||_t.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||te()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Qm();u.forEach(d=>{if(!i.has(d)){const g=n_(n.get(d),r.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Hm(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(Xn());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,te())).next(u=>({batchId:a,changes:zm(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let s=Vs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Vs();return this.indexManager.getCollectionParents(e,i).next(a=>R.forEach(a,c=>{const l=function(h,d){return new _s(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,Qe.newInvalidDocument(u)))});let a=Vs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&zs(u.mutation,l,_t.empty(),De.now()),Va(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return R.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Ht(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:JR(s.bundledQuery),readTime:Ht(s.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(){this.overlays=new Re(q.comparator),this.hr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xn();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=Xn(),i=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Re((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Xn(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Xn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new SR(n,r));let i=this.hr.get(n);i===void 0&&(i=te(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.Pr=new He(Me.Ir),this.Tr=new He(Me.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Me(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Me(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new q(new ve([])),r=new Me(n,e),s=new Me(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new q(new ve([])),r=new Me(n,e),s=new Me(n,e+1);let i=te();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Me(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Me{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return q.comparator(e.key,n.key)||oe(e.pr,n.pr)}static Er(e,n){return oe(e.pr,n.pr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new He(Me.Ir)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bR(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Me(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Me(n,0),s=new Me(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new He(oe);return n.forEach(s=>{const i=new Me(s,0),o=new Me(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),R.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;q.isDocumentKey(i)||(i=i.child(""));const o=new Me(new q(i),0);let a=new He(oe);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),R.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){me(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return R.forEach(n.mutations,s=>{const i=new Me(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Me(n,0),s=this.wr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e){this.vr=e,this.docs=function(){return new Re(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():Qe.newInvalidDocument(n))}getEntries(e,n){let r=sn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Qe.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=sn();const o=n.path,a=new q(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||HA(qA(u),r)<=0||(s.has(u.key)||Va(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){W()}Fr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new ab(this)}getSize(e){return R.resolve(this.size)}}class ab extends eb{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e){this.persistence=e,this.Mr=new ys(n=>Vu(n),Nu),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Or=0,this.Nr=new $u,this.targetCount=0,this.Lr=is.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),R.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new is(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.qn(n),R.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lb{constructor(e,n){this.Br={},this.overlays={},this.kr=new Cu(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new cb(this),this.indexManager=new XR,this.remoteDocumentCache=function(s){return new ob(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new YR(n),this.$r=new rb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new ib(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const s=new ub(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class ub extends KA{constructor(e){super(),this.currentSequenceNumber=e}}class Bu{constructor(e){this.persistence=e,this.zr=new $u,this.jr=null}static Hr(e){return new Bu(e)}get Jr(){if(this.jr)return this.jr;throw W()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),R.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Jr,r=>{const s=q.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return R.or([()=>R.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=te(),s=te();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ju(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return fT()?8:Jn.v(ke())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new hb;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Ss()<=ne.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),R.resolve()):(Ss()<=ne.DEBUG&&O("QueryEngine","Query:",kr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Ss()<=ne.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qt(n))):R.resolve())}ji(e,n){if(Zd(n))return R.resolve(null);let r=qt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=pl(n,null,"F"),r=qt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=te(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,pl(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return Zd(n)||s.isEqual(J.min())?R.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?R.resolve(null):(Ss()<=ne.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),kr(n)),this.es(e,o,n,jA(s,-1)).next(a=>a))})}Zi(e,n){let r=new He(Km(e));return n.forEach((s,i)=>{Va(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Ss()<=ne.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",kr(n)),this.zi.getDocumentsMatchingQuery(e,n,On.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Re(oe),this.rs=new ys(i=>Vu(i),Nu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nb(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function pb(t,e,n,r){return new fb(t,e,n,r)}async function p_(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=te();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function gb(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let g=R.resolve();return d.forEach(_=>{g=g.next(()=>u.getEntry(c,_)).next(v=>{const y=l.docVersions.get(_);me(y!==null),v.version.compareTo(y)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=te();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function g_(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function mb(t,e){const n=X(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(tt.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(v,y,E){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,g,u)&&a.push(n.Qr.updateTargetData(i,g))});let c=sn(),l=te();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(_b(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(J.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function _b(t,e,n){let r=te(),s=te();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=sn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function yb(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vb(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new In(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function vl(t,e,n){const r=X(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Mi(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function hf(t,e,n){const r=X(t);let s=J.min(),i=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=X(c),d=h.rs.get(u);return d!==void 0?R.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,qt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:te())).next(a=>(Eb(r,hR(e),a),{documents:a,hs:i})))}function Eb(t,e,n){let r=t.ss.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class df{constructor(){this.activeTargetIds=_R()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wb{constructor(){this.no=new df,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new df,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oo=null;function Tc(){return oo===null?oo=function(){return 268435456+Math.round(2147483648*Math.random())}():oo++,"0x"+oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class Rb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Tc(),c=this.bo(n,r.toUriEncodedString());O("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(O("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ts("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=Tb[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=Tc();return new Promise((o,a)=>{const c=new DA;c.setWithCredentials(!0),c.listenOnce(CA.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case wc.NO_ERROR:const u=c.getResponseJson();O(We,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case wc.TIMEOUT:O(We,`RPC '${e}' ${i} timed out`),a(new M(T.DEADLINE_EXCEEDED,"Request time out"));break;case wc.HTTP_ERROR:const h=c.getStatus();if(O(We,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const _=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(E)>=0?E:T.UNKNOWN}(g.status);a(new M(_,g.message))}else a(new M(T.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new M(T.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{O(We,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);O(We,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=Tc(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=SA(),a=PA(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");O(We,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,g=!1;const _=new Ab({lo:y=>{g?O(We,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(O(We,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),O(We,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},ho:()=>h.close()}),v=(y,E,k)=>{y.listen(E,S=>{try{k(S)}catch(H){setTimeout(()=>{throw H},0)}})};return v(h,ro.EventType.OPEN,()=>{g||O(We,`RPC '${e}' stream ${s} transport opened.`)}),v(h,ro.EventType.CLOSE,()=>{g||(g=!0,O(We,`RPC '${e}' stream ${s} transport closed`),_.Vo())}),v(h,ro.EventType.ERROR,y=>{g||(g=!0,ts(We,`RPC '${e}' stream ${s} transport errored:`,y),_.Vo(new M(T.UNAVAILABLE,"The operation could not be completed")))}),v(h,ro.EventType.MESSAGE,y=>{var E;if(!g){const k=y.data[0];me(!!k);const S=k,H=S.error||((E=S[0])===null||E===void 0?void 0:E.error);if(H){O(We,`RPC '${e}' stream ${s} received error:`,H);const se=H.status;let B=function(gt){const rt=Se[gt];if(rt!==void 0)return s_(rt)}(se),Te=H.message;B===void 0&&(B=T.INTERNAL,Te="Unknown error status: "+se+" with message "+H.message),g=!0,_.Vo(new M(B,Te)),h.close()}else O(We,`RPC '${e}' stream ${s} received:`,k),_.mo(k)}}),v(a,kA.STAT_EVENT,y=>{y.stat===Bd.PROXY?O(We,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===Bd.NOPROXY&&O(We,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function Ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){return new MR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new m_(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(zt(n.toString()),zt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new M(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bb extends __{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=UR(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?Ht(o.readTime):J.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=yl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=dl(c)?{documents:jR(i,c)}:{query:qR(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=a_(i,o.resumeToken);const l=gl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(J.min())>0){a.readTime=qo(i,o.snapshotVersion.toTimestamp());const l=gl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=GR(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=yl(this.serializer),n.removeTarget=e,this.t_(n)}}class Sb extends __{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=BR(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.T_(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=yl(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$R(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new M(T.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,ml(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(T.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,ml(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(T.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Cb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(zt(n),this.g_=!1):O("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{vr(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=X(c);l.v_.add(4),await Ui(l),l.x_.set("Unknown"),l.v_.delete(4),await Fa(l)}(this))})}),this.x_=new Cb(r,s)}}async function Fa(t){if(vr(t))for(const e of t.F_)await e(!0)}async function Ui(t){for(const e of t.F_)await e(!1)}function y_(t,e){const n=X(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Ku(n)?Gu(n):vs(n).Jo()&&Hu(n,e))}function qu(t,e){const n=X(t),r=vs(n);n.C_.delete(e),r.Jo()&&v_(n,e),n.C_.size===0&&(r.Jo()?r.Xo():vr(n)&&n.x_.set("Unknown"))}function Hu(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vs(t).c_(e)}function v_(t,e){t.O_.Oe(e),vs(t).l_(e)}function Gu(t){t.O_=new OR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),vs(t).start(),t.x_.p_()}function Ku(t){return vr(t)&&!vs(t).Ho()&&t.C_.size>0}function vr(t){return X(t).v_.size===0}function E_(t){t.O_=void 0}async function Db(t){t.C_.forEach((e,n)=>{Hu(t,e)})}async function Ob(t,e){E_(t),Ku(t)?(t.x_.S_(e),Gu(t)):t.x_.set("Unknown")}async function Vb(t,e,n){if(t.x_.set("Online"),e instanceof o_&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ho(t,r)}else if(e instanceof _o?t.O_.$e(e):e instanceof i_?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(J.min()))try{const r=await g_(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(tt.EMPTY_BYTE_STRING,u.snapshotVersion)),v_(i,c);const h=new In(u.target,c,l,u.sequenceNumber);Hu(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Ho(t,r)}}async function Ho(t,e,n){if(!Mi(e))throw e;t.v_.add(1),await Ui(t),t.x_.set("Offline"),n||(n=()=>g_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Fa(t)})}function w_(t,e){return e().catch(n=>Ho(t,n,e))}async function Ua(t){const e=X(t),n=Nn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;Nb(e);)try{const s=await yb(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,xb(e,s)}catch(s){await Ho(e,s)}I_(e)&&T_(e)}function Nb(t){return vr(t)&&t.D_.length<10}function xb(t,e){t.D_.push(e);const n=Nn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function I_(t){return vr(t)&&!Nn(t).Ho()&&t.D_.length>0}function T_(t){Nn(t).start()}async function Mb(t){Nn(t).d_()}async function Lb(t){const e=Nn(t);for(const n of t.D_)e.I_(n.mutations)}async function Fb(t,e,n){const r=t.D_.shift(),s=Lu.from(r,e,n);await w_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ua(t)}async function Ub(t,e){e&&Nn(t).P_&&await async function(r,s){if(function(o){return CR(o)&&o!==T.ABORTED}(s.code)){const i=r.D_.shift();Nn(r).Zo(),await w_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ua(r)}}(t,e),I_(t)&&T_(t)}async function pf(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=vr(n);n.v_.add(3),await Ui(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Fa(n)}async function $b(t,e){const n=X(t);e?(n.v_.delete(2),await Fa(n)):e||(n.v_.add(2),await Ui(n),n.x_.set("Unknown"))}function vs(t){return t.N_||(t.N_=function(n,r,s){const i=X(n);return i.R_(),new bb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:Db.bind(null,t),To:Ob.bind(null,t),u_:Vb.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Ku(t)?Gu(t):t.x_.set("Unknown")):(await t.N_.stop(),E_(t))})),t.N_}function Nn(t){return t.L_||(t.L_=function(n,r,s){const i=X(n);return i.R_(),new Sb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:Mb.bind(null,t),To:Ub.bind(null,t),E_:Lb.bind(null,t),T_:Fb.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await Ua(t)):(await t.L_.stop(),t.D_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Wu(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zu(t,e){if(zt("AsyncQueue",`${e}: ${t}`),Mi(t))return new M(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=Vs(),this.sortedSet=new Re(this.comparator)}static emptySet(e){return new jr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof jr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.B_=new Re(q.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):W():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class os{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new os(e,n,jr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class jb{constructor(){this.queries=new ys(e=>Gm(e),Oa),this.onlineState="Unknown",this.W_=new Set}}async function A_(t,e){const n=X(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new Bb,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=zu(o,`Initialization of query '${kr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&Qu(n)}async function R_(t,e){const n=X(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function qb(t,e){const n=X(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Qu(n)}function Hb(t,e,n){const r=X(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function Qu(t){t.W_.forEach(e=>{e.next()})}var El,mf;(mf=El||(El={})).j_="default",mf.Cache="cache";class b_{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new os(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=os.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==El.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(e){this.key=e}}class P_{constructor(e){this.key=e}}class Gb{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=te(),this.mutatedKeys=te(),this.ha=Km(e),this.Pa=new jr(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new gf,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),g=Va(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let y=!1;d&&g?d.data.isEqual(g.data)?_!==v&&(r.track({type:3,doc:g}),y=!0):this.da(d,g)||(r.track({type:2,doc:g}),y=!0,(c&&this.ha(g,c)>0||l&&this.ha(g,l)<0)&&(a=!0)):!d&&g?(r.track({type:0,doc:g}),y=!0):d&&!g&&(r.track({type:1,doc:d}),y=!0,(c||l)&&(a=!0)),y&&(g?(o=o.add(g),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(g,_){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return v(g)-v(_)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new os(this.query,e.Pa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new gf,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=te(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new P_(r))}),this.la.forEach(r=>{e.has(r)||n.push(new S_(r))}),n}fa(e){this.ua=e.hs,this.la=te();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return os.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class Kb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Wb{constructor(e){this.key=e,this.pa=!1}}class zb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new ys(a=>Gm(a),Oa),this.Sa=new Map,this.ba=new Set,this.Da=new Re(q.comparator),this.Ca=new Map,this.va=new $u,this.Fa={},this.Ma=new Map,this.xa=is.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function Qb(t,e,n=!0){const r=N_(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await C_(r,e,n,!0),s}async function Yb(t,e){const n=N_(t);await C_(n,e,!0,!1)}async function C_(t,e,n,r){const s=await vb(t.localStore,qt(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await Jb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&y_(t.remoteStore,s),a}async function Jb(t,e,n,r,s){t.Na=(h,d,g)=>async function(v,y,E,k){let S=y.view.Ta(E);S.Xi&&(S=await hf(v.localStore,y.query,!1).then(({documents:Te})=>y.view.Ta(Te,S)));const H=k&&k.targetChanges.get(y.targetId),se=k&&k.targetMismatches.get(y.targetId)!=null,B=y.view.applyChanges(S,v.isPrimaryClient,H,se);return yf(v,y.targetId,B.Va),B.snapshot}(t,h,d,g);const i=await hf(t.localStore,e,!0),o=new Gb(e,i.hs),a=o.Ta(i.documents),c=Fi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);yf(t,n,l.Va);const u=new Kb(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),l.snapshot}async function Xb(t,e,n){const r=X(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!Oa(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qu(r.remoteStore,s.targetId),wl(r,s.targetId)}).catch(xi)):(wl(r,s.targetId),await vl(r.localStore,s.targetId,!0))}async function Zb(t,e){const n=X(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qu(n.remoteStore,r.targetId))}async function eS(t,e,n){const r=aS(t);try{const s=await function(o,a){const c=X(o),l=De.now(),u=a.reduce((g,_)=>g.add(_.key),te());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",g=>{let _=sn(),v=te();return c.os.getEntries(g,u).next(y=>{_=y,_.forEach((E,k)=>{k.isValidDocument()||(v=v.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(g,_)).next(y=>{h=y;const E=[];for(const k of a){const S=AR(k,h.get(k.key).overlayedDocument);S!=null&&E.push(new Fn(k.key,S,Lm(S.value.mapValue),It.exists(!0)))}return c.mutationQueue.addMutationBatch(g,l,E,a)}).next(y=>{d=y;const E=y.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(g,y.batchId,E)})}).then(()=>({batchId:d.batchId,changes:zm(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Fa[o.currentUser.toKey()];l||(l=new Re(oe)),l=l.insert(a,c),o.Fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await $i(r,s.changes),await Ua(r.remoteStore)}catch(s){const i=zu(s,"Failed to persist write");n.reject(i)}}async function k_(t,e){const n=X(t);try{const r=await mb(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?me(o.pa):s.removedDocuments.size>0&&(me(o.pa),o.pa=!1))}),await $i(n,r,e)}catch(r){await xi(r)}}function _f(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=X(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(l=!0)}),l&&Qu(c)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function tS(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new Re(q.comparator);o=o.insert(i,Qe.newNoDocument(i,J.min()));const a=te().add(i),c=new Ma(J.min(),new Map,new Re(oe),o,a);await k_(r,c),r.Da=r.Da.remove(i),r.Ca.delete(e),Yu(r)}else await vl(r.localStore,e,!1).then(()=>wl(r,e,n)).catch(xi)}async function nS(t,e){const n=X(t),r=e.batch.batchId;try{const s=await gb(n.localStore,e);O_(n,r,null),D_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $i(n,s)}catch(s){await xi(s)}}async function rS(t,e,n){const r=X(t);try{const s=await function(o,a){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(me(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);O_(r,e,n),D_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $i(r,s)}catch(s){await xi(s)}}function D_(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function O_(t,e,n){const r=X(t);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function wl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||V_(t,r)})}function V_(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(qu(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),Yu(t))}function yf(t,e,n){for(const r of n)r instanceof S_?(t.va.addReference(r.key,e),sS(t,r)):r instanceof P_?(O("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||V_(t,r.key)):W()}function sS(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(O("SyncEngine","New document in limbo: "+n),t.ba.add(r),Yu(t))}function Yu(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new q(ve.fromString(e)),r=t.xa.next();t.Ca.set(r,new Wb(n)),t.Da=t.Da.insert(n,r),y_(t.remoteStore,new In(qt(xu(n.path)),r,"TargetPurposeLimboResolution",Cu._e))}}async function $i(t,e,n){const r=X(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=ju.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=X(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(l,d=>R.forEach(d.qi,g=>u.persistence.referenceDelegate.addReference(h,d.targetId,g)).next(()=>R.forEach(d.Qi,g=>u.persistence.referenceDelegate.removeReference(h,d.targetId,g)))))}catch(h){if(!Mi(h))throw h;O("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const g=u.ns.get(d),_=g.snapshotVersion,v=g.withLastLimboFreeSnapshotVersion(_);u.ns=u.ns.insert(d,v)}}}(r.localStore,i))}async function iS(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await p_(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new M(T.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $i(n,r.us)}}function oS(t,e){const n=X(t),r=n.Ca.get(e);if(r&&r.pa)return te().add(r.key);{let s=te();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function N_(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=k_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=oS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tS.bind(null,e),e.ya.u_=qb.bind(null,e.eventManager),e.ya.La=Hb.bind(null,e.eventManager),e}function aS(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rS.bind(null,e),e}class vf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=La(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return pb(this.persistence,new db,e.initialUser,this.serializer)}createPersistence(e){return new lb(Bu.Hr,this.serializer)}createSharedClientState(e){return new wb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class cS{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_f(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iS.bind(null,this.syncEngine),await $b(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new jb}()}createDatastore(e){const n=La(e.databaseInfo.databaseId),r=function(i){return new Rb(i)}(e.databaseInfo);return function(i,o,a,c){return new Pb(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new kb(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>_f(this.syncEngine,n,0),function(){return ff.D()?new ff:new Ib}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new zb(s,i,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=X(r);O("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Ui(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):zt("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ze.UNAUTHENTICATED,this.clientId=Nm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{O("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(O("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Rc(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await p_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ef(t,e){t.asyncQueue.verifyOperationInProgress();const n=await hS(t);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>pf(e.remoteStore,s)),t._onlineComponents=e}function uS(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function hS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!uS(n))throw n;ts("Error using user provided cache. Falling back to memory cache: "+n),await Rc(t,new vf)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Rc(t,new vf);return t._offlineComponents}async function M_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await Ef(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await Ef(t,new cS))),t._onlineComponents}function dS(t){return M_(t).then(e=>e.syncEngine)}async function Il(t){const e=await M_(t),n=e.eventManager;return n.onListen=Qb.bind(null,e.syncEngine),n.onUnlisten=Xb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Yb.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Zb.bind(null,e.syncEngine),n}function fS(t,e,n={}){const r=new nn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new x_({next:d=>{o.enqueueAndForget(()=>R_(i,h)),d.fromCache&&c.source==="server"?l.reject(new M(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new b_(a,u,{includeMetadataChanges:!0,ta:!0});return A_(i,h)}(await Il(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(t,e,n){if(!n)throw new M(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pS(t,e,n,r){if(e===!0&&r===!0)throw new M(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function If(t){if(!q.isDocumentKey(t))throw new M(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tf(t){if(q.isDocumentKey(t))throw new M(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $a(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W()}function Tt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$a(t);throw new M(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=L_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(T.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ba{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Af(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new VA;switch(r.type){case"firstParty":return new LA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=wf.get(n);r&&(O("ComponentProvider","Removing Datastore"),wf.delete(n),r.terminate())}(this),Promise.resolve()}}function gS(t,e,n,r={}){var s;const i=(t=Tt(t,Ba))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ts("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ze.MOCK_USER;else{a=aT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ze(l)}t._authCredentials=new NA(new Vm(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Un(this.firestore,e,this._query)}}class at{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new at(this.firestore,e,this._key)}}class Cn extends Un{constructor(e,n,r){super(e,n,xu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new at(this.firestore,null,new q(e))}withConverter(e){return new Cn(this.firestore,e,this._path)}}function kn(t,e,...n){if(t=Ve(t),F_("collection","path",e),t instanceof Ba){const r=ve.fromString(e,...n);return Tf(r),new Cn(t,null,r)}{if(!(t instanceof at||t instanceof Cn))throw new M(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return Tf(r),new Cn(t.firestore,null,r)}}function as(t,e,...n){if(t=Ve(t),arguments.length===1&&(e=Nm.newId()),F_("doc","path",e),t instanceof Ba){const r=ve.fromString(e,...n);return If(r),new at(t,null,new q(r))}{if(!(t instanceof at||t instanceof Cn))throw new M(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ve.fromString(e,...n));return If(r),new at(t.firestore,t instanceof Cn?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new m_(this,"async_queue_retry"),this.cu=()=>{const n=Ac();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Ac();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new nn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Mi(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw zt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=Wu.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&W()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}function Rf(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class xn extends Ba{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new mS}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||U_(this),this._firestoreClient.terminate()}}function _S(t,e){const n=typeof t=="object"?t:Sg(),r=typeof t=="string"?t:e||"(default)",s=ru(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=iT("firestore");i&&gS(s,...i)}return s}function Ju(t){return t._firestoreClient||U_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function U_(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new JA(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,L_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new lS(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(tt.fromBase64String(e))}catch(n){throw new M(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS=/^__.*__$/;class vS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fn(e,this.data,this.fieldMask,n,this.fieldTransforms):new Li(e,this.data,n,this.fieldTransforms)}}class $_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function B_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class eh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new eh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Go(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(B_(this.Vu)&&yS.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class ES{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||La(e)}Cu(e,n,r,s=!1){return new eh({Vu:e,methodName:n,Du:r,path:je.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qa(t){const e=t._freezeSettings(),n=La(t._databaseId);return new ES(t._databaseId,!!e.ignoreUndefinedProperties,n)}function j_(t,e,n,r,s,i={}){const o=t.Cu(i.merge||i.mergeFields?2:0,e,n,s);th("Data must be an object, but it was:",o,r);const a=q_(r,o);let c,l;if(i.merge)c=new _t(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Tl(e,h,n);if(!o.contains(d))throw new M(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);G_(u,d)||u.push(d)}c=new _t(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new vS(new ut(a),c,l)}class Ha extends Xu{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ha}}function wS(t,e,n,r){const s=t.Cu(1,e,n);th("Data must be an object, but it was:",s,r);const i=[],o=ut.empty();yr(r,(c,l)=>{const u=nh(e,c,n);l=Ve(l);const h=s.yu(u);if(l instanceof Ha)i.push(u);else{const d=Bi(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new _t(i);return new $_(o,a,s.fieldTransforms)}function IS(t,e,n,r,s,i){const o=t.Cu(1,e,n),a=[Tl(e,r,n)],c=[s];if(i.length%2!=0)throw new M(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Tl(e,i[d])),c.push(i[d+1]);const l=[],u=ut.empty();for(let d=a.length-1;d>=0;--d)if(!G_(l,a[d])){const g=a[d];let _=c[d];_=Ve(_);const v=o.yu(g);if(_ instanceof Ha)l.push(g);else{const y=Bi(_,v);y!=null&&(l.push(g),u.set(g,y))}}const h=new _t(l);return new $_(u,h,o.fieldTransforms)}function TS(t,e,n,r=!1){return Bi(n,t.Cu(r?4:3,e))}function Bi(t,e){if(H_(t=Ve(t)))return th("Unsupported field value:",e,t),q_(t,e);if(t instanceof Xu)return function(r,s){if(!B_(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Bi(a,s.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:qo(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qo(s.serializer,i)}}if(r instanceof Zu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:a_(s.serializer,r._byteString)};if(r instanceof at){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Uu(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${$a(r)}`)}(t,e)}function q_(t,e){const n={};return xm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):yr(t,(r,s)=>{const i=Bi(s,e.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function H_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof Zu||t instanceof cs||t instanceof at||t instanceof Xu)}function th(t,e,n){if(!H_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=$a(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function Tl(t,e,n){if((e=Ve(e))instanceof ja)return e._internalPath;if(typeof e=="string")return nh(t,e);throw Go("Field path arguments must be of type string or ",t,!1,void 0,n)}const AS=new RegExp("[~\\*/\\[\\]]");function nh(t,e,n){if(e.search(AS)>=0)throw Go(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ja(...e.split("."))._internalPath}catch{throw Go(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Go(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new M(T.INVALID_ARGUMENT,a+t+c)}function G_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new RS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class RS extends K_{data(){return super.data()}}function rh(t,e){return typeof e=="string"?nh(t,e):e instanceof ja?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W_(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sh{}class z_ extends sh{}function Al(t,e,...n){let r=[];e instanceof sh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof oh).length,a=i.filter(c=>c instanceof ih).length;if(o>1||o>0&&a>0)throw new M(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class ih extends z_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new ih(e,n,r)}_apply(e){const n=this._parse(e);return Q_(e._query,n),new Un(e.firestore,e.converter,fl(e._query,n))}_parse(e){const n=qa(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Sf(h,u);const g=[];for(const _ of h)g.push(bf(c,i,_));d={arrayValue:{values:g}}}else d=bf(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Sf(h,u),d=TS(a,o,h,u==="in"||u==="not-in");return Ce.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class oh extends sh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new oh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Q_(o,c),o=fl(o,c)}(e._query,n),new Un(e.firestore,e.converter,fl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ah extends z_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ah(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new M(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new mi(i,o)}(e._query,this._field,this._direction);return new Un(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new _s(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Rl(t,e="asc"){const n=e,r=rh("orderBy",t);return ah._create(r,n)}function bf(t,e,n){if(typeof(n=Ve(n))=="string"){if(n==="")throw new M(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hm(e)&&n.indexOf("/")!==-1)throw new M(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ve.fromString(n));if(!q.isDocumentKey(r))throw new M(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wd(t,new q(r))}if(n instanceof at)return Wd(t,n._key);throw new M(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$a(n)}.`)}function Sf(t,e){if(!Array.isArray(t)||t.length===0)throw new M(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Q_(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class bS{convertValue(e,n="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw W()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return yr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Zu(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Du(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fi(e));default:return null}}convertTimestamp(e){const n=Vn(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ve.fromString(e);me(f_(r));const s=new pi(r.get(1),r.get(3)),i=new q(r.popFirst(5));return s.isEqual(n)||zt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class J_ extends K_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yo extends J_{data(e={}){return super.data(e)}}class X_{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yo(this._firestore,this._userDataWriter,r.key,r,new xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new yo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new yo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new xs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:SS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function SS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}class ch extends bS{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new at(this.firestore,null,n)}}function PS(t){t=Tt(t,Un);const e=Tt(t.firestore,xn),n=Ju(e),r=new ch(e);return W_(t._query),fS(n,t._query).then(s=>new X_(e,r,t,s))}function CS(t,e,n){t=Tt(t,at);const r=Tt(t.firestore,xn),s=Y_(t.converter,e,n);return Ga(r,[j_(qa(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,It.none())])}function Z_(t,e,n,...r){t=Tt(t,at);const s=Tt(t.firestore,xn),i=qa(s);let o;return o=typeof(e=Ve(e))=="string"||e instanceof ja?IS(i,"updateDoc",t._key,e,n,r):wS(i,"updateDoc",t._key,e),Ga(s,[o.toMutation(t._key,It.exists(!0))])}function bl(t){return Ga(Tt(t.firestore,xn),[new Mu(t._key,It.none())])}function Ko(t,e){const n=Tt(t.firestore,xn),r=as(t),s=Y_(t.converter,e);return Ga(n,[j_(qa(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,It.exists(!1))]).then(()=>r)}function Sl(t,...e){var n,r,s;t=Ve(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Rf(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Rf(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof at)l=Tt(t.firestore,xn),u=xu(t._key.path),c={next:h=>{e[o]&&e[o](kS(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Tt(t,Un);l=Tt(h.firestore,xn),u=h._query;const d=new ch(l);c={next:g=>{e[o]&&e[o](new X_(l,d,h,g))},error:e[o+1],complete:e[o+2]},W_(t._query)}return function(d,g,_,v){const y=new x_(v),E=new b_(g,y,_);return d.asyncQueue.enqueueAndForget(async()=>A_(await Il(d),E)),()=>{y.Qa(),d.asyncQueue.enqueueAndForget(async()=>R_(await Il(d),E))}}(Ju(l),u,a,c)}function Ga(t,e){return function(r,s){const i=new nn;return r.asyncQueue.enqueueAndForget(async()=>eS(await dS(r),s,i)),i.promise}(Ju(t),e)}function kS(t,e,n){const r=n.docs.get(e._key),s=new ch(t);return new J_(t,s,e._key,r,new xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ms=s})(fs),Zr(new ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new xn(new xA(r.getProvider("auth-internal")),new UA(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new M(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Pn(jd,"4.5.0",e),Pn(jd,"4.5.0","esm2017")})();var DS="firebase",OS="10.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pn(DS,OS,"app");function lh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function ey(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VS=ey,ty=new Ri("auth","Firebase",ey());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new tu("@firebase/auth");function NS(t,...e){Wo.logLevel<=ne.WARN&&Wo.warn(`Auth (${fs}): ${t}`,...e)}function vo(t,...e){Wo.logLevel<=ne.ERROR&&Wo.error(`Auth (${fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,...e){throw uh(t,...e)}function Gt(t,...e){return uh(t,...e)}function xS(t,e,n){const r=Object.assign(Object.assign({},VS()),{[e]:n});return new Ri("auth","Firebase",r).create(e,{appName:t.name})}function uh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ty.create(t,...e)}function K(t,e,...n){if(!t)throw uh(e,...n)}function Zt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function on(t,e){t||Zt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function MS(){return Pf()==="http:"||Pf()==="https:"}function Pf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MS()||uT()||"connection"in navigator)?navigator.onLine:!0}function FS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=cT()||hT()}get(){return LS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S=new ji(3e4,6e4);function $n(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,n,r,s={}){return ry(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=bi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ny.fetch()(sy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ry(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},US),e);try{const s=new jS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ao(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ao(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ao(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ao(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw xS(t,u,l);Ot(t,u)}}catch(s){if(s instanceof cn)throw s;Ot(t,"network-request-failed",{message:String(s)})}}async function qi(t,e,n,r,s={}){const i=await Bn(t,e,n,r,s);return"mfaPendingCredential"in i&&Ot(t,"multi-factor-auth-required",{_serverResponse:i}),i}function sy(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?hh(t.config,s):`${t.config.apiScheme}://${s}`}function BS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),$S.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ao(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Gt(t,e,r);return s.customData._tokenResponse=n,s}function Cf(t){return t!==void 0&&t.enterprise!==void 0}class qS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return BS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function HS(t,e){return Bn(t,"GET","/v2/recaptchaConfig",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GS(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function KS(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WS(t,e=!1){const n=Ve(t),r=await n.getIdToken(e),s=dh(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qs(bc(s.auth_time)),issuedAtTime:Qs(bc(s.iat)),expirationTime:Qs(bc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function bc(t){return Number(t)*1e3}function dh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=vg(n);return s?JSON.parse(s):(vo("Failed to decode base64 JWT payload"),null)}catch(s){return vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zS(t){const e=dh(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&QS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await vi(t,KS(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ZS(i.providerUserInfo):[],a=XS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new iy(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function JS(t){const e=Ve(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function XS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ZS(t){return t.map(e=>{var{providerId:n}=e,r=lh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){const n=await ry(t,{},async()=>{const r=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=sy(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ny.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function tP(t,e){return Bn(t,"POST","/v2/accounts:revokeToken",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await eP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ei;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=lh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new iy(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vi(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WS(this,e)}reload(){return JS(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vi(this,GS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:S,emailVerified:H,isAnonymous:se,providerData:B,stsTokenManager:Te}=n;K(S&&Te,e,"internal-error");const nt=Ei.fromJSON(this.name,Te);K(typeof S=="string",e,"internal-error"),fn(h,e.name),fn(d,e.name),K(typeof H=="boolean",e,"internal-error"),K(typeof se=="boolean",e,"internal-error"),fn(g,e.name),fn(_,e.name),fn(v,e.name),fn(y,e.name),fn(E,e.name),fn(k,e.name);const gt=new rr({uid:S,auth:e,email:d,emailVerified:H,displayName:h,isAnonymous:se,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:nt,createdAt:E,lastLoginAt:k});return B&&Array.isArray(B)&&(gt.providerData=B.map(rt=>Object.assign({},rt))),y&&(gt._redirectEventId=y),gt}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ei;s.updateFromServerResponse(n);const i=new rr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=new Map;function en(t){on(t instanceof Function,"Expected a class definition");let e=kf.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}oy.type="NONE";const Df=oy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(en(Df),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||en(Df);const o=Eo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=rr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new qr(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new qr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ly(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ay(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hy(e))return"Blackberry";if(dy(e))return"Webos";if(fh(e))return"Safari";if((e.includes("chrome/")||cy(e))&&!e.includes("edge/"))return"Chrome";if(uy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ay(t=ke()){return/firefox\//i.test(t)}function fh(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cy(t=ke()){return/crios\//i.test(t)}function ly(t=ke()){return/iemobile/i.test(t)}function uy(t=ke()){return/android/i.test(t)}function hy(t=ke()){return/blackberry/i.test(t)}function dy(t=ke()){return/webos/i.test(t)}function Ka(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function nP(t=ke()){var e;return Ka(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rP(){return dT()&&document.documentMode===10}function fy(t=ke()){return Ka(t)||uy(t)||dy(t)||hy(t)||/windows phone/i.test(t)||ly(t)}function sP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(t,e=[]){let n;switch(t){case"Browser":n=Of(ke());break;case"Worker":n=`${Of(ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(t,e={}){return Bn(t,"GET","/v2/passwordPolicy",$n(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP=6;class cP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:aP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vf(this),this.idTokenSubscription=new Vf(this),this.beforeStateQueue=new iP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ty,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=FS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ve(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oP(this),n=new cP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ri("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await tP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=py(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Er(t){return Ve(t)}class Vf{constructor(e){this.auth=e,this.observer=null,this.addObserver=vT(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uP(t){Wa=t}function gy(t){return Wa.loadJS(t)}function hP(){return Wa.recaptchaEnterpriseScript}function dP(){return Wa.gapiScript}function fP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const pP="recaptcha-enterprise",gP="NO_RECAPTCHA";class mP{constructor(e){this.type=pP,this.auth=Er(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{HS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new qS(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Cf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(gP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Cf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=hP();c.length!==0&&(c+=a),gy(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Nf(t,e,n,r=!1){const s=new mP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Cl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Nf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Nf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t,e){const n=ru(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Do(i,e??{}))return s;Ot(s,"already-initialized")}return n.initialize({options:e})}function yP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vP(t,e,n){const r=Er(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=my(e),{host:o,port:a}=EP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||wP()}function my(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function EP(t){const e=my(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:xf(o)}}}function xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,n){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}async function IP(t,e){return Bn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TP(t,e){return qi(t,"POST","/v1/accounts:signInWithPassword",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}async function RP(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends ph{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new wi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cl(e,n,"signInWithPassword",TP);case"emailLink":return AP(e,{email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cl(e,r,"signUpPassword",IP);case"emailLink":return RP(e,{idToken:n,email:this._email,oobCode:this._password});default:Ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hr(t,e){return qi(t,"POST","/v1/accounts:signInWithIdp",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP="http://localhost";class dr extends ph{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=lh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new dr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:bP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function PP(t){const e=Cs(ks(t)).link,n=e?Cs(ks(e)).deep_link_id:null,r=Cs(ks(t)).deep_link_id;return(r?Cs(ks(r)).link:null)||r||n||e||t}class gh{constructor(e){var n,r,s,i,o,a;const c=Cs(ks(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=SP((s=c.mode)!==null&&s!==void 0?s:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=PP(e);try{return new gh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,n){return wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gh.parseLink(n);return K(r,"argument-error"),wi._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi extends _y{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Hi{constructor(){super("facebook.com")}static credential(e){return dr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return vn.credential(n,r)}catch{return null}}}vn.GOOGLE_SIGN_IN_METHOD="google.com";vn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends Hi{constructor(){super("github.com")}static credential(e){return dr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Hi{constructor(){super("twitter.com")}static credential(e,n){return dr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.TWITTER_SIGN_IN_METHOD="twitter.com";wn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e){return qi(t,"POST","/v1/accounts:signUp",$n(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rr._fromIdTokenResponse(e,r,s),o=Mf(r);return new fr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mf(r);return new fr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qo(e,n,r,s)}}function yy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,i,e,r):i})}async function kP(t,e,n=!1){const r=await vi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await vi(t,yy(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=dh(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),fr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ot(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vy(t,e,n=!1){const r="signIn",s=await yy(t,r,e),i=await fr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function OP(t,e){return vy(Er(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ey(t){const e=Er(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function VP(t,e,n){const r=Er(t),o=await Cl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ey(t),c}),a=await fr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function NP(t,e,n){return OP(Ve(t),Es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ey(t),r})}function xP(t,e,n,r){return Ve(t).onIdTokenChanged(e,n,r)}function MP(t,e,n){return Ve(t).beforeAuthStateChanged(e,n)}function LP(t,e,n,r){return Ve(t).onAuthStateChanged(e,n,r)}function FP(t){return Ve(t).signOut()}const Yo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yo,"1"),this.storage.removeItem(Yo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UP(){const t=ke();return fh(t)||Ka(t)}const $P=1e3,BP=10;class Iy extends wy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=UP()&&sP(),this.fallbackToPolling=fy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);rP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,BP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$P)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Iy.type="LOCAL";const jP=Iy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty extends wy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ty.type="SESSION";const Ay=Ty;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new za(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await qP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}za.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=mh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(){return window}function GP(t){Kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(){return typeof Kt().WorkerGlobalScope<"u"&&typeof Kt().importScripts=="function"}async function KP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function zP(){return Ry()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="firebaseLocalStorageDb",QP=1,Jo="firebaseLocalStorage",Sy="fbase_key";class Gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qa(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function YP(){const t=indexedDB.deleteDatabase(by);return new Gi(t).toPromise()}function kl(){const t=indexedDB.open(by,QP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jo,{keyPath:Sy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jo)?e(r):(r.close(),await YP(),e(await kl()))})})}async function Lf(t,e,n){const r=Qa(t,!0).put({[Sy]:e,value:n});return new Gi(r).toPromise()}async function JP(t,e){const n=Qa(t,!1).get(e),r=await new Gi(n).toPromise();return r===void 0?null:r.value}function Ff(t,e){const n=Qa(t,!0).delete(e);return new Gi(n).toPromise()}const XP=800,ZP=3;class Py{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ZP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ry()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=za._getInstance(zP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await KP(),!this.activeServiceWorker)return;this.sender=new HP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kl();return await Lf(e,Yo,"1"),await Ff(e,Yo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>JP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ff(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qa(s,!1).getAll();return new Gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Py.type="LOCAL";const eC=Py;new ji(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t,e){return e?en(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h extends ph{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nC(t){return vy(t.auth,new _h(t),t.bypassAuthState)}function rC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),DP(n,new _h(t),t.bypassAuthState)}async function sC(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),kP(n,new _h(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nC;case"linkViaPopup":case"linkViaRedirect":return sC;case"reauthViaPopup":case"reauthViaRedirect":return rC;default:Ot(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iC=new ji(2e3,1e4);class Nr extends Cy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=mh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iC.get())};e()}}Nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC="pendingRedirect",wo=new Map;class aC extends Cy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const r=await cC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cC(t,e){const n=hC(e),r=uC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function lC(t,e){wo.set(t._key(),e)}function uC(t){return en(t._redirectPersistence)}function hC(t){return Eo(oC,t.config.apiKey,t.name)}async function dC(t,e,n=!1){const r=Er(t),s=tC(r,e),o=await new aC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fC=10*60*1e3;class pC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ky(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uf(e))}saveEventToCache(e){this.cachedEventUids.add(Uf(e)),this.lastProcessedEventTime=Date.now()}}function Uf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ky({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ky(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mC(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yC=/^https?/;async function vC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mC(t);for(const n of e)try{if(EC(n))return}catch{}Ot(t,"unauthorized-domain")}function EC(t){const e=Pl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yC.test(n))return!1;if(_C.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wC=new ji(3e4,6e4);function $f(){const t=Kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IC(t){return new Promise((e,n)=>{var r,s,i;function o(){$f(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$f(),n(Gt(t,"network-request-failed"))},timeout:wC.get()})}if(!((s=(r=Kt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Kt().gapi)===null||i===void 0)&&i.load)o();else{const a=fP("iframefcb");return Kt()[a]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},gy(`${dP()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Io=null,e})}let Io=null;function TC(t){return Io=Io||IC(t),Io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=new ji(5e3,15e3),RC="__/auth/iframe",bC="emulator/auth/iframe",SC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function CC(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hh(e,bC):`https://${t.config.authDomain}/${RC}`,r={apiKey:e.apiKey,appName:t.name,v:fs},s=PC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${bi(r).slice(1)}`}async function kC(t){const e=await TC(t),n=Kt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:CC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),a=Kt().setTimeout(()=>{i(o)},AC.get());function c(){Kt().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OC=500,VC=600,NC="_blank",xC="http://localhost";class Bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MC(t,e,n,r=OC,s=VC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},DC),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ke().toLowerCase();n&&(a=cy(l)?NC:n),ay(l)&&(e=e||xC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[g,_])=>`${d}${g}=${_},`,"");if(nP(l)&&a!=="_self")return LC(e||"",a),new Bf(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new Bf(h)}function LC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="__/auth/handler",UC="emulator/auth/handler",$C=encodeURIComponent("fac");async function jf(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:s};if(e instanceof _y){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Hi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${$C}=${encodeURIComponent(c)}`:"";return`${BC(t)}?${bi(a).slice(1)}${l}`}function BC({config:t}){return t.emulator?hh(t,UC):`https://${t.authDomain}/${FC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="webStorageSupport";class jC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ay,this._completeRedirectFn=dC,this._overrideRedirectResult=lC}async _openPopup(e,n,r,s){var i;on((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await jf(e,n,r,Pl(),s);return MC(e,o,mh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jf(e,n,r,Pl(),s);return GP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(on(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kC(e),r=new pC(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sc,{type:Sc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Sc];o!==void 0&&n(!!o),Ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fy()||fh()||Ka()}}const qC=jC;var qf="@firebase/auth",Hf="1.6.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KC(t){Zr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:py(t)},l=new lP(r,s,i,c);return yP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new ar("auth-internal",e=>{const n=Er(e.getProvider("auth").getImmediate());return(r=>new HC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(qf,Hf,GC(t)),Pn(qf,Hf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=5*60,zC=Ig("authIdTokenMaxAge")||WC;let Gf=null;const QC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zC)return;const s=n==null?void 0:n.token;Gf!==s&&(Gf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function YC(t=Sg()){const e=ru(t,"auth");if(e.isInitialized())return e.getImmediate();const n=_P(t,{popupRedirectResolver:qC,persistence:[eC,jP,Ay]}),r=Ig("authTokenSyncURL");if(r&&r.match(/^\/[^\/].*/)){const i=QC(r);MP(n,i,()=>i(n.currentUser)),xP(n,o=>i(o))}const s=Eg("auth");return s&&vP(n,`http://${s}`),n}function JC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Gt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",JC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KC("Browser");const XC={apiKey:"AIzaSyD7T797rL4iXtlIK2eep3xIV7WrJbScmtU",authDomain:"knot-b8a9c.firebaseapp.com",projectId:"knot-b8a9c",storageBucket:"knot-b8a9c.appspot.com",messagingSenderId:"116405077081",appId:"1:116405077081:web:41c136ca7b3af7309b5d48"};bg(XC);const To=YC(),Et=_S(),ZC={class:"flex justify-between items-center mx-2 px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-700"},ek=U("b",null,"✕",-1),tk=[ek],nk=U("hr",{class:"h-0.5 mx-2 bg-gray-200 border-0 dark:bg-gray-700"},null,-1),Kf={__name:"Task",props:["task"],emits:["mark-done","delete-task"],setup(t,{emit:e}){const n=t,r=e,s=()=>{r("mark-done",n.task.id)},i=()=>{r("delete-task",n.task.id)};return(o,a)=>(ue(),ge(it,null,[U("div",ZC,[n.task.done?(ue(),ge("h5",{key:0,onClick:a[0]||(a[0]=c=>s(n.task.id)),class:"font-semibold text-xl text-gray-400 tracking-tight line-through hover:cursor-pointer dark:text-gray-600"},Kr(n.task.title),1)):(ue(),ge("h5",{key:1,onClick:a[1]||(a[1]=c=>s(n.task.id)),class:"font-semibold text-xl tracking-tight hover:cursor-pointer"},Kr(n.task.title),1)),U("button",{onClick:a[2]||(a[2]=c=>i(n.task.id))},tk)]),nk],64))}},rk={class:"flex flex-col bg-darkcolor"},sk=U("span",{class:"dark:hidden"},"Dark Mode",-1),ik=U("span",{class:"hidden dark:block"},"Light Mode",-1),ok=[sk,ik],ak={__name:"TasksMenu",setup(t){const e=hs(),n=eu(),r=()=>e.dispatch("darkmode"),s=async()=>{e.dispatch("logout"),n.push("/login")};return(i,o)=>(ue(),ge("div",rk,[U("div",null,[U("button",{class:"menubutton",onClick:o[0]||(o[0]=a=>tr(n).push("/group-options"))},"Manage groups"),U("button",{class:"menubutton",onClick:r},ok),U("button",{class:"menubutton",onClick:s},"Logout")])]))}},ck={class:"min-h-screen flex flex-col dark:bg-darkcolor"},lk={key:1},uk={class:"flex h-8 min-w-max bg-darkestcolor"},hk=["onClick"],dk={class:"flex items-center mx-2 px-4 py-1"},fk=["disabled"],pk=U("hr",{class:"h-0.5 mx-2 bg-gray-200 border-0 dark:bg-gray-700"},null,-1),gk={key:2,class:"flex flex-col flex-grow items-center justify-center"},mk=U("h1",{class:"mb-1 text-2xl font-bold tracking-tight text-center"},"You are not logged-in.",-1),_k=U("p",{class:"mb-6 font-medium text-gray-600"},"Please login.",-1),yk={key:3,class:"flex flex-col flex-grow items-center justify-center"},vk=U("p",{class:"mb-6 font-medium text-gray-600"},"Loading...",-1),Ek=[vk],Wf={__name:"Tasks",setup(t){const e=hs(),n=Le(""),r=Le([]),s=Le([]),i=Le(""),o=Le(!1),a=Le(!1),c=Xe(()=>e.state.user),l=Xe(()=>e.state.authIsReady),u=()=>{const y=Al(kn(Et,"user-task-data",c.value.uid,"task-groups"),Rl("order","asc"));return new Promise((E,k)=>{Sl(y,S=>{const H=[];S.forEach(se=>{const B={id:se.id,title:se.data().title,color:se.data().color,order:se.data().order};H.push(B)}),s.value=H,E()},k)})};kv(async()=>{l.value&&c.value&&(await u(),d(s.value[0].id),h())});const h=()=>{const y=Al(kn(Et,"user-task-data",c.value.uid,"task-groups",i.value,"tasks"),Rl("creationTime","asc"));Sl(y,E=>{const k=[];E.forEach(S=>{const H={id:S.id,title:S.data().title,done:S.data().done};k.push(H)}),r.value=k}),o.value=!0},d=y=>{i.value=y,h()},g=async()=>{Ko(kn(Et,"user-task-data",c.value.uid,"task-groups",i.value,"tasks"),{title:n.value,done:!1,creationTime:Date.now()}),n.value=""},_=y=>{bl(as(Et,"user-task-data",c.value.uid,"task-groups",i.value,"tasks",y))},v=y=>{const E=r.value.findIndex(k=>k.id===y);Z_(as(Et,"user-task-data",c.value.uid,"task-groups",i.value,"tasks",y),{done:!r.value[E].done})};return(y,E)=>{const k=Ti("router-link");return ue(),ge("div",ck,[a.value?(ue(),Hp(ak,{key:0})):ei("",!0),c.value&&o.value?(ue(),ge("div",lk,[U("div",uk,[(ue(!0),ge(it,null,Ls(s.value,S=>(ue(),ge("button",{onClick:H=>d(S.id),class:Tn(["tabbutton",{"grow font-semibold":S.id===i.value}]),style:Gr({backgroundColor:S.color})},Kr(S.title),15,hk))),256)),c.value?(ue(),ge("button",{key:0,onClick:E[0]||(E[0]=S=>a.value=!a.value),class:"hover:bg-darkcolor text-white px-3"},"☰")):ei("",!0)]),U("form",{onSubmit:ua(g,["prevent"])},[U("div",dk,[sr(U("input",{class:"w-full font-semibold text-xl tracking-tight focus:outline-none dark:bg-darkcolor",type:"text",placeholder:"Add new task...","onUpdate:modelValue":E[1]||(E[1]=S=>n.value=S)},null,512),[[or,n.value]]),U("button",{disabled:!n.value},"➤",8,fk)]),pk],32),(ue(!0),ge(it,null,Ls(r.value.filter(S=>S.done!=!0),S=>(ue(),ge("div",null,[Ae(Kf,{task:S,onMarkDone:v,onDeleteTask:_},null,8,["task"])]))),256)),(ue(!0),ge(it,null,Ls(r.value.filter(S=>S.done==!0),S=>(ue(),ge("div",null,[Ae(Kf,{task:S,onMarkDone:v,onDeleteTask:_},null,8,["task"])]))),256))])):!c.value&&l.value?(ue(),ge("div",gk,[mk,_k,Ae(k,{to:{name:"Login"},class:"button"},{default:zr(()=>[Yr("Login")]),_:1})])):(ue(),ge("div",yk,Ek))])}}},wk={key:0,class:"min-h-screen flex flex-col dark:bg-darkcolor"},Ik={class:"flex flex-col justify-center mx-20 max-w-md"},Tk={class:"flex flex-col"},Ak=U("label",{class:"inpitlabel",for:"groups"},"Groups",-1),Rk=["onClick"],bk=U("div",{class:"my-5 h-0.5 w-auto bg-gray-200 dark:bg-darkestcolor"},null,-1),Sk={class:"flex flex-col"},Pk={class:"mb-4"},Ck=U("label",{class:"inpitlabel",for:"name"},"Group name",-1),kk={class:"mb-4"},Dk=U("label",{class:"inpitlabel",for:"index"},"Group order number",-1),Ok={class:"mb-4"},Vk=U("label",{class:"inpitlabel",for:"color"},"Color",-1),Nk=["onClick"],xk={class:"flex justify-between mt-10"},Mk={key:1,class:"flex flex-col min-h-screen items-center justify-center"},Lk=U("h1",{class:"mb-1 text-2xl font-bold tracking-tight text-center"},"You are not logged-in.",-1),Fk=U("p",{class:"mb-6 font-medium text-gray-600"},"Please login.",-1),Uk={__name:"GroupOptions",setup(t){const e=hs(),n=Le([]),r=Le(""),s=["#334155","#94a3b8","#ef4444","#f97316","#eab308","#84cc16","#22c55e","#2dd4bf","#0ea5e9","#6366f1","#9333ea","#ec4899"],i=Xe(()=>e.state.user),o=Le(""),a=Le(""),c=Le();Kl(async()=>{u("new-group"),await l()});const l=()=>{const _=Al(kn(Et,"user-task-data",i.value.uid,"task-groups"),Rl("order","asc"));return new Promise((v,y)=>{Sl(_,E=>{const k=[];E.forEach(S=>{const H={id:S.id,title:S.data().title,color:S.data().color,order:S.data().order};k.push(H)}),n.value=k,v()},y)})},u=_=>{r.value=_;const v=n.value.findIndex(y=>y.id===_);_=="new-group"?(o.value="",a.value="",c.value=null):(o.value=n.value[v].title,a.value=n.value[v].color,c.value=n.value[v].order)},h=_=>a.value=_,d=()=>{a.value==""&&(a.value="#1e293b"),o.value==""&&(o.value="ㅤ");const _={title:o.value,color:a.value,order:c.value};r.value=="new-group"?Ko(kn(Et,"user-task-data",i.value.uid,"task-groups"),_):Z_(as(Et,"user-task-data",i.value.uid,"task-groups",r.value),_),u("new-group")},g=async()=>{if(window.confirm("Are you sure you want to delete this group?")){const _=kn(Et,"user-task-data",i.value.uid,"task-groups",r.value,"tasks");(await PS(_)).forEach(E=>{bl(E.ref)});const y=as(Et,"user-task-data",i.value.uid,"task-groups",r.value);await bl(y),u("new-group")}};return(_,v)=>{const y=Ti("router-link");return i.value?(ue(),ge("div",wk,[Ae(y,{to:{name:"Tasks"},class:"text-gray-800 m-5 text-2xl dark:text-textcolordark"},{default:zr(()=>[Yr("⤶")]),_:1}),U("div",Ik,[U("div",Tk,[Ak,U("button",{onClick:v[0]||(v[0]=E=>u("new-group")),class:Tn(["text-md font-semibold py-1 px-4 my-0.5 w-50 border-2 bg-gray-200 rounded-t-xl dark:bg-darkestcolor",{"border-darkcolor dark:border-white":r.value=="new-group","border-white dark:border-darkcolor":r.value!="new-group"}])}," + Add new group ",2),(ue(!0),ge(it,null,Ls(n.value,E=>(ue(),ge("button",{onClick:k=>u(E.id),class:Tn(["text-white text-md font-semibold py-1 px-4 my-0.5 w-50 rounded-t-xl border-2",{"border-darkcolor dark:border-white":r.value==E.id,"border-white dark:border-darkcolor":r.value!=E.id}]),style:Gr({backgroundColor:E.color})},Kr(E.title),15,Rk))),256))]),bk,U("div",Sk,[U("form",{onSubmit:v[5]||(v[5]=ua(()=>{},["prevent"]))},[U("div",Pk,[Ck,sr(U("input",{class:"inputfield",type:"text",placeholder:"Group name","onUpdate:modelValue":v[1]||(v[1]=E=>o.value=E)},null,512),[[or,o.value]])]),U("div",kk,[Dk,sr(U("input",{class:"inputfield max-w-24",type:"number",placeholder:"Order","onUpdate:modelValue":v[2]||(v[2]=E=>c.value=E)},null,512),[[or,c.value]])]),U("div",Ok,[Vk,(ue(),ge(it,null,Ls(s,E=>U("button",{onClick:k=>h(E),class:Tn(["border-2 rounded-full p-3 m-1",{"border-darkcolor dark:border-white":a.value==E,"border-white dark:border-darkcolor":a.value!=E}]),style:Gr({backgroundColor:E})},null,14,Nk)),64))]),U("div",xk,[U("button",{onClick:v[3]||(v[3]=E=>d()),class:"bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded"},"Save"),r.value!="new-group"?(ue(),ge("button",{key:0,onClick:v[4]||(v[4]=E=>g()),class:"bg-warningcolor hover:bg-red-800 text-white font-bold py-2 px-6 rounded"},"Delete")):ei("",!0)])],32)])])])):(ue(),ge("div",Mk,[Lk,Fk,Ae(y,{to:{name:"Login"},class:"button"},{default:zr(()=>[Yr("Login")]),_:1})]))}}},$k=AI({history:Zw("/taskapp-web/"),routes:[{path:"/",name:"Home",component:Wf},{path:"/login",name:"Login",component:FI},{path:"/registration",name:"Registration",component:JI},{path:"/tasks",name:"Tasks",component:Wf},{path:"/group-options",name:"GroupOptions",component:Uk}]}),Dl=Ew({state:{user:null,authIsReady:!1,darkmode:!1},getters:{},mutations:{setUser(t,e){t.user=e},setAuthIsReady(t,e){t.authIsReady=e},setDarkMode(t,e){e?t.darkmode=e:t.darkmode=!t.darkmode,localStorage.setItem("darkmode",t.darkmode)}},actions:{async registration(t,{email:e,password:n}){const r=await VP(To,e,n);if(r){t.commit("setUser",r.user);try{const s={title:"My tasks",color:"#0ea5e9",order:0},i={title:"Create my first task",done:!1,creationTime:Date.now()};await CS(as(Et,"user-task-data",r.user.uid),{});const o=await Ko(kn(Et,"user-task-data",r.user.uid,"task-groups"),s);await Ko(kn(o,"tasks"),i)}catch{throw new Error("Could not complete registration")}}else throw new Error("Could not complete registration")},async login(t,{email:e,password:n}){const r=await NP(To,e,n);if(r)t.commit("setUser",r.user);else throw new Error("Could not complete login")},async logout(t){await FP(To)},darkmode(t,e){t.commit("setDarkMode",e)}},modules:{}}),Bk=LP(To,t=>{Dl.commit("setAuthIsReady",!0),Dl.commit("setUser",t),Bk()});WE(Iw).use(Dl).use($k).mount("#app");
