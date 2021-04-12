import { Command } from "../interface";
import { NoCommand } from '../model';

export class RemoteControl {
    onCommands: Command[];
    offCommands: Command[];

    constructor() {
        this.onCommands = new Array<Command>(2).fill(new NoCommand());
        this.offCommands = new Array<Command>(2).fill(new NoCommand());
    }

    setCommand(slot: number, onCommand: Command, offCommand: Command) {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }
    onButtonWasPushed(slot: number) {
        this.onCommands[slot].execute();
    }
    offButtonWasPushed(slot: number) {
        this.offCommands[slot].execute();
    }
}