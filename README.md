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

# sentencize

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Split a string into an array of sentences.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
sentencize = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/nlp-sentencize@umd/browser.js' )
```
The previous example will load the latest bundled code from the umd branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/nlp-sentencize/tags). For example,

```javascript
sentencize = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/nlp-sentencize@v0.0.1-umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var sentencize = require( 'path/to/vendor/umd/nlp-sentencize/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/nlp-sentencize@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.sentencize;
})();
</script>
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

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/nlp-sentencize@umd/browser.js"></script>
<script type="text/javascript">
(function () {

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

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

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

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/nlp-sentencize.svg
[npm-url]: https://npmjs.org/package/@stdlib/nlp-sentencize

[test-image]: https://github.com/stdlib-js/nlp-sentencize/actions/workflows/test.yml/badge.svg?branch=v0.0.1
[test-url]: https://github.com/stdlib-js/nlp-sentencize/actions/workflows/test.yml?query=branch:v0.0.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/nlp-sentencize/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/nlp-sentencize?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/nlp-sentencize.svg
[dependencies-url]: https://david-dm.org/stdlib-js/nlp-sentencize/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/nlp-sentencize/tree/deno
[umd-url]: https://github.com/stdlib-js/nlp-sentencize/tree/umd
[esm-url]: https://github.com/stdlib-js/nlp-sentencize/tree/esm
[branches-url]: https://github.com/stdlib-js/nlp-sentencize/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/nlp-sentencize/main/LICENSE

</section>

<!-- /.links -->
