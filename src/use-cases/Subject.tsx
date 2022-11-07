import React, {useCallback} from 'react';
import {Subject} from 'rxjs';
import {PropsType} from './props-type';

const subject = new Subject<number>();
const observable = subject.asObservable();

export function SubjectObservable({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), [observable]);
  const handleNext = useCallback(() => subject.next(Math.floor(Math.random()*100)), [subject]);

  return (
    <div className="controls">
      <button onClick={handleSelect}>Subject</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
