import React, {useCallback} from 'react';
import {interval} from 'rxjs';
import {PropsType} from './props-type';

const observable = interval(1000);

export function Interval({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), [observable]);
  return <button onClick={handleSelect}>Interval</button>;
}