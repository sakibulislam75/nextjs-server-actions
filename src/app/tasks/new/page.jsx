import { ListBox, Select } from '@heroui/react';
import { Plus } from '@gravity-ui/icons';
import { Button, Input, Label, TextField } from '@heroui/react';
import React from 'react';
import { actionTask } from '@/lib/action';

const NesTaskPage = () => {
   return (
      <div className="w-7/12 mx-auto my-15 ">
         <h2 className="text-4xl font-bold my-4">Add Task</h2>
         <form action={actionTask} className="flex flex-col gap-4 ">
            <TextField className="w-full">
               <label>Title</label>
               <Input name="title" placeholder="Enter task title" />
            </TextField>

            <Select name="category" placeholder="Select one">
               <Label>Category</Label>
               <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
               </Select.Trigger>
               <Select.Popover>
                  <ListBox>
                     <ListBox.Item id="frontend" textValue="frontend">
                        Frontend
                        <ListBox.ItemIndicator />
                     </ListBox.Item>

                     <ListBox.Item id="backend" textValue="backend">
                        Backend
                        <ListBox.ItemIndicator />
                     </ListBox.Item>
                     <ListBox.Item id="fullstack" textValue="fullstack">
                        Fullstack
                        <ListBox.ItemIndicator />
                     </ListBox.Item>
                  </ListBox>
               </Select.Popover>
            </Select>

            <Select name="priority" placeholder="Select one">
               <Label>Priority</Label>

               <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
               </Select.Trigger>

               <Select.Popover>
                  <ListBox>
                     <ListBox.Item id="high" textValue="high">
                        High
                        <ListBox.ItemIndicator />
                     </ListBox.Item>

                     <ListBox.Item id="medium" textValue="medium">
                        Medium
                        <ListBox.ItemIndicator />
                     </ListBox.Item>

                     <ListBox.Item id="low" textValue="low">
                        Low
                        <ListBox.ItemIndicator />
                     </ListBox.Item>
                  </ListBox>
               </Select.Popover>
            </Select>

            <Select name="status" placeholder="Select one">
               <Label>Status</Label>

               <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
               </Select.Trigger>

               <Select.Popover>
                  <ListBox>
                     <ListBox.Item id="todo" textValue="to-do">
                        To-Do
                        <ListBox.ItemIndicator />
                     </ListBox.Item>

                     <ListBox.Item id="inprogress" textValue="in-progress">
                        In Progress
                        <ListBox.ItemIndicator />
                     </ListBox.Item>

                     <ListBox.Item id="done" textValue="done">
                        Done
                        <ListBox.ItemIndicator />
                     </ListBox.Item>
                  </ListBox>
               </Select.Popover>
            </Select>
            <TextField className="w-full">
               <Label>Deadline</Label>
               <Input name="deadline" type="date" />
            </TextField>

            <Button slot="close" variant="secondary">
               Cancel
            </Button>

            <Button slot="close" type="submit">
               Submit Task
            </Button>
         </form>
      </div>
   );
};

export default NesTaskPage;
