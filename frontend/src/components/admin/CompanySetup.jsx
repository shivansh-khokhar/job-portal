import React from "react";
import Navbar from "../shared/Navbar";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const CompanySetup = () => {
  const [input, setinput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };
  const changefileHandler = (e) => {
    const file = e.target.files?.[0];
    setinput({ ...input, file });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);

    if(input.file){
        formData.append("file", input.file);
    }
    try {
        setLoading(true)
        const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`,formData,{
            headers:{
              'Content-Type':'multipart/form-data' 
            },
            withCredentials:true
        });
        if(res.data.success){
            toast.success(res.data.message);
            navigate("/admin/companies");
        }
    } catch (error) {
        console.log(error);
        toast.error("error.response.data.message");
    } finally{
        setLoading(false);
    }
  };

  return (
    <div>
      <Navbar>
        <div className="max-w-xl mx-auto my-10">
          <form onSubmit={submitHandler}>
            <div className="flex items-center gap-5 p-8">
              <Button
              onClick = {() => navigate("/admin/companies")  }
                variant="outline"
                className="flex items-center gap-2 text-gray-500 font-semibold"
              >
                <ArrowLeft />
                <span>Back</span>
              </Button>
              <h1 className="font-bold text-xl">Company Setup</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label>Company Name</label>
                <input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <label>Website</label>
                <input
                  type="text"
                  name="website"
                  value={input.website}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <label>Logo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={changefileHandler}
                />
              </div>
            </div>
            {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Update
            </Button>
          )}
          </form>
        </div>
      </Navbar>
    </div>
  );
};

export default CompanySetup;
