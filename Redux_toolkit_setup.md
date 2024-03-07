# Redux Implementing Steps

> *create a 'app' directory in src folder* 


#### 1. Configure Store

*create a store.js file in that app directory you created* 

```javaScript
const { configureStore } = require("@reduxjs/toolkit")

export const store = configureStore({
  reducer: {

  }
})
```

#### 2. Import Store in index.js 

```javaScript
import { store } from './app/store'
import { Provider } from 'react-redux'

  <Provider store={store}>
    <App />
  </Provider>
```
#### 3. Create a 'features' directory in src

> *this is the place your should implement redux slices (aka redux state objects)
> slice is collection of reducer logics and actions
> ex: counter app*

#### 4. Create a redux slice

```javaScript
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  count: 0
}

// Redux toolkit uses immer under the hood that's why
// it is possible to write state mutate like code within create slice 

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {  // this will also create 'action creators' automatically
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
  }
})

// destructure 'action creators' from counterSlice and export
export const { increment, decrement } = counterSlice.actions

// export full reducer
export default counterSlice.reducer
```

#### 5. Import created reducers to store

```javaScript
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
```

#### 6. Use each reducers in components 

```javaScript
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  )
}
export default Counter
```



