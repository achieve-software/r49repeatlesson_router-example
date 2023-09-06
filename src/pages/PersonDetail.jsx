

import {useLocation, useParams} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import React, { useEffect, useState } from "react";
const PersonDetail = () => {


    // const {state:person} = useLocation()
    // const navigate= useNavigate()
    const {id}= useParams()
    const [person, setPerson] = useState({});
    const navigate= useNavigate()
        

  
    
      const getPerson = () => {
        fetch(`https://reqres.in/api/users/${id}`)
          .then((res) => res.json())
          .then((data) => setPerson(data.data))
          .catch((err) => console.log(err));
      };
      useEffect(() => {
        getPerson();
      }, []);

    return (
        <div>
          <div className="container text-center">
            <h3>
              {person?.first_name} {person?.last_name}
            </h3>
            <img className="rounded" src={person?.avatar} alt="" />
            <p>{person?.email}</p>
            <div>
              <button
                onClick={() => navigate("/")}
                className="btn btn-success me-2"
              >
                Go Home
              </button>
              <button onClick={() => navigate(-1)} className="btn btn-warning">
                Go Back
              </button>
            </div>
          </div>
        </div>
      );
}

export default PersonDetail