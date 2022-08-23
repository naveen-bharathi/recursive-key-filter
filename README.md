[![tests](https://github.com/naveen-bharathi/recursive-key-filter/actions/workflows/tests.yml/badge.svg)](https://github.com/naveen-bharathi/recursive-key-filter/actions/workflows/tests.yml) ![License](https://badgen.net/npm/license/recursive-key-filter?color=blue) ![GitHub issues](https://img.shields.io/github/issues/naveen-bharathi/recursive-key-filter) ![weekly downloads](https://badgen.net/npm/dw/recursive-key-filter?color=blue&icon=npm) ![dependents](https://badgen.net/npm/dependents/recursive-key-filter?color=green) ![publish size](https://badgen.net/bundlephobia/minzip/recursive-key-filter?color=blue) 


# recursive-key-filter

Filter / Remove keys from object recursively.

## Installation

if you are using npm, run
```
npm install recursive-key-filter
```

or

if you are using yarn package manager, run
```
yarn add recursive-key-filter
```

## Example

Remove the key **`__typename`** from an object.

```javascript
import filter from 'recursive-key-filter'; // ES6
// or
const filter = require('recursive-key-filter'); // ES5

const languages = {
  'id': '12345',
  'name': 'javascript',
  '__typename': 'language'
};

console.log(languages);
/*
  { 
    'id': '12345',
    'name': 'javascript',
    '__typename': 'language' 
  }
*/

const languagesFiltered = filter(languages, ['__typename']);

console.log(languagesFiltered);
/*
  { 
    'id': '12345',
    'name': 'javascript',
  }
*/
```

Remove any of the keys **`__typename`** , **`id`** from an object.

```javascript
import filter from 'recursive-key-filter'; // ES6
// or
const filter = require('recursive-key-filter'); // ES5

const books = {
  '__typename': 'language',
  'id': '12345',
  'name': 'javascript',
  'books': [
    {
      '__typename': 'book'
      'author': 'Naveen Bharathi',
      'name': 'Learn JS',
    },
    {
      '__typename': 'book'
      'author': 'Naveen',
      'name': 'A guide to TS',
    }
  ]
};

console.log(books);
/*
  {
    '__typename': 'language',
    'id': '12345',
    'name': 'javascript',
    'books': [
      {
        '__typename': 'book'
        'author': 'Naveen Bharathi',
        'name': 'Learn JS',
      },
      {
        '__typename': 'book'
        'author': 'Naveen',
        'name': 'A guide to TS',
      }
    ]
  }
*/

const booksFiltered = filter(books, ['__typename', 'id']);

console.log(booksFiltered);
/*  
  {
    'name': 'javascript',
    'books': [
      {
        'author': 'Naveen Bharathi',
        'name': 'Learn JS',
      },
      {
        'author': 'Naveen',
        'name': 'A guide to TS',
      }
    ]
  }
*/
```

## Parameters

#### filter(object, keysToFilter)
- **object** **{Object | Array}** - object you want to filter the keys from.
- **keysToFilter** **{Array}** - Array of keys you want to filter / remove in the object passed.


## Tests

![tests](https://github.com/naveen-bharathi/recursive-key-filter/workflows/tests/badge.svg?event=push)


## Open Issues

![GitHub issues](https://img.shields.io/github/issues/naveen-bharathi/recursive-key-filter)


## LICENSE

MIT License

Copyright (c) 2022 Naveen Bharathi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
