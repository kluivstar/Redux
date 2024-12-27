import  CakeContainer from './components/CakeContainer'
import store from './redux/store'
import {Provider} from 'react-redux'
import HookCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import {UserContainer} from './components/UserContainer'

export const App = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          {/* <CakeContainer/>
          <HookCakeContainer/> 
          
          <NewCakeContainer/>
          
          <IceCreamContainer/> 
          <ItemContainer/>
          <ItemContainer cake/>
          */}
          <UserContainer/>
          
        </div>
      </Provider>
    </div>
  )
}

export default App
