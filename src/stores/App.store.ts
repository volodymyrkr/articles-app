import { computed, observable } from 'mobx';

class AppStore {
    @observable
    public value:string = "Some Value";

    @computed
    public get valueToString(): string {
        return this.value;
    }

    public updateValue = (newValue: string) => {
        this.value = newValue;
    }
}

export default AppStore;
