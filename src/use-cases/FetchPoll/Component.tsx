import React, {useCallback} from 'react';
import cx from 'classnames';
import {PropsType} from '../props-type';
import description from './description';
import observable from './observable';

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
