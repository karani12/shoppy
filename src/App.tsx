import React from 'react';
import logo from './logo.svg';
import Button from './components/common/Button';
import Card from './components/widgets/Card';
import NavBar from './components/sections/NavBar';
import Footer from './components/sections/Footer';
import Carousel from './components/common/Carousel';
// @ts-ignore
import {StateProvider } from './global'
import './App.css';

function App() {
  return (
    <StateProvider initialState={''} reducer=''>

    <div className="App">
      <NavBar />
      <Button name="Hello" type="primary" />
      <Card
        title="Nike Air Max"
        description="The Nike Air Max 270 React ENG combines the iconic Air Max 270 with React foam for a lightweight, bouncy ride."
        image="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/3b9b8b1a-1b1d-4b1f-9b1f-8b2b2b2b2b2b/air-max-270-react-eng-shoe-1JZxJx.jpg"
        category={["Nike", "Shoes"]}
        tag={"New"}
      />
      <Carousel />
      <Footer/>

      
    </div>
    </StateProvider>

  );
}

export default App;
