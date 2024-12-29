 "use client"
 import Button from "../../../components/ui/button.jsx";
 import React, { useState } from "react";
//  import Dialog from "@/components/ui/dialog";
 import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../../@/components/ui/dialog.jsx";
  
 
 function AddNewInterview() {
    const [openDailog,setOpenDailog] = useState(false);
   return (
     <div>
        <div className='p-10 border rounded-lg bg-secondary
        hover:scale-105 hover:shadow-md cursor-pointer transition-all'
        onClick={() => setOpenDailog(true)}
        >
        <h2 className='text-lg text-center'>+ Add New</h2>
        </div>
        <Dialog open={openDailog}>
          
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                    <Button>Cancel</Button>
                    <Button>Start Interview</Button>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>

     </div>
   )
 }
 
 export default AddNewInterview;