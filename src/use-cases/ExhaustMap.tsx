import React, {useCallback} from 'react';
import cx from 'classnames';
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

const description = <>
    <span>Every time user tries to login, new request is ignored
      until previous one is completed. See</span>&nbsp;
    <a
      href="https://rxjs.dev/api/operators/exhaustMap"
      target="_blank"
      rel="noopener noreferrer"
    >exhaustMap</a>
  </>

export function ExhaustMap({onSelect, selected}: PropsType) {
  const handleSelect = useCallback(() => onSelect({
    observable,
    description,
    selectedItem: ExhaustMap.id
  }), [onSelect, observable]);
  const handleLogin = useCallback(() => subject.next(true), [subject]);

  return (
    <div className={cx('grid-row', {selected})}>
      <button className="pick" onClick={handleSelect}>Exhaust Map</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

ExhaustMap.id = 'ExhaustMap';

