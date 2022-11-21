import {catchError, EMPTY, map, Observable, retry, Subject, switchMap, timeout} from 'rxjs';
import {ajax} from 'rxjs/ajax';

const endpoint = 'http://localhost:3001/rand?delay=random';
const data:Observable<number> = ajax.getJSON<{value: number}>(endpoint).pipe(
  timeout(500),
  retry(2),
  map(data => data.value),
);

export const subject = new Subject<boolean>();
const observable = subject.asObservable().pipe(
  switchMap(() => data.pipe(catchError(e => EMPTY)))
);

export default observable;
