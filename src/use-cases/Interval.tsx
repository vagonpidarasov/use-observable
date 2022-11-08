import React, {useCallback} from 'react';
import {interval} from 'rxjs';
import {PropsType} from './props-type';

const observable = interval(1000);

export function Interval({onSelect}: PropsType) {
  const handleSelect = useCallback(() => onSelect(observable), [onSelect, observable]);

  return (
    <div className="grid-row">
      <button className="pick" onClick={handleSelect}>Interval</button>
    </div>
  );
}
