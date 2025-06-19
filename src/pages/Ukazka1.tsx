import type {FC} from "react";

export const Ukazka1: FC = () => {

  const date1 = new Date('2025-06-05T12:00:00Z');
  const date2 = date1;
  date2.setHours(15);

  console.log(date1.toISOString());

  return (
    <pre>
      {date1.toISOString()}
    </pre>
  )
}