import { Chips } from 'types/chips';
export default class Player {
    private _total;
    private _betSize;
    constructor(arg: Chips | Player);
    stack(): Chips;
    betSize(): Chips;
    totalChips(): Chips;
    addToStack(amount: Chips): void;
    takeFromStack(amount: Chips): void;
    bet(amount: Chips): void;
    takeFromBet(amount: Chips): void;
}
