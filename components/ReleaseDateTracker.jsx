import React from "react";
import Image from "next/image";
import Countdown from "react-countdown";

export default function ReleaseDateTracker({ games }) {
  const Completionist = () => (
    <span>Game is already released. Go play it!</span>
  );

  const addLeadingZero = (number) => {
    return number < 10 ? `0${number}` : number;
  };

  const renderer = ({ days, hours, minutes, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
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
      <div className="flex flex-col justify-center text-center items-baseline space-x-[220px]">
        <div className="flex gap-5 items-center">
          <span className="bg-blue-500 w-5 h-5 "></span>
          <h1 className="text-xl font-bold">Upcoming Games</h1>
        </div>
        {games.map((game) => (
          <div key={game.sys.id}>
            <h2 className="text-lg font-medium my-[6px]">{game.fields.name}</h2>
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
