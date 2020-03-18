import React from 'react';
import Button from '@material-ui/core/Button'
import Motorcycle from '@material-ui/icons/Motorcycle'
import Save from '@material-ui/icons/Save'
import AlarmAdd from '@material-ui/icons/AlarmAdd'
import DiscFull from '@material-ui/icons/DiscFull'
import Fireplace from '@material-ui/icons/Fireplace'
import Switch from '@material-ui/core/Switch'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

const meuTema = createMuiTheme({
  primary:{
    main: '#ff0000'
  },
  secondary:{
    main:'#00ff00'
  }
})

function App() {
  return (
    <MuiThemeProvider theme={meuTema}>
      <Button size="medium">Large</Button>
      <Button size="small">Small</Button>
      <Button variant="fab">+</Button>
      <hr/>
      <Motorcycle/>
      <Save/>
      <AlarmAdd/>
      <DiscFull/>
      <Fireplace/>
      <hr />
      <Switch color="primary"/>
      <Switch color="secondary"/>
    </MuiThemeProvider>
  );
}

export default App;
