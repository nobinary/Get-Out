import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './../screens/Home'
import EditItem from './../screens/EditItem'
import CreateItem from './../screens/CreateItem'
import Adventures from '../screens/Adventures'



export const Routes = (props) => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/adventures' component={Adventures} />
            <Route exact path='/create' component={CreateItem} />
            <Route exact path='/edit/:item_id' component={EditItem} />
        </Switch>
    )
}