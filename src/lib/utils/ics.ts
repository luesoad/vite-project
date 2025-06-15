import type { Concert } from "../types";

function toICSDateTime(date: string, time: string): string {
  const [year, month, day] = date.split("-");
  const [hour, minute] = time.split(":");
  return `${year}${month}${day}T${hour}${minute}00`;
}

export function generateICS(concert: Concert & { year?: number }) {
  const dtstart = toICSDateTime(concert.date, concert.time || "19:00");
  const [hour, minute] = (concert.time || "19:00").split(":");
  const endDate = new Date(
    Number(concert.date.slice(0, 4)),
    Number(concert.date.slice(5, 7)) - 1,
    Number(concert.date.slice(8, 10)),
    Number(hour) + 2,
    Number(minute)
  );
  const dtend = toICSDateTime(
    `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(endDate.getDate()).padStart(2, "0")}`,
    `${String(endDate.getHours()).padStart(2, "0")}:${String(
      endDate.getMinutes()
    ).padStart(2, "0")}`
  );

  const summary = `${(concert.bands || []).join(", ")} @ ${
    concert.location || ""
  }`;
  const location = concert.location || "";
  const uid = concert.id || Math.random().toString(36).slice(2);

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//neonskyline//favorites//DE",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstart}`,
    `DTSTART:${dtstart}`,
    `DTEND:${dtend}`,
    `SUMMARY:${summary}`,
    `LOCATION:${location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
