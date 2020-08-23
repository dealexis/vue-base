import {withKnobs} from '@storybook/addon-knobs/dist/index'
import { propsCommon } from '../helpers'
import FieldTemplate from './FieldTemplate'
import TextareaField from '../../src/fields/TextareaField'

export default {
  title: 'TextArea',
  decorators: [withKnobs],
}

export const SimpleTextarea = () => ({
  extends: FieldTemplate,
  props: {
    ...propsCommon('Description', 'Enter your text')
  },
  data() {
    return {
      model: {
        description: '',
      },
    }
  },
  computed: {
    component: () => TextareaField,
    field() {
      return {
        attribute: 'description',
        label: this.label,
        placeholder: this.placeholder,
        required: this.required,
        disabled: this.disabled,
      }
    },
  },
})
