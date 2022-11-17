import React, {useCallback} from 'react';
import {
  map,
  Observable,
  switchMap,
  Subject,
} from 'rxjs';
import cx from 'classnames';
import {ajax} from 'rxjs/ajax';
import {PropsType} from './props-type';

const endpoint = 'http://localhost:3001/rand?delay=2000';
const data:Observable<number> = ajax.getJSON<{value: number}>(endpoint).pipe(
  map(data => data.value),
);

const subject = new Subject<boolean>();
const observable = subject.asObservable().pipe(
  switchMap(() => data)
);

const description = <>
    <span>Every time user tries to search something, new request is fired
      and previous one is discarded. See</span>&nbsp;
  <a
    href="https://rxjs.dev/api/operators/switchMap"
    target="_blank"
    rel="noopener noreferrer"
  >switchMap</a>
</>

export function SwitchMap({onSelect, selected}: PropsType) {
  const handleSelect = useCallback(() => onSelect({
    observable,
    description,
    selectedItem: SwitchMap.id
  }), [onSelect, observable]);
  const handleLogin = useCallback(() => subject.next(true), [subject]);

  return (
    <div className={cx('grid-row', {selected})}>
      <button className="pick" onClick={handleSelect}>Switch map</button>
      <button onClick={handleLogin}>Search</button>
    </div>
  );
}

SwitchMap.id = 'SwitchMap';
