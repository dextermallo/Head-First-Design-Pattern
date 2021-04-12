import { RemoteControl, LightOnCommand, LightOffCommand,
    StereoOnCommand, Light, Stereo, StereoOffCommand} from './model';


module.exports.main = function() {
    let remoteControl = new RemoteControl();
    // define command
    let kitchenLight: Light = new Light('kitchen');
    let lightOnCommand = new LightOnCommand(kitchenLight);
    let lightOffCommand = new LightOffCommand(kitchenLight);

    let stereo: Stereo = new Stereo();

    let stereoOnCommand = new StereoOnCommand(stereo);
    let stereoOffCommand = new StereoOffCommand(stereo);

    remoteControl.setCommand(0, lightOnCommand, lightOffCommand);
    remoteControl.setCommand(1, stereoOnCommand, stereoOffCommand);

    remoteControl.onButtonWasPushed(0);
    remoteControl.offButtonWasPushed(0);

    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
    stereo.setCD("My favorite song");
    remoteControl.onButtonWasPushed(1);
    remoteControl.offButtonWasPushed(1);
    
}