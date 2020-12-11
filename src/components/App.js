import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './Login';
import Admin from './Admin';
import Labour  from './Labour';
import Specialist from './Specialist';
import AdminSpecialistAdd from './adminpage/AdminSpecialistAdd'
import AdminSpecialistDelete from './adminpage/AdminSpecialistDelete'
import AdminSpecialistUpdate from './adminpage/AdminSpecialistUpdate'
import AdminPageLabourAdd from './adminpage/AdminPageLabourAdd'
import AdminPageLabourDelete from './adminpage/AdminPageLabourDelete'
import AdminPageLabourUpdate from './adminpage/AdminPageLabourUpdate'
import AdminPageWorksiteAdd from './adminpage/AdminPageWorksiteAdd'
import AdminPageWorksiteDelete from './adminpage/AdminPageWorksiteDelete'
import { ThemeProvider } from '@material-ui/core';
import theme from './ui/Theme'
import Chat from './Chat';
import View from './View';


function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Switch>
                  <Route exact path="/" component={Login}  />
                  <Route path="/admin" component={Admin} />
                  <Route path="/specialist" component={Specialist} />
                  <Route path="/labour" component={Labour} />
                  <Route path="/adminspecialistadd" component={AdminSpecialistAdd} />
                  <Route path="/adminspecialistupdate" component={AdminSpecialistUpdate} />
                  <Route path="/adminspecialistdelete" component={AdminSpecialistDelete} />
                  <Route path="/adminlabouradd" component={AdminPageLabourAdd} />
                  <Route path="/adminlabourdelete" component={AdminPageLabourDelete} />
                  <Route path="/adminlabourupdate" component={AdminPageLabourUpdate} />
                  <Route path="/adminworksiteadd" component={AdminPageWorksiteAdd} />
                  <Route path="/adminworksitedelete" component={AdminPageWorksiteDelete} />
                  <Route path="/Chat" component={Chat}/> 
                  <Route path="/View" component={View}/>

                  
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;
