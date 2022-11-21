import React, {useCallback} from 'react';
import cx from 'classnames';
import {PropsType} from '../props-type';
import description from './description';
import observable from './observable';

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
