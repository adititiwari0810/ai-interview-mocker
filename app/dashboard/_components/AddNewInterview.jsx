 "use client"
 import { Button} from "../../../components/ui/button.jsx";
 import React, { useState } from "react";
//  import Dialog from "../../../components/ui/dialog";
 import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../../components/ui/dialog.jsx";
  import { Input } from "../../../components/ui/input.jsx";
  import { Textarea } from "../../../components/ui/textarea.jsx";
  
 
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
          
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                <DialogTitle className="text-2xl">Ready For Your Mock Interview?</DialogTitle>
                <DialogDescription>
                    <div> 
                      
                      <h2>Tell us about the job role,your skills,and experience</h2>
                      <div className="mt-7 my-3">
                        <label>Job Role/Job Position</label>
                        <Input
                      className="mt-1"
                      placeholder="Ex. Full stack Developer"
                      required
                      onChange={(e) => setJobPosition(e.target.value)}
                    />
                        
                      </div>
                      <div className="my-5">
                    <label>
                      Job Description/ Tech stack (In Short)
                    </label>
                    <Textarea
                      className="placeholder-opacity-50"
                      placeholder="Ex. React, Angular, Nodejs, Mysql, Nosql, Python"
                      required
                      onChange={(e) => setJobDesc(e.target.value)}
                    />
                  </div>
                  <div className="my-5">
                    <label className="text-black">Years of Experience</label>
                    <Input
                      className="mt-1"
                      placeholder="Ex. 5"
                      max="50"
                      type="number"
                      required
                      onChange={(e) => setJobExperience(e.target.value)}
                    />
                  </div>

                    </div>
                    <div className='flex gap-5 justify-end'>
                    <Button variant="ghost" onClick={()=>setOpenDailog(false)}>Cancel</Button>
                    <Button>Start Interview</Button>
                    </div>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
            </Dialog>

     </div>
   )
 }
 
 export default AddNewInterview;