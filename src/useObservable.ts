import {Observable} from 'rxjs';
import {useEffect, useState} from 'react';

export const UNDEFINED = Symbol('undefined');

export function isUndefined(value: unknown): value is typeof UNDEFINED {
  return value === UNDEFINED;
}

export function useObservable<T = unknown>(observable: Observable<T>): T | typeof UNDEFINED {
  const [value, setValue] = useState<T>(UNDEFINED as T);

  useEffect(() => {
    setValue(UNDEFINED as T);
    const subscription = observable.subscribe((next) => {
      setValue(next);
    });

    return () => subscription.unsubscribe();
  }, [observable]);

  return value
}
