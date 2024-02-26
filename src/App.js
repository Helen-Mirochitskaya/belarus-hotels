import { data } from './data';
import { useState } from 'react';
import './App.css';

function App() {

  const [hotel, setHotel] = useState(0);
  const {id, name, description, image, source} = data[hotel];

  const previousHotel = () => {
    setHotel ( (hotel => {
      hotel --;
      if (hotel <0) {
        return data.length-1}
      return hotel;
    }))
  }

  const nextHotel = () => {
    setHotel ( (hotel => {
      hotel ++;
      if (hotel > data.length-1) {
        hotel=0;   }
      return hotel;
    }))
  }
  


  return(
    <div>
    <div className='container'>
      <h1>  3 best places to relax in Belarus </h1>
    </div>

    <div className='container'>
      <h2>
        {id}.  {name}
      </h2>
    </div>

    <div className='container'>
      <img src={image} width='600px' alt='hotel' />
    </div>

    <div className='container'>
      <p> {description} </p>
    </div>

    <div className='container'>
      <p> {source} </p>
    </div>

    <div className='container'>
      <div className='btn'>
      <button onClick={previousHotel}> Previous </button>
      <button onClick={nextHotel}> Next </button>
    </div>
    </div>

    </div>
  )
}

export default App;
