import React, {useCallback} from 'react';
import cx from 'classnames';
import {PropsType} from '../props-type';
import description from './description';
import observable, {subject} from './observable';

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
