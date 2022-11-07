import React, {useCallback, useState} from 'react';
import {of, Observable} from 'rxjs';
import './App.scss';
import {useObservable} from './useObservable';
import {
  Interval,
  ImmediateInterval,
  HotInterval,
  SubjectObservable,
  ReplaySubjectObservable,
  BehaviorSubjectObservable,
  FetchPoll,
  TimeoutRetry,
  SwitchMap,
  ExhaustMap,
} from './use-cases';

function App() {
  const [observable, setObservable] = useState<Observable<any>>(of(undefined));
  const value = useObservable<number>(observable);
  const handleSelect = useCallback((source:Observable<number>) => setObservable(source), []);
  const handleReset = useCallback(() => setObservable(of(undefined)), []);

  return (
    <div className="app">
      <div className="value">
        <span>{value ?? '--'}</span>
      </div>

      <button onClick={handleReset}>Reset</button>

      <div className="grid">
        <Interval onSelect={handleSelect} />
        <ImmediateInterval onSelect={handleSelect} />
        <HotInterval onSelect={handleSelect} />
        <SubjectObservable onSelect={handleSelect} />
        <ReplaySubjectObservable onSelect={handleSelect} />
        <BehaviorSubjectObservable onSelect={handleSelect} />
        <FetchPoll onSelect={handleSelect} />
        <TimeoutRetry onSelect={handleSelect} />
        <SwitchMap onSelect={handleSelect} />
        <ExhaustMap onSelect={handleSelect} />
      </div>
    </div>
  );
}

export default App;
