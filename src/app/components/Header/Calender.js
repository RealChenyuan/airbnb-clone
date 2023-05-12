import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { AIRBNB_COLOR } from "@/app/config/config";
import { UsersIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";
import usePRouter from "../../../../hooks/use-progress-router";

function Calender(props) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [guestNum, setGuestNum] = useState(1);
  const router = usePRouter();

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const selectHandler = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const searchHandler = () => {
    router.push(
      `/search?location=${
        props.location
      }&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&guestNum=${guestNum}`
    );

    props.onSearch();
  };

  return (
    <div
      className={`flex flex-col col-span-3 mx-auto mt-5 -mb-5 ${
        props.onShow ? "block" : "hidden"
      }`}
    >
      <DateRangePicker
        ranges={[selectionRange]}
        minDate={new Date()}
        rangeColors={[AIRBNB_COLOR]}
        onChange={selectHandler}
      />

      <div className="flex items-center border-b pb-1">
        <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>

        <UsersIcon className="h-5" />
        <input
          value={guestNum}
          onChange={(e) => setGuestNum(+e.target.value)}
          type="number"
          className="w-12 pl-1 text-lg outline-none text-red-400 text-center"
          min={1}
        />
      </div>

      <div className="flex">
        <button
          className="flex-grow text-gray-500 hover:bg-gray-100 py-4"
          onClick={props.resetInput}
        >
          Cancel
        </button>
        <button
          className="flex-grow text-red-500 hover:bg-gray-100 py-4"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Calender;
