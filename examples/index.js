/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var sentencize = require( './../lib' );

var sentences = [
	'Dr. John Smith, Jr. who is a renowned expert in the field of Artificial Intelligence, and who has published numerous papers on the subject, e.g. "Machine Learning for Dummies", "The Future of AI", etc., gave a lecture at the annual AI conference yesterday and stated that AI technology is rapidly advancing, but we must be cautious of its potential consequences such as job displacement, privacy concerns, and ethical dilemmas.',
	'In addition, AI also has many benefits such as improved efficiency and accuracy, and the ability to process large amounts of data.',
	'Dr. Smith emphasized that it is crucial for society to have open and honest discussions about the development and deployment of AI to ensure its responsible and beneficial use for all.',
	'He also stressed the importance of considering the implications and consequences of AI, i.e. it must not be developed or used in a way that is harmful or unethical.',
	'The audience was in agreement, nodding their heads and taking notes throughout the lecture.'
];
var str = sentences.join( ' ' );

var out = sentencize( str );
console.log( out );
// => [...]

var bool = ( out.length === 5 );
console.log( bool );
// => true

bool = ( out[ 0 ] === sentences[ 0 ] );
console.log( bool );
// => true
