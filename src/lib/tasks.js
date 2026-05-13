import tasks from '../data/tasks.json';
export const getTasks = async () => {
   return tasks;
};

// এখানে newTask parameter হিসেবে এসেছে, যেখানে form থেকে আসা data receive হবে। newTask এর জায়গায় যেকোনো valid variable name ব্যবহার করা যাবে, তবে code সহজে বুঝার জন্য meaningful নাম যেমন newTask ব্যবহার করা ভালো।
export const postTasks = async (newTask) => {
   newTask.id = tasks.length + 1;
   //unshift--add a new task in the beginning of the array push--add a new task in the end of the array
   tasks.unshift(newTask);
   return { Ok: true, message: 'Task created successfully' };
};
