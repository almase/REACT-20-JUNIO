import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom'

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'

import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <div className="container p-4">
            <Route path="/"  component={<NotesList />} />
            <Route path="/edit/:id" component={CreateNote } />
            <Route path="/create" component={CreateNote } />
            <Route path="/user" component={<CreateUser />} />
          </div>
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
