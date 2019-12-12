import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
// import Landing from '../screens/Landing'
import SignIn from '../screens/SignIn'
import SignOut from '../screens/SignOut'
import SignUp from '../screens/SignUp'
import Tracks from '../screens/Tracks'
import MyTracks from '../screens/MyTracks'
// import ChangePassword from '../screens/ChangePassword'
// import Item from '../screens/Item'
// import Items from '../screens/Items'
// import ItemCreate from '../screens/ItemCreate'
// import ItemEdit from '../screens/ItemEdit'
import AuthenticatedRoute from './AuthenticatedRoute'

const Routes = ({ user, setUser, clearUser
  // , addItem, getItems 
}) => (

  <Switch>
    <Route
      exact
      path="/"
      render={props => 
        // (user ? <Home /> : <Landing {...props} />)
        <Home />
      }
    />
    <Route
      path="/sign-in"
      render={props => <SignIn {...props} setUser={setUser} />}
    />
    <Route
      path="/sign-up"
      render={props => <SignUp {...props} setUser={setUser} />}
    />
    <Route
      exact
      path="/sign-out"
      render={props => <SignOut {...props} clearUser={clearUser} user={user} />}
    />
    <Route exact 
    path="/tracks" 
    render={props => <Tracks {...props} />}
    />
    <AuthenticatedRoute
      exact
      path="/my-tracks"
      user={user}
      render={props => <MyTracks {...props} user={user} /> }
    />
    {/* <AuthenticatedRoute
      exact
      path="/change-password"
      user={user}
      render={props => <ChangePassword {...props} user={user} />}
    />
    <AuthenticatedRoute
      exact
      path="/items"
      user={user}
      render={props => <Items {...props} user={user} />}
    />
    <AuthenticatedRoute
      exact
      path="/items/:id"
      user={user}
      getItems={getItems}
      render={props => <Item {...props} />}
    />
    <AuthenticatedRoute
      exact
      user={user}
      path="/items/:id/edit"
      getItems={getItems}
      render={props => <ItemEdit {...props} />}
    />
    <AuthenticatedRoute
      user={user}
      path="/create"
      render={props => <ItemCreate {...props} addItem={addItem} />}
    /> */}
  </Switch>
)

export default Routes
