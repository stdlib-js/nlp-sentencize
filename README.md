<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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

# sentencize

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Split a string into an array of sentences.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/nlp-sentencize
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
var sentencize = require( '@stdlib/nlp-sentencize' );
```

#### sentencize( str )

Splits a string into an array of sentences.

```javascript
var str = 'Hello Mrs. Maple, could you call me back? I need to talk to you about something.';
var out = sentencize( str );
// returns  [ 'Hello Mrs. Maple, could you call me back?', 'I need to talk to you about something.' ]

str = 'As of 2.14.2023, the average price of apples is $1.31 per pound! Inflation has been a strain on the economy.';
out = sentencize( str );
// returns [ 'As of 2.14.2023, the average price of apples is $1.31 per pound!', 'Inflation has been a strain on the economy.' ]
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var sentencize = require( '@stdlib/nlp-sentencize' );

var sentences = [
    'Dr. John Smith, Jr. who is a renowned expert in the field of Artificial Intelligence, and who has published numerous papers on the subject, e.g. "Machine Learning for Dummies", "The Future of AI", etc., gave a lecture at the annual AI conference yesterday and stated that AI technology is rapidly advancing, but we must be cautious of its potential consequences such as job displacement, privacy concerns, and ethical dilemmas.',
    'In addition, AI also has many benefits such as improved efficiency and accuracy, and the ability to process large amounts of data.',
    'Dr. Smith emphasized that it is crucial for society to have open and honest discussions about the development and deployment of AI to ensure its responsible and beneficial use for all.',
    'He also stressed the importance of considering the implications and consequences of AI, i.e. it must not be developed or used in a way that is harmful or unethical.',
    'The audience was in agreement, nodding their heads and taking notes throughout the lecture.'
];
var str = sentences.join( ' ' );

var out = sentencize( str );
// returns [...]

var bool = ( out.length === 5 );
// returns true

bool = ( out[ 0 ] === sentences[ 0 ] );
// returns true
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/nlp-tokenize`][@stdlib/nlp/tokenize]</span><span class="delimiter">: </span><span class="description">tokenize a string.</span>

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

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/nlp-sentencize.svg
[npm-url]: https://npmjs.org/package/@stdlib/nlp-sentencize

[test-image]: https://github.com/stdlib-js/nlp-sentencize/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/nlp-sentencize/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/nlp-sentencize/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/nlp-sentencize?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/nlp-sentencize.svg
[dependencies-url]: https://david-dm.org/stdlib-js/nlp-sentencize/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/nlp-sentencize/tree/deno
[deno-readme]: https://github.com/stdlib-js/nlp-sentencize/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/nlp-sentencize/tree/umd
[umd-readme]: https://github.com/stdlib-js/nlp-sentencize/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/nlp-sentencize/tree/esm
[esm-readme]: https://github.com/stdlib-js/nlp-sentencize/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/nlp-sentencize/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/nlp-sentencize/main/LICENSE

<!-- <related-links> -->

[@stdlib/nlp/tokenize]: https://github.com/stdlib-js/nlp-tokenize

<!-- </related-links> -->

</section>

<!-- /.links -->
