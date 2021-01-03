import IObserver from './IObserver';

export default interface ISubject {
    setChanged(): void;
    registerObserver(observer: IObserver): void;
    removeObserver(observer: IObserver): void;
    notifyObserver(): void;
}