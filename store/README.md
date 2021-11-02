# store

**A Simple, Agnostic and Isomorphic State Manager Container.**

Inspired by [Redux](https://github.com/reduxjs/redux) and [Elm Architecture](https://guide.elm-lang.org/architecture/).

It can be used for creating a **Single Source of Truth** container for your an application or as multiples local stores for you components aswell.

- It is agnostic, meaning that is compatible with any javascript framework.
- It is isomorphic, so you can test your store instances in node environment with no _browser dependency_.

## Usage

**example-store.js**

```js
import store from "jails.packages5/store";

const initialState = {
  name: "",
  items: [],
};

export default store(initialState, {
  SAVE(state, { name }) {
    return {
      name,
    };
  },
});
```

After exporting your store, you will be able to access all methods to handle states.

**my-app.js**

```js
import exampleStore from "./example-store.js";

// First way to retrieving data from Store, by subscribe.
exampleStore.subscribe((state, { action, payload }) => {
  console.log("Heyy, store changed!!", state, action, payload);
});

// Second way to retrieving data from Store, by waiting for some action being dispatched.
const { name, items } = await exampleStore.when("SAVE");

// Dispatches an action
exampleStore.dispatch("SAVE", { name: "That is not my name..." });

// Return the current state of the store
exampleStore.getState();
```

## Good to know

- The `dispatch` is asynchronous, it will await for the next browser's tick in order to execute code, so if you
  need to do some dom changes after the call, use `.then` Promise interface, as dispatch returns always a promise.
- You can call multiples `dispatch` inline, the store will batch all those calls and will trigger `callback` only once.
- Subscribers, callback and actions functions get the same parameters when store changes in the following format:
- `Function(state, { action, payload })`.
- The action's returned object will be **merged** with the current state, so you don't need to return the entire model in the action's functions.
