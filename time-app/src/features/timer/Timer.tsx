import React from "react";
import moment from "moment";
import "moment-timezone";

import { useAppSelector } from "../../app/hooks";
import { selectTime } from "./timerSlice";
import styles from "./Timer.module.css";

interface CounterProps {
  zone?: string;
}

export function Timer(props: CounterProps) {
  const zone = props.zone ?? "UTC";
  const time = useAppSelector(selectTime);

  return (
    <div className={styles.timer}>
      <div className={styles.zone}>Zone: {zone}</div>
      <div>{moment(time).tz(zone).format("YYYY-MM-DDTHH:mm:ssS")}</div>
    </div>
  );
}
