import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Profile() {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <>
      <Header></Header>
      {email ? (
        <>
          <h1 style={{ textAlign: "center", marginTop: 10 }}>Profile</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <img
              src="profile.jpg"
              alt="profile"
              style={{ width: 100, borderRadius: "50%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Name :{name}</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Email :{email}</h1>
          </div>
        </>
      ) : (
        <h1 style={{ textAlign: "center", marginTop: "20%" }}>
          Please LogIn/SignUp
        </h1>
      )}

      <Footer></Footer>
    </>
  );
}

export default Profile;
