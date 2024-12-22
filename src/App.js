import { CakeContainer } from './components/CakeContainer'
import store from './redux/store'
import {Provider} from 'react-redux'


export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CakeContainer/>
      </Provider>
    </div>
  )
}

export default App
