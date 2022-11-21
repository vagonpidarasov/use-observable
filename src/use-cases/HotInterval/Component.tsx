import React, {useCallback} from 'react';
import cx from 'classnames';
import {PropsType} from '../props-type';
import {useObservable} from '../../useObservable';
import description from './description';
import observable from './observable';

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
