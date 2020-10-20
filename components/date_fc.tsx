type DateFCProps = {
  /** A date object, used in displaying a greeting */
  date?: Date;
};

/**
 * Displays a time appropriate greeting along with the Date at a given location
 * Defaults to current location
 *
 * @example
 * <DateFC date={new Date()} />
 */
const DateFC = ({ date }: DateFCProps) => {
  date = date ? date : new Date();
  const hour = date.getHours();

  const greeting: "Good Morning" | "Good Afternoon" | "Good Evening" =
    hour < 12 ? "Good Morning" : hour < 16 ? "Good Afternoon" : "Good Evening";

  const readable_date = `${new Intl.DateTimeFormat("en-US", {
    day: "numeric",
  }).format(date)} ${new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(date)}, ${new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date)}`;

  return (
    <>
      <p>{greeting}</p>
      <p>{readable_date}</p>
    </>
  );
};

export default DateFC;
