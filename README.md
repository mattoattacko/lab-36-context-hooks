## Lab 36 - Context and Hooks

- [Back End](https://codesandbox.io/s/ol6lynpj66)
- [Front End](https://ol6lynpj66.codesandbox.io/)
- [Repo](https://github.com/mattoattacko/lab-36-context-hooks)

### Modules

#### `index.js`

###### `CLASS Main'

--> App Component

#### `app.js`

###### `CLASS App'

--> Decrementer Component

--> Counter Component

--> Incrementer Component

#### `settings/counter-context.js`

###### `CLASS SettingsProvider'

--> SettingsContext.Provider Component

###### `constructor()`

<-- props

Sets the state { count, increment, decrement }

###### `increment()`

<-- event

Sets: this.state.count

###### `decrement()`

<-- event

Sets: this.state.count

#### `components/counter/counter.js`

###### `CLASS Counter`

--> SettingsContext.Consumer which wraps the context.count span

#### `components/decrementer/decrementer.js`

###### `CLASS Decrementer`

--> SettingsContext.Consumer which wraps the decrementer button

#### `components/decrementer/incrementer.js`

###### `CLASS Incrementer`

--> SettingsContext.Consumer which wraps the incrementer button

#### Tests

I asserted that the tags that are supposed to render on each component are actually recognized by the application. I am having trouble testing components that are wrapped in <SettingsContext.Consumer>. I have done a lot of reasearch on it and found a [good article](https://medium.com/@ryandrewjohnson/unit-testing-components-using-reacts-new-context-api-4a5219f4b3fe) but can't get it to work.

#### UML

[Link to UML](assets/lab35-uml.jpg)
