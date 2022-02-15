import React, { Fragment, useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { deleteUser, getUsers, postUser } from "../actions/register";
import '../App.css';

const Register = () => {

  const allUsers = useSelector((state) => state.register.users);

  const [formData, setFormData] = useState({
    empid: '',
    name:'',
    email:'',
    mobile:'',
    location:''
  });

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUsers());
  },[dispatch, allUsers])


  const handleChange = (event) => {
    let name = event.target.name,
    value = event.target.value;
    setFormData({ ...formData, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData);
    dispatch(postUser(formData));
  }
  
  return(
    <Fragment>
      <h1>Register</h1>
      <hr />

      <div className="d-flex flex-row mb-3">
  <div className="p-2">
  <div className="p-2 ">
      <form> 
        <div className="form-group">
          <label htmlFor="empid">Employee ID</label>
          <input
            type="number"
            className="form-control"
            id="empid"
            name="empid"
            value={formData.empid}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Employee Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
    
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
  </div>
  <div className="p-2">
  <table className="table">
  <thead>
    <tr>
    <th scope="col">S.No</th>
      <th scope="col">Emp ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Location</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {allUsers.map((user, index) => (
    <tr>
      <th>{index + 1}</th>
      <th>{user.empid}</th>
      <th>{user.name}</th>
      <th>{user.email}</th>
      <th>{user.mobile}</th>
      <th>{user.location}</th>
      <th><button onClick={() => dispatch(deleteUser(user._id))}>Delete</button></th>
    </tr>
    ))}
  </tbody>
</table>
  </div>
</div>
    </Fragment>
  );
};

export default Register;
