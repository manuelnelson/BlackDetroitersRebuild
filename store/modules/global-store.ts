import {reactive,computed} from '@nuxtjs/composition-api'
import { IStore } from './../index';

class GlobalStore implements IStore{
  state = reactive({
    disableShortcuts: false,
    shouldUseLocalStorage: false,
    menuIsOpen: false,
    isLoading: false,
  })

  isDisabled = computed(() => {
    return this.state.disableShortcuts;
  })
}

const globalStore = new GlobalStore();

export {globalStore};