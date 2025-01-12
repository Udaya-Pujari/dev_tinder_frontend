// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import Usercards from "./Usercards";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  // console.log("feed =>", feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      // console.log("res=>", res.data);
      dispatch(addFeed(res?.data));
    } catch (err) {
      console.err(err.message);
    }
  };
  useEffect(() => {
    getFeed();
  }, []);
  return (
    feed && (
      <div className="flex justify-center my-10">
        <Usercards user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
