'use client';
import { ListBox, Select } from '@heroui/react';
import { Plus } from '@gravity-ui/icons';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';

export function AddTasks({ createATask }) {
   return (
      <Modal>
         <Button variant="secondary" className="text-sm">
            Add-Tasks
         </Button>
         <Modal.Backdrop>
            <Modal.Container placement="auto">
               <Modal.Dialog className="sm:max-w-md">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                     <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                        <Plus className="size-5" />
                     </Modal.Icon>
                     <Modal.Heading>Add Task</Modal.Heading>
                  </Modal.Header>
                  <Modal.Body className="p-6 ">
                     <Surface variant="default">
                        <form action={createATask} className="flex flex-col gap-4">
                           <TextField className="w-full">
                              <Label>Title</Label>
                              <Input name="title" placeholder="Enter task title" />
                           </TextField>

                           <Select name="category" className="w-[256px]" placeholder="Select one">
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

                           <TextField className="w-full">
                              <Label>Priority</Label>
                              <Input name="priority" placeholder="High / Medium / Low" />
                           </TextField>

                           <TextField className="w-full">
                              <Label>Status</Label>
                              <Input name="status" placeholder="In Progress / Done / Todo" />
                           </TextField>

                           <TextField className="w-full">
                              <Label>Deadline</Label>
                              <Input name="deadline" type="date" />
                           </TextField>

                           <Modal.Footer>
                              <Button slot="close" variant="secondary">
                                 Cancel
                              </Button>

                              <Button slot="close" type="submit">
                                 Submit Task
                              </Button>
                           </Modal.Footer>
                        </form>
                     </Surface>
                  </Modal.Body>
               </Modal.Dialog>
            </Modal.Container>
         </Modal.Backdrop>
      </Modal>
   );
}
