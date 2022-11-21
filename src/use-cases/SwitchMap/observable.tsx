import {map, Observable, Subject, switchMap} from 'rxjs';
import {ajax} from 'rxjs/ajax';

const endpoint = 'http://localhost:3001/rand?delay=2000';
const data:Observable<number> = ajax.getJSON<{value: number}>(endpoint).pipe(
  map(data => data.value),
);

export const subject = new Subject<boolean>();
const observable = subject.asObservable().pipe(
  switchMap(() => data)
);

export default observable;
