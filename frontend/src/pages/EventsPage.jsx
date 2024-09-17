import React from "react";
import Header from "../components/Layout/Header";
import EventCard from "../components/Events/EventCard";
import { useSelector } from "react-redux";
import Loader from "../components/Layout/Loader";

const EventsPage = () => {
  const { allEvents, loading } = useSelector((state) => state.events);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={4} />
          <EventCard active={true} data={allEvents && allEvents[0]} />
        </div>
      )}
    </>
  );
};

export default EventsPage;
