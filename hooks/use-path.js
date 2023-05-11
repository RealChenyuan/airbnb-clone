import { useSearchParams } from "next/navigation";
import format from "date-fns/format";

function usePathData() {
  const params = useSearchParams();

  const location = params.get("location");
  const startDate = params.get("startDate");
  const endDate = params.get("endDate");
  const guestNum = +params.get("guestNum");

  if (!location || !guestNum || !startDate || !endDate) return null;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return {
    location,
    guestNum,
    range,
  };
}

export default usePathData;
