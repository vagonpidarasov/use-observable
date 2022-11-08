import React, {useCallback} from 'react';
import {
  concatWith,
  interval,
  switchMap,
  map,
  Observable,
  timer,
} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {PropsType} from './props-type';

const endpoint = 'http://localhost:3001/rand';
const observable:Observable<number> = timer(0).pipe(
  concatWith(interval(1000)),
  switchMap(() => ajax.getJSON<{value: number}>(endpoint)),
  map(data => data.value),
);

export function FetchPoll({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), [onSelect, observable]);

  return (
    <div className="grid-row">
      <button className="pick" onClick={handleSelect}>Poll</button>
    </div>
  );
}
