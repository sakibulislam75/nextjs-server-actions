import { AddTasks } from '@/components/AddTasks';
import TasksCard from '@/components/TasksCard';
import { createATask } from '@/lib/action';
import { getTasks } from '@/lib/tasks';
import React from 'react';
import NesTaskPage from './new/page';
import Link from 'next/link';
import { Button } from '@heroui/react';

const TaskPages = async () => {
   const data = await getTasks();
   return (
      <>
         <div className="w-10/12 mx-auto ">
            <div className="space-y-4">
               <h1 className="text-3xl font-bold mt-8 ">Tasks: {data.length}</h1>
               <AddTasks createATask={createATask} />
               <Link href="/tasks/new" className="ml-3.5">
                  <Button variant="outline">Add Task</Button>
               </Link>
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
