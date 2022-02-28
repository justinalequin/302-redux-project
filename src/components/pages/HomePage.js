import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { TWEET_ACTION } from "../../reduxStore";
import Layout from "../layout/Layout";

function Home() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.tweets);
  const [userTweet, setUserTweet] = useState("");

  function handleTweetSubmit() {
    if (userTweet.length > 0) {
      dispatch({
        type: TWEET_ACTION,
        payload: {
          content: userTweet,
          user: user.firstName,
        },
      });
      setUserTweet("");
    }
  }

  function resetAll() {
    window.localStorage.clear();
    window.location.reload();
  }

  return (
    <Layout>
      <div
        style={{
          paddingTop: "12px",
          width: "95vw",
          margin: "auto",
        }}
      >
        <div
          style={{
            backgroundColor: "#723BC4",
            color: "#8DC43B",
            width: "50vw",
            padding: "2px",
            margin: "auto",
            borderRadius: "4px",
          }}
        >
          <h1>Home Page</h1>
        </div>

        {user ? (
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "#8DC43B",
              paddingBottom: "22px",
              borderRadius: "4px",
            }}
          >
            <div>
              <h2 style={{ color: "#723BC4" }}>POST AWAY!</h2>
            </div>
            <div
              style={{
                display: "flex",
                margin: "10px auto",
                alignContent: "center",
                border: "solid 4px #723BC4",
                borderRadius: "4px",
              }}
            >
              <textarea
                style={{
                  width: "69vw",
                  border: "none",
                  fontFamily: "Roboto, sans-serif",
                  fontSize: "20px",
                }}
                name="text-input"
                id="text"
                onChange={(e) => setUserTweet(e.target.value)}
                value={userTweet}
              ></textarea>
              <button
                style={{
                  backgroundColor: "#723BC4",
                  borderRadius: "4px",
                  border: "none",
                  color: "#8DC43B",
                  fontWeight: "bold",
                }}
                onClick={() => handleTweetSubmit()}
              >
                SUBMIT
              </button>
            </div>
            <div
              style={{
                width: "80vw",
                margin: "auto",
                padding: "12px",
                borderRadius: "2px",
                marginBottom: "22px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {tweets
                ? tweets.map((tweet, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          border: "1px solid gray",
                          width: "60vw",
                          margin: "2px",
                          padding: "12px",
                          textAlign: "left",
                          borderRadius: "4px",
                          backgroundColor: "#723BC4",
                          borderWidth: "4px",
                          borderStyle: "solid",
                          bordeImage:
                            "linear-gradient(to right, darkblue, darkorchid) 1",
                          fontSize: "px",
                        }}
                      >
                        <div style={{ margin: "0" }}>
                          <h4
                            style={{
                              margin: "0",
                              color: "white",
                              textShadow:
                                "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
                            }}
                          >
                            {tweet.user} -
                          </h4>
                        </div>
                        <div style={{ paddingLeft: "10%" }}>
                          <h4
                            style={{
                              color: "white",
                            }}
                          >
                            {tweet.content}
                          </h4>
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div>
              <button
                onClick={() => resetAll()}
                style={{
                  backgroundColor: "#723BC4",
                  color: "#8DC43B",
                  width: "50vw",
                  padding: "2px",
                  margin: "auto",
                  borderRadius: "4px",
                }}
              >
                <h3>RESET ALL</h3>
              </button>
            </div>
          </div>
        ) : (
          <div>
            <Link to="/signin" style={{ textDecoration: "none" }}>
              <h2>Please Sign In...</h2>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Home;
