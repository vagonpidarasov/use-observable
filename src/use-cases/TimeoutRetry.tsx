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
import cx from 'classnames';
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

const description = <>
    <span>Discards requests if they fail to return data
      within desired timeframe, retries 3 times. See</span>&nbsp;
    <a
      href="https://rxjs.dev/api/operators/timeout"
      target="_blank"
      rel="noopener noreferrer"
    >timeout</a> and <a
    href="https://rxjs.dev/api/operators/retry"
    target="_blank"
    rel="noopener noreferrer"
  >retry</a>
  </>

export function TimeoutRetry({onSelect, selected}: PropsType) {
  const handleSelect = useCallback(() => onSelect({
    observable,
    description,
    selectedItem: TimeoutRetry.id
  }), [onSelect, observable]);
  const handleTry = useCallback(() => subject.next(true), [subject]);

  return (
    <div className={cx('grid-row', {selected})}>
      <button className="pick" onClick={handleSelect}>Timout retry</button>
      <button onClick={handleTry}>Try</button>
    </div>
  );
}

TimeoutRetry.id = 'TimeoutRetry';
