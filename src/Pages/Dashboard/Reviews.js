import React from 'react';
import { useForm } from "react-hook-form";
import useFirebase from '../../Hooks/useFirebase.js';


const Reviews = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const { user } = useFirebase();
  const onSubmit = (data) => {
    fetch("https://fathomless-falls-21661.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };
    return (
        <div>
      <h1>Add Your Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field mt-3 mb-3 w-25"
          name="name"
          placeholder="Your Name"
          value={user?.name}
          type="name"
          {...register("name", { required: true })}
        />
        <br />
        <input
          className="input-field mb-3 w-25"
          name="Description"
          placeholder="Write Your Comment"
          {...register("Description", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn-style mt-3"
          type="submit"
          value="Post Your Review"
        />
      </form>
    </div>
  );
};

export default Reviews;