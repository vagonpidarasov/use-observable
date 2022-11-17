import React, {useCallback} from 'react';
import {interval, concatWith, timer, map} from 'rxjs';
import cx from 'classnames';
import {PropsType} from './props-type';

const observable = timer(0).pipe(
  concatWith(interval(1000).pipe(map(v => v + 1)))
);

const description = <>
    <span>Immediately starts emitting values once subscribed.</span>&nbsp;
    <a
      href="https://rxjs.dev/api/operators/concatWith"
      target="_blank"
      rel="noopener noreferrer"
    >concatWith</a>
  </>

export function ImmediateInterval({onSelect, selected}: PropsType) {
  const handleSelect = useCallback(() => onSelect({
    observable,
    description,
    selectedItem: ImmediateInterval.id
  }), [onSelect, observable]);
  return (
    <div className={cx('grid-row', {selected})}>
      <button className="pick" onClick={handleSelect}>Immediate Interval</button>
    </div>
  );
}

ImmediateInterval.id = 'ImmediateInterval';
