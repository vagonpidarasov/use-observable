import React, {useCallback, useState, useEffect} from 'react';
import {interval, of, shareReplay, concatWith, map, Observable, BehaviorSubject, ReplaySubject, Subject} from 'rxjs';
import './App.scss';
import {useObservable, isUndefined} from './useObservable';

const Subjects = {
  Subject: new Subject(),
  ReplaySubject: new ReplaySubject(5),
  BehaviorSubject: new BehaviorSubject(1),
};

const Observables = {
  Subject: Subjects.Subject.asObservable(),
  ReplaySubject: Subjects.ReplaySubject.asObservable(),
  BehaviorSubject: Subjects.BehaviorSubject.asObservable(),
  Interval: interval(1000),
  ImmediateInterval: of(0).pipe(
    concatWith(interval(1000).pipe(map(v => v + 1)))
  ),
  HotInterval: interval(1000).pipe(shareReplay(1)),
  Empty: of(),
};

function App() {
  const [observable, setObservable] = useState<Observable<any>>(Observables.Empty);

  const value = useObservable<number>(observable);
  const hot = useObservable<number>(Observables.HotInterval);

  const selectEmpty = useCallback(() => setObservable(Observables.Empty), []);
  const selectInterval = useCallback(() => setObservable(Observables.Interval), []);
  const selectImmediateInterval = useCallback(() => setObservable(Observables.ImmediateInterval), []);
  const selectHotInterval = useCallback(() => setObservable(Observables.HotInterval), []);
  const selectBehaviorSubject = useCallback(() => setObservable(Observables.BehaviorSubject), []);
  const selectSubject = useCallback(() => setObservable(Observables.Subject), []);
  const selectReplaySubject = useCallback(() => setObservable(Observables.ReplaySubject), []);

  const pushNext = useCallback(() => {
    const next = Math.floor(Math.random()*100);
    Subjects.Subject.next(next);
    Subjects.ReplaySubject.next(next);
    Subjects.BehaviorSubject.next(next);
  }, []);

  useEffect(() => {
    const subscription = observable.subscribe((next) => console.log(next));
    return () => subscription.unsubscribe();
  }, [observable]);

  return (
    <div className="app">
      <div className="counter">
        {isUndefined(value) ? '--' : <span>{value}</span>}
      </div>
      <button onClick={selectEmpty}>Reset</button>
      <button onClick={selectInterval}>Interval</button>
      <button onClick={selectImmediateInterval}>Immediate Interval</button>
      <button onClick={selectBehaviorSubject}>BehaviorSubject</button>

      <div className="controls">
        <button onClick={selectHotInterval}>Hot interval ({String(hot)})</button>
      </div>

      <div className="controls">
        <button onClick={selectSubject}>Subject</button>
        <button onClick={pushNext}>Next</button>
      </div>

      <div className="controls">
        <button onClick={selectReplaySubject}>Replay Subject</button>
        <button onClick={pushNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
