<template>
  <form  v-if="!loading && form" ref="formRef" class="form-container" @submit.prevent="saveAction" lazy-validation>
    <h3 v-if="propForm.header && propForm.header.length > 0">{{propForm.header}}</h3>
    <p class="rich-text" v-if="propForm.instructions" v-html="propForm.instructions"></p>
    <div class="form-field" v-for="field in propForm.fields" :key="field.name">
        <!-- text -->
        <div class="input-field" v-if="field.type == 0" >
            <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i>
            <input type="text" v-if="field.isFocusElement" ref="focusElementRef"  v-model="model[field.name]" :name="`${field.name}1`" :required="field.isRequired()"/>
            <input type="text" v-if="!field.isFocusElement" @focus="disableShortcuts" @blur="enableShortcuts"  v-model="model[field.name]" :name="`${field.name}1`" :required="field.isRequired()"/>
            <label :class="{'active': isActive(field)}" :for="`${field.name}1`">{{field.friendlyName}}</label>
            <div class="mui-errors" v-if="validator.showErrors">
                <span v-for="(error, ndx) in validator.errors[field.name]" :key="ndx">{{error.message}}</span>
            </div>
        </div>
        <!-- textarea -->
        <div class="input-field" v-if="field.type == 5" v-show="field.show">
            <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i>
            <textarea class="materialize-textarea" v-model="model[field.name]" :name="field.name" :required="field.isRequired()"></textarea>
            <label  :class="{'active': isActive(field)}" :for="field.name">{{field.friendlyName}}</label>
            <div class="mui-errors" v-if="validator.showErrors">
                <span v-for="(error, ndx) in validator.errors[field.name]" :key="ndx">{{error.message}}</span>
            </div>
        </div> 
        <!-- Select -->  
        <select-component v-if="field.type == 1" v-show="field.show" :is-multi="field.isMultiSelect"  :label="field.friendlyName" :items="field.options" v-model:field="model[field.name]"></select-component>
        <!-- <select-component v-if="field.type == 1" v-show="field.show" :field.sync="field" :is-multi="field.isMultiSelect"  :label="field.friendlyName" :items="field.options"></select-component> -->
        <!-- Checkbox -->
        <div class="mui-checkbox" v-if="field.type == 3" v-show="field.show">              
          <label :for="field.name">
          <input :id="field.name" class="filled-in" :v-model="model[field.name]" type="checkbox" :name="field.name"/>
          <span v-if="field.friendlyName.length > 0">{{field.friendlyName}}</span></label>
        </div> 
        <!-- Autocomplete -->
        <auto-complete-component v-if="field.type == 2" v-show="field.show" :label="field.friendlyName" :defaultValue="model[field.name]" :items="field.options" :field.sync="field" :model="model"  ></auto-complete-component>
        <!-- Autocomplete Multiple -->
        <auto-complete-component v-if="field.type == 4" v-show="field.show" :isMulti="true" :selectedHandler="field.AutocompleteSelectHandler" :removedHandler="field.AutocompleteRemoveHandler" :label="field.friendlyName" :defaultValue="model[field.name]" :items="field.options" :field.sync="field" :model="model"  ></auto-complete-component>
        <!-- DateTime -->
        <!-- <date-picker-component v-if="field.type == 6" v-show="field.show" :label="field.friendlyName" :defaultValue="model[field.name]" :field="field" :model="model" ></date-picker-component> -->

        <!-- Recurrence -->
        <!-- <scheduler-component v-if="field.type == 7" v-show="field.show" :field="field" :fieldName="field.name" :defaultValue="model[field.name]"  :model="model" ></scheduler-component> -->
        <!-- Slot is for the save actions -->
    </div> 
      <div class="button-container"> 
        <slot></slot>
      </div>
  </form> 
</template>
<script lang="ts">
import { FormEntity, FormField } from '../store/entities/form-entity';
import { Validate, AllValidationRules } from '../services/validate-service';
import { formStore } from "../store/modules/form-store";
import SelectComponent from './Select.vue';
import { defineComponent, ref, computed, reactive, toRefs, onMounted, watch, nextTick } from '@nuxtjs/composition-api';
interface FormProps {
  form?: FormEntity,
  defaultValues?: Object, // this is for example if we are editing an existing model. This will set the model to these values. Should match by name
  saveAction?: Function,
  name?: String,
  update?:number
}
export default defineComponent({
  props: {
    form: FormEntity,
    defaultValues: Object, // this is for example if we are editing an existing model. This will set the model to these values. Should match by name
    saveAction: Function,
    name: String,
    update:Number,
  },

  setup(props:FormProps) {
    onMounted(() => {
      let validRules = new AllValidationRules();
      if(props.form) {
        props.form.fields.forEach(x => {
          const validationRules = x.GetValidationRules();
          if(validationRules && validationRules.length > 0) {
            validRules['model.' + x.name] = validationRules;
          }
        })
      }
      formStore.setState(`${props.name}Validator`, new Validate(validRules));
      data.loading = false;
    })
    const formRef = ref(undefined as undefined | HTMLElement);
    const focusElementRef = ref(undefined as undefined | HTMLElement);
    const data = reactive({
      loading: true,
      id: props.update,
      propForm: props.form
    })
    const setFocus = () => {
      if(focusElementRef.value)
        (focusElementRef.value as HTMLElement).focus();
    }
    const model = computed(() =>{
      setFocus();
      if(props.name)
        return (formStore.getState(`${props.name}Model`) as any)
    })
    const validator = computed(() =>  {
      if(props.name)
        return (formStore.getState(`${props.name}Validator`) as Validate)
    }) 
    watch(() => props.form?.focusFieldName, async (newValue) => {
      if(!formRef.value)
      {
        return;       
      }
      let element = (formRef.value.querySelector(`[name='${newValue}']`) as HTMLElement);
      if(element) {
        await nextTick();
        element.focus();
      }
    })
    // const update = ref(props.update);
    //use props update to force the form to update;
    watch(() => props.update, (newValue) => {
      data.id = props.update as number;
    })

    const isActive = (field: FormField) => {
      if(model)
        return model.value && model.value[field.name] ? model.value[field.name].length > 0 : false;
    }
    const resetValues = () => {
      Object.keys(model.value).forEach(x => model.value[x] = ref(''));
      (data.id as number)++;
    }
    const isValid = () => {
      if(validator.value != null && validator.value.isValid({model:model.value})) {
        return true;
      }
      // alertStore.addSimpleAlert(`There's some invalid information that needs to be corrected before you can save.`)
      return false
    }

    return {model,...toRefs(data),isValid,setFocus,resetValues,isActive,validator, focusElementRef, formRef}
  },
  components: {SelectComponent},
})
</script>

<style lang="stylus">

</style>
