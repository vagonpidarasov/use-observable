import React, {useCallback} from 'react';
import {interval, of, concatWith, map} from 'rxjs';
import {PropsType} from './props-type';

const observable = of(0).pipe(
  concatWith(interval(1000).pipe(map(v => v + 1)))
);

export function ImmediateInterval({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), [observable]);
  return <button onClick={handleSelect}>Immediate Interval</button>;
}
