// TODO: Add firebase auth test page
// TODO: Add automatic redirect to /login OR /projects

import ButtonSmall from "../components/ButtonSmall"
import Input from "../components/UI/Input"

const Home = () => {
  return (
    <form>
      <Input type="text"/>
      <Input type="password"/>
      <ButtonSmall text="Submit"/>
    </form>
  )
}

export default Home
