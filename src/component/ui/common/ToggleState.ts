export default interface ToggleState {
    actived: boolean;
}

export class ToggleStateImpl {
    public actived: boolean;

    constructor() {
        this.actived = false;
    }
}