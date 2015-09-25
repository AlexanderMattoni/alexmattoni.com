module EventSystem.Bindings {

    export class Binding implements BindingInterface {
        event: Events.EventInterface;
        callback: (event: Events.EventInterface) => void;

        constructor(event: Events.EventInterface, callback: (event: Events.EventInterface) => void) {
            this.event = event;
            this.callback = callback;
        }

        execute(event: Events.EventInterface): void {
            this.callback(event);
        }
    }
}
