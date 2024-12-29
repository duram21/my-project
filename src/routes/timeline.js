import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Tweet from "../components/tweets";



const Wrapper = styled.div``;

export default function Timeline(){
  const [tweets, setTweet] = useState([]);
  const fetchTweets = async() => {
    const tweetsQuery = query(
      collection(db, "tweets"),
      orderBy("createdAt", "desc")
    );
    /*    const spanshot = await getDocs(tweetsQuery);
    const tweets = spanshot.docs.map((doc) => {
      const { tweet, createdAt, userId, username, photo } = doc.data();
      return {
        tweet,
        createdAt,
        userId,
        username,
        photo,
        id: doc.id,
      };
    }); */
    await onSnapshot(tweetsQuery, (snapshot) => {
      const tweets = snapshot.docs.map((doc) => {
        const { tweet, createdAt, userId, username, photo } = doc.data();
        return {
          tweet,
          createdAt,
          userId,
          username,
          photo,
          id: doc.id,
      }});
      setTweet(tweets);
    })

  };

  useEffect(() => {
    fetchTweets();
  }, []);
  return <Wrapper>
    {tweets.map((tweet) => (<Tweet key={tweet.id} {...tweet}/>))}
    </Wrapper>
}