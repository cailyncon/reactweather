import React, { useState } from "react";

export default function FormatDate() {
  const now = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[now.getDay()];

  return <div class="date-time">{dayOfWeek}</div>;
}
