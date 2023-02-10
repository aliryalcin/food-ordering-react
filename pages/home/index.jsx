import Campaigns from '@/components/Campaigns';
import About from "../../components/About";
import Carousel from '@/components/Carousel';
import MenuWrapper from '@/components/product/MenuWrapper';
import Customers from "../../components/customers/Customers";
import React from 'react';
import Reservation from "../../components/Reservation";

const Index = () => {
  return (
    <React.Fragment>
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <Reservation />
      <Customers/>
    </React.Fragment>
    
  );
}

export default Index