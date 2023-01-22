import { LeftMenuBar } from './components/leftMenuBar'
import { RightMenuBar } from './components/rightMenuBar'
import { GlobalStyled } from './globalStyled'
import { MainStyled } from './globalStyled'
import { BackGround } from './components/bk'
import { Cape } from './components/Cape/index'
import { About } from './components/About'
import { Experince } from './components/Experince'
import { Depositions } from './components/Depositions'
 
function App() {

  return (
    <GlobalStyled>   
      <BackGround/>
      <RightMenuBar/>
      <LeftMenuBar/>
      <Cape/>
      <MainStyled>
        <About/>
        <Experince/>
        <Depositions/>
      </MainStyled>
      
    </GlobalStyled>
  )
}

export default App
