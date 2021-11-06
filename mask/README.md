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
      type="text"
      name="user"
      v-value="{{form.user.value}}"
      data-mask="uppercase"
    />
  </div>
</form>
```

<br />
<br />

# Event Emitting

## Form Component

The `form` component will fire 2 events:

- `form:submit` : Only fired when submitting form and it's **valid**.
- `form:submit:invalid` : Only fired when submitting form and it's **invalid**.

### Form Model

- `isValid` : Boolean that's true when form is valid and false when it's not, usefull for actions like disabling buttons when form is invalid.
- `form` : Data containing all state for each field elements.
- `errors` : All errors fields with messages

<br />

Each field on `form` component has a model to be used inside template:

### Field Model

- `errors` : Containing a object with errors and messages.
- `isValid` : Boolean that's true when form is valid and false when it's not, usefull for actions like disabling buttons when form is invalid.
- `touched` : Boolean that will be true ff that field has been touched in user interaction.
- `value` : The current value of that field. This variable will change after as user changes the input/select element.

## Setting dynamic values

You can fill all data in your form dynamically using the exposed function called `setFields` on Form component.

```js
import { getSomething } from "data/services/some-service";

export default function myForm({ main, get }) {
  main((_) => [fetchData]);

  const fetchData = async () => {
    const form = get("form");
    const data = await getSomething();
    form("setFields", {
      username: "My user",
      email: "myuser@email.com",
      gender: "female",
    });
  };
}
```

```html
<form data-component="myForm form">
  <input type="text" name="username" v-value="{{form.username.value}}" />
  <input type="text" name="email" v-value="{{form.email.value}}" />
  <input
    type="radio"
    name="gender"
    value="male"
    v-checked="{{form.gender.value == 'male'}}"
  />
  <input
    type="radio"
    name="gender"
    value="female"
    v-checked="{{form.gender.value == 'female'}}"
  />
</form>
```
