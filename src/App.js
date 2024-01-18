import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import EventPage from './pages/EventPage/EventPage'
import Footer from './components/Footer/Footer';
import links from './config/links';
import { TotalPagesProvider } from './context/TotalPagesContext';

function App() {
  return (
    <TotalPagesProvider apiEndpoint={links.apiEndpoint}>
      <div className="App">
        <Header />
        <EventPage />
        <Footer />
      </div>
    </TotalPagesProvider>
  );
}

export default App;