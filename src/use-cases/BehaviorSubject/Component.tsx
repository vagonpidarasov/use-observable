import React, {useCallback} from 'react';
import cx from 'classnames';
import {PropsType} from '../props-type';
import description from './description';
import observable, {subject} from './observable';

export default function BehaviorSubject({onSelect, selected}: PropsType) {
  const handleSelect = useCallback(() => onSelect({
    observable,
    description,
    selectedItem: BehaviorSubject.id
  }), [onSelect, observable]);
  const handleNext = useCallback(() => subject.next(Math.floor(Math.random()*100)), [subject]);

  return (
    <div className={cx('grid-row', {selected})}>
      <button className="pick" onClick={handleSelect}>Behavior Subject</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

BehaviorSubject.id = 'BehaviorSubject';
