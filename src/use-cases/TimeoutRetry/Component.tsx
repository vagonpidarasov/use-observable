import React, {useCallback} from 'react';
import cx from 'classnames';
import {PropsType} from '../props-type';
import description from './description';
import observable, {subject} from './observable';

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
