import React, {useCallback} from 'react';
import {ReplaySubject} from 'rxjs';
import {PropsType} from './props-type';

const subject = new ReplaySubject<number>(3);
const observable = subject.asObservable();

export function ReplaySubjectObservable({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), [onSelect, observable]);
  const handleNext = useCallback(() => subject.next(Math.floor(Math.random()*100)), [subject]);

  return (
    <div className="grid-row">
      <button className="pick" onClick={handleSelect}>Replay Subject</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
