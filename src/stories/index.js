import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, color } from '@storybook/addon-knobs'
import { withNotes } from '@storybook/addon-notes'
import VueInfoAddon from 'storybook-addon-vue-info'
import MyButton from '../components/Button/MyButton.vue'


storiesOf('Usage button', module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('default', withNotes(
    `
      sizeとcolorはここにあるやつを使ってください
      size: minimum, small, normal, large, full
      color: default, primary, success, info, warning, danger, dark
    `
  )(() => {
    const ButtonText = text('text', 'defaul')
    const size = text('size', 'large')
    const color = text('color', 'default')
    return {
      components: { MyButton },
      template: `<MyButton text="${ButtonText}" size="${size}" kind="${color}" @click.native="action"/>`,
      methods: { action: action('button-clicked') }
    }
  }))

storiesOf('MyButton', module)
  .add('default', () => ({
    components: { MyButton },
    template: `<MyButton text="default" @click.native="action"/>`,
    methods: { action: action('button-clicked') }
  }))
  .add('color', () => ({
    components: { MyButton },
    template: `
      <div style="display: flex; flex-wrap: wrap">
        <MyButton text='primary' kind='primary'/>
        <MyButton text='default' kind='default'/>
        <MyButton text='success' kind='success'/>
        <MyButton text='info' kind='info'/>
        <MyButton text='warning' kind='warning'/>
        <MyButton text='danger' kind='danger'/>
        <MyButton text='dark' kind='dark'/>
      </div>
    `
  }))
  .add('size', () => ({
    components: { MyButton },
    template: `
      <div>
        <div style="display: flex; flex-wrap: wrap">
          <MyButton text='minimum' kind='primary' size="minimum"/>
          <MyButton text='small' kind='primary' size="small"/>
          <MyButton text='normal' kind='primary' size="normal"/>
          <MyButton text='large' kind='primary' size="large"/>
        </div>
        <div style="display:flex;"><MyButton text='full' kind='primary' size="full"/></div>
      </div>
      `
  }))
