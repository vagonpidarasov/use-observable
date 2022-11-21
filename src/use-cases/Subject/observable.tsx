import {Subject} from 'rxjs';

export const subject = new Subject<number>();
const observable = subject.asObservable();

export default observable;
