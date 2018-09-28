import { expect } from 'chai';

import classnames from '../src';

describe('classnames', () => {
  it('false', () => {
    expect(classnames()).to.equal('');
    expect(classnames(undefined as any)).to.equal('');
    expect(classnames(false as any)).to.equal('');
    expect(classnames(null as any)).to.equal('');
    expect(classnames(0 as any)).to.equal('');
  });

  it('string only', () => {
    expect(classnames('x')).to.equal('x');
    expect(classnames('x', 'y')).to.equal('x y');
  });

  it('array only', () => {
    expect(classnames(['x'])).to.equal('x');
    expect(classnames(['x', 'y'])).to.equal('x y');
  });

  it('object only', () => {
    expect(classnames({ x: true })).to.equal('x');
    expect(classnames({ x: true, y: true })).to.equal('x y');
    expect(classnames({ x: true, y: true, z: true })).to.equal('x y z');
    expect(classnames({ x: true, y: true, z: false })).to.equal('x y');
  });

  it('string + array', () => {
    expect(classnames('x', ['y'])).to.equal('x y');
    expect(classnames('x', ['z', 'y'])).to.equal('x z y');
  });

  it('string + object', () => {
    expect(classnames('x', { y: true })).to.equal('x y');
    expect(classnames('x', { z: true, y: true })).to.equal('x z y');
    expect(classnames('x', { z: false, y: true })).to.equal('x y');
    expect(classnames('x', { z: null, y: true })).to.equal('x y');
    expect(classnames('x', { z: undefined, y: true })).to.equal('x y');
    expect(classnames('x', { z: 0, y: true })).to.equal('x y');
  });

  it('string + array + object', () => {
    expect(classnames('x', ['z'], { y: true })).to.equal('x z y');
    expect(classnames('x', { y: true }, ['z'])).to.equal('x y z');
    expect(classnames('x', ['h', 'f'], { z: true, y: true })).to.equal('x h f z y');
    expect(classnames('x', ['h', 'f'], { z: true, y: false })).to.equal('x h f z');
  });

  it('array of object', () => {
    expect(classnames([{ x: true }, { y: true }])).to.equal('x y');
    expect(classnames([{ x: true }, { y: true }, { z: false }])).to.equal('x y');
    expect(classnames([{ x: true }, { y: true }, { z: true }])).to.equal('x y z');
  });

  it('array of string + object', () => {
    expect(classnames(['x', { y: true }])).to.equal('x y');
    expect(classnames(['x', { y: true }, { z: false }])).to.equal('x y');
    expect(classnames(['x', { y: true }, { z: true }])).to.equal('x y z');
  });

  it('string with false', () => {
    expect(classnames('x', null as any, undefined as any, false as any, 0 as any)).to.equal('x');
  });
});
