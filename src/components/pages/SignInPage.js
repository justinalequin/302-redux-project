import React from "react";
import Layout from "../layout/Layout";
import { useDispatch } from "react-redux";
import { SIGN_IN_ACTION } from "../../reduxStore";
import { useNavigate } from "react-router";
import { fetchUser } from "../../userFetchData";

function SignInPage() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function userLogin(e) {
    e.preventDefault();
    fetchUser()
      .then((data) => {
        dispatch({
          type: SIGN_IN_ACTION,
          payload: data,
        });
        navigate("/");
      })
      .catch((e) => console.log(e.message));
  }

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#723BC4",
            color: "#8DC43B",
            width: "50vw",
            padding: "2px",
            borderRadius: "4px",
            marginTop: "12px",
          }}
        >
          <h1>SIGN IN</h1>
        </div>

        <div
          style={{
            marginTop: "22px",
            backgroundColor: "#723BC4",
            color: "#8DC43B",
            width: " 50vw",
            padding: "7px",
            borderRadius: "3px",
          }}
        >
          <div style={{ margin: "5px" }}>
            <h4 style={{ marginBottom: "4px" }}>Username: </h4>
            <input type="text" placeholder="Please Enter Username"></input>
          </div>
          <div style={{ margin: "5px" }}>
            <h4 style={{ marginBottom: "4px" }}>Password: </h4>
            <input type="text" placeholder="Please Enter Password"></input>
          </div>
          <button
            style={{
              margin: "12px",
              backgroundColor: "#8DC43B",
              color: "#723BC4",
              borderRadius: "4px",
              border: "none",
              fontWeight: "bold",
              padding: "2px",
            }}
            onClick={userLogin}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default SignInPage;
