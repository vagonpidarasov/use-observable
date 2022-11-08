import React, {useCallback} from 'react';
import {interval, concatWith, timer, map} from 'rxjs';
import {PropsType} from './props-type';

const observable = timer(0).pipe(
  concatWith(interval(1000).pipe(map(v => v + 1)))
);

export function ImmediateInterval({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), [onSelect, observable]);
  return (
    <div className="grid-row">
      <button className="pick" onClick={handleSelect}>Immediate Interval</button>
    </div>
  );
}
