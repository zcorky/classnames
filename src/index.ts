
import {
  string as isString,
  array as isArray,
  object as isObject,
} from '@zcorky/is';

// const hasOwnProperty = Object.hasOwnProperty;
export type Element = string | Array<string | object> | object

export function classnames(...args: Element[]): string {
  const _cls = {};

  for (const v of args) {
    if (!v) continue;

    if (isString(v)) {
      _cls[v] = true;
    } else if (isArray(v)) {
      const inner: string = classnames.apply(null, v);
      _cls[inner] = true;
    } else if (isObject(v)) {
      for (const k in v) {
        if (v[k]) {
          _cls[k] = true;
        }
      }
    }
  }

  return Object.keys(_cls).join(' ');
}

export default classnames;
