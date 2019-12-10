import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import Tracks from '../screens/Tracks'
const Routes = () => (

<Switch>
    <Route exact path="/" render={Home}/>
    <Route exact path="/tracks" render={Tracks}/>
</Switch>

)

export default Routes