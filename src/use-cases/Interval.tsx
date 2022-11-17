import React, {useCallback} from 'react';
import {interval} from 'rxjs';
import cx from 'classnames';
import {PropsType} from './props-type';

const observable = interval(1000);
const description = <>
    <span>Starts emitting values every second once subscribed. See</span>&nbsp;
    <a
      href="https://rxjs.dev/api/index/function/interval"
      target="_blank"
      rel="noopener noreferrer"
    >interval</a>
  </>

export function Interval({onSelect, selected}: PropsType) {
  const handleSelect = useCallback(() => onSelect({
    observable,
    description,
    selectedItem: Interval.id
  }), [onSelect, observable]);

  return (
    <div className={cx('grid-row', {selected})}>
      <button className="pick" onClick={handleSelect}>Interval</button>
    </div>
  );
}

Interval.id = 'Interval';
