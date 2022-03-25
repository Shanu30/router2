import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Home } from "./Home";
import { Contacts } from "./Contacts";
import { Navbar } from "./Navbar";
import { Contact } from "./Contact";
import { NewContact } from "./NewContact";

export default function Dashboard() {
  return (
    <div className="App box">
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contacts" element={<Contacts />}>
      <Route index element={<NewContact />} />
        <Route path=":id" element={<Contact />} />
        <Route path="new" element={<NewContact />} />
     
      </Route>
    </Routes>
  </div>
  )
}
