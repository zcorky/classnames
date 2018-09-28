# classnames

[![NPM version](https://img.shields.io/npm/v/@zcorky/classnames.svg?style=flat)](https://www.npmjs.com/package/@zcorky/classnames)
[![Coverage Status](https://img.shields.io/coveralls/zcorky/classnames.svg?style=flat)](https://coveralls.io/r/zcorky/classnames)
[![Dependencies](https://david-dm.org/@zcorky/classnames/status.svg)](https://david-dm.org/@zcorky/classnames)
[![Build Status](https://travis-ci.com/zcorky/classnames.svg?branch=master)](https://travis-ci.com/zcorky/classnames)
![license](https://img.shields.io/github/license/zcorky/classnames.svg)
[![issues](https://img.shields.io/github/issues/zcorky/classnames.svg)](https://github.com/zcorky/classnames/issues)

> Conditionally joining classNames together.

### Install

```
$ npm install @zcorky/classnames
```

### Usage

```javascript
classNames('unicorn', 'rainbow');
//=> 'unicorn rainbow'

classNames({awesome: true, foo: false}, 'unicorn', {rainbow: false});
//=> 'awesome unicorn'

classNames('unicorn', null, undefined, 0, 1, {foo: null});
//=> 'unicorn'

const buttonType = 'main';
classNames({[`button-${buttonType}`]: true});
//=> 'button-main'
```

```js
const Button = props => {
	console.log(props);
	/*
	{
		type: 'success',
		small: true
	}
	*/

	const buttonClass = classNames(
		'button',
		{
			[`button-${props.type}`]: props.type,
			'button-block': props.block,
			'button-small': props.small
		}
	);

	console.log(buttonClass);
	//=> 'button button-success button-small'

	return <button className={buttonClass}>…</button>;
};
```

### Relatived
* [classnames](https://github.com/JedWatson/classnames)
* [class-names](https://github.com/sindresorhus/class-names)
