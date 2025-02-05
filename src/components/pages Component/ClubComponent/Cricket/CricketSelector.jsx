import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CricketSelector() {
  const memberlist = [
      { name: "David Warner", dept: "EEE", batch: "70", id: "202411070001", image: "https://picsum.photos/100/100?random=11" },
      { name: "Steve Smith", dept: "ME", batch: "69", id: "202411069002", image: "https://picsum.photos/100/100?random=12" },
      { name: "Kane Williamson", dept: "CIVIL", batch: "71", id: "202411071003", image: "https://picsum.photos/100/100?random=13" },
      { name: "Joe Root", dept: "CSE", batch: "68", id: "202411068004", image: "https://picsum.photos/100/100?random=14" },
      { name: "Virat Kohli", dept: "BBA", batch: "72", id: "202411072005", image: "https://picsum.photos/100/100?random=15" },
      { name: "Ben Stokes", dept: "EEE", batch: "67", id: "202411067006", image: "https://picsum.photos/100/100?random=16" },
 ];

  return (
    <div className='mt-5 overflow-x-auto mx-1 text-slate-800'> 
      <div className='flex justify-between items-center gap-4'>
        <p className='text-xs md:text-sm'>{memberlist.length} students</p>
        <input type='text' className='w-[40%] md:h-10 h-8 rounded-full pl-4 focus:ring-0 outline-none' placeholder='Search here'/>
        <button className='md:px-4 px-2 py-2 bg-red-500 rounded-3xl text-xs text-white'>Add member</button>
      </div>

      <Table>
        <TableCaption>A list of cricket team selectors.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Dept</TableHead>
            <TableHead>Update & Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {memberlist.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                <img src={item.image} alt={item.name} className='w-16 h-16 object-cover rounded-full border' />
              </TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.dept}</TableCell>
              <TableCell className='flex gap-2 mt-5'>
                <button className='px-2 md:px-4 py-1 rounded-2xl text-white bg-red-400 hover:bg-red-500'>Delete</button>
                <button className='px-2 md:px-4 py-1 rounded-2xl text-white bg-green-600 hover:bg-green-800'>Update</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
