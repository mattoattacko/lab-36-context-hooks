## Lab 36 - Context and Hooks

- [Back End](https://codesandbox.io/s/ol6lynpj66)
- [Front End](https://ol6lynpj66.codesandbox.io/)
- [Repo](https://github.com/mattoattacko/lab-36-context-hooks)

### Modules

#### `index.js`

###### `CLASS Main'

- exports our app Component

#### `app.js`

###### `CLASS App'

- exports the { count, increment, decrement } Components

#### `settings/counter-context.js`

###### `CLASS SettingsProvider'

- exports the `SettingsContext.Provider` Component

###### `constructor()`

- needs to import props, and allows us to set our states { count, increment, decrement }

###### `increment()`

- import event and allows us to set our state via `this.state.count`

###### `decrement()`

- import event and allows us to set our state via `this.state.count`

#### `components/counter/counter.js`

###### `CLASS Counter`

- exports the `SettingsContext.Consumer` that contains the `context.count` span

#### `components/decrementer/decrementer.js`

###### `CLASS Decrementer`

- exports the `SettingsContext.Consumer` that contains the `decrementer` button

#### `components/decrementer/incrementer.js`

###### `CLASS Incrementer`

- exports `SettingsContext.Consumer` that contains the `incrementer` button

#### Tests

- test results go here

#### UML

[Context and Hooks UML](xxx.JPG)
