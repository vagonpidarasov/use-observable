import {BehaviorSubject} from 'rxjs';

export const subject = new BehaviorSubject<number>(1);
const observable = subject.asObservable();

export default observable;
