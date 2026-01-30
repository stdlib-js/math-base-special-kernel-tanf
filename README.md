<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# kernelTanf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the [tangent][tangent] of a number on `[-π/4, π/4]` in single-precision floating-point format.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-kernel-tanf
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var kernelTanf = require( '@stdlib/math-base-special-kernel-tanf' );
```

#### kernelTanf( x, iy )

Computes the [tangent][tangent] of a number on `[-π/4, π/4]` in single-precision floating-point format.

```javascript
var out = kernelTanf( 3.141592653589793/4.0, 1 );
// returns ~1.0

out = kernelTanf( 3.141592653589793/6.0, 1 );
// returns ~0.577

out = kernelTanf( 0.664, 1 );
// returns ~0.783
```

If `k = 1`, the function returns `tan(x)`. To return the negative inverse `-1/tan(x)`, set `k = -1`.

```javascript
var out = kernelTanf( 3.141592653589793/4.0, -1 );
// returns ~-1.0
```

If provided `NaN` for `x`, the function returns `NaN`.

```javascript
var out = kernelTanf( NaN, 1 );
// returns NaN

out = kernelTanf( NaN, -1 );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var linspace = require( '@stdlib/array-base-linspace' );
var PI = require( '@stdlib/constants-float32-pi' );
var logEachMap = require( '@stdlib/console-log-each-map' );
var kernelTanf = require( '@stdlib/math-base-special-kernel-tanf' );

var x = linspace( -PI/4.0, PI/4.0, 100 );

logEachMap( 'kernelTanf(%0.4f, %d) = %0.4f', x, 1, kernelTanf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/kernel_tanf.h"
```

#### stdlib_base_kernel_tanf( x, iy )

Computes the [tangent][tangent] of a number on `[-π/4, π/4]` in single-precision floating-point format.

```c
float out = stdlib_base_kernel_tanf( 3.141592653589793/4.0, 1 );
// returns ~1.0f

out = stdlib_base_kernel_tanf( 3.141592653589793/6.0, 1 );
// returns ~0.577f
```

The function accepts the following arguments:

-   **x**: `[in] double` input value (in radians, assumed to be bounded by `~pi/4` in magnitude).
-   **iy**: `[in] int32_t` indicates whether `tan(x)` (if `iy = 1`) or `-1/tan(x)` (if `iy = -1`) is returned.

```c
float stdlib_base_kernel_tanf( const double x, const int32_t iy );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/kernel_tanf.h"
#include <stdio.h>

int main( void ) {
    const double x[] = { -0.7853981633974483, -0.6108652381980153, -0.4363323129985824, -0.26179938779914946, -0.08726646259971649, 0.08726646259971649, 0.26179938779914935, 0.43633231299858233, 0.6108652381980153, 0.7853981633974483 };

    float out;
    int i;
    for ( i = 0; i < 10; i++ ) {
        out = stdlib_base_kernel_tanf( x[ i ], 1 );
        printf( "kernelTanf(%lf, %d) = %f\n", x[ i ], 1, out );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-kernel-tanf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-kernel-tanf

[test-image]: https://github.com/stdlib-js/math-base-special-kernel-tanf/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/math-base-special-kernel-tanf/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-kernel-tanf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-kernel-tanf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-kernel-tanf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-kernel-tanf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-kernel-tanf/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-kernel-tanf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-kernel-tanf/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-kernel-tanf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-kernel-tanf/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-kernel-tanf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-kernel-tanf/blob/main/branches.md

[tangent]: https://en.wikipedia.org/wiki/Tangent

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
