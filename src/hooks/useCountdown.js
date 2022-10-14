import { useEffect, useState } from "react";
import moment from "moment";

const useCountdown = (startDate, endDate) => {
  const [response = {}, setResponse] = useState();

  useEffect(() => {
    const timeType = {
      upcoming: false,
      ongoing: false,
      noEvent: false,
    };
    let globalDifference = null;
    const interval = setInterval(() => {
      const isAfter = moment().isAfter(startDate);

      if (!isAfter) {
        if (!timeType.upcoming) {
          globalDifference = moment(startDate).diff(moment());
          timeType.upcoming = true;
        }
      } else {
        if (!timeType.ongoing) {
          globalDifference = moment(endDate).diff(startDate);
          timeType.ongoing = true;
        }
        const isAfterTemp = moment().isAfter(endDate);
        if (isAfterTemp) {
          clearInterval(interval);
          setResponse({
            state: "Past",
            endDate,
          });
          return;
        }
      }

      globalDifference = moment(globalDifference)
        .subtract(1, "seconds")
        .valueOf();
      setResponse({
        state: timeType.ongoing ? "Active" : "Upcoming",
        duration: moment.duration(globalDifference),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return response;
};

export default useCountdown;
