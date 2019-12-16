import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import SignOut from '../screens/SignOut'
import SignUp from '../screens/SignUp'
import Tracks from '../screens/Tracks'
import MyTracks from '../screens/MyTracks'
import Track from '../screens/Track'
import CreateTrack from '../screens/CreateTrack'
import EditTrack from '../screens/EditTrack'
import AuthenticatedRoute from './AuthenticatedRoute'

const Routes = ({ getTracks, user, setUser, clearUser, addTrack, tracks
}) => (

    <Switch>
      <Route
        exact
        path="/"
        render={props =>
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
        render={props => <Tracks getTracks={getTracks} tracks={tracks} {...props} />}
      />
      <Route
        exact path="/tracks/track/:id"
        render={props => <Track {...props} />}
      />
      <Route exact
        path="/tracks"
        render={props => <Tracks tracks={tracks} {...props} />}
      />
      <AuthenticatedRoute
        exact
        path="/my-tracks"
        user={user}
        render={props => <MyTracks tracks={tracks} {...props} user={user} />}
      />
      <AuthenticatedRoute
        exact path="/my-tracks/track/:id"
        user={user}
        render={props => <Track {...props} />}
      />
      <AuthenticatedRoute
        exact
        path="/create-tracks"
        user={user}
        render={props => <CreateTrack addTrack={addTrack} {...props} user={user} />}
      />
      <AuthenticatedRoute
        exact
        path="/tracks/:id/edit"
        user={user}
        render={props => <EditTrack {...props} user={user} />}
      />
    </Switch>
  )

export default Routes
