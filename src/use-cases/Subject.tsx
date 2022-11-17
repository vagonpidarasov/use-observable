import React, {useCallback} from 'react';
import {Subject} from 'rxjs';
import cx from 'classnames';
import {PropsType} from './props-type';

const subject = new Subject<number>();
const observable = subject.asObservable();

const description = <>
  <span>You push next values manually. See</span>&nbsp;
    <a href="https://rxjs.dev/api/index/class/Subject" target="_blank" rel="noopener noreferrer">Subject</a>
  </>

export function SubjectObservable({onSelect, selected}: PropsType) {
  const handleSelect = useCallback(() => onSelect({
    observable,
    description,
    selectedItem: SubjectObservable.id
  }), [onSelect, observable]);
  const handleNext = useCallback(() => subject.next(Math.floor(Math.random()*100)), [subject]);

  return (
    <div className={cx('grid-row', {selected})}>
      <button className="pick" onClick={handleSelect}>Subject</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

SubjectObservable.id = 'SubjectObservable';
