import React, {useCallback} from 'react';
import {interval, shareReplay} from 'rxjs';
import cx from 'classnames';
import {PropsType} from './props-type';
import {useObservable} from '../useObservable';

const observable = interval(1000).pipe(shareReplay(1));

const description = <>
    <span>Connects to a hot observable. See</span>&nbsp;
    <a href="https://rxjs.dev/api/operators/shareReplay" target="_blank" rel="noopener noreferrer">shareReplay</a>
  </>

export function HotInterval({onSelect, selected}: PropsType) {
  const handleSelect = useCallback(() => onSelect({
    observable,
    description,
    selectedItem: HotInterval.id
  }), [onSelect, observable]);
  const hot = useObservable<number>(observable);

  return (
    <div className={cx('grid-row', {selected})}>
      <button className="pick" onClick={handleSelect}>Hot interval</button>
      <span className="control value">{String(hot)}</span>
    </div>
  );
}

HotInterval.id = 'HotInterval';
