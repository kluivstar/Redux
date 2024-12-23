import  CakeContainer from './components/CakeContainer'
import store from './redux/store'
import {Provider} from 'react-redux'
import HookCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <CakeContainer/>
          <HookCakeContainer/>
          <IceCreamContainer/>
        </div>
      </Provider>
    </div>
  )
}

export default App
