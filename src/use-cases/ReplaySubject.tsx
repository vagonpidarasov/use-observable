import React, {useCallback} from 'react';
import {ReplaySubject} from 'rxjs';
import cx from 'classnames';
import {PropsType} from './props-type';

const subject = new ReplaySubject<number>(3);
const observable = subject.asObservable();

const description = <>
  <span>You push next values manually.</span>&nbsp;
  <a
    href="https://rxjs.dev/api/index/class/ReplaySubject"
    target="_blank"
    rel="noopener noreferrer"
  >ReplaySubject</a>&nbsp;
  <span>emits last n values when subscribed</span>
</>

export function ReplaySubjectObservable({onSelect, selected}: PropsType) {
  const handleSelect = useCallback(() => onSelect({
    observable,
    description,
    selectedItem: ReplaySubjectObservable.id
  }), [onSelect, observable]);
  const handleNext = useCallback(() => subject.next(Math.floor(Math.random() * 100)), [subject]);

  return (
    <div className={cx('grid-row', {selected})}>
      <button className="pick" onClick={handleSelect}>Replay Subject</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

ReplaySubjectObservable.id = 'ReplaySubjectObservable';
