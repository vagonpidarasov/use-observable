import React, {useCallback} from 'react';
import {interval, concatWith, EMPTY, startWith, map} from 'rxjs';
import {PropsType} from './props-type';

const observable = EMPTY.pipe(
  startWith(0),
  concatWith(interval(1000).pipe(map(v => v + 1)))
);

export function ImmediateInterval({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), [observable]);
  return (
    <div className="grid-row">
      <button className="pick" onClick={handleSelect}>Immediate Interval</button>
    </div>
  );
}
