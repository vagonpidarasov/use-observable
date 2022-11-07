import React, {useCallback} from 'react';
import {BehaviorSubject} from 'rxjs';
import {PropsType} from './props-type';

const subject = new BehaviorSubject<number>(1);
const observable = subject.asObservable();

export function BehaviorSubjectObservable({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), [observable]);
  const handleNext = useCallback(() => subject.next(Math.floor(Math.random()*100)), [subject]);

  return (
    <div className="controls">
      <button onClick={handleSelect}>Behavior Subject</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}