import React from "react";
import Image from "next/image";
import Countdown from "react-countdown";

export default function ReleaseDateTracker({ games }) {
  console.log(games[0].fields.releaseDate);
  const Completionist = () => <span>You are good to go!</span>;

  const addLeadingZero = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="text-2xl">
          {addLeadingZero(days)}:{addLeadingZero(hours)}:
          {addLeadingZero(minutes)}
        </span>
      );
    }
  };

  return (
    <>
      <div className="">
        {games.map((game) => (
          <div key={game.sys.id}>
            <h1>{game.fields.name}</h1>
            <Image
              src={`https:${game.fields.coverImage.fields.file.url}`}
              width={700}
              height={500}
              alt={game.fields.name}
            />
            <Countdown
              date={new Date(game.fields.releaseDate)}
              renderer={renderer}
            />
          </div>
        ))}
      </div>
    </>
  );
}
