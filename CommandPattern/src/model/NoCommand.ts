import { Command } from "../interface";

export class NoCommand implements Command {
    execute() {
        console.log('No command');
    }
}