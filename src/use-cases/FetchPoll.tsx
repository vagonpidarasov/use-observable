import React, {useCallback} from 'react';
import {
  concatWith,
  interval,
  switchMap,
  map,
  Observable,
  timer,
} from 'rxjs';
import {PropsType} from './props-type';

const endpoint = 'http://localhost:3001/rand';
const data = new Observable<{value: number}>(subscriber => {
  fetch(endpoint)
    .then(response => response.json())
    .then(response => subscriber.next(response))
    .then(() => subscriber.complete())
});
const observable:Observable<number> = timer(0).pipe(
  concatWith(interval(1000)),
  switchMap(() => data),
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
