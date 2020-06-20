import {BehaviorSubject} from "rxjs";

import {PresentationModel} from "../models/Presentation";

class Presentations {

    public presentations: BehaviorSubject<PresentationModel[]>;

    constructor() {
        this.presentations = new BehaviorSubject<PresentationModel[]>([])
        PresentationModel.sync();
    }

    public async createPresentation(name: string): Promise<void> {
        PresentationModel.findAll()
            .then((presentations: PresentationModel) => console.log(presentations[0].id, presentations[0].name));
    }

}

export const presentations = new Presentations();