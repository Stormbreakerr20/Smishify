import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectUserName,
  selectUserPhoto,
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";

import { auth, provider } from "../firebase";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      } else if (!user) {
        navigate("/");
      }
    });
  });

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  const handleauth = () => {
    if (!username) {
      auth
        .signInWithPopup(provider)
        .then((i) => {
          setUser(i.user);
        })
        .catch((error) => alert(error.message));
    } else if (username) {
      auth.signOut().then(() => {
        dispatch(setSignOutState());
        navigate("/");
      });
    }
  };

  return (
    <div>
      <Nav>
        <Logo1> SMISHIFY</Logo1>
        {!username ? (
          <Login onClick={handleauth}>Login</Login>
        ) : (
          <>
            <Navmenu>
              <Link to="/">
                <span >HOME</span>
              </Link>
              <Link to="/news">
                <span>NEWS</span>
              </Link>
              <Link to="/weather">
                <span>WEATHER</span>
              </Link>
              <Link to="/text">
                <span>TEXT-EDITOR</span>
              </Link>
              <Link to="/note">
                <span>NOTE-MAKING</span>
              </Link>
              <Link to="/todo">
                <span>TO-DO-LIST</span>
              </Link>
            </Navmenu>

            <Signout>
              <Image1 src={userPhoto}></Image1>
              <Dropdown>
                <span onClick={handleauth}>Sign Out</span>
              </Dropdown>
            </Signout>
          </>
        )}
      </Nav>
    </div>
  );
}
const Image1 = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background-color: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  padding: 10px;
  font-size: 15px;
  letter-spacing: 3px;
  width: 120px;
  opacity: 0;
`;
const Signout = styled.div`
  position: relative;
  height: 48px;
  width: 60px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${Image1} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: #090b13;
  align-items: center;
  padding: 0 35px;
  z-index: 3;
  letter-spacing: 3px;

  a {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    padding: 0 10px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      padding: 0 5px;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
        cursor: pointer;
      }
    }
  }
`;

const Logo1 = styled.a`
  font-size: 30px;
`;
const Navmenu = styled.div`
  display: flex;
  flex-direction: row nowrap;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Login = styled.a`
  background-color: rgb(0, 0, 0, 0.6);
  border: 2px solid #f9f9f9;
  padding: 10px 20px !important;
  border-radius: 5px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
`;
