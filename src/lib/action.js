import { Heading1 } from '@gravity-ui/icons';
import { postTasks } from './tasks';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const createATask = async (formData) => {
   'use server';

   const newTask = Object.fromEntries(formData.entries());
   const res = await postTasks(newTask);
   /**`revalidatePath() শুধু নির্দিষ্ট route-এর cached data invalidate করে, পুরো cache না।--তারপর next request এ নতুন করে data fetch করে এবং fresh data দেখায়।`
    */
   if (res.Ok) {
      revalidatePath('/tasks');
   }
   return res; //এর কাজ হলো function এর result বাইরে পাঠানো, যাতে caller সেটা ব্যবহার করতে পারে।
};

export const actionTask = async (formData) => {
   'use server';
   const newTask = Object.fromEntries(formData.entries());
   const res = await postTasks(newTask);
   if (res.Ok) {
      revalidatePath('/tasks');
      redirect('/tasks');
   }
   return res;
};
