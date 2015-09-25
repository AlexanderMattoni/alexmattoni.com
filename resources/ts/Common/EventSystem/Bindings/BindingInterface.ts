module EventSystem.Bindings {

    export interface BindingInterface {
        event: Events.EventInterface;
        callback: (event: Events.EventInterface) => void;

        execute(event: Events.EventInterface): void;
    }
}
