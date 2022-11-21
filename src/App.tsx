import React, {ReactElement, useCallback, useState} from 'react';
import {of, Observable} from 'rxjs';
import './App.scss';
import {useObservable} from './useObservable';
import {
  PayloadType,
  Interval,
  ImmediateInterval,
  HotInterval,
  Subject,
  ReplaySubject,
  BehaviorSubject,
  FetchPoll,
  TimeoutRetry,
  SwitchMap,
  ExhaustMap,
} from './use-cases';

function App() {
  const [observable, setObservable] = useState<Observable<any>>(of(undefined));
  const [selected, setSelected] = useState<string>('');
  const [description, setDescription] = useState<ReactElement|null>(null);
  const value = useObservable<number>(observable);
  const handleSelect = useCallback(
    ({observable, selectedItem, description}:PayloadType) => {
      setObservable(observable);
      setSelected(selectedItem);
      setDescription(description);
    },
    [setObservable, setSelected]
);
  const handleReset = useCallback(() => {
    setObservable(of(undefined));
    setSelected('');
    setDescription(null);
  }, [setObservable, setSelected]);

  return (
    <div className="app">
      <div className="description">
        {description ?? <span>Pick an observable from the list below</span>}
      </div>

      <div className="value">
        <span>{value ?? '--'}</span>
      </div>

      <button onClick={handleReset}>Reset</button>

      <div className="grid">
        <Interval selected={selected === Interval.id} onSelect={handleSelect} />
        <ImmediateInterval selected={selected === ImmediateInterval.id} onSelect={handleSelect} />
        <HotInterval selected={selected === HotInterval.id} onSelect={handleSelect} />
        <Subject selected={selected === Subject.id} onSelect={handleSelect} />
        <ReplaySubject selected={selected === ReplaySubject.id} onSelect={handleSelect} />
        <BehaviorSubject selected={selected === BehaviorSubject.id} onSelect={handleSelect} />
        <FetchPoll selected={selected === FetchPoll.id} onSelect={handleSelect} />
        <TimeoutRetry selected={selected === TimeoutRetry.id} onSelect={handleSelect} />
        <SwitchMap selected={selected === SwitchMap.id} onSelect={handleSelect} />
        <ExhaustMap selected={selected === ExhaustMap.id} onSelect={handleSelect} />
      </div>
    </div>
  );
}

export default App;
