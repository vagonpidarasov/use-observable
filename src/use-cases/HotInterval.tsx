import React, {useCallback} from 'react';
import {interval, shareReplay} from 'rxjs';
import {PropsType} from './props-type';
import {useObservable} from '../useObservable';

const observable = interval(1000).pipe(shareReplay(1));

export function HotInterval({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), [observable]);
  const hot = useObservable<number>(observable);

  return <button onClick={handleSelect}>Hot interval ({String(hot)})</button>
}
