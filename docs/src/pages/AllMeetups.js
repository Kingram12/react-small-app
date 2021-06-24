import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

// fetch will return a promise, and .json method also returns a promise

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-app1-95024-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups}></MeetupList>
    </section>
  );
}

export default AllMeetupsPage;

//In above useEffect, the second argument [] is an array of dependencies, ex: variables defined outside of the useEffect fuction, however this does not include State modifying variables like above for loading
//React guarantees that [isLoading, ***setIsLoading***] *** will never change so no need to be listed as a dependency even though defined outside
//If there was a chance that the state changing functions would change, it would be put into dependencies to insure that if the function's actions changed, it would be updated in the UseEffect function

//side effects - anything that doesnt change the display on the screen, useEffect is optimal
