import React, {useCallback} from 'react';
import cx from 'classnames';
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

const description = <>
    <span>Starts polling remote host the moment it's subscribed.</span>
  </>

export function FetchPoll({onSelect, selected}: PropsType) {
  const handleSelect = useCallback(() => onSelect({
    observable,
    description,
    selectedItem: FetchPoll.id
  }), [onSelect, observable]);

  return (
    <div className={cx('grid-row', {selected})}>
      <button className="pick" onClick={handleSelect}>Poll</button>
    </div>
  );
}

FetchPoll.id = 'FetchPoll';
