<template>
  <div class="input-field select" :class="{'active':active}">
    <!-- <i class="material-icons prefix" v-if="field.prefix">{{field.prefix}}</i> -->
    <label>{{label}}</label>
    <div class="select-wrapper">
      <div class="select-dropdown dropdown-trigger" v-if="!showMultiSelect">{{dropdownText}}</div>
      <div class="select-dropdown dropdown-trigger" v-if="showMultiSelect">
        <span class="select__item flex items-center" @click.stop="removeItem(item)" v-for="item in selections" :key="item.value">
          {{item.text}} <i class="material-icons">close</i>
        </span>
      </div>
      <svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
      <select class="browser-default" @blur="toggleOpen" @focus="toggleOpen" :value="field" @change="changeEvent" >
        <option v-if="!showMultiSelect" selected value="-1">- Select -</option>
        <option v-for="item in dropdownOptions" :value="item.value" :selected="isSelected(item)" :key="item.value">{{item.text}}</option>
      </select>
    </div>
  </div>

</template>
<script lang="ts">
import { ISelectOption } from '../store/entities/form-entity';
import { defineComponent, onMounted, reactive, computed, toRefs, watch } from '@nuxtjs/composition-api'; 
interface SelectProps {
    label?: string
    placeholder?: string
    field?: string | number | Array<string | number>,
    items?: ISelectOption[],
    isMulti?: boolean,
    defaultValue?: string
}

export default defineComponent({
  setup(props:SelectProps,{emit}) {
    onMounted(() => {
      data.dropdownOptions = props.items ? props.items : [];
      if(props.isMulti) {
        // setupSingleSelect();
        setupMultiSelect();
      }else {
        setupSingleSelect();
      }
    })

    const data = reactive({
      dropdownText: '',
      active: false,
      selections: [] as ISelectOption[],
      dropdownOptions: [] as ISelectOption[]
    })

    //computed
    const showMultiSelect = computed(() : boolean => {
      return data.selections.length > 0
    })

    watch(() => props.defaultValue, (newValue:string|undefined) => {
      var defaultItem = data.dropdownOptions.find(x => x.value == props.field)
      if(defaultItem)
        data.dropdownText = defaultItem.text;
      else
        data.dropdownText = props.placeholder || "Select"
    })
    watch(() => props.items, (newValue:ISelectOption[] | undefined) => {
        data.dropdownOptions = newValue ? newValue : []
    })
    watch(() => props.field, (newValue) => {
      if(props.isMulti) {
        setupMultiSelect();
      } else {
        setupSingleSelect();
      }
    })
    const setupSingleSelect = () => {
      if(typeof props.field != "undefined") {
        var defaultItem = data.dropdownOptions.find(x => x.value.toString() == props.field.toString())
        if(defaultItem)
          data.dropdownText = defaultItem.text;
        else
          data.dropdownText = props.placeholder || "Select"
      } else {
          data.dropdownText = props.placeholder || "Select"
      }
    }
    const setupMultiSelect = () => {
      if(typeof props.field != "undefined") {
        if(Array.isArray(props.field)) {
          data.selections = props.field.map(x => data.dropdownOptions.find(y => y.value == x)) as ISelectOption[];
        }
        if(data.selections.length == 0)
          data.dropdownText = props.placeholder || "Select"
      } else {
          data.dropdownText = props.placeholder || "Select"
      }
    }
    const toggleOpen = () : void => {
      data.active = !data.active;
    }
    const removeItem = (item:ISelectOption) => {
      data.selections = data.selections.filter(x => x.value != item.value);
      if(data.selections.length == 0) {
        data.dropdownText = props.placeholder || "Select"
        emit(`update:field`, 0);
      } else {
        let values = data.selections.map(x => x.value);
        emit(`update:field`, values);
      }
    }
    const changeEvent = (e:any) => {
      let selected = Array.prototype.slice.call(e.target.children).find((x:any) => x.selected == true);
      if(selected) {
        if(data.selections.length > 0)
        {
          let values = data.selections.map(x => x.value);
          values.push(+selected.value);
          emit(`update:field`, values);
        }else {
          if(selected.value == -1)
            emit(`update:field`, '');
          else
            emit(`update:field`, selected.value);
        }
      }
      if(data.dropdownOptions.find(x => x.value == selected.value)){
        if(!props.isMulti) {
          data.dropdownText = (data.dropdownOptions.find(x => x.value == selected.value) as ISelectOption).text;
        }
        else {
          const option = data.dropdownOptions.find(x => x.value == selected.value) as ISelectOption
          data.selections.push(option);
        }
      }
      else  {
        data.dropdownText = props.placeholder || "Select"
      }
    
      data.active = false;
    }

    const isSelected = (item:any) => {
      return props.defaultValue === item.value;
    }
    return {isSelected, changeEvent, removeItem, toggleOpen, showMultiSelect, ...toRefs(data)}
  },
  props: {
    label: String,
    placeholder: String,
    field : [String, Number, Array], 
    items : Array as () => ISelectOption[],
    isMulti: Boolean,
    defaultValue: String
  }

})
</script>

<style lang="stylus">
  .input-field.select
    &.active 
      label
        color $text-color-highlight !important
      .select-dropdown
        color $text-color-highlight !important
    
</style>
