import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const user = useSelector((state) => state.user);

  const Greeting = () => {
    var myDate = new Date();
    var hours = myDate.getHours();
    var greet;

    if (hours < 12) greet = "morning";
    else if (hours >= 12 && hours <= 17) greet = "afternoon";
    else if (hours >= 17 && hours <= 24) greet = "evening";

    return <span>Good {greet}</span>;
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "#8DC43B",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h2>Home</h2>
        </Link>

        {!user ? (
          <Link to="/signin" style={{ textDecoration: "none", color: "white" }}>
            <h2>Sign In</h2>
          </Link>
        ) : (
          <h2 style={{ color: "#723BC4" }}>
            {Greeting()} {user.firstName}!{" "}
          </h2>
        )}
      </div>
    </div>
  );
}

export default Header;
