import TasksCard from '@/components/TasksCard';
import { getTasks } from '@/lib/tasks';
import React from 'react';

const TaskPages = async () => {
   const data = await getTasks();
   return (
      <>
         <div className="w-10/12 mx-auto ">
            <div>
               <h1 className="text-3xl font-bold mt-8">Tasks: {data.length}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
               {data.map((task) => (
                  <TasksCard tasks={task} key={task.id}></TasksCard>
               ))}
            </div>
         </div>
      </>
   );
};

export default TaskPages;
