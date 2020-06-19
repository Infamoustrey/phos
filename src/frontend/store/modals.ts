import {BehaviorSubject} from 'rxjs'

class ModalState {

    public activeModal: BehaviorSubject<string>;

    constructor() {
        this.activeModal = new BehaviorSubject<string>('');
    }

}

export const modals = new ModalState();