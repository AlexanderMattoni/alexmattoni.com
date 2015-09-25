module EventSystem {
    /**
     * Array of bindings registered in the system
     * @type {Array}
     */
    var bindings: Bindings.BindingInterface[] = [];

    /**
     * Register a new binding
     * @param binding
     */
    export function bind(binding: Bindings.BindingInterface): void {
        this.bindings.push(binding);
    }

    /**
     * Unbind a specified binding
     * @param binding
     * @returns {boolean}
     */
    export function unbind(binding: Bindings.BindingInterface): boolean {
        for(var i = this.bindings.length - 1; i >= 0; i--) {
            if(this.bindings[i]===binding) {
                this.bindings.splice(i, 1);
                return true;
            }
        }

        return false;
    }

    /**
     * Broadcast an event to all listeners
     * @param event
     */
    export function broadcast(event: Events.EventInterface): void {
        this.bindings.forEach(binding => {
            if(binding.event.name === event.name) {
                binding.execute(event);
            }
        });
    }

    /**
     * Remove any bindings that are registered for this event.
     * @param event
     */
    export function purge(event: Events.EventInterface) {
        for(var i = this.bindings.length - 1; i >= 0; i--) {
            if(this.bindings[i].event.name === event.name) {
                this.bindings.splice(i, 1);
            }
        }
    }
}

