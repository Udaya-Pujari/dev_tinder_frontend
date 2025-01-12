// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const Usercards = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { firstName, lastName, about, age, gender } = user;
  console.log("from prop---->", user);
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl">
        <figure>
          <img className="h-64 w-96" src={user.photoUrl} alt="photo url" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          {age && gender && <p>{age + " " + gender}</p>}
          <p>{about}</p>
          <div className="card-actions justify-center my-4">
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Usercards;
