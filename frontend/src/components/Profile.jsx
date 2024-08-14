import {React, useState} from "react";
import Navbar from "./auth/shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "@radix-ui/react-label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

const isHaveResume = true;

const Profile = () => {
    const [open, setOpen] = useState(false);
    const {user} = useSelector(store=>store.auth);
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="data:image/jpeg;base64,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"></AvatarImage>
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={()=>setOpen(true)} className="text-right" varient="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div className="my-5">
            <h1>Skills</h1>
            <div className="flex items-center gap-1">
            {
               user?.profile?.skills.length != 0 ? user?.profile?.skills.map((item , index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
            }
            </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label className="text-md font-bold">Resume</Label>
            {
                isHaveResume ? <a target="blank" href={user?.profile?.resume} className="text-blue-500 w-full hover:underline cursor-pointer">{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
            }

        </div>
      </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          <AppliedJobTable/>

        </div>
        <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Profile;
