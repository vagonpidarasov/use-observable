import React, {useCallback} from 'react';
import {
  retry,
  timeout,
  map,
  Observable,
  Subject,
  switchMap,
  catchError,
  EMPTY,
} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {PropsType} from './props-type';

const endpoint = 'http://localhost:3001/rand?delay=random';
const data:Observable<number> = ajax.getJSON<{value: number}>(endpoint).pipe(
  timeout(500),
  retry(2),
  map(data => data.value),
);

const subject = new Subject<boolean>();
const observable = subject.asObservable().pipe(
  switchMap(() => data.pipe(catchError(e => EMPTY)))
);

export function TimeoutRetry({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), [onSelect, observable]);
  const handleTry = useCallback(() => subject.next(true), [subject]);

  return (
    <div className="grid-row">
      <button className="pick" onClick={handleSelect}>Timout retry</button>
      <button onClick={handleTry}>Try</button>
    </div>
  );
}

