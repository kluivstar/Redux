import { useSelector } from "react-redux";

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.numOfCakes)
    return (
      <div>
          <h2 class=""> Number of cakes = {numOfCakes}</h2>
          <button type="" class="">Buy Cake</button>
      </div>
    )
}

export default HooksCakeContainer
