import {CComponentImpl} from './ccomponent-impl';

export class Menu extends CComponentImpl {

    constructor(name?: string) {
        super('Menu');
        this.init();
    }

    operation() {
        console.log(`Menu ${name}`);
    }

    init() {
        let mFile = new CComponentImpl('file');
        mFile.add(new CComponentImpl('open'));
        mFile.add(new CComponentImpl('close'));
        let mAbout = new CComponentImpl('help');
        mAbout.add(new CComponentImpl('about'));
        this.add(mFile);
        this.add(mAbout);
    }
}
