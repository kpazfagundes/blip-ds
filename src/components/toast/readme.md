# bds-toast



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                                                                                                                                              | Type                                            | Default     |
| -------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- | ----------- |
| `actionType`   | `action-type`   | ActionType. Defines if the button should have a button or an icon. Can be one of: 'icon', 'button';                                                                                                                                                      | `"button" \| "icon"`                            | `'button'`  |
| `buttonAction` | `button-action` | Define an action to the button toast. Can be one of: 'close', 'custom'; if the action type is set to close, the button will close automatically. if the action type is set to custom, a function need to be passed when the toastButtonClick is emitted. | `"close" \| "custom"`                           | `'close'`   |
| `buttonText`   | `button-text`   | If the action type is button, this will be the text of the button:                                                                                                                                                                                       | `string`                                        | `undefined` |
| `duration`     | `duration`      | Time to close the toast in seconds 0 = no auto close (default value)                                                                                                                                                                                     | `number`                                        | `0`         |
| `hide`         | `hide`          | Controls the hide event of the component:                                                                                                                                                                                                                | `boolean`                                       | `false`     |
| `icon`         | `icon`          | used for add the icon. Uses the bds-icon component.                                                                                                                                                                                                      | `string`                                        | `null`      |
| `show`         | `show`          | Controls the open event of the component:                                                                                                                                                                                                                | `boolean`                                       | `false`     |
| `toastText`    | `toast-text`    | The text content of the component:                                                                                                                                                                                                                       | `string`                                        | `undefined` |
| `toastTitle`   | `toast-title`   | The title of the component:                                                                                                                                                                                                                              | `string`                                        | `undefined` |
| `variant`      | `variant`       | Variant. Defines the color of the toast. Can be one of: 'system', 'error', 'success', 'warning';                                                                                                                                                         | `"error" \| "success" \| "system" \| "warning"` | `'system'`  |


## Events

| Event              | Description                                                                      | Type               |
| ------------------ | -------------------------------------------------------------------------------- | ------------------ |
| `toastButtonClick` | Event used to execute some action when the action button on the toast is clicked | `CustomEvent<any>` |


## Methods

### `close() => Promise<void>`

Can be used outside the component to close the toast

#### Returns

Type: `Promise<void>`



### `create({ toastElement, actionType, buttonAction, buttonText, icon, toastText, toastTitle, variant, duration, }: CreateToastType) => Promise<void>`

Can be used outside to open the toast

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [bds-icon](../icon)
- [bds-typo](../typo)
- [bds-button](../button)
- [bds-icon-button](../icon-button)

### Graph
```mermaid
graph TD;
  bds-toast --> bds-icon
  bds-toast --> bds-typo
  bds-toast --> bds-button
  bds-toast --> bds-icon-button
  bds-button --> bds-icon
  bds-button --> bds-typo
  bds-button --> bds-loading-spinner
  bds-icon-button --> bds-icon
  style bds-toast fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*