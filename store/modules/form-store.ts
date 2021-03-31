import {reactive} from '@nuxtjs/composition-api'
import { Validate } from '../../services/validate-service';
export interface IStore {
  state: any
}
export class ContactDto{

}
class FormStore implements IStore{
  state = reactive({
    contactModel: new ContactDto(),
    ///validators
    contactValidator: {} as Validate,
  })
  setState(name:string, value:any) {
    this.state[name] = value;
  }
  getState(name:string) {
    switch(name) {
      case 'metadataMidiModel':
        return this.state.contactModel
      case 'metadataMidiValidator':
        return this.state.contactValidator
    }
  }

}

const formStore = new FormStore();

export {formStore};