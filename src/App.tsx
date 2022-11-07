import React, {useCallback, useState} from 'react';
import {of, Observable} from 'rxjs';
import './App.scss';
import {useObservable, isUndefined} from './useObservable';
import {useTap} from './useTap';
import {
  Interval,
  ImmediateInterval,
  HotInterval,
  SubjectObservable,
  ReplaySubjectObservable,
  BehaviorSubjectObservable
} from './use-cases';

function App() {
  const [observable, setObservable] = useState<Observable<any>>(of());
  const value = useObservable<number>(observable);
  const handleSelect = useCallback((o: Observable<number>) => setObservable(o), []);
  const handleReset = useCallback(() => setObservable(of()), []);

  useTap(observable, console.log);

  return (
    <div className="app">
      <div className="counter">
        {isUndefined(value) ? '--' : <span>{value}</span>}
      </div>

      <button onClick={handleReset}>Reset</button>

      <Interval onSelect={handleSelect} />
      <ImmediateInterval onSelect={handleSelect} />
      <HotInterval onSelect={handleSelect} />
      <SubjectObservable onSelect={handleSelect} />
      <ReplaySubjectObservable onSelect={handleSelect} />
      <BehaviorSubjectObservable onSelect={handleSelect} />
    </div>
  );
}

export default App;
