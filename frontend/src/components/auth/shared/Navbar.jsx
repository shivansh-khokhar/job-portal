import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Avatar, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";
import { LogOut, User2 } from "lucide-react";
import { useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "sonner";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
<<<<<<< HEAD:frontend/src/components/auth/shared/Navbar.jsx
  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loggoutHandler = async()=>{
    try{
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true})
      if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message)
      }
    }catch(error){
      console.log(error)
      toast.error(error.response.data.message);
    }
  }
=======
  const { user } = useSelector((store) => store.auth);
>>>>>>> 151f8df262e56102da5615aa5db3546214ccef30:frontend/src/components/shared/Navbar.jsx
  return (
    <div className="bg-white">
      <div className="flex item-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#f83002]">Portal</span>
          </h1>
        </div>
        <div className="flex item-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <li>
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li>
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li>
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>
          {!user ? (
            <div className="flex items-center gap-2 ">
              <Button variant="outline">
                <Link to={"/login"}>Login</Link>{" "}
              </Button>
              <Button className="bg-[#6A38C2] hover:bg-[#5b30a6]">
                <Link to={"/signup"}>Signup</Link>{" "}
              </Button>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">
                      {user?.fullname}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col my-2 text-gray-600">
<<<<<<< HEAD:frontend/src/components/auth/shared/Navbar.jsx
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link"><Link to="/profile">View profile</Link></Button>
                  </div>
=======
                  {user && user.role === "student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User2 />
                      <Button variant="link">View profile</Button>
                    </div>
                  )}

>>>>>>> 151f8df262e56102da5615aa5db3546214ccef30:frontend/src/components/shared/Navbar.jsx
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button onClick={loggoutHandler} variant="link">Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
