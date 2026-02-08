"use strict";var p=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var o=p(function(l,c){
var u=require('@stdlib/number-float64-base-to-float32/dist'),t=[.3333313950307914,.13339200271297674,.05338123784456704,.024528318116654728,.002974357433599673,.009465647849436732];function q(e,a){var r,v,i,n,s,f;return r=e*e,v=t[4]+r*t[5],s=t[2]+r*t[3],i=r*r,n=r*e,f=t[0]+r*t[1],v=e+n*f+n*i*(s+i*v),u(a===1?v:u(-1)/u(v))}c.exports=q
});var T=o();module.exports=T;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
