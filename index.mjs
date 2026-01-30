// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";var e=[.3333313950307914,.13339200271297674,.05338123784456704,.024528318116654728,.002974357433599673,.009465647849436732];function r(r,s){var a,n,o,d;return n=r+(d=(a=r*r)*r)*(e[0]+a*e[1])+d*(o=a*a)*(e[2]+a*e[3]+o*(n=e[4]+a*e[5])),t(1===s?n:t(-1)/t(n))}export{r as default};
//# sourceMappingURL=index.mjs.map
