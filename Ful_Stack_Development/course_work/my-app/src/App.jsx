import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import UserCard from './components/UserCard';
import Counter from './components/Counter';
import NameInput from './components/NameInput';
import Profile from './components/Profile';

function App() {
  const name = 'Sagwa';
  //const [state, setState] = React.useState(initialValue); 
  //State: stores current value
  //useState: a function to update the value
  //useState(initialValue): initializes the value of the state
  return (   
    <>
          <Header/>
          <p> Hello People, the class is nice</p>
          <Footer/>
          <UserCard name="Maria Sagwa" email= "maria.sagwa@strathmore.edu"/>.
          <Counter/>
          <NameInput/>
          <Profile/>
            
    </>
  );
}

export default App