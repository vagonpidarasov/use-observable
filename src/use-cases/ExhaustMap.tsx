import React, {useCallback} from 'react';
import {
  map,
  Observable,
  exhaustMap,
  Subject,
} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {PropsType} from './props-type';

const endpoint = 'http://localhost:3001/rand?delay=2000';
const data:Observable<number> = ajax.getJSON<{value: number}>(endpoint).pipe(
  map(data => data.value),
)

const subject = new Subject<boolean>();
const observable = subject.asObservable().pipe(
  exhaustMap(() => data)
);

export function ExhaustMap({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), []);
  const handleLogin = useCallback(() => subject.next(true), [subject]);

  return (
    <div className="grid-row">
      <button className="pick" onClick={handleSelect}>Exhaust Map</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

