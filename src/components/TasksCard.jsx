import React from 'react';
import { CircleDollar } from '@gravity-ui/icons';
import { Card, Link } from '@heroui/react';
const TasksCard = ({ tasks }) => {
   return (
      <div>
         <Card variant="secondary" className="border-2 border-gray-300 rounded-lg p-4">
            <CircleDollar
               aria-label="Dollar sign icon"
               className="text-primary size-6"
               role="img"
            />
            <Card.Header>
               <Card.Title>{tasks.title}</Card.Title>
               <Card.Description>{tasks.description}</Card.Description>
            </Card.Header>
            <Card.Footer>
               <Link
                  aria-label="Go to Acme Creator Hub (opens in new tab)"
                  href="https://heroui.com"
                  rel="noopener noreferrer"
                  target="_blank"
               >
                  Creator Hub
                  <Link.Icon aria-hidden="true" />
               </Link>
            </Card.Footer>
         </Card>
      </div>
   );
};

export default TasksCard;
