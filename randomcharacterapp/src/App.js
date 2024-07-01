
import NavBar from './nav';
import Head from './card';
import React from 'react'; 

function App() {
  return (
    <div className="App" style={{ 
      backgroundImage: `url(${'https://wallup.net/wp-content/uploads/2015/12/277426-Star_Wars_Episode_VII_-_The_Force_Awakens-Star_Wars.jpg'})` 
    }}>
      <NavBar />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Head className="shadow p-3 mb-5 bg-body-tertiary rounded" />
        <Head className="shadow p-3 mb-5 bg-body-tertiary rounded" />
        <Head className="shadow p-3 mb-5 bg-body-tertiary rounded" />
      </div>
    </div>
  );
}

export default App;

