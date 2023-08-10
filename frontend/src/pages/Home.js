import React from 'react';
import Navbar from '../components/navbar';
import Carousel from '../components/carousel';
import Card from '../components/card';
import Footer from '../components/footer';

function Home() {

   const numberOfCards=8;
   const generateCards=()=>{
    const cards=[]
    for(let i=0;i<numberOfCards;i++){
      cards.push(<Card key={i}/>)
    }
    return cards
   }
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className='d-flex flex-wrap justify-content-center'>
        {generateCards()}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
