import {ReplaySubject} from 'rxjs';

export const subject = new ReplaySubject<number>(3);
const observable = subject.asObservable();

export default observable;
