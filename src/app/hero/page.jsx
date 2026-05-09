import { Button } from '@heroui/react';
import React from 'react';

const HeroKit = () => {
   return (
      <div className=" flex justify-center items-center h-screen gap-3">
         <Button variant="primary">Primary</Button>
         <Button variant="secondary">secondary</Button>
         <Button variant="tertiary">tertiary</Button>
         <Button variant="ghost">ghost</Button>
         <Button variant="danger-soft">link</Button>
         <Button variant="danger">danger</Button>
      </div>
   );
};

export default HeroKit;
