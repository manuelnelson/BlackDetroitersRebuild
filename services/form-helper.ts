import { computed } from "@nuxtjs/composition-api"


const ModelSync = (props: any, emit: any) => computed({ 
  get: () => props.field, 
  set: (value) => {
    emit('update:field', value) }
}) 
const isActive = (field: string) => {
  return field ? field.length > 0 : false;
}



export {ModelSync, isActive}