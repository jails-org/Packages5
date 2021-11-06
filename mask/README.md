# mask

A Component for mask a input text field.
**It needs to be used in conjunction with [form](../form) component.**

## Usage

Import component and provide a hashmap containing all masks function as dependency.

```js
import jails from "jails-js";
import * as form from "jails.packages5/form";
import * as mask from "jails.packages5/mask";

import { masks } from "jails.packages5/mask/pt-br/masks";

const dependencies = {
  masks: {
    ...masks,
    uppercase(v) {
      return v.toUpperCase();
    },
  },
};

jails.register("form", form, dependencies);
jails.register("mask", mask, dependencies);
```

## Markup

Configure your markup and fields setting up rules matching with desired validators.

```html
<form data-component="form">
  <div class="form-group">
    <label>Name:</label>
    <input
      data-component="mask"
      type="text"
      name="user"
      v-value="{{form.user.value}}"
      data-mask="uppercase"
    />
  </div>
</form>
```
